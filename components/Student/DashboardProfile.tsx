import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { StudentProfile } from "@/types/profile";

import { getInitials, formatISODate } from "@/lib/helper";

interface ProfileProps {
    profile: StudentProfile | null;
}

export default function DashboardProfile({
    profile
}: ProfileProps) {
    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="flex flex-col w-full min-h-[75vh] space-y-4 p-4 justify-center">
            <CardHeader className="flex flex-col sm:flex-row justify-center items-center gap-4 border-b pb-4">
                <Avatar className="h-32 w-32 sm:h-48 sm:w-48">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-3xl sm:text-5xl font-bold">
                        {getInitials(profile.firstName, profile.lastName)}
                    </AvatarFallback>
                </Avatar>

                <Card className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6">
                    <div className="text-center sm:text-left grid gap-1">
                        <div className="text-xl sm:text-2xl font-bold">{profile.firstName} {profile.middleName} {profile.lastName} {profile.extensionName}</div>
                        <div className="text-sm sm:text-base text-muted-foreground">{profile.email} | {profile.mobileNumber}</div>
                    </div>
                </Card>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-4 py-4">
                <Card className="rounded-lg shadow w-full sm:w-[calc(25%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Gender</div>
                    </CardHeader>
                    <CardContent>
                        <div>{profile.gender}</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(25%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Birthday</div>
                    </CardHeader>
                    <CardContent>
                        <div>{formatISODate(profile.birthDate)}</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(25%-1rem)]">
                    <CardHeader className="pb-2">
                        <div className="text-sm font-medium">Birth Place</div>
                    </CardHeader>
                    <CardContent>
                        <div>{profile.birthPlace}</div>
                    </CardContent>
                </Card>

                <Card className="rounded-lg shadow w-full sm:w-[calc(25%-1rem)]">
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
