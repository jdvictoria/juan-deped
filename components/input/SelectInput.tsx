import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface InputProps {
    label: string;
    data: string[];
}

export default function SelectInput({
    label,
    data
}: InputProps) {
    return (
        <div>
            <Label htmlFor={label}>{label}</Label>
            <Select required>
                <SelectTrigger className="border rounded-md p-2 w-full">
                    <SelectValue placeholder={`${data[0]}`}/>
                </SelectTrigger>
                <SelectContent>
                    {data.map((item: string, index: number) => (
                        <SelectItem key={index} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
