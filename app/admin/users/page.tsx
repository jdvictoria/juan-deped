"use client";

import DataTable from "@/components/Admin/DataTable";
import NavigationBar from "@/components/Admin/NavigationBar";
import AccountForm from "@/components/Admin/AccountForm";

export default function AdminUsers() {
    return (
        <div className="flex min-h-screen w-full bg-muted/40 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavigationBar activeTab={"users"}/>

            <header className="px-2 sm:px-5 pt-4">
                <h1 className="text-4xl font-bold text-left">Users</h1>
            </header>

            <main className={`flex flex-1 flex-col sm:flex-row gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 justify-center items-center`}>
                <AccountForm/>
                <DataTable section={"Current Users"}/>
            </main>
        </div>
    );
}
