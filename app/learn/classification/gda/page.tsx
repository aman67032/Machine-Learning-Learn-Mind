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

export default function GDAPage() {
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
                        📊 Gaussian Discriminant Analysis (GDA)
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        A <strong>generative classifier</strong> that models each class as a Gaussian distribution.
                        The foundation of <strong>LDA</strong> and <strong>QDA</strong>!
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
                            <span><strong>Generative vs Discriminative</strong> models</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How GDA models class-conditional distributions P(x|y)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>LDA</strong> (Linear) vs <strong>QDA</strong> (Quadratic) Discriminant Analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Connection to <strong>Logistic Regression</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Generative vs Discriminative */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Generative vs Discriminative
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">Discriminative Models</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Model P(y|x) directly.</p>
                                    <p className="text-[#8B7355] text-xs">Examples: Logistic Regression, SVM, Neural Networks</p>
                                    <p className="text-[#5D4E3C] text-sm mt-2">✓ Often more accurate for classification</p>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Generative Models</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Model P(x|y) and P(y), then use Bayes.</p>
                                    <p className="text-[#8B7355] text-xs">Examples: Naive Bayes, GDA, HMM</p>
                                    <p className="text-[#5D4E3C] text-sm mt-2">✓ Can generate samples, better with less data</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 GDA Approach</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Using Bayes&apos; Rule:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    P(y|x) = P(x|y) × P(y) / P(x)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    GDA models P(x|y) as Gaussian for each class
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: The GDA Model */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The GDA Model
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Model Assumptions</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Class prior (binary case):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">P(y) = φʸ × (1-φ)¹⁻ʸ</p>
                                    <p className="text-[#8B7355] font-mono text-sm">φ = P(y=1) = probability of class 1</p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Class-conditional distribution:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">P(x|y=0) = N(x | μ₀, Σ)</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">P(x|y=1) = N(x | μ₁, Σ)</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Parameter Estimation (MLE)</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Class prior:</p>
                                    <p className="text-[#E6A04F] font-mono">φ = (# of y=1) / n</p>
                                </div>
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Class means:</p>
                                    <p className="text-[#E6A04F] font-mono">μ₀ = Σ(xᵢ where yᵢ=0) / (# of y=0)</p>
                                    <p className="text-[#E6A04F] font-mono">μ₁ = Σ(xᵢ where yᵢ=1) / (# of y=1)</p>
                                </div>
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Shared covariance (LDA):</p>
                                    <p className="text-[#E6A04F] font-mono">Σ = (1/n) × Σᵢ (xᵢ - μyᵢ)(xᵢ - μyᵢ)ᵀ</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: LDA vs QDA */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            LDA vs QDA
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">LDA (Linear)</h3>
                                <p className="text-[#5D4E3C] mb-4">All classes share the <strong>same covariance Σ</strong>.</p>

                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A] mb-4">
                                    <p className="text-[#5D4E3C] text-sm">
                                        → <strong>Linear</strong> decision boundary<br />
                                        → Fewer parameters (more stable)<br />
                                        → Better with small datasets
                                    </p>
                                </div>

                                <div className="bg-[#2D2520] rounded-xl p-3">
                                    <p className="text-[#E6A04F] font-mono text-sm text-center">
                                        P(x|y=k) = N(x | μₖ, Σ)
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8E4C5C]">QDA (Quadratic)</h3>
                                <p className="text-[#5D4E3C] mb-4">Each class has its <strong>own covariance Σₖ</strong>.</p>

                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C] mb-4">
                                    <p className="text-[#5D4E3C] text-sm">
                                        → <strong>Quadratic</strong> decision boundary<br />
                                        → More flexible (curved boundaries)<br />
                                        → Needs more data
                                    </p>
                                </div>

                                <div className="bg-[#2D2520] rounded-xl p-3">
                                    <p className="text-[#E6A04F] font-mono text-sm text-center">
                                        P(x|y=k) = N(x | μₖ, Σₖ)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Decision Boundary */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Decision Boundary
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 LDA Decision Rule</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Predict y=1 when P(y=1|x) &gt; P(y=0|x), which simplifies to:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">LDA discriminant function:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    δₖ(x) = xᵀΣ⁻¹μₖ - ½μₖᵀΣ⁻¹μₖ + log(πₖ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    Classify to class with highest δₖ(x)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🔗 Connection to Logistic Regression</p>
                                <p className="text-[#5D4E3C] text-sm">
                                    Under LDA assumptions, P(y=1|x) takes the logistic (sigmoid) form!
                                    GDA makes <strong>stronger assumptions</strong> than logistic regression,
                                    so when assumptions hold, GDA is more efficient. Otherwise, logistic regression
                                    is more robust.
                                </p>
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
                                LDA and QDA with Sklearn
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.discriminant_analysis import LinearDiscriminantAnalysis, QuadraticDiscriminantAnalysis
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data
X, y = make_classification(n_samples=300, n_features=2, n_redundant=0,
                          n_informative=2, n_clusters_per_class=1, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# LDA - Linear Discriminant Analysis
lda = LinearDiscriminantAnalysis()
lda.fit(X_train, y_train)
print(f"LDA Train Accuracy: {lda.score(X_train, y_train):.2%}")
print(f"LDA Test Accuracy: {lda.score(X_test, y_test):.2%}")

# QDA - Quadratic Discriminant Analysis
qda = QuadraticDiscriminantAnalysis()
qda.fit(X_train, y_train)
print(f"\\nQDA Train Accuracy: {qda.score(X_train, y_train):.2%}")
print(f"QDA Test Accuracy: {qda.score(X_test, y_test):.2%}")

# LDA can also do dimensionality reduction!
lda_dim = LinearDiscriminantAnalysis(n_components=1)
X_lda = lda_dim.fit_transform(X_train, y_train)
print(f"\\nLDA reduced shape: {X_lda.shape}")

# Visualize decision boundaries
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
for ax, model, title in zip(axes, [lda, qda], ['LDA (Linear)', 'QDA (Quadratic)']):
    # Create mesh grid
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.linspace(x_min, x_max, 100),
                         np.linspace(y_min, y_max, 100))
    
    Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)
    
    ax.contourf(xx, yy, Z, alpha=0.3, cmap='coolwarm')
    ax.scatter(X_train[y_train==0, 0], X_train[y_train==0, 1], c='blue', label='Class 0')
    ax.scatter(X_train[y_train==1, 0], X_train[y_train==1, 1], c='red', label='Class 1')
    ax.set_title(title)
    ax.legend()

plt.tight_layout()
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
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Generative:</strong> Model P(x|y) with Gaussian, use Bayes for P(y|x)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">LDA:</strong> Shared covariance → linear decision boundary</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">QDA:</strong> Separate covariances → quadratic decision boundary</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔗</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Bonus:</strong> LDA can also do dimensionality reduction!</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/naive-bayes" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Naive Bayes
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
