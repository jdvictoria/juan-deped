import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LicenseInput() {
    return (
        <div>
            <Label htmlFor="license">ID No.</Label>
            <Input
                id="license"
                type="text"
                autoComplete="name"
                required
                placeholder="1234-5678-9012"
            />
        </div>
    )
}
