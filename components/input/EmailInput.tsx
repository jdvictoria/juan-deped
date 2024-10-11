import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EmailInput() {
    return (
        <div>
            <Label htmlFor="email">Email address</Label>
            <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="juandelacruz@gmail.com"
            />
        </div>
    )
}
