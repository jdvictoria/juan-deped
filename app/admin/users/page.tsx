"use client";

import { useState, useEffect } from "react";

import DataTable from "@/components/Admin/DataTable";
import NavigationBar from "@/components/Admin/NavigationBar";

import { useWindowSize } from "@/lib/window";

export default function AdminUsers() {
    const size = useWindowSize();
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        if (size.width !== undefined) {
            setIsDesktop(size.width >= 673);
        }
    }, [size.width]);

    return (
        <div className="flex min-h-screen w-full bg-muted/40 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavigationBar activeTab={"users"}/>

            <header className="px-2 sm:px-5 pt-4">
                <h1 className="text-4xl font-bold text-left">Users</h1>
            </header>

            <main className={`flex flex-1 ${isDesktop ? "flex-row" : "flex-col"} gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 justify-center items-center`}>
                <DataTable section={"Approval Requests"}/>
                <DataTable section={"Current Users"}/>
            </main>
        </div>
    );
}
