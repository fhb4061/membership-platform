export function Panel({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="overflow-hidden p-6 rounded-lg border border-primary bg-card">
            {children}
        </div>
    )
}