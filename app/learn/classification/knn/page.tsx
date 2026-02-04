import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Layers,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
} from "lucide-react";

export default function KNNPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FBF3F1] text-[#C4897A]">
                        <Layers className="w-4 h-4" />
                        Classification
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        🎯 K-Nearest Neighbors (KNN)
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        One of the simplest yet powerful algorithms. Classify new points based on
                        the <strong>majority vote</strong> of their nearest neighbors!
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
                            <span>How KNN classifies using <strong>distance metrics</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Choosing the optimal <strong>K value</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Why <strong>feature scaling</strong> is critical for KNN</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>KNN for both <strong>classification and regression</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Core Concept */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Core Idea
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🧠 Intuition: &quot;You Are Who Your Friends Are&quot;</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                KNN makes a simple assumption: <strong>similar things are near each other</strong>.
                                To classify a new point, find the K closest points (neighbors) and let them vote!
                            </p>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">📊 Example</p>
                                <p className="text-[#5D4E3C]">
                                    Classifying a new flower: Find the 3 nearest flowers in your dataset.
                                    If 2 are &quot;Rose&quot; and 1 is &quot;Tulip&quot; → Classify as <strong>Rose</strong> (majority vote!).
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚡ Key Properties</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">Non-Parametric</p>
                                    <p className="text-[#5D4E3C] text-sm">No assumptions about data distribution. No training phase - just stores all data!</p>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Lazy Learning</p>
                                    <p className="text-[#5D4E3C] text-sm">Does no work during &quot;training&quot;. All computation happens at prediction time.</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4 border border-[#5A8A88]">
                                    <p className="text-[#5A8A88] font-bold mb-2">Instance-Based</p>
                                    <p className="text-[#5D4E3C] text-sm">Memorizes the entire training dataset. No model parameters to learn!</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">Versatile</p>
                                    <p className="text-[#5D4E3C] text-sm">Works for both classification (vote) and regression (average).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: The Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The KNN Algorithm
                        </h2>

                        {/* Algorithm Steps */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: K-Nearest Neighbors
                            </h3>

                            <div className="space-y-4 font-mono">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">Input:</span>
                                    <span className="text-[#E8DDD0]">Training data D, new point x_new, K (number of neighbors)</span>
                                </div>
                                <div className="border-t border-[#8B7355] pt-4 space-y-3">
                                    <div className="flex gap-4">
                                        <span className="text-[#8B7355]">1.</span>
                                        <span className="text-[#E6A04F]">Calculate distance from x_new to ALL training points</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#8B7355]">2.</span>
                                        <span className="text-[#E6A04F]">Sort distances in ascending order</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#8B7355]">3.</span>
                                        <span className="text-[#E6A04F]">Select the K nearest neighbors</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#8B7355]">4.</span>
                                        <span className="text-[#E6A04F]">For Classification: Return majority class among K neighbors</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#8B7355]">5.</span>
                                        <span className="text-[#E6A04F]">For Regression: Return mean of K neighbors&apos; values</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Distance Metrics */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Distance Metrics</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                How do we measure &quot;nearness&quot;? Several distance formulas exist:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Euclidean Distance (most common):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        d(x, y) = √( Σᵢ(xᵢ - yᵢ)² )
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Manhattan Distance (city-block):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        d(x, y) = Σᵢ|xᵢ - yᵢ|
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Minkowski Distance (generalized):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        d(x, y) = ( Σᵢ|xᵢ - yᵢ|ᵖ )^(1/p)
                                    </p>
                                    <p className="text-[#8B7355] text-sm mt-2 text-center">p=1 → Manhattan, p=2 → Euclidean</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Choosing K */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Choosing the Right K
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚖️ The Bias-Variance Tradeoff</h3>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Small K (like K=1)</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Low bias, high variance</li>
                                        <li>• Very sensitive to noise</li>
                                        <li>• Complex, wiggly decision boundary</li>
                                        <li>• Risk of <strong>overfitting</strong></li>
                                    </ul>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Large K</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• High bias, low variance</li>
                                        <li>• Smoother decision boundary</li>
                                        <li>• Less sensitive to individual points</li>
                                        <li>• Risk of <strong>underfitting</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Rule of Thumb</p>
                                <ul className="text-[#5D4E3C] space-y-1">
                                    <li>• Start with K = √n (where n = number of training samples)</li>
                                    <li>• Use an <strong>odd K</strong> for binary classification (avoids ties)</li>
                                    <li>• Use <strong>cross-validation</strong> to find optimal K</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Feature Scaling */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Feature Scaling (Critical!)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚠️ Why Scaling Matters</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                KNN uses distances. If features have different scales, large-scale features will
                                <strong> dominate</strong> the distance calculation!
                            </p>

                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A] mb-6">
                                <p className="text-[#C4897A] font-bold mb-2">❌ Problem Example</p>
                                <p className="text-[#5D4E3C]">
                                    Feature 1: Age (0-100)<br />
                                    Feature 2: Income ($0-$1,000,000)<br />
                                    Income will completely dominate the distance even if age is more important!
                                </p>
                            </div>

                            <div className="bg-[#2D2520] rounded-xl p-6 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Min-Max Normalization (0 to 1):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        x_scaled = (x - x_min) / (x_max - x_min)
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Standardization (Z-score):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        x_scaled = (x - μ) / σ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                KNN from Scratch
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np
from collections import Counter

def euclidean_distance(x1, x2):
    """Calculate Euclidean distance between two points"""
    return np.sqrt(np.sum((x1 - x2) ** 2))

class KNN:
    def __init__(self, k=3):
        """Initialize with number of neighbors K"""
        self.k = k
    
    def fit(self, X, y):
        """Store training data (lazy learning - no actual training!)"""
        self.X_train = X
        self.y_train = y
    
    def predict(self, X):
        """Predict class for each sample in X"""
        predictions = [self._predict_single(x) for x in X]
        return np.array(predictions)
    
    def _predict_single(self, x):
        """Predict class for a single sample"""
        # Step 1: Calculate distances to all training points
        distances = [euclidean_distance(x, x_train) 
                     for x_train in self.X_train]
        
        # Step 2: Get indices of K nearest neighbors
        k_indices = np.argsort(distances)[:self.k]
        
        # Step 3: Get labels of K nearest neighbors
        k_labels = [self.y_train[i] for i in k_indices]
        
        # Step 4: Return majority vote
        most_common = Counter(k_labels).most_common(1)
        return most_common[0][0]

# Example usage with Iris-like data
np.random.seed(42)
# Generate 2 classes
class0 = np.random.randn(50, 2) + [2, 2]   # Class 0
class1 = np.random.randn(50, 2) + [-2, -2] # Class 1

X = np.vstack([class0, class1])
y = np.array([0]*50 + [1]*50)

# Train KNN
knn = KNN(k=5)
knn.fit(X, y)

# Predict new point
new_point = np.array([[0, 0]])
prediction = knn.predict(new_point)
print(f"Prediction for [0, 0]: Class {prediction[0]}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Pros and Cons */}
                    <section className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl p-6 bg-[#F3F8F2] border border-[#8FA68A]">
                            <h3 className="text-lg font-bold mb-4 text-[#8FA68A]">✅ Pros</h3>
                            <ul className="text-[#5D4E3C] space-y-2">
                                <li>• Simple to understand and implement</li>
                                <li>• No training phase (lazy learning)</li>
                                <li>• Naturally handles multi-class</li>
                                <li>• Non-parametric (no assumptions)</li>
                                <li>• Works for regression too</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl p-6 bg-[#FBF3F1] border border-[#C4897A]">
                            <h3 className="text-lg font-bold mb-4 text-[#C4897A]">❌ Cons</h3>
                            <ul className="text-[#5D4E3C] space-y-2">
                                <li>• Slow prediction (calculates all distances)</li>
                                <li>• Memory-intensive (stores all data)</li>
                                <li>• Sensitive to irrelevant features</li>
                                <li>• Requires feature scaling</li>
                                <li>• Curse of dimensionality</li>
                            </ul>
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
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Core Idea:</strong> Classify by majority vote of K nearest neighbors</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📐</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Distance:</strong> Euclidean is most common: d = √Σ(xᵢ-yᵢ)²</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚖️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">K Choice:</strong> Small K → overfit, Large K → underfit. Try K=√n</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚠️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Critical:</strong> ALWAYS scale your features before using KNN!</p>
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
                        href="/learn/classification/decision-trees"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Decision Trees
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
