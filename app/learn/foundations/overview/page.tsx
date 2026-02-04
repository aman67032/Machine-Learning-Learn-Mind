import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function MLOverviewPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Calculator className="w-4 h-4" />Foundations
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🎯 ML Overview & Paradigms</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        <strong>Supervised, Unsupervised, Reinforcement</strong> — the three paradigms of machine learning!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>The three main learning paradigms</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>When to use each approach</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Real-world ML applications</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Supervised Learning</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#F3F8F2] rounded-xl p-4 mb-4">
                                <p className="text-[#8FA68A] font-bold">Learn from labeled examples: (x, y) pairs</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">Given input x, predict output y</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E6A04F] font-bold">Regression</p>
                                    <p className="text-[#E8DDD0] text-sm">y is continuous</p>
                                    <p className="text-[#8B7355] text-xs">House prices, stock prediction</p>
                                </div>
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E6A04F] font-bold">Classification</p>
                                    <p className="text-[#E8DDD0] text-sm">y is discrete</p>
                                    <p className="text-[#8B7355] text-xs">Spam detection, image labels</p>
                                </div>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm"><strong>Examples:</strong> Linear Regression, Logistic Regression, SVM, Decision Trees, Neural Networks</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Unsupervised Learning</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#FEF3E7] rounded-xl p-4 mb-4">
                                <p className="text-[#D4823A] font-bold">Find patterns in unlabeled data: just x, no y</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">Discover structure, group similar items</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E6A04F] font-bold">Clustering</p>
                                    <p className="text-[#E8DDD0] text-sm">Group similar points</p>
                                    <p className="text-[#8B7355] text-xs">Customer segments, topic discovery</p>
                                </div>
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E6A04F] font-bold">Dim. Reduction</p>
                                    <p className="text-[#E8DDD0] text-sm">Compress features</p>
                                    <p className="text-[#8B7355] text-xs">PCA, visualization, denoising</p>
                                </div>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm"><strong>Examples:</strong> K-Means, GMM, PCA, Factor Analysis, Autoencoders</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Reinforcement Learning</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#F8F0F2] rounded-xl p-4 mb-4">
                                <p className="text-[#8E4C5C] font-bold">Learn from interaction: action → reward</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">Agent takes actions, receives rewards, learns policy</p>
                            </div>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">State → Agent → Action → Environment → Reward</p>
                                <p className="text-[#E6A04F] font-mono mt-2">Goal: Maximize cumulative reward</p>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm"><strong>Examples:</strong> Game AI (AlphaGo), Robotics, Recommendation systems, Trading</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Real-World Applications</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🏥 Healthcare</p>
                                    <p className="text-[#5D4E3C] text-sm">Disease diagnosis, drug discovery</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">💰 Finance</p>
                                    <p className="text-[#5D4E3C] text-sm">Fraud detection, credit scoring</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🚗 Autonomous</p>
                                    <p className="text-[#5D4E3C] text-sm">Self-driving cars, robotics</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">💬 NLP</p>
                                    <p className="text-[#5D4E3C] text-sm">ChatGPT, translation, search</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Supervised:</strong> Labeled data (x,y), predict y from x</p>
                            <p><strong className="text-[#E6A04F]">Unsupervised:</strong> Unlabeled data, find structure</p>
                            <p><strong className="text-[#E6A04F]">Reinforcement:</strong> Learn from rewards, take actions</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/foundations/python" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Python for ML</Link>
                    <Link href="/learn/regression/linear" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Start: Linear Regression<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
