import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Brain,
    Target,
    BookOpen,
    CheckCircle,
    Code,
    TrendingDown,
} from "lucide-react";

export default function LossFunctionsPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Brain className="w-4 h-4" />
                        Optimization
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📉 Loss Functions
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Loss functions measure <strong>how wrong</strong> your model is.
                        The goal of training: <strong>minimize the loss!</strong>
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
                            <span>What loss functions are and why we need them</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Regression losses:</strong> MSE, MAE, Huber</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Classification losses:</strong> Cross-Entropy, Hinge</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How to choose the right loss for your problem</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: What is a Loss Function */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            What is a Loss Function?
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Loss Function (Cost Function):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    L(θ) = f(y, ŷ) where ŷ = model(x; θ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    y = true value, ŷ = predicted value, θ = model parameters
                                </p>
                            </div>

                            <p className="text-[#5D4E3C] text-lg leading-relaxed">
                                A loss function quantifies the <strong>error</strong> between predictions and
                                true values. Training means finding θ that minimizes L(θ).
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Loss vs Cost vs Objective</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-1">Loss</p>
                                    <p className="text-[#5D4E3C] text-sm">Error for <strong>one sample</strong></p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-1">Cost</p>
                                    <p className="text-[#5D4E3C] text-sm">Average loss over <strong>all samples</strong></p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-1">Objective</p>
                                    <p className="text-[#5D4E3C] text-sm">Cost + regularization terms</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Regression Losses */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Regression Loss Functions
                        </h2>

                        <div className="space-y-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">MSE (Mean Squared Error)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        MSE = (1/n) × Σ(yᵢ - ŷᵢ)²
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-[#F3F8F2] rounded-xl p-3 border border-[#8FA68A]">
                                        <p className="text-[#8FA68A] font-bold text-sm">✅ Pros</p>
                                        <p className="text-[#5D4E3C] text-xs">Differentiable, penalizes large errors heavily</p>
                                    </div>
                                    <div className="bg-[#FBF3F1] rounded-xl p-3 border border-[#C4897A]">
                                        <p className="text-[#C4897A] font-bold text-sm">❌ Cons</p>
                                        <p className="text-[#5D4E3C] text-xs">Sensitive to outliers (squared errors)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#D4823A]">MAE (Mean Absolute Error)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        MAE = (1/n) × Σ|yᵢ - ŷᵢ|
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-[#F3F8F2] rounded-xl p-3 border border-[#8FA68A]">
                                        <p className="text-[#8FA68A] font-bold text-sm">✅ Pros</p>
                                        <p className="text-[#5D4E3C] text-xs">Robust to outliers, interpretable (same units)</p>
                                    </div>
                                    <div className="bg-[#FBF3F1] rounded-xl p-3 border border-[#C4897A]">
                                        <p className="text-[#C4897A] font-bold text-sm">❌ Cons</p>
                                        <p className="text-[#5D4E3C] text-xs">Not differentiable at 0, doesn&apos;t penalize large errors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8E4C5C]">Huber Loss (Smooth L1)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Best of both worlds:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        L(y, ŷ) = ½(y-ŷ)² if |y-ŷ| ≤ δ
                                    </p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        L(y, ŷ) = δ|y-ŷ| - ½δ² otherwise
                                    </p>
                                </div>

                                <p className="text-[#5D4E3C]">
                                    MSE for small errors (smooth), MAE for large errors (robust to outliers).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Classification Losses */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Classification Loss Functions
                        </h2>

                        <div className="space-y-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">Binary Cross-Entropy (Log Loss)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">For binary classification (y ∈ &#123;0, 1&#125;):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        BCE = -[y×log(p) + (1-y)×log(1-p)]
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        p = predicted probability of class 1
                                    </p>
                                </div>

                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">💡 Why Log?</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        If y=1 and p=0.01 (very wrong): -log(0.01) = 4.6 (high loss)<br />
                                        If y=1 and p=0.99 (correct): -log(0.99) = 0.01 (low loss)
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#D4823A]">Categorical Cross-Entropy</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">For multi-class classification (K classes):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        CCE = -Σₖ yₖ × log(pₖ)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        y = one-hot encoded true label, p = softmax probabilities
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8E4C5C]">Hinge Loss (SVM)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">For margin-based classifiers (y ∈ &#123;-1, +1&#125;):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        L = max(0, 1 - y × ŷ)
                                    </p>
                                </div>

                                <p className="text-[#5D4E3C]">
                                    Zero loss if correctly classified with margin ≥ 1. Used by SVMs to maximize margin.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Choosing the Right Loss */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Choosing the Right Loss
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <th className="text-left py-2 text-[#8B7355]">Task</th>
                                            <th className="text-left py-2 text-[#8B7355]">Common Losses</th>
                                            <th className="text-left py-2 text-[#8B7355]">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#5D4E3C]">
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Regression</td>
                                            <td className="py-2">MSE, MAE</td>
                                            <td className="py-2">MSE for normal errors, MAE for outliers</td>
                                        </tr>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Binary Classification</td>
                                            <td className="py-2">BCE, Hinge</td>
                                            <td className="py-2">BCE with probabilities, Hinge for SVM</td>
                                        </tr>
                                        <tr className="border-b border-[#E8DDD0]">
                                            <td className="py-2">Multi-class</td>
                                            <td className="py-2">Categorical CE</td>
                                            <td className="py-2">Use with softmax activation</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">Imbalanced Data</td>
                                            <td className="py-2">Weighted CE, Focal Loss</td>
                                            <td className="py-2">Higher weight for minority class</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                Loss Functions from Scratch
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np

# REGRESSION LOSSES
def mse_loss(y_true, y_pred):
    """Mean Squared Error"""
    return np.mean((y_true - y_pred) ** 2)

def mae_loss(y_true, y_pred):
    """Mean Absolute Error"""
    return np.mean(np.abs(y_true - y_pred))

def huber_loss(y_true, y_pred, delta=1.0):
    """Huber Loss - robust to outliers"""
    error = y_true - y_pred
    is_small = np.abs(error) <= delta
    squared = 0.5 * error ** 2
    linear = delta * np.abs(error) - 0.5 * delta ** 2
    return np.mean(np.where(is_small, squared, linear))

# CLASSIFICATION LOSSES
def binary_cross_entropy(y_true, y_pred):
    """Binary Cross-Entropy (Log Loss)"""
    epsilon = 1e-15  # Prevent log(0)
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

def categorical_cross_entropy(y_true, y_pred):
    """Categorical Cross-Entropy (one-hot y_true)"""
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.sum(y_true * np.log(y_pred)) / len(y_true)

def hinge_loss(y_true, y_pred):
    """Hinge Loss (y_true in {-1, +1})"""
    return np.mean(np.maximum(0, 1 - y_true * y_pred))

# Examples
y_reg = np.array([3, 5, 2.5, 7])
y_pred_reg = np.array([2.5, 5, 4, 8])

print("=== Regression ===")
print(f"MSE: {mse_loss(y_reg, y_pred_reg):.4f}")
print(f"MAE: {mae_loss(y_reg, y_pred_reg):.4f}")
print(f"Huber: {huber_loss(y_reg, y_pred_reg):.4f}")

y_class = np.array([1, 0, 1, 1])
y_pred_class = np.array([0.9, 0.1, 0.8, 0.2])  # probabilities

print("\\n=== Classification ===")
print(f"BCE: {binary_cross_entropy(y_class, y_pred_class):.4f}")`}
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
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">MSE:</strong> Common for regression, penalizes large errors heavily</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">MAE:</strong> Robust to outliers, treats all errors equally</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Cross-Entropy:</strong> Standard for classification, works with probabilities</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚔️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Hinge:</strong> Used by SVMs to maximize classification margin</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Learning Path
                    </Link>
                    <Link
                        href="/learn/optimization/gradient-descent"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Gradient Descent
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
