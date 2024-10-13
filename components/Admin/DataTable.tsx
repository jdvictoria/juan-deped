"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    X,
    Check,
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight
} from "lucide-react"

const users = Array(50)
    .fill(null)
    .map((_, index) => ({
        name: `John Doe ${index + 1}`,
        email: `john${index + 1}@example.com`,
        school: "University of Example",
        role: "Student",
        iD: `${12345 + index}`,
    }))

type User = typeof users[0]

type SortDirection = "asc" | "desc" | null

interface DataTableProps {
    section: string;
}

export default function DataTable({
    section
}: DataTableProps) {
    const [data, setData] = useState(users)
    const [searchTerm, setSearchTerm] = useState("")
    const [sortColumn, setSortColumn] = useState<keyof User | null>(null)
    const [sortDirection, setSortDirection] = useState<SortDirection>(null)
    const [visibleColumns, setVisibleColumns] = useState<Set<keyof User>>(
        new Set(Object.keys(users[0]) as (keyof User)[])
    )
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
        setCurrentPage(1)
    }

    const handleSort = (column: keyof User) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : sortDirection === "desc" ? null : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }

    const toggleColumnVisibility = (column: keyof User) => {
        setVisibleColumns((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(column)) {
                newSet.delete(column)
            } else {
                newSet.add(column)
            }
            return newSet
        })
    }

    const filteredData = data.filter((user) =>
        Object.values(user).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const sortedData = sortColumn
        ? [...filteredData].sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
            if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
            return 0
        })
        : filteredData

    const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const totalPages = Math.ceil(sortedData.length / itemsPerPage)

    return (
        <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{section}</h2>
            </div>

            <div className="flex flex-row justify-between items-center gap-x-2">
                <Input
                    type="search"
                    placeholder="Search..."
                    className="max-w-xs"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Columns</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {(Object.keys(users[0]) as (keyof User)[]).map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column}
                                checked={visibleColumns.has(column)}
                                onCheckedChange={() => toggleColumnVisibility(column)}
                            >
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {(Object.keys(users[0]) as (keyof User)[]).map(
                                (column) =>
                                    visibleColumns.has(column) && (
                                        <TableHead key={column} className="font-bold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer" onClick={() => handleSort(column)}>
                                                    {column.charAt(0).toUpperCase() + column.slice(1)}
                                                </span>
                                                {sortColumn === column && (
                                                    sortDirection === "asc" ? (
                                                        <ChevronUp className="h-4 w-4" />
                                                    ) : sortDirection === "desc" ? (
                                                        <ChevronDown className="h-4 w-4" />
                                                    ) : (
                                                        <></>
                                                    )
                                                )}
                                            </div>
                                        </TableHead>
                                    )
                                )
                            }
                            <TableHead className="font-bold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {paginatedData.map((user, index) => (
                            <TableRow key={index}>
                                {(Object.keys(user) as (keyof User)[]).map(
                                    (column) =>
                                        visibleColumns.has(column) && <TableCell key={column}>{user[column]}</TableCell>
                                    )
                                }
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="h-8 w-8 p-0">
                                            <Check className="h-4 w-4 text-green-600"/>
                                        </Button>
                                        <Button size="icon" variant="ghost" className="h-8 w-8 p-0">
                                            <X className="h-4 w-4 text-red-600" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-end items-center">
                <div className="flex gap-2">
                    <span className="flex items-center">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}>
                        <ChevronLeft className="h-4 w-4"/>
                    </Button>
                    <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}>
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
