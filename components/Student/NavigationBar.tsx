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
    Mail,
    Settings,
    LogOut,
    Bell
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
                                    onClick={() => router.push("/student/home")}
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
                                    variant={activeTab === "messages" ? "default" : "ghost"}
                                    onClick={() => router.push("/student/messages")}
                                >
                                    <Mail className="h-5 w-5"/>
                                    <span className="sr-only">Mail</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Mail</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={activeTab === "notifications" ? "default" : "ghost"}
                                    onClick={() => router.push("/student/notifications")}
                                >
                                    <Bell className="h-5 w-5"/>
                                    <span className="sr-only">Notifications</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Notifications</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={activeTab === "settings" ? "default" : "ghost"}
                                    onClick={() => router.push("/student/settings")}
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
