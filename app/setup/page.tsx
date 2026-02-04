import Link from "next/link";
import {
    Terminal,
    Container,
    Settings,
    Code,
    Play,
    CheckCircle,
    ExternalLink,
} from "lucide-react";

export default function SetupPage() {
    const devcontainerJson = `{
  "name": "Python 3",
  "build": {
    "dockerfile": "Dockerfile",
    "args": { 
      "VARIANT": "3.10-bullseye",
      "NODE_VERSION": "none"
    }
  },
  "extensions": [
    "ms-python.python",
    "ms-python.vscode-pylance"
  ],
  "settings": { 
    "python.pythonPath": "/usr/local/bin/python",
    "python.languageServer": "Pylance",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true
  },
  "remoteUser": "vscode"
}`;

    const dockerfile = `# Python Dev Container
ARG VARIANT="3.10-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-\${VARIANT}

# Node.js (optional)
ARG NODE_VERSION="none"
RUN if [ "\${NODE_VERSION}" != "none" ]; then \\
  su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install \${NODE_VERSION}"; \\
fi`;

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 text-lg transition-colors"
                        style={{ color: '#8B7355' }}>
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold mb-4"
                        style={{ fontFamily: 'Merriweather, Georgia, serif', color: '#3D3128' }}>
                        🛠️ Development Setup
                    </h1>
                    <p className="text-xl" style={{ color: '#5D4E3C', lineHeight: 1.7 }}>
                        Set up your local environment to run the Jupyter notebooks and code examples
                    </p>
                </div>

                {/* Quick Start Options */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="rounded-2xl p-6 text-white"
                        style={{ background: 'linear-gradient(135deg, #5A8A88 0%, #4A7A78 100%)' }}>
                        <Container className="w-12 h-12 mb-4" />
                        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Merriweather, Georgia, serif' }}>
                            Dev Container (Recommended)
                        </h2>
                        <p className="opacity-90 mb-5 text-lg">
                            One-click setup with VS Code. All dependencies pre-configured.
                        </p>
                        <a
                            href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/ML-For-Beginners"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-lg transition-colors"
                            style={{ backgroundColor: 'white', color: '#5A8A88' }}
                        >
                            <Play className="w-5 h-5" />
                            Open in VS Code
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="rounded-2xl p-6 text-white"
                        style={{ background: 'linear-gradient(135deg, #8FA68A 0%, #7A9675 100%)' }}>
                        <Terminal className="w-12 h-12 mb-4" />
                        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Merriweather, Georgia, serif' }}>
                            Local Python Setup
                        </h2>
                        <p className="opacity-90 mb-5 text-lg">
                            Install Python 3.10+ and required packages manually.
                        </p>
                        <a
                            href="https://github.com/microsoft/ML-For-Beginners/blob/main/TROUBLESHOOTING.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-lg transition-colors"
                            style={{ backgroundColor: 'white', color: '#8FA68A' }}
                        >
                            <Settings className="w-5 h-5" />
                            View Setup Guide
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Dev Container Details */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Container className="w-8 h-8" style={{ color: '#8E4C5C' }} />
                        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Merriweather, Georgia, serif', color: '#3D3128' }}>
                            Dev Container Configuration
                        </h2>
                    </div>

                    <div className="rounded-2xl p-6 mb-6 border" style={{ backgroundColor: '#FFFBF7', borderColor: '#E8DDD0' }}>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#3D3128' }}>
                            <CheckCircle className="w-6 h-6" style={{ color: '#8FA68A' }} />
                            What&apos;s Included
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3 text-lg" style={{ color: '#5D4E3C' }}>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                Python 3.10 (Bullseye)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                VS Code Python Extension
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                Pylance Language Server
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                Pylint Linting
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                autopep8, black, yapf Formatters
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4823A' }}></span>
                                bandit, flake8, mypy Tools
                            </li>
                        </ul>
                    </div>

                    {/* devcontainer.json */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2" style={{ color: '#3D3128' }}>
                            <Code className="w-5 h-5" style={{ color: '#D4823A' }} />
                            devcontainer.json
                        </h3>
                        <div className="relative">
                            <pre className="p-5 rounded-xl overflow-x-auto text-base"
                                style={{ background: 'linear-gradient(145deg, #2D2520 0%, #1F1A16 100%)', color: '#E8DDD0' }}>
                                <code>{devcontainerJson}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Dockerfile */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2" style={{ color: '#3D3128' }}>
                            <Code className="w-5 h-5" style={{ color: '#D4823A' }} />
                            Dockerfile
                        </h3>
                        <div className="relative">
                            <pre className="p-5 rounded-xl overflow-x-auto text-base"
                                style={{ background: 'linear-gradient(145deg, #2D2520 0%, #1F1A16 100%)', color: '#E8DDD0' }}>
                                <code>{dockerfile}</code>
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Manual Setup Steps */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Merriweather, Georgia, serif', color: '#3D3128' }}>
                        Manual Setup Steps
                    </h2>

                    <div className="space-y-4">
                        <div className="rounded-2xl border p-5" style={{ backgroundColor: 'white', borderColor: '#E8DDD0' }}>
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white"
                                    style={{ backgroundColor: '#D4823A' }}>1</span>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3D3128' }}>Clone the Repository</h3>
                                    <pre className="px-4 py-3 rounded-lg text-base font-mono"
                                        style={{ backgroundColor: '#F5EDE4', color: '#5D4E3C' }}>
                                        git clone https://github.com/microsoft/ML-For-Beginners.git
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border p-5" style={{ backgroundColor: 'white', borderColor: '#E8DDD0' }}>
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white"
                                    style={{ backgroundColor: '#D4823A' }}>2</span>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3D3128' }}>Install Python 3.10+</h3>
                                    <p className="text-lg" style={{ color: '#5D4E3C' }}>
                                        Download from{" "}
                                        <a href="https://python.org" target="_blank" rel="noopener noreferrer"
                                            className="font-medium underline" style={{ color: '#5A8A88' }}>
                                            python.org
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border p-5" style={{ backgroundColor: 'white', borderColor: '#E8DDD0' }}>
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white"
                                    style={{ backgroundColor: '#D4823A' }}>3</span>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3D3128' }}>Install Dependencies</h3>
                                    <pre className="px-4 py-3 rounded-lg text-base font-mono"
                                        style={{ backgroundColor: '#F5EDE4', color: '#5D4E3C' }}>
                                        pip install scikit-learn pandas numpy matplotlib jupyter
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border p-5" style={{ backgroundColor: 'white', borderColor: '#E8DDD0' }}>
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white"
                                    style={{ backgroundColor: '#D4823A' }}>4</span>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#3D3128' }}>Launch Jupyter</h3>
                                    <pre className="px-4 py-3 rounded-lg text-base font-mono"
                                        style={{ backgroundColor: '#F5EDE4', color: '#5D4E3C' }}>
                                        jupyter notebook
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all"
                        style={{ background: 'linear-gradient(135deg, #D4823A 0%, #E6A04F 100%)' }}
                    >
                        View All Notebooks →
                    </Link>
                    <a
                        href="https://github.com/microsoft/ML-For-Beginners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg transition-all"
                        style={{ backgroundColor: '#3D3128', color: 'white' }}
                    >
                        GitHub Repository
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
