import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function ARIMAPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Clock className="w-4 h-4" />Time Series
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">📈 ARIMA Models</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        AutoRegressive Integrated Moving Average - the <strong>classic forecasting model</strong>!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>AR (AutoRegressive), I (Integrated), MA (Moving Average) components</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Choosing p, d, q parameters</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>SARIMA for seasonal data</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. ARIMA Components</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                <p className="text-[#E6A04F] font-mono text-center text-lg">ARIMA(p, d, q)</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold">p: AR order</p>
                                    <p className="text-[#5D4E3C] text-sm">Uses past values</p>
                                    <p className="text-[#8B7355] text-xs mt-1">Y(t) = φ₁Y(t-1) + φ₂Y(t-2) + ...</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">d: Differencing</p>
                                    <p className="text-[#5D4E3C] text-sm">Makes series stationary</p>
                                    <p className="text-[#8B7355] text-xs mt-1">d=1: Y[t] - Y[t-1]</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4">
                                    <p className="text-[#8E4C5C] font-bold">q: MA order</p>
                                    <p className="text-[#5D4E3C] text-sm">Uses past errors</p>
                                    <p className="text-[#8B7355] text-xs mt-1">Y(t) = θ₁ε(t-1) + θ₂ε(t-2) + ...</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Choosing Parameters</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="space-y-3">
                                <p className="text-[#5D4E3C]"><strong>d:</strong> Number of differences to achieve stationarity (usually 0, 1, or 2)</p>
                                <p className="text-[#5D4E3C]"><strong>p:</strong> Look at PACF (Partial ACF) plot for cutoff</p>
                                <p className="text-[#5D4E3C]"><strong>q:</strong> Look at ACF plot for cutoff</p>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 mt-4">
                                    <p className="text-[#8FA68A] font-bold">Auto ARIMA</p>
                                    <p className="text-[#5D4E3C] text-sm">Use pmdarima.auto_arima() to find best (p,d,q) automatically!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from pmdarima import auto_arima
import matplotlib.pyplot as plt

# Sample data
dates = pd.date_range('2020-01-01', periods=100, freq='D')
y = np.cumsum(np.random.randn(100)) + 50  # Random walk
ts = pd.Series(y, index=dates)

# Manual ARIMA
model = ARIMA(ts, order=(1, 1, 1))  # (p, d, q)
fitted = model.fit()
print(fitted.summary())

# Forecast next 10 days
forecast = fitted.forecast(steps=10)
print(f"Forecast: {forecast.values}")

# Auto ARIMA (finds best parameters)
auto_model = auto_arima(ts, seasonal=False, trace=True)
print(f"Best order: {auto_model.order}")

# Plot
plt.figure(figsize=(10, 5))
plt.plot(ts, label='Actual')
plt.plot(forecast.index, forecast, 'r--', label='Forecast')
plt.legend()
plt.show()`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">ARIMA(p,d,q):</strong> AR(past values) + I(differencing) + MA(past errors)</p>
                            <p><strong className="text-[#E6A04F]">Selection:</strong> ACF/PACF plots or auto_arima</p>
                            <p><strong className="text-[#E6A04F]">Seasonal:</strong> Use SARIMA for seasonal patterns</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/timeseries/basics" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Time Series Basics</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
