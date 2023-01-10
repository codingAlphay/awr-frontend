export default function ReportListElement({locale}) {    
    const t = locale
    return (
        <div className="flex items-center justify-between w-full px-4 my-4 font-bold rounded-t-md">
            <div className="grid w-9/12 grid-cols-12">
                <span className="col-span-5 md:col-span-3">Kennz.</span>
                <span className="col-span-3 md:col-span-2">{t.report_before}</span>
                <span className="col-span-3 md:col-span-2">{t.report_after}</span>
                <span className="hidden md:block md:col-span-5">Name & Auto</span>
            </div>
        </div>
    )
}