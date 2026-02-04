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
    Layers,
    Sparkles,
    BarChart3,
    MessageSquare,
    Clock,
    Shield,
    FileDown,
    Menu,
} from "lucide-react";

const curriculum = [
    {
        id: "foundations",
        title: "Foundations",
        icon: BookOpen,
        color: "#D4823A",
        lessons: [
            { id: "overview", title: "ML Overview", href: "/learn/foundations/overview" },
            { id: "math", title: "Math Prerequisites", href: "/learn/foundations/math" },
            { id: "python", title: "Python for ML", href: "/learn/foundations/python" },
        ],
    },
    {
        id: "regression",
        title: "Regression",
        icon: TrendingUp,
        color: "#8FA68A",
        lessons: [
            { id: "linear", title: "Linear Regression", href: "/learn/regression/linear" },
            { id: "logistic", title: "Logistic Regression", href: "/learn/regression/logistic" },
            { id: "polynomial", title: "Polynomial Regression", href: "/learn/regression/polynomial" },
            { id: "glm", title: "GLMs", href: "/learn/regression/glm" },
        ],
    },
    {
        id: "classification",
        title: "Classification",
        icon: Layers,
        color: "#C4897A",
        lessons: [
            { id: "knn", title: "K-Nearest Neighbors", href: "/learn/classification/knn" },
            { id: "trees", title: "Decision Trees", href: "/learn/classification/decision-trees" },
            { id: "rf", title: "Random Forests", href: "/learn/classification/random-forest" },
            { id: "svm", title: "SVM", href: "/learn/classification/svm" },
            { id: "nb", title: "Naive Bayes", href: "/learn/classification/naive-bayes" },
            { id: "gda", title: "GDA", href: "/learn/classification/gda" },
            { id: "kernels", title: "Kernel Methods", href: "/learn/classification/kernels" },
            { id: "multiclass", title: "Multi-class", href: "/learn/classification/multiclass" },
        ],
    },
    {
        id: "clustering",
        title: "Clustering",
        icon: Sparkles,
        color: "#8E4C5C",
        lessons: [
            { id: "kmeans", title: "K-Means", href: "/learn/clustering/kmeans" },
            { id: "gmm", title: "GMM", href: "/learn/clustering/gmm" },
            { id: "pca", title: "PCA", href: "/learn/clustering/pca" },
            { id: "factor", title: "Factor Analysis", href: "/learn/clustering/factor-analysis" },
        ],
    },
    {
        id: "evaluation",
        title: "Evaluation",
        icon: BarChart3,
        color: "#5A8A88",
        lessons: [
            { id: "split", title: "Train/Test Split", href: "/learn/evaluation/splitting" },
            { id: "bias", title: "Bias-Variance", href: "/learn/evaluation/bias-variance" },
            { id: "metrics", title: "Metrics & ROC", href: "/learn/evaluation/metrics" },
            { id: "cv", title: "Cross-Validation", href: "/learn/evaluation/cross-validation" },
        ],
    },
    {
        id: "optimization",
        title: "Optimization",
        icon: Brain,
        color: "#D4823A",
        lessons: [
            { id: "loss", title: "Loss Functions", href: "/learn/optimization/loss-functions" },
            { id: "gd", title: "Gradient Descent", href: "/learn/optimization/gradient-descent" },
            { id: "backprop", title: "Backpropagation", href: "/learn/optimization/backprop" },
            { id: "nn", title: "Neural Networks", href: "/learn/optimization/neural-networks" },
            { id: "dl", title: "Deep Learning", href: "/learn/optimization/deep-learning" },
        ],
    },
    {
        id: "nlp",
        title: "NLP",
        icon: MessageSquare,
        color: "#8FA68A",
        lessons: [
            { id: "tokenization", title: "Tokenization", href: "/learn/nlp/tokenization" },
            { id: "tfidf", title: "TF-IDF", href: "/learn/nlp/tfidf" },
            { id: "sentiment", title: "Sentiment Analysis", href: "/learn/nlp/sentiment" },
        ],
    },
    {
        id: "timeseries",
        title: "Time Series",
        icon: Clock,
        color: "#5A8A88",
        lessons: [
            { id: "basics", title: "Time Series Basics", href: "/learn/timeseries/basics" },
            { id: "arima", title: "ARIMA", href: "/learn/timeseries/arima" },
        ],
    },
    {
        id: "ethics",
        title: "ML Ethics",
        icon: Shield,
        color: "#C4897A",
        lessons: [
            { id: "bias", title: "Bias in ML", href: "/learn/ethics/bias" },
            { id: "data", title: "Data Ethics", href: "/learn/ethics/data-ethics" },
            { id: "xai", title: "Explainable AI", href: "/learn/ethics/explainability" },
        ],
    },
];

interface SidebarProps {
    isCollapsed?: boolean;
    toggle?: () => void;
}

export default function Sidebar({ isCollapsed = false, toggle }: SidebarProps) {
    const pathname = usePathname();
    const [expandedSections, setExpandedSections] = useState<string[]>(["foundations"]);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSection = (sectionId: string) => {
        if (isCollapsed && toggle) {
            toggle(); // Expand sidebar if clicking while collapsed
        }
        setExpandedSections((prev) =>
            prev.includes(sectionId)
                ? prev.filter((id) => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const isActive = (href: string) => {
        return pathname === href;
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
                className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r overflow-y-auto z-30 transition-all duration-300 ease-in-out lg:translate-x-0 ${mobileOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"} ${isCollapsed ? "lg:w-20" : "lg:w-72"}`}
                style={{
                    backgroundColor: '#FFFBF7',
                    borderColor: '#E8DDD0'
                }}
            >
                {/* Desktop Collapse Toggle */}
                <button
                    onClick={toggle}
                    className="hidden lg:flex absolute -right-3 top-6 w-6 h-6 bg-white border border-[#E8DDD0] rounded-full items-center justify-center text-[#8B7355] shadow-sm hover:text-[#D4823A] hover:border-[#D4823A] z-50 transition-colors"
                >
                    {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3 rotate-90" />}
                </button>

                <div className={`p-4 ${isCollapsed ? 'px-2' : ''}`}>
                    {!isCollapsed && (
                        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4 px-2" style={{ color: '#8B7355' }}>
                            Curriculum
                        </h2>
                    )}

                    <div className="space-y-1">
                        {curriculum.map((section) => {
                            const Icon = section.icon;
                            // If collapsed, don't show expanded items visually, but keep state
                            const isExpanded = expandedSections.includes(section.id);

                            return (
                                <div key={section.id} className="relative group">
                                    {/* Section header */}
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isCollapsed ? 'justify-center' : ''}`}
                                        style={{
                                            backgroundColor: (isExpanded && !isCollapsed) ? '#F5EDE4' : 'transparent',
                                        }}
                                        title={isCollapsed ? section.title : undefined}
                                    >
                                        <Icon className={`w-5 h-5 flex-shrink-0`} style={{ color: section.color }} />

                                        {!isCollapsed && (
                                            <>
                                                <span className="flex-1 text-left font-medium text-sm truncate" style={{ color: '#5D4E3C' }}>
                                                    {section.title}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: '#8B7355' }} />
                                                ) : (
                                                    <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: '#8B7355' }} />
                                                )}
                                            </>
                                        )}
                                    </button>

                                    {/* Lessons */}
                                    {(isExpanded && !isCollapsed) && (
                                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 pl-3" style={{ borderColor: '#E8DDD0' }}>
                                            {section.lessons.map((lesson, idx) => {
                                                const active = isActive(lesson.href);
                                                return (
                                                    <Link
                                                        key={lesson.id}
                                                        href={lesson.href}
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
                    <div className={`mt-8 pt-6 border-t ${isCollapsed ? 'flex justify-center' : ''}`} style={{ borderColor: '#E8DDD0' }}>
                        <a
                            href="/pdf/main_notes.pdf"
                            download
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isCollapsed ? 'justify-center' : ''}`}
                            style={{ color: '#5D4E3C' }}
                            title="Download PDF"
                        >
                            <FileDown className="w-5 h-5" style={{ color: '#D4823A' }} />
                            {!isCollapsed && <span className="font-medium text-sm">Download PDF</span>}
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
