import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import ProcessBar from './utils/ProcessBar'
import ProcessTitleBar from './utils/ProcessTitleBar'
import Title from '../../elements/Title'
import StepNavigationBar from './utils/StepNavigationBar'
import Icon from '../utils/Icon'
import { useState } from 'react'
import {letsTest} from '../../../lib/databasequeries'
import Router from 'next/router'
const uuid = require('uuid')

export default function ReportFormModal({locale, singleReportData, setSingleReportData}) {

    const now = new Date()
    const reportId = uuid.v4()
    const [viewStep, setViewStep] = useState(0)
    const [filled, setFilledState] = useState(null)
    //ein feld kommt noch hinzu
    const [formData, setFormData] = useState(singleReportData != null ? singleReportData : {
        id: reportId,
        workshop_id: 'ba8bc32e-2339-4997-aafb-10319813492b',
        driver_first_name: '',
        driver_last_name: '',
        driver_street: '',
        driver_zip: '',
        driver_city: '',
        car_manufacturer: '',
        car_model: '',
        car_license: '',
        car_year: '',
        car_km: '',
        result_before: '',
        result_after: '',
        recommendation: '1',
        cleaned_on_month: now.getMonth() + 1 + '',
        cleaned_on_year: now.getFullYear() + '',
        month: now.getMonth() + 1 + '', // +1 because jannuary is
        year: now.getFullYear() + 1 + '',
        pf_cleaning: 'on',
        ev_cleaning: 'on',
        pf_change: 'on',
        created_user_id: 'phillyderheftige@gmail.com',
        created_on: now.toISOString(),
        last_modified: now.toISOString()
    })

    const view = () => {
        if (viewStep == 0) {
            return <StepOne locale={locale} formData={formData} setFormData={setFormData} />
        } else if (viewStep == 1) {
            return <StepTwo locale={locale} formData={formData} setFormData={setFormData} />
        } else {
            return <StepThree locale={locale} formData={formData} setFormData={setFormData} />
        }
    }

    function closeCurrentReport() {
        Router.reload(window.location.pathname);
        setSingleReportData(null)
    }

    return (
        <>
            <div className='w-full max-w-generator px-2 mx-auto'>
                <ProcessBar step={viewStep} />
                <div className='px-4 pb-6 mx-2 md:px-16 pt-11 bg-lightgrey rounded-3xl'>
                    <div className='flex justify-between'>
                        <ProcessTitleBar step={viewStep} />
                        {singleReportData != null &&
                            <div className='scale-150 fill-red-500' onClick={() => closeCurrentReport()}>
                                <Icon type={'close'} />
                            </div>
                        }
                    </div>
                    <Title value={singleReportData == null ? 'REPORT CREATOR' : 'REPORT: ' + singleReportData.car_license} option={1} />
                    {view()}
                </div>

                {/* Errormessage if a inputfield is empty */}
                {filled == false &&
                    <div className='flex justify-center'>
                        <div className='inline-flex items-center px-4 py-1 mt-6 border-4 rounded-md error-message border-green'>
                            <span className='mr-3 text-4xl font-extrabold text-green'>!</span>Bitte überprüfe ob deine Angaben vollständig sind
                        </div>
                    </div>
                }
                <StepNavigationBar locale={locale} formData={formData} viewStep={viewStep} setViewStep={setViewStep} setFilledState={setFilledState} singleReportData={singleReportData} setSingleReportData={setSingleReportData} closeCurrentReport={closeCurrentReport} />
            </div>
        </>
    )
}