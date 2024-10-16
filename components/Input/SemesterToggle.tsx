import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleProps {
    isFirstSemester: boolean;
    setIsFirstSemester: (value: boolean) => void;
}

export default function SemesterToggle({
    isFirstSemester,
    setIsFirstSemester,
}: ToggleProps) {
    return (
        <div className="space-y-2">
            <div className="space-y-0">
                <Label htmlFor="terms">Semester</Label>
                <ToggleGroup
                    type="single"
                    value={isFirstSemester ? "yes" : "no"}
                    onValueChange={(value) => setIsFirstSemester(value === "yes")}
                    className="w-full"
                >
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
