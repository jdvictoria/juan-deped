import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardProfile() {
    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
            <CardHeader className="flex flex-row justify-center items-center gap-4 border-b pb-4">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-5xl font-bold">JD</AvatarFallback>
                </Avatar>
                <Card className="flex items-center gap-6 p-6">
                    <div className="grid gap-1">
                        <div className="text-2xl font-bold">Joshua Arlo D. Victoria</div>
                        <div className="text-sm text-muted-foreground">jdvictoria.tech@gmail.com</div>
                    </div>
                </Card>
            </CardHeader>

            {/* CardContent with flex-wrap for responsive layout */}
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
        </Card>
    );
}
