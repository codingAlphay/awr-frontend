export default function ReportListElement({report}) {
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth()+1
    const final_creation_date = creation_date.getDate()+'.'+creation_month+'.'+creation_date.getFullYear()

    return (
        <div className="w-100 bg-white h-8 my-4 flex items-center px-4 border-b-2 border-green rounded-t-md justify-between" key={report.id}>
            <div className="w-2/3 grid grid-cols-8">
                <span className="font-bold col-span-1">{report.car_license}</span>
                <div className="col-span-7">
                    <span className="ml-4 mr-2">{report.driver_first_name} {report.driver_last_name}</span> | <span className="ml-2">{report.car_manufacturer} {report.car_model}</span>
                </div>
            </div>
            <div>
                <span className="text-blue font-bold">{final_creation_date}</span>
            </div>
        </div>
    )
}