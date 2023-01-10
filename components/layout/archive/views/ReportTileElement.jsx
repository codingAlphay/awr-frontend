import Icon from "../../utils/Icon"

export default function ReportTileElement({report, setSingleReportData}) {
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth()+1
    const final_creation_date = creation_date.getDate()+'.'+creation_month+'.'+creation_date.getFullYear()
    
    function editReport() {
        setSingleReportData(report)
    }

    return (
        <div className="w-full inline-block bg-white p-4 my-2 border-green border-b-[3px] rounded-t-md" key={report.id}>
            <div className="flex items-center justify-between">
                <span className="font-bold text-blue">{final_creation_date}</span>
                <div className="-mt-1.5 fill-darkblue hover:fill-green" onClick={() => editReport()}>
                    <Icon type={'edit'}/>
                </div>
            </div>
            <h2 className="text-xl font-bold uppercase">{report.car_license}</h2>
            <div className="">
                <div>{report.driver_first_name} {report.driver_last_name}</div>
                <div>{report.car_manufacturer}</div>
                <div>{report.car_model}</div>
            </div>
        </div>
    )
}