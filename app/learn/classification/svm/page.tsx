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

export default function SVMPage() {
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
                        ⚔️ Support Vector Machines (SVM)
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Find the <strong>optimal hyperplane</strong> that separates classes with
                        the <strong>maximum margin</strong>. One of the most powerful classifiers!
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
                            <span>The <strong>maximum margin</strong> principle</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>What <strong>support vectors</strong> are and why they matter</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>kernel trick</strong> for non-linear data</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Soft margins and the <strong>C parameter</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Core Concept */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Core Idea: Maximum Margin
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Goal: Find the Best Separating Line</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Many lines can separate two classes. SVM finds the one with the
                                <strong> largest margin</strong> (distance) to the nearest points of both classes.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`     Class +1                    Class -1
        ⊕                            ⊖
     ⊕     ⊕   |  margin  |      ⊖     ⊖
        ⊕     ←|=========|→  ⊖        ⊖
     ⊕     ⊕   |          |      ⊖     ⊖
        ⊕      ↑                    ⊖
              Hyperplane
              
Support vectors: Points closest to the hyperplane (on the margin)`}
                                </pre>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Why Maximum Margin?</p>
                                <p className="text-[#5D4E3C]">
                                    A larger margin means the classifier is more <strong>confident</strong> and
                                    <strong> generalizes better</strong> to new data. It&apos;s less likely to misclassify
                                    points near the boundary.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⭐ Support Vectors</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Support vectors</strong> are the training points that lie on the margin boundary.
                                They &quot;support&quot; (define) the hyperplane. Only these points matter for the decision!
                            </p>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔑 Key Insight</p>
                                <p className="text-[#5D4E3C]">
                                    If you remove any non-support-vector point, the hyperplane stays the same.
                                    This makes SVM <strong>memory efficient</strong>—only stores support vectors!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: The Math */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The Mathematics
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Linear SVM Formulation</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Hyperplane equation:</p>
                                    <p className="text-[#E6A04F] font-mono text-xl text-center">
                                        w · x + b = 0
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        w = weight vector (normal to hyperplane), b = bias
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Decision function:</p>
                                    <p className="text-[#E6A04F] font-mono text-xl text-center">
                                        f(x) = sign(w · x + b)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        Positive → Class +1, Negative → Class -1
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Margin Width</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">The margin = distance between decision boundaries:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    Margin = 2 / ||w||
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    To maximize margin, we minimize ||w|| (the norm of weights)
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🎯 Optimization Problem</p>
                                <p className="text-[#5D4E3C] font-mono text-sm">
                                    <strong>Minimize:</strong> (1/2)||w||²<br />
                                    <strong>Subject to:</strong> yᵢ(w · xᵢ + b) ≥ 1 for all training points
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔧 Soft Margin SVM (C Parameter)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Real data often isn&apos;t perfectly separable. <strong>Soft margin</strong> allows
                                some misclassifications using <strong>slack variables</strong> ξ.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Soft Margin Objective:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    Minimize: (1/2)||w||² + C × Σξᵢ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    C = regularization parameter (trade-off between margin and errors)
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Large C</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        • Penalize errors heavily<br />
                                        • Smaller margin, fewer violations<br />
                                        • Risk of overfitting
                                    </p>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Small C</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        • Allow more errors<br />
                                        • Larger margin, more violations ok<br />
                                        • Better generalization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Kernel Trick */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            The Kernel Trick 🪄
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">❓ What If Data Isn&apos;t Linearly Separable?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                The <strong>kernel trick</strong> maps data to a higher dimension where it
                                <em>becomes</em> linearly separable—without actually computing the transformation!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <p className="text-[#E8DDD0] mb-2">Example: XOR data (not linearly separable in 2D)</p>
                                <pre className="text-[#E6A04F]">
                                    {`2D (can't separate):        3D (can separate!):
    ⊕     ⊖                      ⊕         
      ?                     ⊖       ⊖    <-- plane
    ⊖     ⊕     →              ⊕        `}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Common Kernels</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Linear Kernel:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">K(x, y) = x · y</p>
                                </div>
                                <div className="pt-3 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Polynomial Kernel:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">K(x, y) = (x · y + c)ᵈ</p>
                                </div>
                                <div className="pt-3 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">RBF (Gaussian) Kernel:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">K(x, y) = exp(-γ||x - y||²)</p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-1">Most popular! γ controls radius of influence</p>
                                </div>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🪄 The Magic</p>
                                <p className="text-[#5D4E3C]">
                                    Kernels compute dot products in high-dimensional space <strong>without
                                        ever transforming the data</strong>. This is computationally efficient!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            SVM Algorithm Steps
                        </h2>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Training SVM
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">Choose kernel type (linear, RBF, polynomial)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">Set hyperparameters (C, γ for RBF)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E6A04F]">Solve the quadratic optimization problem:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355]">
                                    <p className="text-[#E8DDD0]">Find Lagrange multipliers αᵢ using SMO or other solvers</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">4.</span>
                                    <span className="text-[#E6A04F]">Identify support vectors (points where αᵢ &gt; 0)</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">5.</span>
                                    <span className="text-[#E6A04F]">Compute w and b from support vectors</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">6.</span>
                                    <span className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Predict:</strong> f(x) = sign(Σαᵢyᵢ K(xᵢ, x) + b)</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Python with Scikit-learn
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                SVM Examples
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.svm import SVC
from sklearn.datasets import make_classification, make_moons
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import numpy as np

# Example 1: Linear SVM
X, y = make_classification(n_samples=200, n_features=2, 
                           n_informative=2, n_redundant=0,
                           random_state=42)

# SVM requires scaled data!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42)

# Linear SVM
svm_linear = SVC(kernel='linear', C=1.0)
svm_linear.fit(X_train, y_train)
print(f"Linear SVM Accuracy: {svm_linear.score(X_test, y_test):.2%}")
print(f"Number of Support Vectors: {sum(svm_linear.n_support_)}")

# Example 2: RBF Kernel for non-linear data
X_moons, y_moons = make_moons(n_samples=200, noise=0.1, random_state=42)
X_moons_scaled = scaler.fit_transform(X_moons)

X_train, X_test, y_train, y_test = train_test_split(
    X_moons_scaled, y_moons, test_size=0.2, random_state=42)

# RBF kernel handles non-linear boundaries
svm_rbf = SVC(kernel='rbf', C=1.0, gamma='scale')
svm_rbf.fit(X_train, y_train)
print(f"\\nRBF SVM Accuracy: {svm_rbf.score(X_test, y_test):.2%}")

# Example 3: Tuning C and gamma
for C in [0.1, 1, 10]:
    for gamma in [0.1, 1, 'scale']:
        svm = SVC(kernel='rbf', C=C, gamma=gamma)
        svm.fit(X_train, y_train)
        print(f"C={C}, gamma={gamma}: {svm.score(X_test, y_test):.2%}")`}
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
                                <span className="text-2xl">⚔️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Goal:</strong> Find hyperplane with maximum margin between classes</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⭐</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Support Vectors:</strong> Only the points on the margin define the decision boundary</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🪄</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Kernel Trick:</strong> Handle non-linear data via RBF, polynomial kernels</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎛️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Hyperparameters:</strong> C (regularization), γ (RBF spread)</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/random-forest" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Random Forests
                    </Link>
                    <Link
                        href="/learn/classification/naive-bayes"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Naive Bayes
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
