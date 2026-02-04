import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    MessageSquare,
    Target,
    BookOpen,
    CheckCircle,
    Code,
    Play,
} from "lucide-react";

export default function TokenizationPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F0F6F6] text-[#5A8A88]">
                        <MessageSquare className="w-4 h-4" />
                        NLP Basics
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        ✂️ Tokenization
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The first step in NLP! Convert raw text into <strong>tokens</strong> that
                        models can understand.
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
                            <span>What tokenization is and why it matters</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Word, Sentence, and Subword</strong> tokenization</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Text preprocessing: <strong>lowercasing, stemming, lemmatization</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Handling stop words and special characters</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: What is Tokenization */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            What is Tokenization?
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Tokenization is splitting text into smaller units called <strong>tokens</strong>.
                                These tokens become the vocabulary that ML models work with.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Example:</p>
                                <p className="text-[#E6A04F] font-mono">Input: &quot;Hello, World! How are you?&quot;</p>
                                <p className="text-[#8FA68A] font-mono mt-2">Tokens: [&quot;Hello&quot;, &quot;,&quot;, &quot;World&quot;, &quot;!&quot;, &quot;How&quot;, &quot;are&quot;, &quot;you&quot;, &quot;?&quot;]</p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Why Tokenize?</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold mb-1">ML needs numbers</p>
                                    <p className="text-[#5D4E3C] text-sm">Text → Tokens → Token IDs → Vectors</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-1">Build vocabulary</p>
                                    <p className="text-[#5D4E3C] text-sm">Unique tokens = vocabulary of the model</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Types of Tokenization */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Types of Tokenization
                        </h2>

                        <div className="space-y-4">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#8FA68A]">Word Tokenization</h3>
                                <p className="text-[#5D4E3C] mb-3">Split by whitespace and punctuation.</p>
                                <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm">
                                    <p className="text-[#E6A04F]">&quot;I don&apos;t like rain.&quot; → [&quot;I&quot;, &quot;don&apos;t&quot;, &quot;like&quot;, &quot;rain&quot;, &quot;.&quot;]</p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#D4823A]">Sentence Tokenization</h3>
                                <p className="text-[#5D4E3C] mb-3">Split text into sentences.</p>
                                <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm">
                                    <p className="text-[#E6A04F]">&quot;Hello! How are you?&quot; → [&quot;Hello!&quot;, &quot;How are you?&quot;]</p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#8E4C5C]">Subword Tokenization ⭐</h3>
                                <p className="text-[#5D4E3C] mb-3">
                                    Split words into smaller pieces. Handles OOV (out-of-vocabulary) words!
                                    <strong> Used by BERT, GPT, etc.</strong>
                                </p>
                                <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm">
                                    <p className="text-[#E6A04F]">&quot;unhappiness&quot; → [&quot;un&quot;, &quot;##happi&quot;, &quot;##ness&quot;]</p>
                                    <p className="text-[#8B7355] text-xs mt-2">Common algorithms: BPE, WordPiece, SentencePiece</p>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#5A8A88]">Character Tokenization</h3>
                                <p className="text-[#5D4E3C] mb-3">Each character is a token. Small vocab but long sequences.</p>
                                <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm">
                                    <p className="text-[#E6A04F]">&quot;Hello&quot; → [&quot;H&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Text Preprocessing */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Text Preprocessing
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔧 Common Steps</h3>

                            <div className="space-y-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold mb-1">1. Lowercasing</p>
                                    <p className="text-[#5D4E3C] text-sm">&quot;Hello World&quot; → &quot;hello world&quot;</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-1">2. Remove Punctuation</p>
                                    <p className="text-[#5D4E3C] text-sm">&quot;hello, world!&quot; → &quot;hello world&quot;</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4">
                                    <p className="text-[#8E4C5C] font-bold mb-1">3. Remove Stop Words</p>
                                    <p className="text-[#5D4E3C] text-sm">&quot;the cat is on the mat&quot; → &quot;cat mat&quot;</p>
                                    <p className="text-[#8B7355] text-xs">Stop words: the, is, on, a, an, etc.</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold mb-1">4. Stemming</p>
                                    <p className="text-[#5D4E3C] text-sm">&quot;running&quot;, &quot;runs&quot;, &quot;ran&quot; → &quot;run&quot;</p>
                                    <p className="text-[#8B7355] text-xs">Chops off word endings (may not be real words)</p>
                                </div>
                                <div className="bg-[#FFFBF7] rounded-xl p-4 border border-[#E8DDD0]">
                                    <p className="text-[#3D3128] font-bold mb-1">5. Lemmatization</p>
                                    <p className="text-[#5D4E3C] text-sm">&quot;better&quot; → &quot;good&quot;, &quot;went&quot; → &quot;go&quot;</p>
                                    <p className="text-[#8B7355] text-xs">Uses dictionary to find root word (always valid words)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                Tokenization with NLTK and spaCy
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import re
import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, WordNetLemmatizer

# Download required resources (run once)
# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('wordnet')

text = "The quick brown foxes are running faster than the lazy dogs!"

# 1. Basic word tokenization
tokens = word_tokenize(text)
print(f"Tokens: {tokens}")

# 2. Sentence tokenization
sentences = sent_tokenize("Hello! How are you? I'm fine.")
print(f"Sentences: {sentences}")

# 3. Lowercasing
tokens_lower = [t.lower() for t in tokens]
print(f"Lowercase: {tokens_lower}")

# 4. Remove punctuation
tokens_clean = [t for t in tokens_lower if t.isalnum()]
print(f"No punctuation: {tokens_clean}")

# 5. Remove stop words
stop_words = set(stopwords.words('english'))
tokens_no_stop = [t for t in tokens_clean if t not in stop_words]
print(f"No stop words: {tokens_no_stop}")

# 6. Stemming
stemmer = PorterStemmer()
stems = [stemmer.stem(t) for t in tokens_no_stop]
print(f"Stemmed: {stems}")

# 7. Lemmatization
lemmatizer = WordNetLemmatizer()
lemmas = [lemmatizer.lemmatize(t) for t in tokens_no_stop]
print(f"Lemmatized: {lemmas}")

# Complete preprocessing pipeline
def preprocess(text):
    # Lowercase + tokenize
    tokens = word_tokenize(text.lower())
    # Remove non-alphanumeric
    tokens = [t for t in tokens if t.isalnum()]
    # Remove stop words
    tokens = [t for t in tokens if t not in stop_words]
    # Lemmatize
    tokens = [lemmatizer.lemmatize(t) for t in tokens]
    return tokens

clean = preprocess(text)
print(f"\\nFull pipeline: {clean}")

# Output:
# Tokens: ['The', 'quick', 'brown', 'foxes', ...]
# Lowercase: ['the', 'quick', 'brown', 'foxes', ...]
# No punctuation: ['the', 'quick', 'brown', 'foxes', ...]
# No stop words: ['quick', 'brown', 'foxes', 'running', 'faster', 'lazy', 'dogs']
# Stemmed: ['quick', 'brown', 'fox', 'run', 'faster', 'lazi', 'dog']
# Lemmatized: ['quick', 'brown', 'fox', 'running', 'faster', 'lazy', 'dog']`}
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
                                <span className="text-2xl">✂️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Tokenization:</strong> Split text into tokens (words, subwords, or characters)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔧</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Preprocessing:</strong> Lowercase, remove punctuation, stop words</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🌱</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Stemming:</strong> Chop endings (fast, may create non-words)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📚</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Lemmatization:</strong> Dictionary lookup (slower, always real words)</p>
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
                        href="/learn/nlp/tfidf"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: TF-IDF
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
