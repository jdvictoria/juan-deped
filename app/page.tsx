"use client"

import Image from "next/image"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

import Hero from "@/assets/images/Hero.png";

export default function Component() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[100dvh]">
            <div className="relative">
                <Image
                    src={Hero}
                    alt="Hero"
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-background to-transparent`} />
            </div>

            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="login" className="w-full sm:w-[25vw]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Login />
                    </TabsContent>
                    <TabsContent value="register">
                        <Register />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
