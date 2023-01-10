export default function ReportListElement() {    
    return (
        <div className="flex items-center justify-between w-full px-4 my-4 font-bold rounded-t-md">
            <div className="grid w-2/3 grid-cols-12">
                <span className="col-span-5 md:col-span-3">Kennz.</span>
                <span className="col-span-3 md:col-span-1">Vor</span>
                <span className="col-span-3 md:col-span-2">Nach</span>
                <span className="hidden md:block md:col-span-6">Name & Auto</span>
            </div>
        </div>
    )
}