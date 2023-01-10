import CustomButton from '../../../interactive/CustomButton'
import Router from 'next/router'
import { useState } from 'react'

export default function StepNavigationBar({locale, formData, viewStep, setViewStep, setFilledState, singleReportData, setSingleReportData, closeCurrentReport}) {
    const t = locale
    const [status, setStatus] = useState(null)
    
    async function deleteReport(reportId) {
        fetch('/api/reporthandler/deletereport', {
            method: 'post',
            body: reportId
        })
        setStatus('deleted')
        await new Promise(r => setTimeout(r, 3000))
        setStatus(null)
        closeCurrentReport()
    }
    async function updateReport() {
        fetch('/api/reporthandler/updatereport', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        setStatus('updated')
        await new Promise(r => setTimeout(r, 3000))
        setStatus(null)
    }
    function createReport() {
        console.log("ok")
        if (
            (formData.car_license &&
                formData.car_manufacturer &&
                formData.car_model &&
                formData.car_year &&
                formData.car_km &&
                formData.ev_cleaning &&
                formData.pf_change &&
                formData.pf_cleaning &&
                formData.result_after &&
                formData.result_before &&
                formData.recommendation &&
                formData.month &&
                formData.year) != ''
        ) {
            console.log(formData)
            fetch('/api/reporthandler/createreport', {
                method: 'post',
                body: JSON.stringify(formData)
            })
            setFilledState(true)
            Router.reload(window.location.pathname);
        }
        setFilledState(false)
    }

    return (

        <>
            <div className={`flex items-center mt-4 ${singleReportData == null ? "justify-center" : "justify-between"}`}>
                {singleReportData != null &&
                    <div onClick={() => deleteReport(singleReportData.id)}>
                        <CustomButton setting={'delete'} value={t.delete_pdf}/>
                    </div>
                }
                <div className='flex'>
                    {(viewStep == 0) ? (
                        <div className='opacity-70'>
                            <CustomButton setting={'prev'} />
                        </div>
                    ) : (
                        <div onClick={() => setViewStep(viewStep - 1)}>
                            <CustomButton setting={'prev'} />
                        </div>
                    )}
                    {(viewStep == 2) ? (
                        <>
                            {singleReportData == null ? (
                                <div onClick={() => createReport()}>
                                    <CustomButton setting={'text'} value={t.create_pdf} />
                                </div>
                            ) : (
                                <div onClick={() => updateReport()}>
                                    <CustomButton setting={'text'} value={t.update_pdf} />
                                </div>
                            )}

                        </>
                    ) : (
                        <>
                            <div onClick={() => setViewStep(viewStep + 1)}>
                                <CustomButton setting={'next'} />
                            </div>
                        </>
                    )}
                </div>
                {singleReportData != null &&
                    <div onClick={() => setSingleReportData(null)}>
                        <CustomButton setting={'open'} />
                    </div>
                }
            </div>
            {status == 'updated' &&
                <div className='flex justify-center animate-fade'>
                    <span className='px-4 py-2 mt-4 text-center border-4 border-green ont-medium text-green rounded-3xl'>Bericht wurde aktualisiert!</span>
                </div>
            }
            {status == 'deleted' &&        
                <div className='flex justify-center animate-pulse'>
                    <span className='px-4 py-2 mt-4 font-medium text-red-500 border-4 border-red-500 rounded-3xl'>Bericht wird gelöscht!</span>
                </div>
            }
        </>
    )
}