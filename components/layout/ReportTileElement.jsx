export default function ReportTileElement({report}) {
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth()+1
    const final_creation_date = creation_date.getDate()+'.'+creation_month+'.'+creation_date.getFullYear()

    return (
        <div className="w-1/3 inline-block bg-white p-4 my-4 border-b-2 border-green rounded-t-md" key={report.id}>
            <div>
                <span className="text-blue font-bold">{final_creation_date}</span>
            </div>
            <h2 className="font-bold uppercase text-xl">{report.car_license}</h2>
            <p>{report.driver_first_name} {report.driver_last_name}</p>
            <p>{report.car_manufacturer}</p>
            <p>{report.car_model}</p>
        </div>
    )
}