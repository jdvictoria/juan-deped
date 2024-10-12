import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import {
    XIcon,
    Search,
    CheckIcon
} from "lucide-react";

export default function TableGroup() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex flex-col gap-4 sm:flex-row">
                <Card className="w-full sm:w-1/2">
                    <CardHeader className="flex flex-row justify-center items-center">
                        <div className="flex flex-col">
                            <CardTitle>Approve Users</CardTitle>
                            <CardDescription>Manage and approve users.</CardDescription>
                        </div>
                        <div className="relative ml-auto flex-1 md:grow-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="max-h-[80vh] overflow-y-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="border-r">Name</TableHead>
                                    <TableHead className="border-r">Email</TableHead>
                                    <TableHead className="border-r">School</TableHead>
                                    <TableHead className="border-r">Role</TableHead>
                                    <TableHead className="border-r">ID No.</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[...Array(20)].map((a, b) => (
                                    <TableRow key={b}>
                                        <TableCell className="border-r">John Doe</TableCell>
                                        <TableCell className="border-r">john@example.com</TableCell>
                                        <TableCell className="border-r">University of Example</TableCell>
                                        <TableCell className="border-r">Student</TableCell>
                                        <TableCell className="border-r">12345</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <Button size="icon" variant="outline" className="h-6 w-6">
                                                    <CheckIcon className="h-4 w-4 text-green-600"/>
                                                    <span className="sr-only">Approve</span>
                                                </Button>
                                                <Button size="icon" variant="outline" className="h-6 w-6">
                                                    <XIcon className="h-4 w-4 text-red-600"/>
                                                    <span className="sr-only">Deny</span>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card className="w-full sm:w-1/2">
                    <CardHeader className="flex flex-row justify-center items-center">
                        <div className="flex flex-col">
                            <CardTitle>Current Users</CardTitle>
                            <CardDescription>List of Active Users.</CardDescription>
                        </div>
                        <div className="relative ml-auto flex-1 md:grow-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="max-h-[80vh] overflow-y-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="border-r">Name</TableHead>
                                    <TableHead className="border-r">Email</TableHead>
                                    <TableHead className="border-r">School</TableHead>
                                    <TableHead className="border-r">Role</TableHead>
                                    <TableHead className="border-r">ID No.</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[...Array(20)].map((a, b) => (
                                    <TableRow key={b}>
                                        <TableCell className="border-r">John Doe</TableCell>
                                        <TableCell className="border-r">john@example.com</TableCell>
                                        <TableCell className="border-r">University of Example</TableCell>
                                        <TableCell className="border-r">Student</TableCell>
                                        <TableCell className="border-r">12345</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <Button size="icon" variant="outline" className="h-6 w-6">
                                                    <CheckIcon className="h-4 w-4 text-green-600"/>
                                                    <span className="sr-only">Approve</span>
                                                </Button>
                                                <Button size="icon" variant="outline" className="h-6 w-6">
                                                    <XIcon className="h-4 w-4 text-red-600"/>
                                                    <span className="sr-only">Deny</span>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
