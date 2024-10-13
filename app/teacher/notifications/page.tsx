"use client";

import NavigationBar from "@/components/Teacher/NavigationBar";

export default function TeacherNotifications() {
    return (
        <div className="flex min-h-screen w-full bg-muted/40 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavigationBar activeTab={"notifications"}/>

            <header className="px-2 sm:px-5 pt-4">
                <h1 className="text-4xl font-bold text-left">Notifications</h1>
            </header>

            <main className={`flex flex-1 flex-col sm:flex-row gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 justify-center items-center`}>
            </main>
        </div>
    );
}
