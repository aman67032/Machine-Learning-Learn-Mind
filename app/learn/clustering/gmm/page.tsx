import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
} from "lucide-react";

export default function GMMPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Learning Path
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F8F0F2] text-[#8E4C5C]">
                        <Sparkles className="w-4 h-4" />
                        Clustering & Unsupervised Learning
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        🎯 Gaussian Mixture Models (GMM)
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Soft clustering with probabilities! Unlike K-Means, GMM assigns
                        <strong> probability of belonging</strong> to each cluster.
                    </p>
                </div>

                {/* Learning Objectives */}
                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />
                        What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Difference between <strong>hard</strong> and <strong>soft</strong> clustering</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>Gaussian (Normal) distribution</strong> and mixtures</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>Expectation-Maximization (EM)</strong> algorithm</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>When to use GMM vs K-Means</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Soft vs Hard Clustering */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Soft vs Hard Clustering
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">K-Means (Hard)</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Each point belongs to <strong>exactly one</strong> cluster.</p>
                                    <div className="bg-[#2D2520] rounded p-2 font-mono text-xs text-[#E6A04F]">
                                        Point A → Cluster 1 (100%)
                                    </div>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">GMM (Soft)</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Each point has <strong>probability</strong> of belonging to each cluster.</p>
                                    <div className="bg-[#2D2520] rounded p-2 font-mono text-xs text-[#E6A04F]">
                                        Point A → 70% C1, 25% C2, 5% C3
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">💡 Why Soft Clustering?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed">
                                Real data often has <strong>overlapping clusters</strong>. A customer might belong
                                to multiple segments. GMM captures this uncertainty naturally! Plus, GMM can model
                                <strong> elliptical clusters</strong>, not just spherical ones like K-Means.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Gaussian Distribution */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The Gaussian Distribution
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Univariate Gaussian</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Probability Density Function:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    p(x) = (1/√(2πσ²)) × exp(-(x-μ)²/(2σ²))
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    μ = mean (center), σ² = variance (spread)
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Multivariate Gaussian</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">For d-dimensional data:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    p(x) = (1/((2π)^(d/2)|Σ|^(1/2))) × exp(-½(x-μ)ᵀΣ⁻¹(x-μ))
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    μ = mean vector (d×1), Σ = covariance matrix (d×d)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🔑 Covariance Matrix Σ</p>
                                <p className="text-[#5D4E3C] text-sm">
                                    • Diagonal entries: variance of each feature<br />
                                    • Off-diagonal: covariance (correlation) between features<br />
                                    • This allows <strong>elliptical</strong> cluster shapes!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Mixture Model */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Gaussian Mixture Model
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Model</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A GMM assumes data comes from a <strong>mixture of K Gaussians</strong>:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Mixture Model:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    p(x) = Σₖ πₖ × N(x | μₖ, Σₖ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    πₖ = mixing coefficient (weight) of cluster k, Σπₖ = 1<br />
                                    N(x | μₖ, Σₖ) = Gaussian distribution for cluster k
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-3 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold text-sm">Parameters: πₖ</p>
                                    <p className="text-[#5D4E3C] text-xs">How common each cluster is</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-3 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold text-sm">Parameters: μₖ</p>
                                    <p className="text-[#5D4E3C] text-xs">Center of each cluster</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-3 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold text-sm">Parameters: Σₖ</p>
                                    <p className="text-[#5D4E3C] text-xs">Shape/spread of each cluster</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: EM Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Expectation-Maximization (EM)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔄 The EM Algorithm</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                EM iteratively finds optimal parameters by alternating between two steps:
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: EM for GMM
                            </h3>

                            <div className="space-y-6 font-mono text-sm">
                                <div>
                                    <p className="text-[#E8DDD0] font-bold mb-2">Initialize:</p>
                                    <p className="text-[#E6A04F] ml-4">Random μₖ, Σₖ, πₖ for each cluster k</p>
                                </div>

                                <div>
                                    <p className="text-[#E8DDD0] font-bold mb-2">E-Step (Expectation):</p>
                                    <p className="text-[#8B7355] ml-4 mb-2">Compute &quot;responsibility&quot; of each cluster for each point:</p>
                                    <div className="bg-[#8FA68A]/20 rounded-lg p-4 ml-4">
                                        <p className="text-[#E6A04F]">γₙₖ = πₖ × N(xₙ|μₖ,Σₖ) / Σⱼ πⱼ × N(xₙ|μⱼ,Σⱼ)</p>
                                        <p className="text-[#8B7355] text-xs mt-1">(probability that point n belongs to cluster k)</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[#E8DDD0] font-bold mb-2">M-Step (Maximization):</p>
                                    <p className="text-[#8B7355] ml-4 mb-2">Update parameters using responsibilities:</p>
                                    <div className="bg-[#D4823A]/20 rounded-lg p-4 ml-4 space-y-2">
                                        <p className="text-[#E6A04F]">Nₖ = Σₙ γₙₖ  (effective number of points in cluster k)</p>
                                        <p className="text-[#E6A04F]">μₖ = (1/Nₖ) × Σₙ γₙₖ × xₙ</p>
                                        <p className="text-[#E6A04F]">Σₖ = (1/Nₖ) × Σₙ γₙₖ × (xₙ-μₖ)(xₙ-μₖ)ᵀ</p>
                                        <p className="text-[#E6A04F]">πₖ = Nₖ / N</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[#E8DDD0] font-bold">Repeat E-M until convergence (log-likelihood stabilizes)</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📈 Log-Likelihood</h3>
                            <p className="text-[#5D4E3C] mb-4">EM maximizes the log-likelihood:</p>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    log L = Σₙ log( Σₖ πₖ × N(xₙ | μₖ, Σₖ) )
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: GMM vs K-Means */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            GMM vs K-Means
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <th className="text-left py-2 text-[#8B7355]">Aspect</th>
                                            <th className="text-left py-2 text-[#D4823A]">K-Means</th>
                                            <th className="text-left py-2 text-[#8FA68A]">GMM</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#5D4E3C]">
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Assignment</td>
                                            <td className="py-2">Hard (0 or 1)</td>
                                            <td className="py-2">Soft (probabilities)</td>
                                        </tr>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Cluster Shape</td>
                                            <td className="py-2">Spherical only</td>
                                            <td className="py-2">Elliptical (any covariance)</td>
                                        </tr>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Speed</td>
                                            <td className="py-2">Faster</td>
                                            <td className="py-2">Slower (more parameters)</td>
                                        </tr>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Objective</td>
                                            <td className="py-2">Minimize inertia</td>
                                            <td className="py-2">Maximize likelihood</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">Special Case</td>
                                            <td className="py-2" colSpan={2}>K-Means ≈ GMM with fixed, equal spherical Σ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">6</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                GMM with Sklearn
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.mixture import GaussianMixture
from sklearn.datasets import make_blobs
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data with varying cluster sizes
X, y_true = make_blobs(n_samples=500, centers=3, 
                       cluster_std=[1.0, 2.5, 0.5], random_state=42)

# Fit GMM
gmm = GaussianMixture(
    n_components=3,      # Number of clusters
    covariance_type='full',  # 'full', 'tied', 'diag', 'spherical'
    n_init=10,           # Multiple initializations
    random_state=42
)
gmm.fit(X)

# Soft assignments (probabilities)
proba = gmm.predict_proba(X)
print("Sample point probabilities:")
print(proba[:3])  # First 3 points

# Hard assignments
labels = gmm.predict(X)

# Model parameters
print(f"\\nMixing coefficients (π): {gmm.weights_}")
print(f"Means (μ):\\n{gmm.means_}")
print(f"\\nCovariances shape: {gmm.covariances_.shape}")

# Model selection with BIC/AIC
n_components_range = range(1, 7)
bics = []
aics = []

for n in n_components_range:
    gm = GaussianMixture(n_components=n, random_state=42)
    gm.fit(X)
    bics.append(gm.bic(X))
    aics.append(gm.aic(X))

plt.figure(figsize=(8, 4))
plt.plot(n_components_range, bics, 'b-o', label='BIC')
plt.plot(n_components_range, aics, 'r-o', label='AIC')
plt.xlabel('Number of Components')
plt.ylabel('Score')
plt.title('Model Selection: BIC vs AIC')
plt.legend()
plt.show()

print(f"\\nBest n_components (BIC): {n_components_range[np.argmin(bics)]}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Summary */}
                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-6 font-serif flex items-center gap-3">
                            <BookOpen className="w-6 h-6" />
                            Key Takeaways
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Soft Clustering:</strong> Points have probability of belonging to each cluster</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Model:</strong> p(x) = Σ πₖ × N(x | μₖ, Σₖ)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔄</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">EM:</strong> E-step computes responsibilities, M-step updates parameters</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Model Selection:</strong> Use BIC/AIC to choose number of components</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/clustering/kmeans" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        K-Means Clustering
                    </Link>
                    <Link
                        href="/learn/clustering/pca"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: PCA
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
