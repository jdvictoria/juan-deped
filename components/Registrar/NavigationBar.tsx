import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import {
    Home,
    Users,
    Settings,
    LogOut
} from "lucide-react";

interface NavigationProps {
    activeTab: string;
}

export default function Navigation({
    activeTab,
}: NavigationProps) {
    const router = useRouter();

    return (
        <aside className="sticky top-0 z-10 flex w-full flex-col border-b bg-background sm:fixed sm:inset-y-0 sm:left-0 sm:w-14 sm:flex-col sm:border-r sm:border-b-0">
            <nav className="flex flex-row items-center justify-center sm:justify-between gap-4 px-2 py-2 sm:flex-col sm:py-5 h-full">
                <div className="flex flex-row sm:flex-col gap-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={activeTab === "home" ? "default" : "ghost"}
                                    onClick={() => router.push("/registrar/home")}
                                >
                                    <Home className="h-5 w-5"/>
                                    <span className="sr-only">Home</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Home</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={activeTab === "users" ? "default" : "ghost"}
                                    onClick={() => router.push("/registrar/users")}
                                >
                                    <Users className="h-5 w-5"/>
                                    <span className="sr-only">Users</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Users</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={activeTab === "settings" ? "default" : "ghost"}
                                    onClick={() => router.push("/registrar/settings")}
                                >
                                    <Settings className="h-5 w-5"/>
                                    <span className="sr-only">Settings</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <div className="mt-0 sm:mt-auto">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" onClick={() => router.push("/")}>
                                    <LogOut className="h-5 w-5"/>
                                    <span className="sr-only">Logout</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Logout</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </nav>
        </aside>
    )
}
