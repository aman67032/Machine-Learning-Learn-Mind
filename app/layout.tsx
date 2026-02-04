import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "ML For Beginners | Learn Machine Learning",
  description: "A comprehensive 12-week curriculum to learn classic machine learning with Python and Scikit-learn",
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
