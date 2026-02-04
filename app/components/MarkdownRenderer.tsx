"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import CodeBlock from "./CodeBlock";

interface MarkdownRendererProps {
    content: string;
    basePath?: string;
}

export default function MarkdownRenderer({ content, basePath = "" }: MarkdownRendererProps) {
    return (
        <div className="markdown-content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeHighlight, rehypeKatex]}
                components={{
                    // Custom code block rendering
                    code({ className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const isInline = !match;

                        if (isInline) {
                            return (
                                <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                                    {children}
                                </code>
                            );
                        }

                        return (
                            <CodeBlock
                                code={String(children).replace(/\n$/, "")}
                                language={match ? match[1] : "text"}
                            />
                        );
                    },

                    // Custom image rendering
                    img({ src, alt }) {
                        if (!src) return null;

                        // Convert to string to handle potential Blob type
                        const srcString = typeof src === 'string' ? src : '';
                        if (!srcString) return null;

                        // Handle relative paths - map to lessons folder structure
                        let imageSrc = srcString;
                        if (srcString.startsWith("images/") || srcString.startsWith("./images/")) {
                            // Images like "images/foo.png" -> /images/lessons/{section}/{lesson}/foo.png
                            const imgName = srcString.replace(/^\.?\/?images\//, "");
                            imageSrc = `/images/lessons${basePath}/${imgName}`;
                        } else if (srcString.startsWith("../images/")) {
                            // Parent folder images -> section images folder
                            const imgName = srcString.replace(/^\.\.\/images\//, "");
                            const sectionPath = basePath.split('/').slice(0, -1).join('/');
                            imageSrc = `/images/lessons${sectionPath}/${imgName}`;
                        } else if (srcString.startsWith("http") || srcString.startsWith("/")) {
                            // Absolute URLs or paths - use as is
                            imageSrc = srcString;
                        } else {
                            // Other relative paths (just filename)
                            imageSrc = `/images/lessons${basePath}/${srcString}`;
                        }

                        return (
                            <figure className="my-6">
                                <div className="relative bg-slate-100 rounded-lg overflow-hidden">
                                    <img
                                        src={imageSrc}
                                        alt={alt || "Lesson image"}
                                        className="w-full h-auto rounded-lg shadow-md"
                                        loading="lazy"
                                        onError={(e) => {
                                            // Fallback for missing images
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                {alt && (
                                    <figcaption className="text-center text-sm text-slate-500 mt-2 italic">
                                        {alt}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    },

                    // Custom heading rendering with anchors
                    h1({ children }) {
                        const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                        return (
                            <h1 id={id} className="group relative">
                                {children}
                                <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-blue-500">
                                    #
                                </a>
                            </h1>
                        );
                    },

                    h2({ children }) {
                        const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                        return (
                            <h2 id={id} className="group relative">
                                {children}
                                <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-blue-500">
                                    #
                                </a>
                            </h2>
                        );
                    },

                    h3({ children }) {
                        const id = String(children).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                        return (
                            <h3 id={id} className="group relative">
                                {children}
                                <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-blue-500">
                                    #
                                </a>
                            </h3>
                        );
                    },

                    // Custom link rendering
                    a({ href, children }) {
                        const isExternal = href?.startsWith("http");
                        return (
                            <a
                                href={href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                            >
                                {children}
                                {isExternal && <span className="ml-1">↗</span>}
                            </a>
                        );
                    },

                    // Custom blockquote (for tips, notes, etc.)
                    blockquote({ children }) {
                        return (
                            <blockquote className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-3 my-4 text-slate-700">
                                {children}
                            </blockquote>
                        );
                    },

                    // Custom table rendering
                    table({ children }) {
                        return (
                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
                                    {children}
                                </table>
                            </div>
                        );
                    },

                    th({ children }) {
                        return (
                            <th className="bg-slate-100 border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">
                                {children}
                            </th>
                        );
                    },

                    td({ children }) {
                        return (
                            <td className="border border-slate-200 px-4 py-3 text-slate-600">
                                {children}
                            </td>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
