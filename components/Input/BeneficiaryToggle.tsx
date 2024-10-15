import { useState } from "react";

import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import NameInput from "@/components/Input/NameInput";

export default function BeneficiaryToggle() {
    const [beneficiary, setBeneficiary] = useState<string>("");

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="terms">Is your family a beneficiary of 4Ps?</Label>
                <ToggleGroup type="single" value={beneficiary} onValueChange={setBeneficiary} className="w-full">
                    <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                        Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                        No
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {beneficiary === "yes" && (
                <NameInput label={"4Ps Household ID Number"} placeholder={"XXXXXX"}/>
            )}
        </div>
    );
}
