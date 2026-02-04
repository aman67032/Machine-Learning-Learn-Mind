"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    BookOpen,
    Brain,
    TrendingUp,
    Globe,
    Layers,
    Sparkles,
    MessageSquare,
    Clock,
    Gamepad2,
    Lightbulb,
    FileDown,
    Menu,
} from "lucide-react";

const curriculum = [
    {
        id: "1-introduction",
        title: "Introduction",
        icon: BookOpen,
        color: "#D4823A",
        lessons: [
            { id: "1-intro-to-ML", title: "Introduction to ML" },
            { id: "2-history-of-ML", title: "History of ML" },
            { id: "3-fairness", title: "Fairness in ML" },
            { id: "4-techniques-of-ML", title: "ML Techniques" },
        ],
    },
    {
        id: "2-regression",
        title: "Regression",
        icon: TrendingUp,
        color: "#8FA68A",
        lessons: [
            { id: "1-Tools", title: "Tools of the Trade" },
            { id: "2-Data", title: "Managing Data" },
            { id: "3-Linear", title: "Linear Regression" },
            { id: "4-Logistic", title: "Logistic Regression" },
        ],
    },
    {
        id: "3-web-app",
        title: "Web App",
        icon: Globe,
        color: "#5A8A88",
        lessons: [{ id: "1-Web-App", title: "Build a Web App" }],
    },
    {
        id: "4-classification",
        title: "Classification",
        icon: Layers,
        color: "#C4897A",
        lessons: [
            { id: "1-Introduction", title: "Classification Intro" },
            { id: "2-Classifiers-1", title: "Classifiers Part 1" },
            { id: "3-Classifiers-2", title: "Classifiers Part 2" },
            { id: "4-Applied", title: "Applied Classification" },
        ],
    },
    {
        id: "5-clustering",
        title: "Clustering",
        icon: Sparkles,
        color: "#8E4C5C",
        lessons: [
            { id: "1-Visualize", title: "Visualizing Data" },
            { id: "2-K-Means", title: "K-Means Clustering" },
        ],
    },
    {
        id: "6-nlp",
        title: "NLP",
        icon: MessageSquare,
        color: "#D4823A",
        lessons: [
            { id: "1-Introduction-to-NLP", title: "Intro to NLP" },
            { id: "2-Tasks", title: "NLP Tasks" },
            { id: "3-Translation-Sentiment", title: "Translation & Sentiment" },
            { id: "4-Hotel-Reviews-1", title: "Hotel Reviews 1" },
            { id: "5-Hotel-Reviews-2", title: "Hotel Reviews 2" },
        ],
    },
    {
        id: "7-timeseries",
        title: "Time Series",
        icon: Clock,
        color: "#8FA68A",
        lessons: [
            { id: "1-Introduction", title: "Time Series Intro" },
            { id: "2-ARIMA", title: "ARIMA Models" },
            { id: "3-SVR", title: "SVR Forecasting" },
        ],
    },
    {
        id: "8-reinforcement",
        title: "Reinforcement",
        icon: Gamepad2,
        color: "#5A8A88",
        lessons: [
            { id: "1-QLearning", title: "Q-Learning" },
            { id: "2-Gym", title: "OpenAI Gym" },
        ],
    },
    {
        id: "9-real-world",
        title: "Real World",
        icon: Lightbulb,
        color: "#C4897A",
        lessons: [
            { id: "1-Applications", title: "ML Applications" },
            { id: "2-Debugging-ML-Models", title: "Debugging Models" },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [expandedSections, setExpandedSections] = useState<string[]>(["1-introduction"]);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSection = (sectionId: string) => {
        setExpandedSections((prev) =>
            prev.includes(sectionId)
                ? prev.filter((id) => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const isActive = (sectionId: string, lessonId: string) => {
        return pathname === `/lessons/${sectionId}/${lessonId}`;
    };

    return (
        <>
            {/* Mobile toggle */}
            <button
                className="lg:hidden fixed bottom-6 left-6 z-40 p-3 rounded-full shadow-lg text-white"
                style={{
                    background: 'linear-gradient(135deg, #D4823A 0%, #E6A04F 100%)',
                    boxShadow: '0 4px 20px rgba(212, 130, 58, 0.35)'
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 border-r overflow-y-auto z-30 transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{
                    backgroundColor: '#FFFBF7',
                    borderColor: '#E8DDD0'
                }}
            >
                <div className="p-4">
                    <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#8B7355' }}>
                        Curriculum
                    </h2>

                    <div className="space-y-1">
                        {curriculum.map((section) => {
                            const Icon = section.icon;
                            const isExpanded = expandedSections.includes(section.id);

                            return (
                                <div key={section.id}>
                                    {/* Section header */}
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group"
                                        style={{
                                            backgroundColor: isExpanded ? '#F5EDE4' : 'transparent',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isExpanded) e.currentTarget.style.backgroundColor = '#FAF5F0';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isExpanded) e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: section.color }} />
                                        <span className="flex-1 text-left font-medium text-sm" style={{ color: '#5D4E3C' }}>
                                            {section.title}
                                        </span>
                                        {isExpanded ? (
                                            <ChevronDown className="w-4 h-4" style={{ color: '#8B7355' }} />
                                        ) : (
                                            <ChevronRight className="w-4 h-4" style={{ color: '#8B7355' }} />
                                        )}
                                    </button>

                                    {/* Lessons */}
                                    {isExpanded && (
                                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 pl-3" style={{ borderColor: '#E8DDD0' }}>
                                            {section.lessons.map((lesson, idx) => {
                                                const active = isActive(section.id, lesson.id);
                                                return (
                                                    <Link
                                                        key={lesson.id}
                                                        href={`/lessons/${section.id}/${lesson.id}`}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block px-3 py-2 rounded-lg text-sm transition-all"
                                                        style={{
                                                            backgroundColor: active ? '#FEF3E7' : 'transparent',
                                                            color: active ? '#D4823A' : '#5D4E3C',
                                                            borderLeft: active ? '3px solid #D4823A' : '3px solid transparent',
                                                            marginLeft: '-15px',
                                                            paddingLeft: '15px',
                                                            fontWeight: active ? 600 : 400,
                                                        }}
                                                    >
                                                        <span style={{ color: '#8B7355', marginRight: '6px' }}>{String(idx + 1).padStart(2, "0")}</span>
                                                        {lesson.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Download PDF */}
                    <div className="mt-8 pt-6 border-t" style={{ borderColor: '#E8DDD0' }}>
                        <a
                            href="/pdf/readme.pdf"
                            download
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all"
                            style={{ color: '#5D4E3C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5EDE4'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <FileDown className="w-5 h-5" style={{ color: '#D4823A' }} />
                            <span className="font-medium text-sm">Download PDF</span>
                        </a>
                    </div>
                </div>
            </aside>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/30 z-20"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}
