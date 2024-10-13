"use client";

import { useState, useEffect } from "react";

import NavigationBar from "@/components/Admin/NavigationBar";

import { useWindowSize } from "@/lib/window";
import DataTable from "@/components/Admin/DataTable";

export default function Component() {
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

            <main className={`flex flex-1 ${isDesktop ? "flex-row" : "flex-col"} gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 justify-center items-center`}>
                <DataTable section={"Approval Requests"}/>

                <DataTable section={"Current Users"}/>
            </main>
        </div>
    );
}
