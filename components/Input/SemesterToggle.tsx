import { useState } from "react";

import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function SemesterToggle() {
    const [semester, setSemester] = useState<string>("");

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="terms">Semester</Label>
                <ToggleGroup type="single" value={semester} onValueChange={setSemester} className="w-full">
                    <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                        1st Semester
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                        2nd Semester
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
    );
}
