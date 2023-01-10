import Icon from "../../utils/Icon"

export default function ReportListElement({report, setSingleReportData}) {
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth()+1
    const final_creation_date = creation_date.getDate()+'.'+creation_month+'.'+creation_date.getFullYear()
    
    
    function editReport() {
        setSingleReportData(report)
    }

    return (
        <div className="w-full bg-white py-2 my-2 flex items-center px-4 border-b-[3px] border-green rounded-t-md justify-between" key={report.id}>
            <div className="grid w-2/3 grid-cols-12">
                <span className="col-span-5 font-bold tracking-wide md:col-span-3">{report.car_license}</span>
                <span className="col-span-3 md:col-span-1">{report.result_before}</span>
                <span className="col-span-3 md:col-span-2">{report.result_after}</span>
                <div className="col-span-12 pt-1 mt-1 md:pt-0 md:mt-0 md:col-span-6">
                    <span>{report.driver_first_name} {report.driver_last_name}</span> | <span className="">{report.car_manufacturer} {report.car_model}</span>
                </div>
            </div>
            <div className="flex items-center">
                <span className="mr-3 font-bold text-blue">{final_creation_date}</span>
                <div className=" fill-darkblue hover:fill-green" onClick={() => editReport()}>
                    <Icon type={'edit'}/>
                </div>
            </div>
        </div>
    )
}