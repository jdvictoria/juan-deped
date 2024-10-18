"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Registrar() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/registrar/home");
    }, [router]);

    return null;
}
