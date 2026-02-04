import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function BackpropPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Brain className="w-4 h-4" />Optimization
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">⛓️ Backpropagation</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The algorithm that makes neural networks learn! Efficiently compute gradients using the <strong>chain rule</strong>.
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Forward pass and computational graphs</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Chain rule for computing gradients</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Backward pass implementation</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Problem</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">To train a neural network with gradient descent, we need:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono text-center text-lg">∂L/∂w for every weight w</p>
                                <p className="text-[#8B7355] text-sm mt-2 text-center">But networks have millions of weights connected in complex ways!</p>
                            </div>
                            <p className="text-[#5D4E3C] mt-4">Backpropagation solves this efficiently using the <strong>chain rule</strong>.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. The Chain Rule</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                <p className="text-[#E8DDD0] text-sm">If y = f(u) and u = g(x), then:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mt-2">dy/dx = (dy/du) × (du/dx)</p>
                            </div>
                            <p className="text-[#5D4E3C]">For a chain of functions: multiply the local gradients!</p>
                            <div className="mt-4 bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Example: z = (wx + b)²</p>
                                <p className="text-[#5D4E3C] text-sm mt-2">
                                    u = wx + b, z = u²<br />
                                    ∂z/∂w = ∂z/∂u × ∂u/∂w = 2u × x = 2(wx+b)x
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Forward & Backward Pass</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">➡️ Forward Pass</p>
                                <p className="text-[#5D4E3C] text-sm">Compute output: x → h₁ → h₂ → ... → ŷ → L</p>
                                <p className="text-[#8B7355] text-xs mt-1">Store intermediate values for backward pass</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">⬅️ Backward Pass</p>
                                <p className="text-[#5D4E3C] text-sm">Compute gradients: ∂L/∂ŷ → ∂L/∂h₂ → ∂L/∂h₁ → ∂L/∂w</p>
                                <p className="text-[#8B7355] text-xs mt-1">Use chain rule, propagate gradient backward</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Layer-by-Layer Gradients</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">For a layer: <code className="bg-[#F3F8F2] px-2 py-1 rounded">h = σ(Wx + b)</code></p>
                            <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm space-y-2">
                                <p className="text-[#E8DDD0]"># Given: ∂L/∂h (gradient from next layer)</p>
                                <p className="text-[#E6A04F]">∂L/∂z = ∂L/∂h ⊙ σ&apos;(z)  <span className="text-[#8B7355]"># element-wise</span></p>
                                <p className="text-[#E6A04F]">∂L/∂W = ∂L/∂z × xᵀ</p>
                                <p className="text-[#E6A04F]">∂L/∂b = sum(∂L/∂z)</p>
                                <p className="text-[#E6A04F]">∂L/∂x = Wᵀ × ∂L/∂z  <span className="text-[#8B7355]"># pass to prev layer</span></p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">5. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_derivative(z):
    s = sigmoid(z)
    return s * (1 - s)

class Layer:
    def __init__(self, n_in, n_out):
        self.W = np.random.randn(n_out, n_in) * 0.1
        self.b = np.zeros((n_out, 1))
        
    def forward(self, x):
        self.x = x  # Store for backward
        self.z = self.W @ x + self.b
        self.h = sigmoid(self.z)
        return self.h
    
    def backward(self, dL_dh, lr=0.01):
        # dL/dz = dL/dh * sigmoid'(z)
        dL_dz = dL_dh * sigmoid_derivative(self.z)
        
        # Gradients for this layer
        dL_dW = dL_dz @ self.x.T
        dL_db = np.sum(dL_dz, axis=1, keepdims=True)
        
        # Gradient to pass to previous layer
        dL_dx = self.W.T @ dL_dz
        
        # Update weights
        self.W -= lr * dL_dW
        self.b -= lr * dL_db
        
        return dL_dx

# Example: 2-layer network
layer1 = Layer(2, 3)
layer2 = Layer(3, 1)

x = np.array([[1], [2]])  # Input
y = np.array([[1]])       # Target

# Forward
h1 = layer1.forward(x)
y_pred = layer2.forward(h1)

# Loss: MSE
loss = 0.5 * (y_pred - y) ** 2
dL_dy = y_pred - y  # Gradient of MSE

# Backward
dL_dh1 = layer2.backward(dL_dy)
layer1.backward(dL_dh1)

print(f"Loss: {loss[0,0]:.4f}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Chain Rule:</strong> Multiply local gradients to get total gradient</p>
                            <p><strong className="text-[#E6A04F]">Forward:</strong> Compute output, store intermediates</p>
                            <p><strong className="text-[#E6A04F]">Backward:</strong> Propagate gradients from loss to weights</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/optimization/gradient-descent" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Gradient Descent</Link>
                    <Link href="/learn/optimization/neural-networks" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Neural Networks<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
