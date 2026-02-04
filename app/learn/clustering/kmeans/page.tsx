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

export default function KMeansPage() {
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
                        Clustering (Unsupervised)
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        ✨ K-Means Clustering Algorithm
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Discover hidden groups in your data <strong>without labels</strong>!
                        K-Means is one of the most popular unsupervised learning algorithms.
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
                            <span>The <strong>K-Means algorithm</strong> step by step</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How to choose <strong>K</strong> using the elbow method</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>inertia</strong> cost function and its meaning</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Unsupervised Learning */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Unsupervised vs Supervised Learning
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">🏷️ Supervised</p>
                                    <p className="text-[#5D4E3C]">Has <strong>labels</strong> (y values)</p>
                                    <p className="text-[#8B7355] text-sm mt-2">Example: Email labeled &quot;spam&quot; or &quot;not spam&quot;</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">✨ Unsupervised</p>
                                    <p className="text-[#5D4E3C]"><strong>No labels</strong> - find structure yourself!</p>
                                    <p className="text-[#8B7355] text-sm mt-2">Example: Group customers by behavior</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 What is Clustering?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Clustering</strong> = grouping similar data points together.
                                K-Means creates K groups (clusters) where points in each group are close to their group&apos;s center.
                            </p>
                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">📊 Real-World Examples</p>
                                <ul className="text-[#5D4E3C] space-y-1">
                                    <li>• Customer segmentation (high-value, medium, low)</li>
                                    <li>• Image compression (group similar colors)</li>
                                    <li>• Document categorization</li>
                                    <li>• Anomaly detection (unusual clusters)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: The Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The K-Means Algorithm
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🧠 The Core Idea</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                K-Means alternates between two steps:
                            </p>
                            <ol className="list-decimal list-inside text-[#5D4E3C] space-y-2 text-lg">
                                <li><strong>Assign</strong> each point to its nearest centroid (center)</li>
                                <li><strong>Update</strong> each centroid to be the mean of its assigned points</li>
                            </ol>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mt-4">
                                Repeat until centroids stop moving (convergence)!
                            </p>
                        </div>

                        {/* Algorithm Steps Visual */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: K-Means Clustering
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Initialize:</strong> Randomly select K points as initial centroids</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E8DDD0]">Repeat until convergence:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-3">
                                    <div className="bg-[#8FA68A]/20 rounded-lg p-3">
                                        <p className="text-[#8FA68A] font-bold mb-2">📦 ASSIGN STEP:</p>
                                        <p className="text-[#E8DDD0]">For each data point x:</p>
                                        <p className="text-[#E6A04F] ml-4">Find closest centroid using Euclidean distance</p>
                                        <p className="text-[#E6A04F] ml-4">Assign x to that cluster</p>
                                    </div>
                                    <div className="bg-[#D4823A]/20 rounded-lg p-3">
                                        <p className="text-[#E6A04F] font-bold mb-2">📍 UPDATE STEP:</p>
                                        <p className="text-[#E8DDD0]">For each cluster k:</p>
                                        <p className="text-[#E6A04F] ml-4">μₖ = mean of all points assigned to cluster k</p>
                                        <p className="text-[#E6A04F] ml-4">(This is the new centroid position)</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E8DDD0]">Return final cluster assignments and centroids</span>
                                </div>
                            </div>
                        </div>

                        {/* Math */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Math</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Euclidean Distance:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    d(x, μ) = √( Σ(xᵢ - μᵢ)² )
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Distance from point x to centroid μ
                                </p>
                            </div>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Centroid Update (mean of cluster points):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    μₖ = (1/|Cₖ|) × Σ xⁱ  for all xⁱ in cluster Cₖ
                                </p>
                            </div>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Cost Function (Inertia/WCSS):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    J = &Sigma;<sub>k</sub> &Sigma;<sub>x &isin; C<sub>k</sub></sub> ||x − μ<sub>k</sub>||<sup>2</sup>
                                </p>

                                <p className="text-[#8B7355] font-mono text-sm">
                                    WCSS = Within-Cluster Sum of Squares (we minimize this!)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Choosing K */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Choosing K: The Elbow Method
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">❓ How Many Clusters?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                K-Means requires you to specify K upfront. But how do you know the right number?
                                The <strong>Elbow Method</strong> helps you decide!
                            </p>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">📈 The Elbow Method Steps:</p>
                                <ol className="list-decimal list-inside text-[#5D4E3C] space-y-1">
                                    <li>Run K-Means for K = 1, 2, 3, ..., 10</li>
                                    <li>Calculate inertia (cost) for each K</li>
                                    <li>Plot K vs Inertia</li>
                                    <li>Find the &quot;elbow&quot; point where inertia stops dropping sharply</li>
                                </ol>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Interpreting the Plot</h3>

                            <div className="bg-[#F3F8F2] rounded-xl p-6 mb-4 font-mono text-sm">
                                <p className="text-[#8B7355] mb-2">Inertia vs K:</p>
                                <pre className="text-[#5D4E3C]">
                                    {`Inertia
    |
    |  *
    |    *
    |      * ← Elbow point (K=3)
    |        *  *  *  *  *
    |_______________________ K
       1  2  3  4  5  6  7`}
                                </pre>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Why it works:</p>
                                <p className="text-[#5D4E3C]">
                                    Adding more clusters always decreases inertia, but after a point,
                                    the improvement becomes marginal. The &quot;elbow&quot; is where you get
                                    <strong> diminishing returns</strong> - the best trade-off!
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
                                K-Means from Scratch
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np

def kmeans(X, K, max_iters=100):
    """
    K-Means Clustering from Scratch
    X: data matrix (m × n)
    K: number of clusters
    """
    m, n = X.shape
    
    # Step 1: Initialize centroids randomly
    random_indices = np.random.choice(m, K, replace=False)
    centroids = X[random_indices]
    
    for iteration in range(max_iters):
        # Step 2: ASSIGN - find closest centroid for each point
        distances = np.zeros((m, K))
        for k in range(K):
            # Euclidean distance to each centroid
            distances[:, k] = np.sqrt(np.sum((X - centroids[k])**2, axis=1))
        
        # Assign each point to nearest centroid
        labels = np.argmin(distances, axis=1)
        
        # Step 3: UPDATE - move centroids to cluster means
        new_centroids = np.zeros((K, n))
        for k in range(K):
            if np.sum(labels == k) > 0:  # Avoid empty clusters
                new_centroids[k] = X[labels == k].mean(axis=0)
            else:
                new_centroids[k] = centroids[k]
        
        # Check for convergence
        if np.allclose(centroids, new_centroids):
            print(f"Converged at iteration {iteration}")
            break
            
        centroids = new_centroids
    
    # Calculate final inertia
    inertia = 0
    for k in range(K):
        cluster_points = X[labels == k]
        inertia += np.sum((cluster_points - centroids[k])**2)
    
    return labels, centroids, inertia

# Example: Customer segmentation
np.random.seed(42)
# Simulate 3 groups of customers (spending, frequency)
group1 = np.random.randn(50, 2) + [2, 2]   # High spenders
group2 = np.random.randn(50, 2) + [-2, -2] # Low spenders  
group3 = np.random.randn(50, 2) + [2, -2]  # Medium

X = np.vstack([group1, group2, group3])

labels, centroids, inertia = kmeans(X, K=3)
print(f"\\nInertia: {inertia:.2f}")
print(f"Centroids:\\n{centroids}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Common Pitfalls */}
                    <section className="rounded-2xl p-6 bg-[#FBF3F1] border border-[#C4897A]">
                        <h2 className="text-xl font-bold mb-4 text-[#C4897A]">⚠️ K-Means Pitfalls</h2>
                        <div className="space-y-4 text-[#5D4E3C]">
                            <div className="flex gap-4">
                                <span className="text-xl">🎲</span>
                                <div>
                                    <p className="font-bold">Random Initialization</p>
                                    <p className="text-sm">Different starting centroids → different results. Run multiple times!</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xl">⚖️</span>
                                <div>
                                    <p className="font-bold">Feature Scaling</p>
                                    <p className="text-sm">Always normalize features! Large values dominate distance calculations.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xl">🔘</span>
                                <div>
                                    <p className="font-bold">Only Finds Spherical Clusters</p>
                                    <p className="text-sm">K-Means assumes circular clusters. For other shapes, try DBSCAN.</p>
                                </div>
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
                                <span className="text-2xl">✨</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">K-Means:</strong> Unsupervised clustering into K groups</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔄</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Algorithm:</strong> Assign points → Update centroids → Repeat</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📐</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Cost:</strong> Inertia = sum of squared distances to centroids</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Elbow Method:</strong> Choose K at the &quot;elbow&quot; of inertia plot</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/regression/logistic" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Logistic Regression
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
