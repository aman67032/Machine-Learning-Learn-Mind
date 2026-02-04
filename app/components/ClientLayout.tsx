"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <Navigation />
            <div className="flex min-h-screen pt-16">
                <Sidebar isCollapsed={isCollapsed} toggle={() => setIsCollapsed(!isCollapsed)} />
                <main className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
                    {children}
                </main>
            </div>
        </>
    );
}
