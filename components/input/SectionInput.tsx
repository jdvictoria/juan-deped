import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SectionInput() {
    return (
        <div>
            <Label htmlFor="name">Section</Label>
            <Input
                id="section"
                type="text"
                autoComplete="name"
                required
                placeholder="Diamond"
            />
        </div>
    )
}
