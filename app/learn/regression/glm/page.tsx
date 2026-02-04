import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function GLMPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F3F8F2] text-[#8FA68A]">
                        <TrendingUp className="w-4 h-4" />Regression
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">📊 Generalized Linear Models</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        A unified framework for regression and classification using the <strong>exponential family</strong>!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>The exponential family of distributions</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Link functions and how they connect linear predictors to outputs</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Why linear and logistic regression are special cases of GLMs</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Exponential Family</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">A distribution belongs to the exponential family if it can be written as:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono text-center">p(y; η) = b(y) × exp(ηᵀT(y) - a(η))</p>
                                <div className="text-[#8B7355] text-sm mt-3 space-y-1">
                                    <p>η = natural parameter</p>
                                    <p>T(y) = sufficient statistic (often T(y) = y)</p>
                                    <p>a(η) = log partition function (normalizer)</p>
                                    <p>b(y) = base measure</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Examples in Exponential Family</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Gaussian (for Linear Regression)</p>
                                <p className="text-[#5D4E3C] text-sm">η = μ/σ², a(η) = η²σ²/2, T(y) = y</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">Bernoulli (for Logistic Regression)</p>
                                <p className="text-[#5D4E3C] text-sm">η = log(φ/(1-φ)), a(η) = log(1 + eⁿ), T(y) = y</p>
                            </div>
                            <div className="bg-[#F8F0F2] rounded-xl p-4">
                                <p className="text-[#8E4C5C] font-bold">Multinomial (for Softmax)</p>
                                <p className="text-[#5D4E3C] text-sm">Used for multi-class classification</p>
                            </div>
                            <div className="bg-[#F0F6F6] rounded-xl p-4">
                                <p className="text-[#5A8A88] font-bold">Poisson (for Count Data)</p>
                                <p className="text-[#5D4E3C] text-sm">η = log(λ), models count/rate data</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. GLM Construction</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">To construct a GLM, we assume:</p>
                            <div className="space-y-3">
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E8DDD0] text-sm">1. y | x; θ follows an exponential family distribution</p>
                                </div>
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E8DDD0] text-sm">2. We want to predict E[T(y)|x] = h(x)</p>
                                </div>
                                <div className="bg-[#2D2520] rounded-xl p-4">
                                    <p className="text-[#E8DDD0] text-sm">3. η = θᵀx (linear in features)</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold">The Link Function</p>
                                <p className="text-[#5D4E3C] text-sm">g(E[y]) = θᵀx, where g is the link function</p>
                                <p className="text-[#8B7355] text-xs mt-1">Logit for classification, identity for regression</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python with statsmodels</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np
import statsmodels.api as sm

# Example 1: Poisson Regression (count data)
np.random.seed(42)
X = np.random.randn(100, 2)
X = sm.add_constant(X)
true_beta = [0.5, 1.0, -0.5]
lambda_ = np.exp(X @ true_beta)
y = np.random.poisson(lambda_)

# Fit Poisson GLM
poisson_model = sm.GLM(y, X, family=sm.families.Poisson())
result = poisson_model.fit()
print("Poisson GLM Coefficients:")
print(result.params)

# Example 2: Logistic Regression as GLM
y_binary = (np.random.rand(100) < 0.5).astype(int)
logit_model = sm.GLM(y_binary, X, family=sm.families.Binomial())
result2 = logit_model.fit()
print("\\nLogistic GLM Coefficients:")
print(result2.params)

# Example 3: Linear Regression as GLM
y_cont = X @ true_beta + np.random.randn(100) * 0.5
gaussian_model = sm.GLM(y_cont, X, family=sm.families.Gaussian())
result3 = gaussian_model.fit()
print("\\nGaussian GLM Coefficients:")
print(result3.params)`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Exponential Family:</strong> Unified form for Gaussian, Bernoulli, Poisson, etc.</p>
                            <p><strong className="text-[#E6A04F]">GLM:</strong> η = θᵀx links linear predictor to distribution parameter</p>
                            <p><strong className="text-[#E6A04F]">Special Cases:</strong> Linear regression (Gaussian), Logistic (Bernoulli), Softmax (Multinomial)</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/regression/logistic" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Logistic Regression</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
