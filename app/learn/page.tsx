import Link from "next/link";
import {
    BookOpen,
    Calculator,
    Code,
    TrendingUp,
    Layers,
    Sparkles,
    MessageSquare,
    Clock,
    Gamepad2,
    ArrowRight,
    GraduationCap,
    Brain,
    Shield,
    BarChart3,
} from "lucide-react";

const learningPaths = [
    {
        id: "foundations",
        title: "📐 Math Foundations",
        description: "Linear algebra, calculus, statistics - the math you need for ML",
        icon: Calculator,
        color: "#D4823A",
        bgColor: "#FEF3E7",
        lessons: [
            { title: "Math Prerequisites", href: "/learn/foundations/math", done: true },
            { title: "Python for ML", href: "/learn/foundations/python", done: true },
            { title: "ML Overview & Paradigms", href: "/learn/foundations/overview", done: true },
        ],
    },
    {
        id: "regression",
        title: "📈 Regression",
        description: "Linear & logistic regression, GLMs, gradient descent optimization",
        icon: TrendingUp,
        color: "#8FA68A",
        bgColor: "#F3F8F2",
        lessons: [
            { title: "Linear Regression", href: "/learn/regression/linear", done: true },
            { title: "Logistic Regression", href: "/learn/regression/logistic", done: true },
            { title: "Polynomial Regression", href: "/learn/regression/polynomial", done: true },
            { title: "Generalized Linear Models (GLMs)", href: "/learn/regression/glm", done: true },
        ],
    },
    {
        id: "classification",
        title: "🏷️ Classification",
        description: "KNN, Decision Trees, Random Forests, SVM, Naive Bayes, Ensembling",
        icon: Layers,
        color: "#C4897A",
        bgColor: "#FBF3F1",
        lessons: [
            { title: "K-Nearest Neighbors (KNN)", href: "/learn/classification/knn", done: true },
            { title: "Decision Trees", href: "/learn/classification/decision-trees", done: true },
            { title: "Random Forests & Ensembling", href: "/learn/classification/random-forest", done: true },
            { title: "Support Vector Machines (SVM)", href: "/learn/classification/svm", done: true },
            { title: "Naive Bayes Classifier", href: "/learn/classification/naive-bayes", done: true },
            { title: "Gaussian Discriminant Analysis", href: "/learn/classification/gda", done: true },
            { title: "Kernel Methods", href: "/learn/classification/kernels", done: true },
            { title: "Multi-class Classification", href: "/learn/classification/multiclass", done: true },
        ],
    },
    {
        id: "clustering",
        title: "✨ Clustering & Dimensionality",
        description: "K-Means, GMM, PCA, Factor Analysis, unsupervised learning",
        icon: Sparkles,
        color: "#8E4C5C",
        bgColor: "#F8F0F2",
        lessons: [
            { title: "K-Means Clustering", href: "/learn/clustering/kmeans", done: true },
            { title: "Gaussian Mixture Models (GMM)", href: "/learn/clustering/gmm", done: true },
            { title: "PCA & Dimensionality Reduction", href: "/learn/clustering/pca", done: true },
            { title: "Factor Analysis", href: "/learn/clustering/factor-analysis", done: true },
        ],
    },
    {
        id: "evaluation",
        title: "📊 Model Evaluation",
        description: "Metrics, ROC curves, overfitting, generalization, dataset partitioning",
        icon: BarChart3,
        color: "#5A8A88",
        bgColor: "#F0F6F6",
        lessons: [
            { title: "Train/Test/Validation Split", href: "/learn/evaluation/splitting", done: true },
            { title: "Bias-Variance Tradeoff", href: "/learn/evaluation/bias-variance", done: true },
            { title: "Evaluation Metrics & ROC Curve", href: "/learn/evaluation/metrics", done: true },
            { title: "Cross-Validation", href: "/learn/evaluation/cross-validation", done: true },
        ],
    },
    {
        id: "optimization",
        title: "⚡ Optimization & Loss Functions",
        description: "Gradient descent, backpropagation, loss functions, optimization algorithms",
        icon: Brain,
        color: "#D4823A",
        bgColor: "#FEF3E7",
        lessons: [
            { title: "Loss Functions", href: "/learn/optimization/loss-functions", done: true },
            { title: "Gradient Descent Variants", href: "/learn/optimization/gradient-descent", done: true },
            { title: "Backpropagation", href: "/learn/optimization/backprop", done: true },
            { title: "Intro to Neural Networks", href: "/learn/optimization/neural-networks", done: true },
            { title: "Deep Learning Introduction", href: "/learn/optimization/deep-learning", done: true },
        ],
    },
    {
        id: "nlp",
        title: "💬 NLP Basics",
        description: "Text processing, TF-IDF, sentiment analysis",
        icon: MessageSquare,
        color: "#5A8A88",
        bgColor: "#F0F6F6",
        lessons: [
            { title: "Tokenization", href: "/learn/nlp/tokenization", done: true },
            { title: "TF-IDF", href: "/learn/nlp/tfidf", done: true },
            { title: "Sentiment Analysis", href: "/learn/nlp/sentiment", done: true },
        ],
    },
    {
        id: "timeseries",
        title: "⏰ Time Series",
        description: "ARIMA, forecasting, seasonal decomposition",
        icon: Clock,
        color: "#D4823A",
        bgColor: "#FEF3E7",
        lessons: [
            { title: "Time Series Basics", href: "/learn/timeseries/basics", done: true },
            { title: "ARIMA Models", href: "/learn/timeseries/arima", done: true },
        ],
    },
    {
        id: "ethics",
        title: "🛡️ ML Ethics & Explainability",
        description: "Bias in ML, data ethics, explainable AI, responsible ML",
        icon: Shield,
        color: "#8E4C5C",
        bgColor: "#F8F0F2",
        lessons: [
            { title: "Bias in Machine Learning", href: "/learn/ethics/bias", done: true },
            { title: "Data Collection Ethics", href: "/learn/ethics/data-ethics", done: true },
            { title: "Explainable Algorithms", href: "/learn/ethics/explainability", done: true },
        ],
    },
];

export default function LearnPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium mb-6 bg-[#FEF3E7] text-[#D4823A]">
                        <GraduationCap className="w-5 h-5" />
                        Teacher-Guided Learning
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-serif text-[#3D3128]">
                        Learn Machine Learning
                        <br />
                        <span className="text-[#D4823A]">From Scratch to Advanced</span>
                    </h1>
                    <p className="text-xl text-[#5D4E3C] max-w-2xl mx-auto leading-relaxed">
                        Step-by-step explanations with <strong>mathematical formulas</strong>,
                        <strong> algorithm breakdowns</strong>, and <strong>visual examples</strong>.
                        Based on Stanford CS229 and industry best practices.
                    </p>
                </div>

                {/* Course Outline Reference */}
                <div className="rounded-2xl p-6 mb-12 bg-gradient-to-r from-[#5D4E3C] to-[#3D3128] text-white">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#E6A04F]" />
                        Course Coverage
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Unit I: Fundamentals</p>
                            <p className="text-[#E8DDD0]">Linear/Logistic Regression, GLMs, Supervised vs Unsupervised</p>
                        </div>
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Unit II: Classification</p>
                            <p className="text-[#E8DDD0]">SVM, Decision Trees, Random Forests, Naive Bayes, GDA</p>
                        </div>
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Unit III: Unsupervised</p>
                            <p className="text-[#E8DDD0]">K-Means, GMM, PCA, KNN, Model Evaluation, ROC</p>
                        </div>
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Unit IV: Optimization</p>
                            <p className="text-[#E8DDD0]">Loss Functions, Gradient Descent, Backpropagation</p>
                        </div>
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Unit V: Ethics</p>
                            <p className="text-[#E8DDD0]">Bias in ML, Data Ethics, Explainable AI</p>
                        </div>
                        <div>
                            <p className="text-[#E6A04F] font-bold mb-1">Applied Topics</p>
                            <p className="text-[#E8DDD0]">NLP, Time Series, Real-world Applications</p>
                        </div>
                    </div>
                </div>

                {/* What makes this different */}
                <div className="grid sm:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 rounded-2xl bg-white border border-[#E8DDD0]">
                        <div className="text-3xl mb-3">📐</div>
                        <h3 className="font-semibold text-lg mb-2 font-serif text-[#3D3128]">Math Explained</h3>
                        <p className="text-[#5D4E3C]">Every formula broken down step-by-step with intuitive explanations</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-[#E8DDD0]">
                        <div className="text-3xl mb-3">🔧</div>
                        <h3 className="font-semibold text-lg mb-2 font-serif text-[#3D3128]">Algorithms Visualized</h3>
                        <p className="text-[#5D4E3C]">See how algorithms work with pseudocode and flowcharts</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-[#E8DDD0]">
                        <div className="text-3xl mb-3">💡</div>
                        <h3 className="font-semibold text-lg mb-2 font-serif text-[#3D3128]">Real Examples</h3>
                        <p className="text-[#5D4E3C]">Learn with practical code and datasets you can run yourself</p>
                    </div>
                </div>

                {/* Learning Paths */}
                <h2 className="text-2xl font-bold mb-8 font-serif text-[#3D3128]">
                    📚 Complete Learning Path
                </h2>

                <div className="space-y-6">
                    {learningPaths.map((path, pathIdx) => {
                        const Icon = path.icon;
                        const completedCount = path.lessons.filter(l => l.done).length;
                        return (
                            <div key={path.id} className="rounded-2xl overflow-hidden border bg-white border-[#E8DDD0]">
                                <div className="p-6 flex items-start gap-4" style={{ backgroundColor: path.bgColor }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm">
                                        <Icon className="w-6 h-6" style={{ color: path.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-white/70" style={{ color: path.color }}>
                                                Unit {pathIdx + 1}
                                            </span>
                                            {completedCount > 0 && (
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-[#8FA68A] text-white">
                                                    {completedCount}/{path.lessons.length} done
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-1 font-serif text-[#3D3128]">{path.title}</h3>
                                        <p className="text-[#5D4E3C]">{path.description}</p>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2">
                                    {path.lessons.map((lesson, idx) => (
                                        <Link
                                            key={lesson.href}
                                            href={lesson.href}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#F5EDE4] group"
                                        >
                                            <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                                                style={{
                                                    backgroundColor: lesson.done ? path.color : '#E8DDD0',
                                                    color: lesson.done ? 'white' : '#8B7355'
                                                }}>
                                                {lesson.done ? '✓' : idx + 1}
                                            </span>
                                            <span className="flex-1 font-medium text-[#3D3128] group-hover:text-[#D4823A] transition-colors">
                                                {lesson.title}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Start CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/learn/foundations/math"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] shadow-lg shadow-[#D4823A]/30 hover:shadow-xl transition-all"
                    >
                        Start with Math Foundations
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
