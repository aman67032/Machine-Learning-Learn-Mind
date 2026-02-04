import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function ExplainabilityPage() {
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
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🔍 Explainable AI (XAI)</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Understanding <strong>why</strong> models make decisions. Trust comes from transparency!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Why explainability matters in high-stakes decisions</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Interpretable models vs black-box explanations</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>SHAP and LIME for feature importance</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Why Explainability?</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <p className="text-[#5D4E3C]">In high-stakes domains (healthcare, finance, criminal justice), we need to understand WHY a model made a prediction.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold">🏥 Healthcare</p>
                                    <p className="text-[#5D4E3C] text-sm">Why did the model predict cancer?</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">💰 Finance</p>
                                    <p className="text-[#5D4E3C] text-sm">Why was a loan denied?</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Approaches</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Interpretable Models</p>
                                <p className="text-[#5D4E3C] text-sm">Linear Regression, Decision Trees, Rule-based systems. Inherently explainable.</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">Post-hoc Explanations</p>
                                <p className="text-[#5D4E3C] text-sm">SHAP, LIME, attention maps. Explain any model after training.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Popular Techniques</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-bold">SHAP (SHapley Additive exPlanations)</p>
                                <p className="text-[#E8DDD0] text-sm">Based on game theory. Fair allocation of credit to each feature.</p>
                            </div>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-bold">LIME (Local Interpretable Model-agnostic)</p>
                                <p className="text-[#E8DDD0] text-sm">Fits simple model locally around a prediction to explain it.</p>
                            </div>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-bold">Feature Importance</p>
                                <p className="text-[#E8DDD0] text-sm">Built into tree models (Random Forest, XGBoost)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Example</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import shap
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

# Train model
X, y = load_iris(return_X_y=True)
model = RandomForestClassifier().fit(X, y)

# SHAP explanation
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X)

# Summary plot
shap.summary_plot(shap_values, X, feature_names=load_iris().feature_names)

# Single prediction explanation
shap.force_plot(explainer.expected_value[0], shap_values[0][0], X[0])`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Interpretable:</strong> Use simple models when possible</p>
                            <p><strong className="text-[#E6A04F]">SHAP/LIME:</strong> Explain black-box models post-hoc</p>
                            <p><strong className="text-[#E6A04F]">Trust:</strong> Explainability builds user trust and meets regulations</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/ethics/data-ethics" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Data Ethics</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
