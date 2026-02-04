import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Brain,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
    Zap,
} from "lucide-react";

export default function NeuralNetworksPage() {
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
                        Deep Learning Foundations
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        🧠 Neural Networks & Backpropagation
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The foundation of deep learning! Learn how <strong>artificial neurons</strong> work
                        and how networks learn through <strong>backpropagation</strong>.
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
                            <span>The <strong>perceptron</strong> and how artificial neurons work</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Activation functions</strong>: Sigmoid, ReLU, Tanh</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Forward propagation</strong>: How networks make predictions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Backpropagation</strong>: How networks learn using the chain rule</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Biological Inspiration */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            From Biology to Math
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🧬 The Biological Neuron</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Real neurons receive signals through <strong>dendrites</strong>, process them in
                                the <strong>cell body</strong>, and send output through the <strong>axon</strong>.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`    Inputs (x₁, x₂, x₃)          Artificial Neuron
          ↓  ↓  ↓
    ┌─────────────────┐
    │  Σ (weighted    │ ──→ Activation ──→ Output
    │     sum + bias) │      Function
    └─────────────────┘
    
    z = w₁x₁ + w₂x₂ + w₃x₃ + b
    a = σ(z)  ← output (activation)`}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Perceptron (Single Neuron)</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Weighted Sum:</p>
                                    <p className="text-[#E6A04F] font-mono text-xl text-center">
                                        z = Σ(wᵢxᵢ) + b = w·x + b
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Activation (output):</p>
                                    <p className="text-[#E6A04F] font-mono text-xl text-center">
                                        a = σ(z)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        σ = activation function (sigmoid, ReLU, etc.)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Activation Functions */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Activation Functions
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">❓ Why Activations?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Without activation functions, a neural network is just <strong>linear regression</strong>!
                                Activations add <strong>non-linearity</strong> so networks can learn complex patterns.
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Common Activation Functions</h3>

                            <div className="space-y-4">
                                {/* Sigmoid */}
                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-[#E8DDD0] font-mono font-bold">Sigmoid (σ)</p>
                                        <span className="text-[#8B7355] text-sm">Range: (0, 1)</span>
                                    </div>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center mb-2">
                                        σ(z) = 1 / (1 + e⁻ᶻ)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm">
                                        ✓ Good for output layer (probabilities)<br />
                                        ✗ Vanishing gradients, slow training
                                    </p>
                                </div>

                                {/* ReLU */}
                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-[#E8DDD0] font-mono font-bold">ReLU (Rectified Linear Unit)</p>
                                        <span className="text-[#8FA68A] text-sm">⭐ Most Popular</span>
                                    </div>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center mb-2">
                                        ReLU(z) = max(0, z)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm">
                                        ✓ Fast training, no vanishing gradient<br />
                                        ✗ &quot;Dying ReLU&quot; problem (neurons stuck at 0)
                                    </p>
                                </div>

                                {/* Tanh */}
                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-[#E8DDD0] font-mono font-bold">Tanh (Hyperbolic Tangent)</p>
                                        <span className="text-[#8B7355] text-sm">Range: (-1, 1)</span>
                                    </div>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center mb-2">
                                        tanh(z) = (eᶻ - e⁻ᶻ) / (eᶻ + e⁻ᶻ)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm">
                                        ✓ Zero-centered output<br />
                                        ✗ Still has vanishing gradient issue
                                    </p>
                                </div>

                                {/* Softmax */}
                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-[#E8DDD0] font-mono font-bold">Softmax (for multi-class output)</p>
                                        <span className="text-[#8B7355] text-sm">Outputs sum to 1</span>
                                    </div>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center mb-2">
                                        softmax(zᵢ) = eᶻⁱ / Σeᶻʲ
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm">
                                        Converts scores to probabilities for classification
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Network Architecture */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Network Architecture
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Multi-Layer Network</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`  Input      Hidden      Hidden     Output
  Layer      Layer 1     Layer 2     Layer
  
   (x₁)──┐   ┌──(h₁)──┐   ┌──(h₁)──┐   ┌──(ŷ₁)
         ├───┤        ├───┤        ├───┤
   (x₂)──┤   ├──(h₂)──┤   ├──(h₂)──┤   └──(ŷ₂)
         ├───┤        ├───┤        │
   (x₃)──┘   └──(h₃)──┘   └──(h₃)──┘

  n features → Hidden neurons → ... → K outputs

  Each arrow = weight (learnable parameter)`}
                                </pre>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-1">Input Layer</p>
                                    <p className="text-[#5D4E3C] text-sm">One neuron per feature</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-1">Hidden Layers</p>
                                    <p className="text-[#5D4E3C] text-sm">Learn representations</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-1">Output Layer</p>
                                    <p className="text-[#5D4E3C] text-sm">Final prediction</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Forward Propagation */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Forward Propagation
                        </h2>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Forward Pass: Making Predictions
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <p className="text-[#E8DDD0]">For each layer l = 1, 2, ..., L:</p>
                                <div className="bg-[#8FA68A]/20 rounded-lg p-4 space-y-2">
                                    <p className="text-[#E6A04F]">z⁽ˡ⁾ = W⁽ˡ⁾ · a⁽ˡ⁻¹⁾ + b⁽ˡ⁾</p>
                                    <p className="text-[#8B7355]">(weighted sum)</p>
                                </div>
                                <div className="bg-[#D4823A]/20 rounded-lg p-4 space-y-2">
                                    <p className="text-[#E6A04F]">a⁽ˡ⁾ = σ(z⁽ˡ⁾)</p>
                                    <p className="text-[#8B7355]">(apply activation)</p>
                                </div>
                                <p className="text-[#E8DDD0] mt-4">Where a⁽⁰⁾ = x (input), and ŷ = a⁽ᴸ⁾ (final output)</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Backpropagation */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Backpropagation ⚡
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Key Insight: Chain Rule</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Backpropagation</strong> = efficient way to compute gradients using the
                                <strong> chain rule</strong>. We propagate the error <em>backwards</em> through the network.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Chain Rule Example:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    ∂L/∂w = ∂L/∂a × ∂a/∂z × ∂z/∂w
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    (loss → activation → weighted sum → weight)
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-[#E6A04F]" />
                                Backpropagation Algorithm
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">Forward pass: compute all z⁽ˡ⁾, a⁽ˡ⁾</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">Compute output error: δ⁽ᴸ⁾ = ∂L/∂z⁽ᴸ⁾</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E8DDD0]">For l = L-1 down to 1:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E6A04F]">δ⁽ˡ⁾ = (W⁽ˡ⁺¹⁾)ᵀ δ⁽ˡ⁺¹⁾ ⊙ σ&apos;(z⁽ˡ⁾)</p>
                                    <p className="text-[#8B7355]">(propagate error backwards)</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">4.</span>
                                    <span className="text-[#E6A04F]">Compute gradients: ∂L/∂W⁽ˡ⁾ = δ⁽ˡ⁾ (a⁽ˡ⁻¹⁾)ᵀ</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">5.</span>
                                    <span className="text-[#E6A04F]">Update weights: W = W - α × ∂L/∂W</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Key Formulas</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 space-y-4">
                                <div>
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Output layer error (MSE loss):</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">δ⁽ᴸ⁾ = (a⁽ᴸ⁾ - y) ⊙ σ&apos;(z⁽ᴸ⁾)</p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Hidden layer error:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">δ⁽ˡ⁾ = (W⁽ˡ⁺¹⁾)ᵀ δ⁽ˡ⁺¹⁾ ⊙ σ&apos;(z⁽ˡ⁾)</p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Weight gradients:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">∂L/∂W⁽ˡ⁾ = δ⁽ˡ⁾ · (a⁽ˡ⁻¹⁾)ᵀ</p>
                                </div>
                                <div className="pt-4 border-t border-[#8B7355]">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">Bias gradients:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg">∂L/∂b⁽ˡ⁾ = δ⁽ˡ⁾</p>
                                </div>
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
                                Neural Network from Scratch
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-np.clip(z, -500, 500)))

def sigmoid_derivative(z):
    s = sigmoid(z)
    return s * (1 - s)

def relu(z):
    return np.maximum(0, z)

def relu_derivative(z):
    return (z > 0).astype(float)

class NeuralNetwork:
    def __init__(self, layer_sizes):
        """
        layer_sizes: list like [input_dim, hidden1, hidden2, output_dim]
        """
        self.L = len(layer_sizes) - 1  # number of layers
        self.sizes = layer_sizes
        
        # Initialize weights and biases
        self.W = {}
        self.b = {}
        for l in range(1, self.L + 1):
            # He initialization for ReLU
            self.W[l] = np.random.randn(layer_sizes[l], layer_sizes[l-1]) * \\
                        np.sqrt(2 / layer_sizes[l-1])
            self.b[l] = np.zeros((layer_sizes[l], 1))
    
    def forward(self, X):
        """Forward propagation"""
        self.cache = {'a': {0: X}, 'z': {}}
        
        a = X
        for l in range(1, self.L + 1):
            z = self.W[l] @ a + self.b[l]
            self.cache['z'][l] = z
            
            # ReLU for hidden, sigmoid for output
            if l == self.L:
                a = sigmoid(z)
            else:
                a = relu(z)
            self.cache['a'][l] = a
        
        return a
    
    def backward(self, y):
        """Backpropagation"""
        m = y.shape[1]
        grads = {'dW': {}, 'db': {}}
        
        # Output layer error
        a_L = self.cache['a'][self.L]
        z_L = self.cache['z'][self.L]
        delta = (a_L - y) * sigmoid_derivative(z_L)
        
        grads['dW'][self.L] = (1/m) * delta @ self.cache['a'][self.L-1].T
        grads['db'][self.L] = (1/m) * np.sum(delta, axis=1, keepdims=True)
        
        # Hidden layers (backpropagate!)
        for l in range(self.L - 1, 0, -1):
            delta = (self.W[l+1].T @ delta) * relu_derivative(self.cache['z'][l])
            grads['dW'][l] = (1/m) * delta @ self.cache['a'][l-1].T
            grads['db'][l] = (1/m) * np.sum(delta, axis=1, keepdims=True)
        
        return grads
    
    def train(self, X, y, epochs=1000, lr=0.1):
        """Train with gradient descent"""
        for epoch in range(epochs):
            # Forward pass
            y_pred = self.forward(X)
            
            # Compute loss (binary cross-entropy)
            loss = -np.mean(y * np.log(y_pred + 1e-8) + \\
                           (1-y) * np.log(1-y_pred + 1e-8))
            
            # Backward pass
            grads = self.backward(y)
            
            # Update weights
            for l in range(1, self.L + 1):
                self.W[l] -= lr * grads['dW'][l]
                self.b[l] -= lr * grads['db'][l]
            
            if epoch % 100 == 0:
                print(f"Epoch {epoch}, Loss: {loss:.4f}")
    
    def predict(self, X):
        return (self.forward(X) > 0.5).astype(int)

# Example: XOR problem (not linearly separable!)
X = np.array([[0, 0, 1, 1], [0, 1, 0, 1]])
y = np.array([[0, 1, 1, 0]])  # XOR output

nn = NeuralNetwork([2, 4, 1])  # 2 inputs, 4 hidden, 1 output
nn.train(X, y, epochs=5000, lr=0.5)

print("\\nPredictions:", nn.predict(X))
print("Actual:     ", y)`}
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
                                <span className="text-2xl">🧠</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Neuron:</strong> z = Wx + b, then a = activation(z)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚡</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">ReLU:</strong> Most popular activation: max(0, z)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">➡️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Forward:</strong> Propagate input layer by layer to get prediction</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⬅️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Backprop:</strong> Use chain rule to compute gradients efficiently</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/optimization/gradient-descent" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Gradient Descent
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
