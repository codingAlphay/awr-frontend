import Icon from "../../utils/Icon"

export default function ReportListElement({report, setData, setSingleReportData}) {
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth()+1
    const final_creation_date = creation_date.getDate()+'.'+creation_month+'.'+creation_date.getFullYear()


    function deleteReport(reportId) {
        fetch('/api/reporthandler/deletereport', {
            method: 'post',
            body: reportId
            })
        getReports()
    }
    async function getReports() {
        await new Promise(r => setTimeout(r, 300));
        const res = await fetch('/api/reporthandler/reports')
        const data = await res.json()
        setData(data)
    }
    function editReport() {
        setSingleReportData(report)
    }

    return (
        <div className="w-full bg-white h-10 my-2 flex items-center px-4 border-b-[3px] border-green rounded-t-md justify-between" key={report.id}>
            <div className="grid w-2/3 grid-cols-12">
                <span className="col-span-2 font-bold tracking-wide">{report.car_license}</span>
                <span className="col-span-1">{report.result_before}</span>
                <span className="col-span-2">{report.result_after}</span>
                <div className="col-span-6">
                    <span>{report.driver_first_name} {report.driver_last_name}</span> | <span className="">{report.car_manufacturer} {report.car_model}</span>
                </div>
            </div>
            <div className="flex items-center">
                <span className="mr-3 font-bold text-blue">{final_creation_date}</span>
                <div className="-mt-1.5 fill-red-500 hover:fill-red-700" onClick={() => deleteReport(report.id)}>  
                    <Icon type={'delete'}/>
                </div>
                <div className="ml-2 fill-darkblue hover:fill-green" onClick={() => editReport()}>  
                    <Icon type={'edit'}/>
                </div>
            </div>
        </div>
    )
}