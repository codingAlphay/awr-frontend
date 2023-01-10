import Icon from "../../utils/Icon"

export default function ReportTileElement({locale, report, setSingleReportData}) {
    const t = locale
    const creation_date = new Date(report.created_on)
    const creation_month = creation_date.getMonth() + 1
    const final_creation_date = creation_date.getDate() + '.' + creation_month + '.' + creation_date.getFullYear()

    function editReport() {
        setSingleReportData(report)
    }

    return (
        <div className="border-green border-b-[3px] my-2">
            <div className="inline-block w-full p-4 bg-white rounded-t-md" key={report.id}>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-blue">{final_creation_date}</span>
                    <div className="-mt-1.5 fill-darkblue hover:fill-green" onClick={() => editReport()}>
                        <Icon type={'edit'} />
                    </div>
                </div>
                <h2 className="text-xl font-bold uppercase">{report.car_license}</h2>
                <div className="">
                    <p>{report.driver_first_name}&nbsp;{report.driver_last_name}</p>
                    <div>{report.car_model}</div>
                    <div>{report.car_manufacturer}</div>
                </div>
            </div>
            <div className="grid grid-cols-2 px-4 py-2 text-white bg-green">
                <span>{t.report_before}: <span className="font-bold">{report.result_before}</span></span>
                <span>{t.report_after}: <span className="font-bold">{report.result_after}</span></span>
            </div>
        </div>
    )
}