import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

import {
    File,
    Phone
} from "lucide-react";

export default function DashboardProfile() {
    return (
        <Card className="flex flex-col w-full min-h-[75vh] space-y-4 p-4 justify-between">
            <CardHeader className="flex flex-col sm:flex-row justify-center items-center gap-4 border-b pb-4">
                <Avatar className="h-32 w-32 sm:h-48 sm:w-48">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-3xl sm:text-5xl font-bold">JD</AvatarFallback>
                </Avatar>

                <Card className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6">
                    <div className="text-center sm:text-left grid gap-1">
                        <div className="text-xl sm:text-2xl font-bold">Joshua Arlo D. Victoria</div>
                        <div className="text-sm sm:text-base text-muted-foreground">jdvictoria.tech@gmail.com</div>
                    </div>
                </Card>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-4 py-4">
                <Card className="rounded-lg shadow w-full sm:w-[calc(33%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Student ID</div>
                    </CardHeader>
                    <CardContent>
                        <div>12345678</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(33%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Grade Level</div>
                    </CardHeader>
                    <CardContent>
                        <div>12th Grade</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(33%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Section</div>
                    </CardHeader>
                    <CardContent>
                        <div>Section A</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(33%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Birthday</div>
                    </CardHeader>
                    <CardContent>
                        <div>August 12, 2001</div>
                    </CardContent>
                </Card>
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4">
                <Button variant="secondary" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4"/>
                    Contact Support
                </Button>
                <Button variant="default" className="w-full sm:w-auto">
                    <File className="mr-2 h-4 w-4" />
                    Request Form
                </Button>
            </CardFooter>
        </Card>
    );
}
