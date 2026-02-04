import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionData, getAllSections } from "@/lib/content";
import {
    BookOpen,
    ArrowRight,
    Clock,
    CheckCircle,
} from "lucide-react";

interface PageProps {
    params: Promise<{
        section: string;
    }>;
}

export async function generateStaticParams() {
    const sections = getAllSections();
    return sections.map((section) => ({
        section: section.id,
    }));
}

export default async function SectionPage({ params }: PageProps) {
    const resolvedParams = await params;
    const section = getSectionData(resolvedParams.section);

    if (!section) {
        notFound();
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{section.title}</h1>
                    {section.description && (
                        <p className="text-lg text-slate-600">{section.description}</p>
                    )}
                </div>

                {/* Lessons List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-800 mb-6">
                        Lessons in this Section
                    </h2>
                    {section.lessons.map((lesson, index) => (
                        <Link
                            key={lesson.id}
                            href={`/lessons/${resolvedParams.section}/${lesson.id}`}
                            className="block bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                        {lesson.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            ~30 min
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <BookOpen className="w-4 h-4" />
                                            Lesson + Quiz
                                        </span>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href={`/lessons/${resolvedParams.section}/${section.lessons[0]?.id}`}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Start First Lesson
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="https://ff-quizzes.netlify.app/en/ml/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Take Quiz
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
