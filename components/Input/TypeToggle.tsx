import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleProps {
    isWithLrn: boolean;
    isReturning: boolean;
    setIsWithLrn: (value: boolean) => void;
    setIsReturning: (value: boolean) => void;
}

export default function TypeToggle({
    isWithLrn,
    isReturning,
    setIsWithLrn,
    setIsReturning,
}: ToggleProps) {
    return (
        <div className="space-y-1">
            <div className="space-y-0">
                <Label htmlFor="terms">With LRN?</Label>
                <ToggleGroup
                    type="single"
                    value={isWithLrn ? "true" : "false"}
                    onValueChange={(value) => setIsWithLrn(value === "true")}
                    className="w-full"
                >
                    <ToggleGroupItem value="true" aria-label="Yes" className="w-full" variant="outline">
                        Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="false" aria-label="No" className="w-full" variant="outline">
                        No
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {isWithLrn && (
                <div className="space-y-0">
                    <Label htmlFor="terms">Returning (Balik-Aral)</Label>
                    <ToggleGroup
                        type="single"
                        value={isReturning ? "true" : "false"}
                        onValueChange={(value) => setIsReturning(value === "true")}
                    >
                        <ToggleGroupItem value="true" aria-label="Yes" className="w-full" variant="outline">
                            Yes
                        </ToggleGroupItem>
                        <ToggleGroupItem value="false" aria-label="No" className="w-full" variant="outline">
                            No
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            )}
        </div>
    );
}
