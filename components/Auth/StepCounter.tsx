interface StepCounterProps {
    step: number;
}

export default function StepCounter({
    step
}: StepCounterProps) {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted"/>
                </div>
                <div className="relative flex justify-between">
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        1
                    </div>
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        2
                    </div>
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        3
                    </div>
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        4
                    </div>
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 5 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        5
                    </div>
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            step >= 6 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                    >
                        6
                    </div>
                </div>
            </div>
        </div>
    )
}
