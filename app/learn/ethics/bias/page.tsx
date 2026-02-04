import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Target, BookOpen, CheckCircle, AlertTriangle } from "lucide-react";

export default function MLBiasPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F8F0F2] text-[#8E4C5C]">
                        <Shield className="w-4 h-4" />ML Ethics
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">⚖️ Bias in Machine Learning</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        ML systems can perpetuate and amplify <strong>human biases</strong>. Understanding and mitigating bias is crucial!
                    </p>
                </div>

                {/* Sketchnote */}
                <div className="mb-10 rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-md">
                    <img src="/sketchnotes/ml-fairness.png" alt="ML Fairness Sketchnote" className="w-full h-auto" />
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Types of bias: data, algorithmic, and societal</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Real-world examples and consequences</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Techniques for detecting and mitigating bias</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Types of Bias</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                <p className="text-[#C4897A] font-bold">📊 Data Bias</p>
                                <p className="text-[#5D4E3C] text-sm">Training data doesn&apos;t represent the real world. Under-representation of groups leads to poor performance.</p>
                            </div>
                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                <p className="text-[#C4897A] font-bold">⚙️ Algorithmic Bias</p>
                                <p className="text-[#5D4E3C] text-sm">Model design choices can amplify existing biases. Some features may be proxies for protected attributes.</p>
                            </div>
                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                <p className="text-[#C4897A] font-bold">🌍 Societal Bias</p>
                                <p className="text-[#5D4E3C] text-sm">Historical human biases encoded in data. Word embeddings can learn gender stereotypes.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Real-World Examples</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="flex gap-3"><AlertTriangle className="w-5 h-5 text-[#C4897A] flex-shrink-0 mt-1" /><p className="text-[#5D4E3C]"><strong>Hiring:</strong> Resume screening systems trained on past (biased) hiring decisions</p></div>
                            <div className="flex gap-3"><AlertTriangle className="w-5 h-5 text-[#C4897A] flex-shrink-0 mt-1" /><p className="text-[#5D4E3C]"><strong>Criminal Justice:</strong> Recidivism predictions with racial disparities</p></div>
                            <div className="flex gap-3"><AlertTriangle className="w-5 h-5 text-[#C4897A] flex-shrink-0 mt-1" /><p className="text-[#5D4E3C]"><strong>Healthcare:</strong> Models trained on data from limited demographics</p></div>
                            <div className="flex gap-3"><AlertTriangle className="w-5 h-5 text-[#C4897A] flex-shrink-0 mt-1" /><p className="text-[#5D4E3C]"><strong>Facial Recognition:</strong> Higher error rates for certain demographics</p></div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Mitigation Strategies</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Diverse Data Collection</p>
                                <p className="text-[#5D4E3C] text-sm">Ensure training data represents all groups fairly</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Bias Auditing</p>
                                <p className="text-[#5D4E3C] text-sm">Measure performance across demographic groups (fairness metrics)</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Algorithmic Fairness</p>
                                <p className="text-[#5D4E3C] text-sm">Constraints during training to ensure equitable outcomes</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Human Oversight</p>
                                <p className="text-[#5D4E3C] text-sm">Keep humans in the loop for high-stakes decisions</p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Data Bias:</strong> Garbage in, garbage out - biased data = biased models</p>
                            <p><strong className="text-[#E6A04F]">Fairness:</strong> Equal accuracy across demographics, not just overall</p>
                            <p><strong className="text-[#E6A04F]">Responsibility:</strong> ML practitioners must actively detect and mitigate bias</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Back to Learning Path</Link>
                    <Link href="/learn/ethics/data-ethics" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Next: Data Ethics<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
