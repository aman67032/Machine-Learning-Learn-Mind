import Link from "next/link";
import {
    FileCode,
    Database,
    BookOpen,
    Download,
    ExternalLink,
    FileText,
    Wrench,
    GraduationCap,
    Flame,
    CheckCircle,
    Container,
} from "lucide-react";

const notebooks = [
    {
        section: "Regression",
        color: "#8FA68A",
        bgColor: "#F3F8F2",
        items: [
            { name: "Tools of the Trade", path: "2-Regression/1-Tools/notebook.ipynb" },
            { name: "Managing Data", path: "2-Regression/2-Data/notebook.ipynb" },
            { name: "Linear Regression", path: "2-Regression/3-Linear/notebook.ipynb" },
            { name: "Logistic Regression", path: "2-Regression/4-Logistic/notebook.ipynb" },
        ],
    },
    {
        section: "Web App",
        color: "#5A8A88",
        bgColor: "#F0F6F6",
        items: [
            { name: "Build a Web App", path: "3-Web-App/1-Web-App/notebook.ipynb" },
        ],
    },
    {
        section: "Classification",
        color: "#C4897A",
        bgColor: "#FBF3F1",
        items: [
            { name: "Introduction", path: "4-Classification/1-Introduction/notebook.ipynb" },
            { name: "Classifiers Part 1", path: "4-Classification/2-Classifiers-1/notebook.ipynb" },
            { name: "Classifiers Part 2", path: "4-Classification/3-Classifiers-2/notebook.ipynb" },
            { name: "Applied Classification", path: "4-Classification/4-Applied/notebook.ipynb" },
        ],
    },
    {
        section: "Clustering",
        color: "#8E4C5C",
        bgColor: "#F8F0F2",
        items: [
            { name: "Visualizing Data", path: "5-Clustering/1-Visualize/notebook.ipynb" },
            { name: "K-Means Clustering", path: "5-Clustering/2-K-Means/notebook.ipynb" },
        ],
    },
    {
        section: "NLP",
        color: "#D4823A",
        bgColor: "#FEF3E7",
        items: [
            { name: "Hotel Reviews 1", path: "6-NLP/4-Hotel-Reviews-1/notebook.ipynb" },
            { name: "Hotel Reviews 2", path: "6-NLP/5-Hotel-Reviews-2/notebook.ipynb" },
        ],
    },
    {
        section: "Time Series",
        color: "#8FA68A",
        bgColor: "#F3F8F2",
        items: [
            { name: "Introduction", path: "7-TimeSeries/1-Introduction/working/notebook.ipynb" },
            { name: "ARIMA", path: "7-TimeSeries/2-ARIMA/working/notebook.ipynb" },
            { name: "SVR", path: "7-TimeSeries/3-SVR/working/notebook.ipynb" },
        ],
    },
    {
        section: "Reinforcement Learning",
        color: "#5A8A88",
        bgColor: "#F0F6F6",
        items: [
            { name: "Q-Learning", path: "8-Reinforcement/1-QLearning/notebook.ipynb" },
            { name: "OpenAI Gym", path: "8-Reinforcement/2-Gym/notebook.ipynb" },
        ],
    },
];

const solutionNotebooks = [
    {
        section: "Regression Solutions",
        color: "#8FA68A",
        items: [
            { name: "Tools Solution", path: "2-Regression/1-Tools/solution/notebook.ipynb" },
            { name: "Data Solution", path: "2-Regression/2-Data/solution/notebook.ipynb" },
            { name: "Linear Solution", path: "2-Regression/3-Linear/solution/notebook.ipynb" },
            { name: "Logistic Solution", path: "2-Regression/4-Logistic/solution/notebook.ipynb" },
        ],
    },
    {
        section: "Classification Solutions",
        color: "#C4897A",
        items: [
            { name: "Intro Solution", path: "4-Classification/1-Introduction/solution/notebook.ipynb" },
            { name: "Classifiers-1 Solution", path: "4-Classification/2-Classifiers-1/solution/notebook.ipynb" },
            { name: "Classifiers-2 Solution", path: "4-Classification/3-Classifiers-2/solution/notebook.ipynb" },
            { name: "Applied Solution", path: "4-Classification/4-Applied/solution/notebook.ipynb" },
        ],
    },
    {
        section: "Clustering Solutions",
        color: "#8E4C5C",
        items: [
            { name: "Visualize Solution", path: "5-Clustering/1-Visualize/solution/notebook.ipynb" },
            { name: "K-Means Solution", path: "5-Clustering/2-K-Means/solution/notebook.ipynb" },
        ],
    },
    {
        section: "NLP Solutions",
        color: "#D4823A",
        items: [
            { name: "Translation Solution", path: "6-NLP/3-Translation-Sentiment/solution/notebook.ipynb" },
            { name: "Hotel Reviews 1 Solution", path: "6-NLP/4-Hotel-Reviews-1/solution/notebook.ipynb" },
            { name: "Hotel Reviews 2 Solution", path: "6-NLP/5-Hotel-Reviews-2/solution/1-notebook.ipynb" },
        ],
    },
    {
        section: "Time Series Solutions",
        color: "#8FA68A",
        items: [
            { name: "Intro Solution", path: "7-TimeSeries/1-Introduction/solution/notebook.ipynb" },
            { name: "ARIMA Solution", path: "7-TimeSeries/2-ARIMA/solution/notebook.ipynb" },
            { name: "SVR Solution", path: "7-TimeSeries/3-SVR/solution/notebook.ipynb" },
        ],
    },
    {
        section: "Reinforcement Solutions",
        color: "#5A8A88",
        items: [
            { name: "Q-Learning Solution", path: "8-Reinforcement/1-QLearning/solution/notebook.ipynb" },
            { name: "Gym Solution", path: "8-Reinforcement/2-Gym/solution/notebook.ipynb" },
        ],
    },
];

const datasets = [
    { name: "US Pumpkin Prices", file: "US-pumpkins.csv", description: "USDA pumpkin price data for regression lessons" },
    { name: "UFO Sightings", file: "ufos.csv", description: "UFO sighting data for web app lesson" },
    { name: "World Cuisines", file: "cuisines.csv", description: "Ingredient data for classification lessons" },
    { name: "Cleaned Cuisines", file: "cleaned_cuisines.csv", description: "Preprocessed cuisine data" },
    { name: "Nigerian Songs", file: "nigerian-songs.csv", description: "Spotify data for clustering lessons" },
    { name: "Energy Consumption", file: "energy.csv", description: "World energy data for time series" },
];

const guides = [
    { name: "For Teachers", icon: GraduationCap, description: "How to use this curriculum in your classroom", path: "https://github.com/microsoft/ML-For-Beginners/blob/main/for-teachers.md" },
    { name: "Troubleshooting", icon: Wrench, description: "Solutions to common setup and runtime issues", path: "https://github.com/microsoft/ML-For-Beginners/blob/main/TROUBLESHOOTING.md" },
    { name: "Contributing", icon: FileText, description: "How to contribute to this curriculum", path: "https://github.com/microsoft/ML-For-Beginners/blob/main/CONTRIBUTING.md" },
];

export default function ResourcesPage() {
    const githubBase = "https://github.com/microsoft/ML-For-Beginners/blob/main/";
    const nbviewerBase = "https://nbviewer.jupyter.org/github/microsoft/ML-For-Beginners/blob/main/";

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 text-lg text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📚 Resources
                    </h1>
                    <p className="text-xl text-[#5D4E3C]">
                        Jupyter notebooks, datasets, and additional materials to enhance your learning
                    </p>
                </div>

                {/* Dev Container Quick Link */}
                <section className="mb-12 rounded-2xl p-6 text-white bg-gradient-to-r from-[#5A8A88] to-[#4A7A78]">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                            <Container className="w-10 h-10 flex-shrink-0" />
                            <div>
                                <h2 className="text-xl font-bold font-serif">Dev Container Setup</h2>
                                <p className="text-sm opacity-80">One-click Python environment with VS Code</p>
                            </div>
                        </div>
                        <Link
                            href="/setup"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors bg-white text-[#5A8A88] hover:bg-opacity-90"
                        >
                            View Setup Guide →
                        </Link>
                    </div>
                </section>

                {/* PyTorch Bonus */}
                <section className="mb-12 rounded-2xl p-6 text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">
                    <div className="flex items-start gap-4">
                        <Flame className="w-10 h-10 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2 font-serif">
                                🔥 Bonus: PyTorch Fundamentals
                            </h2>
                            <p className="opacity-90 mb-4 text-lg">
                                A comprehensive notebook covering PyTorch basics - tensors, autograd, neural networks, and more.
                            </p>
                            <a
                                href={`${nbviewerBase}PyTorch_Fundamentals.ipynb`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors bg-white text-[#D4823A] hover:bg-opacity-90"
                            >
                                <FileCode className="w-5 h-5" />
                                Open Notebook
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Jupyter Notebooks */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <FileCode className="w-7 h-7 text-[#D4823A]" />
                        <h2 className="text-2xl font-bold font-serif text-[#3D3128]">
                            Jupyter Notebooks
                        </h2>
                    </div>
                    <p className="mb-6 text-lg text-[#5D4E3C]">
                        Interactive Python notebooks with code exercises for each lesson. Run them locally or view on nbviewer.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {notebooks.map((group) => (
                            <div key={group.section} className="rounded-2xl overflow-hidden border bg-white border-[#E8DDD0]">
                                <div className="px-4 py-3 font-semibold" style={{ backgroundColor: group.bgColor, color: group.color }}>
                                    {group.section}
                                </div>
                                <div className="p-4 space-y-2">
                                    {group.items.map((item) => (
                                        <div key={item.path} className="flex items-center justify-between">
                                            <span className="text-base text-[#5D4E3C]">{item.name}</span>
                                            <div className="flex gap-2">
                                                <a
                                                    href={`${nbviewerBase}${item.path}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base flex items-center gap-1 text-[#5A8A88] hover:text-[#D4823A] transition-colors"
                                                >
                                                    View <ExternalLink className="w-3 h-3" />
                                                </a>
                                                <a
                                                    href={`${githubBase}${item.path}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base flex items-center gap-1 text-[#8B7355] hover:text-[#D4823A] transition-colors"
                                                >
                                                    GitHub <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solution Notebooks */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="w-7 h-7 text-[#8FA68A]" />
                        <h2 className="text-2xl font-bold font-serif text-[#3D3128]">
                            Solution Notebooks
                        </h2>
                    </div>
                    <p className="mb-6 text-lg text-[#5D4E3C]">
                        Completed solutions for all exercises. Use these to check your work or learn from working examples.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {solutionNotebooks.map((group) => (
                            <div key={group.section} className="rounded-2xl overflow-hidden border bg-white border-[#E8DDD0]">
                                <div className="px-4 py-2 font-semibold text-sm" style={{ backgroundColor: `${group.color}15`, color: group.color }}>
                                    {group.section}
                                </div>
                                <div className="p-3 space-y-1">
                                    {group.items.map((item) => (
                                        <a
                                            key={item.path}
                                            href={`${nbviewerBase}${item.path}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-base py-1 px-2 rounded transition-colors text-[#5D4E3C] hover:bg-[#F5EDE4] hover:text-[#8FA68A]"
                                        >
                                            <span>{item.name}</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Datasets */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Database className="w-7 h-7 text-[#8FA68A]" />
                        <h2 className="text-2xl font-bold font-serif text-[#3D3128]">
                            Datasets
                        </h2>
                    </div>
                    <p className="mb-6 text-lg text-[#5D4E3C]">
                        CSV datasets used throughout the curriculum. Download and explore them locally.
                    </p>

                    <div className="rounded-2xl overflow-hidden border bg-white border-[#E8DDD0]">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#F5EDE4]">
                                    <th className="text-left px-4 py-3 font-semibold text-[#5D4E3C]">Dataset</th>
                                    <th className="text-left px-4 py-3 font-semibold text-[#5D4E3C] hidden sm:table-cell">Description</th>
                                    <th className="text-right px-4 py-3 font-semibold text-[#5D4E3C]">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datasets.map((dataset, idx) => (
                                    <tr key={dataset.file} className={idx > 0 ? "border-t border-[#E8DDD0]" : ""}>
                                        <td className="px-4 py-3 font-medium text-[#3D3128]">{dataset.name}</td>
                                        <td className="px-4 py-3 text-base hidden sm:table-cell text-[#8B7355]">{dataset.description}</td>
                                        <td className="px-4 py-3 text-right">
                                            <a
                                                href={`/data/${dataset.file}`}
                                                download
                                                className="inline-flex items-center gap-1 text-base font-medium text-[#8FA68A] hover:text-[#D4823A] transition-colors"
                                            >
                                                <Download className="w-4 h-4" />
                                                {dataset.file}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Guides */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-7 h-7 text-[#8E4C5C]" />
                        <h2 className="text-2xl font-bold font-serif text-[#3D3128]">
                            Guides & Documentation
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {guides.map((guide) => {
                            const Icon = guide.icon;
                            return (
                                <a
                                    key={guide.name}
                                    href={guide.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border transition-all group bg-white border-[#E8DDD0] hover:border-[#D4823A] hover:shadow-lg hover:shadow-[#D4823A]/10"
                                >
                                    <Icon className="w-8 h-8 mb-3 transition-transform group-hover:scale-110 text-[#8E4C5C]" />
                                    <h3 className="font-semibold mb-1 text-[#3D3128]">{guide.name}</h3>
                                    <p className="text-base text-[#8B7355]">{guide.description}</p>
                                </a>
                            );
                        })}
                    </div>
                </section>

                {/* PDF Download */}
                <section className="rounded-2xl p-6 border bg-[#FFFBF7] border-[#E8DDD0]">
                    <div className="flex items-center gap-4">
                        <FileText className="w-10 h-10 text-[#D4823A]" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg font-serif text-[#3D3128]">
                                Full Curriculum PDF
                            </h3>
                            <p className="text-base text-[#8B7355]">Download the complete curriculum as a PDF for offline reading</p>
                        </div>
                        <a
                            href="/pdf/readme.pdf"
                            download
                            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition-all bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
