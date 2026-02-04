"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

interface FormulaProps {
    children: string;
    block?: boolean;
}

export default function Formula({ children, block = false }: FormulaProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            try {
                katex.render(children, containerRef.current, {
                    displayMode: block,
                    throwOnError: false,
                    errorColor: "#cc0000",
                });
            } catch (error) {
                console.error("KaTeX error:", error);
                if (containerRef.current) {
                    containerRef.current.textContent = children;
                }
            }
        }
    }, [children, block]);

    if (block) {
        return (
            <div className="my-6 overflow-x-auto">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
                    <span ref={containerRef} className="text-lg" />
                </div>
            </div>
        );
    }

    return <span ref={containerRef} className="mx-1" />;
}
