import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function DeepLearningPage() {
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
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🧠 Introduction to Deep Learning</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        <strong>Stacking layers</strong> of neurons to learn complex representations!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Deep vs shallow networks</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Modern activation functions (ReLU, GELU, Leaky ReLU)</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Why depth matters for representation learning</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. From Shallow to Deep</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                <p className="text-[#E8DDD0] text-sm">Multi-layer network:</p>
                                <p className="text-[#E6A04F] font-mono mt-2">a⁽¹⁾ = ReLU(W⁽¹⁾x + b⁽¹⁾)</p>
                                <p className="text-[#E6A04F] font-mono">a⁽²⁾ = ReLU(W⁽²⁾a⁽¹⁾ + b⁽²⁾)</p>
                                <p className="text-[#E6A04F] font-mono">...</p>
                                <p className="text-[#E6A04F] font-mono">h(x) = W⁽ʳ⁾a⁽ʳ⁻¹⁾ + b⁽ʳ⁾</p>
                            </div>
                            <p className="text-[#5D4E3C] text-sm">Each layer learns increasingly abstract representations. Deep networks can represent exponentially more complex functions than shallow ones.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Activation Functions</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">ReLU (Most Common)</p>
                                <p className="text-[#E6A04F] font-mono text-sm">σ(z) = max(0, z)</p>
                                <p className="text-[#5D4E3C] text-xs">Simple, fast, avoids vanishing gradient for positive inputs</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">Leaky ReLU</p>
                                <p className="text-[#E6A04F] font-mono text-sm">σ(z) = max(γz, z), γ ∈ (0,1)</p>
                                <p className="text-[#5D4E3C] text-xs">Allows small gradient for negative inputs (avoids &quot;dead neurons&quot;)</p>
                            </div>
                            <div className="bg-[#F8F0F2] rounded-xl p-4">
                                <p className="text-[#8E4C5C] font-bold">GELU (GPT, BERT)</p>
                                <p className="text-[#E6A04F] font-mono text-sm">σ(z) = z · Φ(z) ≈ z · sigmoid(1.702z)</p>
                                <p className="text-[#5D4E3C] text-xs">Smooth approximation to ReLU, used in transformers</p>
                            </div>
                            <div className="bg-[#F0F6F6] rounded-xl p-4">
                                <p className="text-[#5A8A88] font-bold">Sigmoid & Tanh (Legacy)</p>
                                <p className="text-[#E6A04F] font-mono text-sm">sigmoid = 1/(1+e⁻ᶻ), tanh = (eᶻ-e⁻ᶻ)/(eᶻ+e⁻ᶻ)</p>
                                <p className="text-[#5D4E3C] text-xs">Bounded, prone to vanishing gradients — less common now</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Why Non-linearity?</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Without non-linear activations, deep networks collapse to linear models!</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">If σ(z) = z (identity):</p>
                                <p className="text-[#E6A04F] font-mono mt-2">W⁽²⁾(W⁽¹⁾x) = (W⁽²⁾W⁽¹⁾)x = W̃x</p>
                                <p className="text-[#8B7355] text-sm mt-2">Multiple linear layers = single linear layer!</p>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm">Non-linear activations enable networks to learn decision boundaries of arbitrary complexity.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Deep Learning Architectures</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🖼️ CNNs</p>
                                    <p className="text-[#5D4E3C] text-sm">Images, spatial data</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">📝 RNNs/LSTMs</p>
                                    <p className="text-[#5D4E3C] text-sm">Sequences, time series</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🤖 Transformers</p>
                                    <p className="text-[#5D4E3C] text-sm">NLP, vision (GPT, BERT, ViT)</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🎨 GANs/VAEs</p>
                                    <p className="text-[#5D4E3C] text-sm">Generative models</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">5. PyTorch Example</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import torch
import torch.nn as nn
import torch.nn.functional as F

class DeepNet(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim, num_layers=3):
        super().__init__()
        layers = []
        layers.append(nn.Linear(input_dim, hidden_dim))
        layers.append(nn.ReLU())
        
        for _ in range(num_layers - 2):
            layers.append(nn.Linear(hidden_dim, hidden_dim))
            layers.append(nn.ReLU())
        
        layers.append(nn.Linear(hidden_dim, output_dim))
        self.network = nn.Sequential(*layers)
    
    def forward(self, x):
        return self.network(x)

# Create model
model = DeepNet(input_dim=784, hidden_dim=256, output_dim=10)
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")

# Forward pass
x = torch.randn(32, 784)  # Batch of 32
logits = model(x)
probs = F.softmax(logits, dim=1)
print(f"Output shape: {probs.shape}")  # [32, 10]`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Depth:</strong> More layers = more abstract representations</p>
                            <p><strong className="text-[#E6A04F]">Activations:</strong> ReLU for most cases, GELU for transformers</p>
                            <p><strong className="text-[#E6A04F]">Non-linearity:</strong> Essential — linear layers collapse to one layer</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/optimization/neural-networks" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Neural Networks</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
