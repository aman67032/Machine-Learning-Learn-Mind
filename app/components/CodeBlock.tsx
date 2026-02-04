"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export default function CodeBlock({ code, language = "python", filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative my-4 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    {filename && (
                        <span className="text-slate-400 text-sm font-mono">{filename}</span>
                    )}
                    <span className="text-slate-500 text-xs uppercase">{language}</span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-green-500">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code content */}
            <pre className="bg-slate-900 p-4 overflow-x-auto">
                <code className={`language-${language} text-sm font-mono text-slate-100`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
