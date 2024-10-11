import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function NameInput() {
    return (
        <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
                id="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Juan Dela Cruz"
            />
        </div>
    )
}
