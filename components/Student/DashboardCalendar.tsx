import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

import { Card, CardContent } from "@/components/ui/card";

export default function DashboardCalendar() {
    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
            <CardContent className="grid gap-4 py-4">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={"dayGridMonth"}
                    headerToolbar={{
                        start: 'title',
                        end: 'prev,next today'
                    }}
                    contentHeight={"auto"}
                    handleWindowResize={true}
                    windowResizeDelay={100}
                    events={[]}
                    dayMaxEventRows={true}
                    weekends={false}
                    aspectRatio={1.35}
                />
            </CardContent>
        </Card>
    )
}
