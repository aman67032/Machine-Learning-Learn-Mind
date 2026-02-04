import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Brain,
    Target,
    BookOpen,
    CheckCircle,
    Code,
    Play,
    TrendingDown,
} from "lucide-react";

export default function GradientDescentPage() {
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
                        ⛰️ Gradient Descent
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The workhorse of machine learning optimization! Learn how models <strong>learn</strong>
                        by following the slope downhill.
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
                            <span>The intuition behind gradient descent</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Batch, Mini-batch, and Stochastic</strong> gradient descent</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Advanced optimizers: <strong>Momentum, Adam, RMSprop</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Learning rate schedules and tuning</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Intuition */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Intuition
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⛰️ Finding the Valley</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Imagine you&apos;re blindfolded on a mountain and want to reach the valley (minimum loss).
                                Strategy: feel the slope beneath your feet and step <strong>downhill</strong>!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">The Gradient Descent Update Rule:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center">
                                    θ = θ - α × ∇L(θ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-3 text-center">
                                    θ = parameters | α = learning rate | ∇L = gradient of loss
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="rounded-2xl p-5 bg-[#F3F8F2] border border-[#8FA68A]">
                                <h4 className="font-bold text-[#8FA68A] mb-2">∇ Gradient</h4>
                                <p className="text-[#5D4E3C] text-sm">
                                    Vector of partial derivatives. Points in direction of <strong>steepest increase</strong>.
                                    We go negative (opposite) to decrease loss.
                                </p>
                            </div>
                            <div className="rounded-2xl p-5 bg-[#FEF3E7] border border-[#E6A04F]">
                                <h4 className="font-bold text-[#D4823A] mb-2">α Learning Rate</h4>
                                <p className="text-[#5D4E3C] text-sm">
                                    Step size. Too large: overshoot/diverge. Too small: slow convergence.
                                    Typically 0.001 to 0.1.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: GD Variants */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            GD Variants
                        </h2>

                        <div className="space-y-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">Batch Gradient Descent</h3>

                                <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                    <p className="text-[#E6A04F] font-mono text-center">
                                        ∇L = (1/n) × Σᵢ ∇L(xᵢ, yᵢ)
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-[#F3F8F2] rounded-xl p-3">
                                        <p className="text-[#8FA68A] font-bold text-sm">✅ Pros</p>
                                        <p className="text-[#5D4E3C] text-xs">Stable updates, guaranteed convergence</p>
                                    </div>
                                    <div className="bg-[#FBF3F1] rounded-xl p-3">
                                        <p className="text-[#C4897A] font-bold text-sm">❌ Cons</p>
                                        <p className="text-[#5D4E3C] text-xs">Slow for large datasets (computes all samples)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#D4823A]">Stochastic Gradient Descent (SGD)</h3>

                                <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                    <p className="text-[#E6A04F] font-mono text-center">
                                        Update with ONE random sample per step
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-[#F3F8F2] rounded-xl p-3">
                                        <p className="text-[#8FA68A] font-bold text-sm">✅ Pros</p>
                                        <p className="text-[#5D4E3C] text-xs">Fast updates, can escape local minima (noise helps!)</p>
                                    </div>
                                    <div className="bg-[#FBF3F1] rounded-xl p-3">
                                        <p className="text-[#C4897A] font-bold text-sm">❌ Cons</p>
                                        <p className="text-[#5D4E3C] text-xs">Noisy, high variance, may not converge exactly</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8E4C5C]">Mini-Batch Gradient Descent ⭐</h3>

                                <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                    <p className="text-[#E6A04F] font-mono text-center">
                                        Update with B samples (typically 32, 64, 128, 256)
                                    </p>
                                </div>

                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">🏆 Best of Both Worlds</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Faster than batch (parallelizable), more stable than SGD.
                                        <strong> Industry standard!</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Advanced Optimizers */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Advanced Optimizers
                        </h2>

                        <div className="space-y-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">Momentum</h3>
                                <p className="text-[#5D4E3C] mb-4">
                                    Adds &quot;velocity&quot; to updates. Accelerates in consistent directions, dampens oscillations.
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6 space-y-2">
                                    <p className="text-[#E6A04F] font-mono">v = β × v + (1-β) × ∇L</p>
                                    <p className="text-[#E6A04F] font-mono">θ = θ - α × v</p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">β ≈ 0.9 (momentum coefficient)</p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#D4823A]">RMSprop</h3>
                                <p className="text-[#5D4E3C] mb-4">
                                    Adaptive learning rate. Divides by running average of gradient magnitudes.
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6 space-y-2">
                                    <p className="text-[#E6A04F] font-mono">s = β × s + (1-β) × (∇L)²</p>
                                    <p className="text-[#E6A04F] font-mono">θ = θ - α × ∇L / √(s + ε)</p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">Smaller updates for frequently-updated parameters</p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#8E4C5C]">Adam ⭐ (Adaptive Moment Estimation)</h3>
                                <p className="text-[#5D4E3C] mb-4">
                                    Combines Momentum + RMSprop. The <strong>default choice</strong> in deep learning!
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6 space-y-2">
                                    <p className="text-[#E6A04F] font-mono">m = β₁ × m + (1-β₁) × ∇L      <span className="text-[#8B7355]"># momentum</span></p>
                                    <p className="text-[#E6A04F] font-mono">v = β₂ × v + (1-β₂) × (∇L)²   <span className="text-[#8B7355]"># RMSprop</span></p>
                                    <p className="text-[#E6A04F] font-mono">m̂ = m / (1-β₁ᵗ)              <span className="text-[#8B7355]"># bias correction</span></p>
                                    <p className="text-[#E6A04F] font-mono">v̂ = v / (1-β₂ᵗ)</p>
                                    <p className="text-[#E6A04F] font-mono">θ = θ - α × m̂ / √(v̂ + ε)</p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">Defaults: β₁=0.9, β₂=0.999, ε=1e-8</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Learning Rate */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Learning Rate Schedules
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📉 Why Decay?</h3>
                            <p className="text-[#5D4E3C] mb-4">
                                Start with large steps to make fast progress, then smaller steps to fine-tune near the minimum.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold mb-2">Step Decay</p>
                                    <p className="text-[#5D4E3C] text-sm">Reduce by factor every N epochs</p>
                                    <code className="text-xs text-[#D4823A]">α = α₀ × 0.1^(epoch/30)</code>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-2">Exponential Decay</p>
                                    <p className="text-[#5D4E3C] text-sm">Smooth continuous decay</p>
                                    <code className="text-xs text-[#D4823A]">α = α₀ × e^(-kt)</code>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4">
                                    <p className="text-[#8E4C5C] font-bold mb-2">Cosine Annealing</p>
                                    <p className="text-[#5D4E3C] text-sm">Smooth cosine-shaped decay</p>
                                    <code className="text-xs text-[#D4823A]">Popular in deep learning</code>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold mb-2">Warm-up</p>
                                    <p className="text-[#5D4E3C] text-sm">Start small, ramp up, then decay</p>
                                    <code className="text-xs text-[#D4823A]">Common for transformers</code>
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
                                Gradient Descent Variants
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np

class GradientDescent:
    """Various gradient descent optimizers"""
    
    def __init__(self, learning_rate=0.01):
        self.lr = learning_rate
        
    def sgd(self, params, gradients):
        """Vanilla SGD"""
        return params - self.lr * gradients
    
    def momentum(self, params, gradients, velocity, beta=0.9):
        """SGD with Momentum"""
        velocity = beta * velocity + (1 - beta) * gradients
        params = params - self.lr * velocity
        return params, velocity
    
    def adam(self, params, gradients, m, v, t, beta1=0.9, beta2=0.999, eps=1e-8):
        """Adam Optimizer"""
        m = beta1 * m + (1 - beta1) * gradients
        v = beta2 * v + (1 - beta2) * (gradients ** 2)
        
        # Bias correction
        m_hat = m / (1 - beta1 ** t)
        v_hat = v / (1 - beta2 ** t)
        
        params = params - self.lr * m_hat / (np.sqrt(v_hat) + eps)
        return params, m, v

# Example: Linear Regression with Mini-Batch GD
def mini_batch_gd(X, y, batch_size=32, epochs=100, lr=0.01):
    n_samples, n_features = X.shape
    weights = np.zeros(n_features)
    bias = 0
    
    for epoch in range(epochs):
        # Shuffle data
        indices = np.random.permutation(n_samples)
        X_shuffled = X[indices]
        y_shuffled = y[indices]
        
        for i in range(0, n_samples, batch_size):
            X_batch = X_shuffled[i:i+batch_size]
            y_batch = y_shuffled[i:i+batch_size]
            
            # Forward pass
            y_pred = X_batch @ weights + bias
            
            # Compute gradients
            error = y_pred - y_batch
            dw = (1/len(y_batch)) * (X_batch.T @ error)
            db = (1/len(y_batch)) * np.sum(error)
            
            # Update
            weights -= lr * dw
            bias -= lr * db
        
        if epoch % 20 == 0:
            loss = np.mean((X @ weights + bias - y) ** 2)
            print(f"Epoch {epoch}, Loss: {loss:.4f}")
    
    return weights, bias

# Generate sample data
np.random.seed(42)
X = np.random.randn(1000, 3)
y = 2*X[:, 0] - 1*X[:, 1] + 0.5*X[:, 2] + np.random.randn(1000)*0.1

weights, bias = mini_batch_gd(X, y, batch_size=32, epochs=100, lr=0.1)
print(f"\\nLearned weights: {weights}")
print(f"True weights: [2, -1, 0.5]")`}
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
                                <span className="text-2xl">⛰️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Update Rule:</strong> θ = θ - α × ∇L(θ) (move opposite to gradient)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📦</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Mini-Batch:</strong> Industry standard (32-256 samples per update)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🚀</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Adam:</strong> Default optimizer - combines momentum + adaptive LR</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📉</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">LR Schedule:</strong> Start high, decay over time for fine-tuning</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/optimization/loss-functions" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Loss Functions
                    </Link>
                    <Link
                        href="/learn/optimization/neural-networks"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Neural Networks
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
