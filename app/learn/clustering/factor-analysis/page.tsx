import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function FactorAnalysisPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F8F0F2] text-[#8E4C5C]">
                        <Sparkles className="w-4 h-4" />Unsupervised Learning
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🔬 Factor Analysis</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Discover the <strong>hidden latent factors</strong> that explain correlations in your data!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>The generative model behind Factor Analysis</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Difference between Factor Analysis and PCA</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>EM algorithm for Factor Analysis</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Generative Model</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Factor Analysis assumes data is generated from hidden <strong>latent factors</strong>:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4 space-y-2">
                                <p className="text-[#E6A04F] font-mono">x = μ + Λz + ε</p>
                                <p className="text-[#8B7355] text-sm">x ∈ ℝᵈ = observed data</p>
                                <p className="text-[#8B7355] text-sm">z ∈ ℝᵏ = latent factors, z ~ N(0, I)</p>
                                <p className="text-[#8B7355] text-sm">Λ = factor loading matrix (d × k)</p>
                                <p className="text-[#8B7355] text-sm">ε ~ N(0, Ψ) = noise (Ψ is diagonal)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Factor Analysis vs PCA</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold mb-2">PCA</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Finds directions of max variance</li>
                                        <li>• No probabilistic model</li>
                                        <li>• All variance explained by components</li>
                                    </ul>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-2">Factor Analysis</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Models latent factors + noise</li>
                                        <li>• Probabilistic generative model</li>
                                        <li>• Separates shared vs unique variance</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">Covariance structure:</p>
                                <p className="text-[#E6A04F] font-mono">Cov(x) = ΛΛᵀ + Ψ</p>
                                <p className="text-[#8B7355] text-sm mt-2">ΛΛᵀ = shared variance, Ψ = unique variance per feature</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. EM Algorithm for Factor Analysis</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">E-step: Compute posterior of z given x</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">p(z|x) = N(μ_z|x, Σ_z|x)</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">M-step: Update Λ and Ψ</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">Maximize expected log-likelihood w.r.t. parameters</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`from sklearn.decomposition import FactorAnalysis
import numpy as np

# Generate sample data
np.random.seed(42)
n_samples, n_features, n_factors = 500, 10, 3

# True latent factors
z = np.random.randn(n_samples, n_factors)
loading = np.random.randn(n_features, n_factors)
noise = np.random.randn(n_samples, n_features) * 0.5
X = z @ loading.T + noise

# Fit Factor Analysis
fa = FactorAnalysis(n_components=n_factors)
fa.fit(X)

print("Learned loadings shape:", fa.components_.shape)
print("Noise variance:", fa.noise_variance_)

# Transform to latent space
z_estimated = fa.transform(X)
print("Latent factors shape:", z_estimated.shape)

# Compare with PCA
from sklearn.decomposition import PCA
pca = PCA(n_components=n_factors)
z_pca = pca.fit_transform(X)

print(f"\\nFA explains noise separately: {fa.noise_variance_.mean():.3f}")
print(f"PCA variance explained: {pca.explained_variance_ratio_.sum():.3f}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Model:</strong> x = μ + Λz + ε (latent factors + noise)</p>
                            <p><strong className="text-[#E6A04F]">vs PCA:</strong> FA models noise separately, PCA doesn&apos;t</p>
                            <p><strong className="text-[#E6A04F]">Use Case:</strong> When you want to understand latent structure</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/clustering/pca" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />PCA</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
