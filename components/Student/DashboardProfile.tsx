import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardProfile() {
    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
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
        </Card>
    );
}
