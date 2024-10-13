import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardProfile() {
    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
            <CardHeader className="flex items-center gap-4 border-b pb-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg"/>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <div className="text-xl font-bold">John Doe</div>
                    <div className="text-sm text-muted-foreground">Student</div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4 py-4">
                <div className="grid gap-1">
                    <div className="text-sm font-medium">Student ID</div>
                    <div>12345678</div>
                </div>
                <div className="grid gap-1">
                    <div className="text-sm font-medium">Grade Level</div>
                    <div>12th Grade</div>
                </div>
                <div className="grid gap-1">
                    <div className="text-sm font-medium">GPA</div>
                    <div>3.8</div>
                </div>
                <div className="grid gap-1">
                    <div className="text-sm font-medium">Attendance</div>
                    <div>98%</div>
                </div>
            </CardContent>
        </Card>
    )
}
