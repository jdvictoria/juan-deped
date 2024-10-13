import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import {
    File
} from "lucide-react";

interface FormCardProps {
    form: {
        title: string;
        image: string;
    };
}

export default function FormCard({
    form
}: FormCardProps) {
    return (
        <Card className="flex flex-wrap w-full sm:w-[calc(20%-1rem)] rounded-lg shadow-lg">
            <CardHeader>
                <Image src={form.image} alt={form.title} width={300} height={200} className="rounded-t-lg object-cover h-48"/>
                <CardTitle className="text-xl font-bold mt-2 text-center">{form.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-center">
                <p className="text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </CardContent>

            <CardFooter className="flex w-full gap-2">
                <Button variant="default" className="w-full">
                    <File className="mr-2 h-4 w-4" />
                    Create Document
                </Button>
            </CardFooter>
        </Card>
    )
}