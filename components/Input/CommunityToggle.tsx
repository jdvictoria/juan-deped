import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import TextInput from "@/components/Input/TextInput";

interface ToggleProps {
    isWithCommunity: boolean;
    community: string;
    setIsWithCommunity: (value: boolean) => void;
    setCommunity: (value: string) => void;
}

export default function CommunityToggle({
    isWithCommunity,
    community,
    setIsWithCommunity,
    setCommunity,
}: ToggleProps) {
    return (
        <div className="space-y-2">
            <div className="space-y-0">
                <Label htmlFor="terms">Do you belong to any IP Community?</Label>
                <ToggleGroup
                    type="single"
                    value={isWithCommunity ? "yes" : "no"}
                    onValueChange={(value) => setIsWithCommunity(value === "yes")}
                    className="w-full"
                >
                    <ToggleGroupItem value="yes" aria-label="Yes" className="w-full" variant="outline">
                        Yes
                    </ToggleGroupItem>
                    <ToggleGroupItem value="no" aria-label="No" className="w-full" variant="outline">
                        No
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {isWithCommunity && (
                <TextInput
                    label={"Indigenous Community"}
                    placeholder={"Igorot"}
                    value={community}
                    setValue={setCommunity}
                    required={false}
                />
            )}
        </div>
    );
}
