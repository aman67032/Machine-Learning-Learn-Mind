"use client";

import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <div className="flex min-h-screen pt-16">
                <Sidebar />
                <main className="flex-1 lg:ml-72">{children}</main>
            </div>
        </>
    );
}
