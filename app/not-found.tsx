"use client"

import Image from "next/image";

import { Button } from "@/components/ui/button";

import Warning from "@/assets/images/Warning.png";

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh] justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <Image
                    src={Warning}
                    width="800"
                    height="400"
                    alt="404 Error"
                    className="mx-auto rounded-lg object-cover object-center"
                    style={{ aspectRatio: "800/400", objectFit: "cover" }}
                />

                <div className="mt-8 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Oops, page not found!
                    </h1>
                    <p className="text-muted-foreground">
                        The page you&#39;re looking for doesn&#39;t exist.
                    </p>

                    <div className="flex space-x-4 justify-center">
                        <Button variant="default">Go Back</Button>

                        <Button variant="outline" onClick={() => window.location.reload()}>
                            Refresh
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
