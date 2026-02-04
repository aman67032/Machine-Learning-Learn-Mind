import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonContent, getAllLessons, getSectionData } from "@/lib/content";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    ExternalLink,
    FileText,
    CheckCircle,
} from "lucide-react";

interface PageProps {
    params: Promise<{
        section: string;
        lesson: string;
    }>;
}

export async function generateStaticParams() {
    const lessons = getAllLessons();
    return lessons.map((l) => ({
        section: l.section,
        lesson: l.lesson,
    }));
}

function getAdjacentLessons(section: string, lessonId: string) {
    const lessons = getAllLessons();
    const currentIndex = lessons.findIndex(
        (l) => l.section === section && l.lesson === lessonId
    );

    return {
        prev: currentIndex > 0 ? lessons[currentIndex - 1] : null,
        next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
        current: currentIndex + 1,
        total: lessons.length,
    };
}

export default async function LessonPage({ params }: PageProps) {
    const resolvedParams = await params;
    const lesson = getLessonContent(resolvedParams.section, resolvedParams.lesson);
    const section = getSectionData(resolvedParams.section);

    if (!lesson || !section) {
        notFound();
    }

    const { prev, next, current, total } = getAdjacentLessons(
        resolvedParams.section,
        resolvedParams.lesson
    );

    // Extract table of contents from content
    const headings = lesson.content.match(/^##\s+(.+)$/gm)?.map((h) => {
        const text = h.replace(/^##\s+/, "");
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return { text, id };
    }) || [];

    return (
        <div className="min-h-screen">
            {/* Progress bar */}
            <div className="fixed top-16 left-0 right-0 h-1.5 z-30 lg:left-72 bg-[#E8DDD0]">
                <div
                    className="h-full transition-all bg-gradient-to-r from-[#D4823A] to-[#E6A04F]"
                    style={{ width: `${(current / total) * 100}%` }}
                />
            </div>

            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-base text-[#8B7355]">
                        <li>
                            <Link href="/" className="hover:text-[#D4823A] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href={`/lessons/${resolvedParams.section}`} className="hover:text-[#D4823A] transition-colors">
                                {section.title}
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="font-medium truncate text-[#3D3128]">{lesson.title}</li>
                    </ol>
                </nav>

                {/* Quiz Links */}
                <div className="flex flex-wrap gap-3 mb-8">
                    <a
                        href="https://ff-quizzes.netlify.app/en/ml/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-medium transition-all text-base bg-gradient-to-r from-[#D4823A] to-[#E6A04F] shadow-lg shadow-[#D4823A]/25 hover:shadow-xl hover:shadow-[#D4823A]/30"
                    >
                        <BookOpen className="w-5 h-5" />
                        Pre-lecture Quiz
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Table of Contents */}
                {headings.length > 0 && (
                    <div className="rounded-2xl p-6 mb-8 border bg-[#FFFBF7] border-[#E8DDD0]">
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                            <FileText className="w-5 h-5 text-[#D4823A]" />
                            In This Lesson
                        </h3>
                        <ul className="space-y-2">
                            {headings.slice(0, 8).map((heading) => (
                                <li key={heading.id}>
                                    <a
                                        href={`#${heading.id}`}
                                        className="text-base flex items-center gap-2 text-[#5D4E3C] hover:text-[#D4823A] transition-colors"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#E8DDD0]" />
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Main Content */}
                <article className="rounded-2xl border p-8 bg-white border-[#E8DDD0]">
                    <MarkdownRenderer
                        content={lesson.content}
                        basePath={`/${lesson.section}/${lesson.lessonId}`}
                    />
                </article>

                {/* Assignment Section */}
                {lesson.assignment && (
                    <div className="mt-8 rounded-2xl p-6 border bg-[#FEF3E7] border-[#E6A04F]">
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 font-serif text-[#D4823A]">
                            <CheckCircle className="w-5 h-5" />
                            Assignment
                        </h3>
                        <MarkdownRenderer content={lesson.assignment} />
                    </div>
                )}

                {/* Post Quiz */}
                <div className="mt-8 flex justify-center">
                    <a
                        href="https://ff-quizzes.netlify.app/en/ml/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-lg transition-all bg-gradient-to-r from-[#8FA68A] to-[#7A9675] shadow-lg shadow-[#8FA68A]/30 hover:shadow-xl"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Take Post-lecture Quiz
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
                    {prev ? (
                        <Link
                            href={`/lessons/${prev.section}/${prev.lesson}`}
                            className="flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all bg-white border-[#E8DDD0] hover:border-[#D4823A] hover:shadow-lg hover:shadow-[#D4823A]/10"
                        >
                            <ArrowLeft className="w-5 h-5 text-[#8B7355]" />
                            <div className="text-left">
                                <div className="text-sm text-[#8B7355]">Previous</div>
                                <div className="font-medium text-base truncate text-[#3D3128]">
                                    {prev.lesson.replace(/-/g, " ")}
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}

                    {next ? (
                        <Link
                            href={`/lessons/${next.section}/${next.lesson}`}
                            className="flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border-2 justify-end transition-all bg-white border-[#E8DDD0] hover:border-[#D4823A] hover:shadow-lg hover:shadow-[#D4823A]/10"
                        >
                            <div className="text-right">
                                <div className="text-sm text-[#8B7355]">Next</div>
                                <div className="font-medium text-base truncate text-[#3D3128]">
                                    {next.lesson.replace(/-/g, " ")}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#8B7355]" />
                        </Link>
                    ) : (
                        <Link
                            href="/"
                            className="flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border-2 justify-end bg-[#F3F8F2] border-[#8FA68A]"
                        >
                            <div className="text-right">
                                <div className="text-sm text-[#8FA68A]">Completed!</div>
                                <div className="font-medium text-base text-[#6B8566]">Back to Home</div>
                            </div>
                            <CheckCircle className="w-5 h-5 text-[#8FA68A]" />
                        </Link>
                    )}
                </div>

                {/* Progress indicator */}
                <div className="mt-8 text-center text-base text-[#8B7355]">
                    Lesson {current} of {total}
                </div>
            </div>
        </div>
    );
}
