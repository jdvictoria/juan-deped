"use client"

import Image from "next/image"
import { useState } from "react"

import HeroImage from "@/assets/images/Hero.png";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import AuthLogin from "@/components/AuthLogin";
import AuthRegister from "@/components/AuthRegister";

export default function Component() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[100dvh]">
            <div className="relative">
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <AuthLogin />
                    </TabsContent>
                    <TabsContent value="register">
                        <AuthRegister />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
