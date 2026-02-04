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
    Minimize2,
} from "lucide-react";

export default function PCAPage() {
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
                        <Minimize2 className="w-4 h-4" />
                        Dimensionality Reduction
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📉 Principal Component Analysis (PCA)
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Reduce dimensions while keeping <strong>maximum variance</strong>.
                        Essential for visualization, noise reduction, and speeding up ML!
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
                            <span>Why <strong>dimensionality reduction</strong> is important</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How PCA finds <strong>principal components</strong> using eigenvectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>covariance matrix</strong> and its meaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Choosing the right number of components with <strong>explained variance</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Why Dimensionality Reduction */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Why Reduce Dimensions?
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Curse of Dimensionality</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                High-dimensional data causes problems:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Problems</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Computation becomes slow</li>
                                        <li>• Data becomes sparse</li>
                                        <li>• Overfitting risk increases</li>
                                        <li>• Hard to visualize</li>
                                    </ul>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">PCA Solutions</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Faster training</li>
                                        <li>• Remove noise/redundancy</li>
                                        <li>• Reduce overfitting</li>
                                        <li>• Enable 2D/3D visualization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">💡 The Core Idea</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                PCA finds <strong>new axes</strong> (principal components) that capture the
                                <strong> most variance</strong> in the data. We keep the top components that
                                explain most of the variance and discard the rest!
                            </p>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🎯 Intuition</p>
                                <p className="text-[#5D4E3C]">
                                    If you have a photo, you can compress it by keeping only the important
                                    &quot;patterns&quot; and discarding the subtle noise. PCA does the same for any data!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: How PCA Works */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            How PCA Works
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Step 1: Center the Data</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Subtract the mean from each feature so data is centered at the origin.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Mean centering:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    X_centered = X - μ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    Where μ = mean of each feature column
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Step 2: Compute Covariance Matrix</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                The <strong>covariance matrix</strong> tells us how features vary together.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Covariance Matrix:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    C = (1/n) × XᵀX
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    C is a d×d matrix where d = number of features
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔍 Reading Covariance</p>
                                <p className="text-[#5D4E3C] text-sm">
                                    • Diagonal: Variance of each feature<br />
                                    • Off-diagonal: Covariance between features (positive = move together)
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Step 3: Find Eigenvectors & Eigenvalues</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Eigenvectors of the covariance matrix are the <strong>principal components</strong>.
                                Eigenvalues tell us how much variance each component explains.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Eigenvalue Equation:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    C × v = λ × v
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    v = eigenvector (direction), λ = eigenvalue (importance/variance)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Key Insight</p>
                                <p className="text-[#5D4E3C]">
                                    <strong>Eigenvector with largest eigenvalue</strong> = direction of maximum variance (PC1)<br />
                                    <strong>Second largest</strong> = maximum variance orthogonal to PC1 (PC2)<br />
                                    And so on...
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📉 Step 4: Project Data</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Select top k eigenvectors and project data onto this new subspace.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Projection:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    X_reduced = X × W_k
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    W_k = matrix of top k eigenvectors (d × k)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            The PCA Algorithm
                        </h2>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: PCA
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">Standardize the data (mean=0, std=1 for each feature)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">Compute the covariance matrix C = XᵀX / n</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E6A04F]">Calculate eigenvectors and eigenvalues of C</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">4.</span>
                                    <span className="text-[#E6A04F]">Sort eigenvectors by eigenvalue (descending)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">5.</span>
                                    <span className="text-[#E6A04F]">Select top k eigenvectors → W_k</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">6.</span>
                                    <span className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Project:</strong> X_reduced = X × W_k</span>
                                </div>
                            </div>
                        </div>

                        {/* Choosing k */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Choosing k: Explained Variance</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                How many components to keep? Use the <strong>explained variance ratio</strong>:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Explained Variance Ratio:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    EVR_k = λ_k / Σλᵢ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    Proportion of total variance captured by component k
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Rule of Thumb</p>
                                <p className="text-[#5D4E3C]">
                                    Keep enough components to explain <strong>95%</strong> of the variance, or
                                    use the <strong>elbow method</strong> on the cumulative variance plot.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                PCA from Scratch & with Sklearn
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA as SklearnPCA
import matplotlib.pyplot as plt

# PCA from Scratch
class PCA:
    def __init__(self, n_components):
        self.n_components = n_components
        self.components = None  # Principal components (eigenvectors)
        self.mean = None
        self.explained_variance_ratio = None
    
    def fit(self, X):
        # Step 1: Center the data
        self.mean = np.mean(X, axis=0)
        X_centered = X - self.mean
        
        # Step 2: Compute covariance matrix
        cov_matrix = np.cov(X_centered.T)
        
        # Step 3: Eigendecomposition
        eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)
        
        # Step 4: Sort by eigenvalue (descending)
        sorted_indices = np.argsort(eigenvalues)[::-1]
        eigenvalues = eigenvalues[sorted_indices]
        eigenvectors = eigenvectors[:, sorted_indices]
        
        # Step 5: Select top k components
        self.components = eigenvectors[:, :self.n_components]
        
        # Explained variance ratio
        total_var = np.sum(eigenvalues)
        self.explained_variance_ratio = eigenvalues[:self.n_components] / total_var
        
        return self
    
    def transform(self, X):
        # Step 6: Project data
        X_centered = X - self.mean
        return np.dot(X_centered, self.components)

# Example: Iris dataset
from sklearn.datasets import load_iris
iris = load_iris()
X = iris.data  # 4 features
y = iris.target

# Standardize first!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Our PCA
pca = PCA(n_components=2)
pca.fit(X_scaled)
X_pca = pca.transform(X_scaled)

print("Explained Variance Ratio:", pca.explained_variance_ratio)
print(f"Total Variance Captured: {sum(pca.explained_variance_ratio):.2%}")

# Compare with sklearn
sklearn_pca = SklearnPCA(n_components=2)
X_sklearn = sklearn_pca.fit_transform(X_scaled)
print(f"\\nSklearn EVR: {sklearn_pca.explained_variance_ratio_}")

# Visualize reduced dimensions
plt.figure(figsize=(8, 6))
scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis')
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')
plt.title('Iris Dataset - PCA Visualization')
plt.colorbar(scatter)
plt.show()`}
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
                                <span className="text-2xl">📉</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Goal:</strong> Reduce dimensions while preserving maximum variance</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📐</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Method:</strong> Find eigenvectors of covariance matrix (principal components)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Eigenvalues:</strong> Tell us how much variance each PC captures</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">💡</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Key:</strong> Standardize data first! Keep 95%+ of variance</p>
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
                        href="/learn"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Back to Learning Path
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
