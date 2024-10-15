import { useState } from "react";

import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import NameInput from "@/components/Input/NameInput";

export default function CommunityToggle() {
    const [community, setCommunity] = useState<string>("");

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="terms">Do you belong to any IP Community?</Label>
                <ToggleGroup type="single" value={community} onValueChange={setCommunity} className="w-full">
                    <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                        Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                        No
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {community === "yes" && (
                <NameInput label={"Indigenous Community"} placeholder={"Igorot"}/>
            )}
        </div>
    );
}
