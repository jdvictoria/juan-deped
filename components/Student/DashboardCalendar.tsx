import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardCalendar() {
    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
            <CardHeader className="border-b pb-4">
                <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Math Test</div>
                        <div className="text-sm text-muted-foreground">Apr 15</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Prepare for the upcoming math test on
                        April 15th.
                    </div>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">English Essay Due</div>
                        <div className="text-sm text-muted-foreground">Apr 20</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        The English essay is due on April 20th. Make sure to finish it on time.
                    </div>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Science Project</div>
                        <div className="text-sm text-muted-foreground">May 1</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        The science project is due on May 1st. Start working on it as soon as possible.
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
