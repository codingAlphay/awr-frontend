import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import ProcessBar from './utils/ProcessBar'
import ProcessTitleBar from './utils/ProcessTitleBar'
import Title from '../../elements/Title'
import StepNavigationBar from './utils/StepNavigationBar'
import Icon from '../utils/Icon'
import { useState } from 'react'

const uuid = require('uuid')

export default function ReportFormModal({singleReportData, setSingleReportData}) {

    const now = new Date()
    const reportId = uuid.v4()
    const [viewStep, setViewStep] = useState(0)
    const [filled, setFilledState] = useState(false)

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
        result_before: '',
        result_after: '',
        recommendation: '1',
        month: now.getMonth()+1+'', //wann soll in zukunft sein, feedback einholen
        year: now.getFullYear()+1+'',
        pf_cleaning: 'on',
        ev_cleaning: 'on',
        pf_change: 'on',
        created_user_id: 'phillyderheftige@gmail.com',
        created_on: now.toISOString(),
        last_modified: now.toISOString()
    })

    const view = () => {
        if(viewStep == 0) {
            return <StepOne formData={formData} setFormData={setFormData}/>
        } else if(viewStep == 1) {
            return <StepTwo formData={formData} setFormData={setFormData}/>
        } else {
            return <StepThree formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <>
            <div className='w-full mx-auto max-w-generator'>
                <ProcessBar step={viewStep}/>
                <div className='px-16 pb-6 pt-11 bg-lightgrey rounded-3xl'>
                    <div className='flex justify-between'>
                        <ProcessTitleBar step={viewStep}/>
                        {singleReportData != null && 
                            <div className='scale-150 fill-red-500' onClick={() => setSingleReportData(null)}>
                                <Icon type={'delete'}/>
                            </div>
                        } 
                    </div>
                    <Title value={singleReportData == null ? 'REPORT GENERATOR' : 'REPORT: ' + singleReportData.car_license} option={1}/>
                    {view()}
                </div>
            </div>

            {/* Errormessage if a inputfield is empty */}
            {filled == true && 
                <div className='flex justify-center'>
                    <div className='inline-flex items-center px-4 py-1 mt-6 border-4 rounded-md error-message border-green'>
                        <span className='mr-3 text-4xl font-extrabold text-green'>!</span>Bitte überprüfe ob deine Angaben vollständig sind
                    </div>
                </div>
            }
            <StepNavigationBar formData={formData} viewStep={viewStep} setViewStep={setViewStep} setFilledState={setFilledState} />
        </>
    )
}