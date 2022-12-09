export default function ReportListElement() {
    
    return (
        <div className="w-full my-4 font-bold flex items-center px-4 border-green rounded-t-md justify-between">
            <div className="w-2/3 grid grid-cols-12">
                <span className="col-span-2">Kennz.</span>
                <span className="col-span-1">Vor</span>
                <span className="col-span-1">Nach</span>
            </div>
        </div>
    )
}