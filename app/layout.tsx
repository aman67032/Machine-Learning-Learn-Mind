import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL('https://ml-learn-mind.vercel.app'),
  title: {
    default: "ML Learn Mind | Interactive Machine Learning Curriculum (Beta)",
    template: "%s | ML Learn Mind"
  },
  description: "Join the ML Learn Mind (Beta) curriculum. Free, open-source machine learning course with hands-on Python projects, Scikit-learn tutorials, and sketchnotes. Perfect for beginners.",
  keywords: ["Machine Learning", "Python", "Scikit-learn", "Data Science", "AI", "Free Course", "Interactive Learning", "Beginner Friendly"],
  authors: [{ name: "ML Learn Mind Team", url: "https://github.com/aman67032" }],
  creator: "ML Learn Mind Team",
  publisher: "ML Learn Mind",
  icons: {
    icon: "/LOGO.png",
    shortcut: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    title: "ML Learn Mind | Interactive Machine Learning Curriculum",
    description: "Master Machine Learning with our free, open-source 12-week curriculum. Hands-on Python projects, visual sketchnotes, and interactive lessons.",
    url: 'https://ml-learn-mind.vercel.app',
    siteName: 'ML Learn Mind',
    images: [
      {
        url: '/LOGO.png', // Ideally should be 1200x630
        width: 800,
        height: 600,
        alt: 'ML Learn Mind Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ML Learn Mind | Interactive ML Curriculum",
    description: "Master Machine Learning with our free, open-source curriculum. Hands-on Python projects & visual guides.",
    images: ['/LOGO.png'],
    creator: '@aman67032',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google95d8a2d9942fa7ca', // Adding verification code here too as backup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css"
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#FDF8F3', color: '#3D3128' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
