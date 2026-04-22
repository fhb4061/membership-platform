export function Panel({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="overflow-hidden p-6 rounded-lg border border-primary/30 bg-card">
            {children}
        </div>
    )
}