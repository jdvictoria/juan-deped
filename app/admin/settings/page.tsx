"use client";

import NavigationBar from "@/components/Admin/NavigationBar";

export default function Component() {
    return (
        <div className="flex min-h-screen w-full bg-muted/40 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavigationBar activeTab={"settings"}/>
        </div>
    );
}
