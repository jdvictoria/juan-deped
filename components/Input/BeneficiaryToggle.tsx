import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import TextInput from "@/components/Input/TextInput";

interface ToggleProps {
    isBeneficiary: boolean;
    beneficiary: string;
    setIsBeneficiary: (value: boolean) => void;
    setBeneficiary: (value: string) => void;
}

export default function BeneficiaryToggle({
    isBeneficiary,
    beneficiary,
    setIsBeneficiary,
    setBeneficiary,
}: ToggleProps) {
    return (
        <div className="space-y-2">
            <div className="space-y-0">
                <Label htmlFor="terms">Is your family a beneficiary of 4Ps?</Label>
                <ToggleGroup
                    type="single"
                    value={isBeneficiary ? "yes" : "no"}
                    onValueChange={(value) => setIsBeneficiary(value === "yes")}
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

            {isBeneficiary && (
                <TextInput
                    label={"4Ps Household ID Number"}
                    placeholder={"XXXXXX"}
                    value={beneficiary}
                    setValue={setBeneficiary}
                    required={true}
                />
            )}
        </div>
    );
}
