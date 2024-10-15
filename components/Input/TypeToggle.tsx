import { useState } from "react";

import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function TypeToggle() {
    const [withLrn, setWithLrn] = useState<string>("");
    const [returning, setReturning] = useState<string>("");

    return (
        <div className="space-y-1">
            <div className="space-y-1">
                <Label htmlFor="terms">With LRN?</Label>
                <ToggleGroup type="single" value={withLrn} onValueChange={setWithLrn} className="w-full">
                    <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                        Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                        No
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {withLrn === "no" && (
                <div className="space-y-1">
                    <Label htmlFor="terms">Returning (Balik-Aral)</Label>
                    <ToggleGroup type="single" value={returning} onValueChange={setReturning}>
                        <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                            Yes
                        </ToggleGroupItem>
                        <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                            No
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            )}
        </div>
    );
}
