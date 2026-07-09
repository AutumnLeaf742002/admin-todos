"use client";

import { Sidebar, Topbar } from "@/components"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex w-screen min-h-screen bg-gray-100">

            <Sidebar />

            <div className="flex flex-col w-full overflow-hidden">
                <Topbar />
                <div className="overflow-auto p-4">
                    {children}
                </div>
            </div>

        </div>
    );
}