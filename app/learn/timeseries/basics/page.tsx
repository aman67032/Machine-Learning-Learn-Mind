import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function TimeSeriesBasicsPage() {
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
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">⏰ Time Series Basics</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Data ordered by time! Learn to analyze <strong>trends, seasonality, and patterns</strong> for forecasting.
                    </p>
                </div>

                {/* Sketchnote */}
                <div className="mb-10 rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-md">
                    <img src="/sketchnotes/ml-timeseries.png" alt="Time Series Sketchnote" className="w-full h-auto" />
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Components: Trend, Seasonality, Noise</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Stationarity and why it matters</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Moving averages and exponential smoothing</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Time Series Components</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-4 mb-4">
                                <p className="text-[#E6A04F] font-mono text-center">Y(t) = Trend + Seasonality + Noise</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold">📈 Trend</p>
                                    <p className="text-[#5D4E3C] text-sm">Long-term direction (up/down)</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">🔄 Seasonality</p>
                                    <p className="text-[#5D4E3C] text-sm">Repeating patterns (daily, yearly)</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4">
                                    <p className="text-[#8E4C5C] font-bold">〰️ Noise</p>
                                    <p className="text-[#5D4E3C] text-sm">Random fluctuations</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Stationarity</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">A stationary series has <strong>constant mean and variance</strong> over time. Most models require stationarity!</p>
                            <div className="bg-[#2D2520] rounded-xl p-4 text-sm">
                                <p className="text-[#E6A04F] font-mono">To make stationary: differencing (Y[t] - Y[t-1])</p>
                                <p className="text-[#8B7355] mt-2">Test: Augmented Dickey-Fuller (ADF)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Simple Forecasting Methods</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Moving Average</p>
                                <p className="text-[#5D4E3C] text-sm">Average of last k observations. Smooths noise.</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">Exponential Smoothing</p>
                                <p className="text-[#5D4E3C] text-sm">Weighted average with more weight on recent data.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Example</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.stattools import adfuller

# Create sample time series
dates = pd.date_range('2020-01-01', periods=365, freq='D')
trend = np.linspace(0, 50, 365)
season = 10 * np.sin(2 * np.pi * np.arange(365) / 30)
noise = np.random.randn(365) * 3
y = trend + season + noise

ts = pd.Series(y, index=dates)

# Decompose into components
decomp = seasonal_decompose(ts, period=30)
decomp.plot()
plt.show()

# Test for stationarity
result = adfuller(ts)
print(f"ADF Statistic: {result[0]:.3f}")
print(f"p-value: {result[1]:.3f}")
print("Stationary" if result[1] < 0.05 else "Non-stationary")

# Moving average
ts.rolling(window=7).mean().plot(label='7-day MA')
plt.legend()
plt.show()`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Components:</strong> Trend + Seasonality + Noise</p>
                            <p><strong className="text-[#E6A04F]">Stationarity:</strong> Required for most models; use differencing</p>
                            <p><strong className="text-[#E6A04F]">Simple Methods:</strong> Moving average, exponential smoothing</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/nlp/sentiment" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Sentiment Analysis</Link>
                    <Link href="/learn/timeseries/arima" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Next: ARIMA<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
