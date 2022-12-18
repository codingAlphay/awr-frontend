import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import ProcessBar from './utils/ProcessBar'
import ProcessTitleBar from './utils/ProcessTitleBar'
import Title from '../../elements/Title'
import StepNavigationBar from './utils/StepNavigationBar'
import { useState } from 'react'

const uuid = require('uuid')


export default function ReportGeneratorModal() {

    const now = new Date().toISOString()
    const reportId = uuid.v4()
    const [viewStep, setViewStep] = useState(0)
    const [filled, setFilledState] = useState(false)

    //ein feld kommt noch hinzu
    const [formData, setFormData] = useState({
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
        month: '3',
        year: '2024',
        pf_cleaning: 'off',
        ev_cleaning: 'off',
        pf_change: 'off',
        created_user_id: 'phillyderheftige@gmail.com',
        created_on: now,
        last_modified: now
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
            <div className='w-full max-w-5xl mx-auto '>
                <ProcessBar step={viewStep}/>
                <div className='px-16 pt-11 pb-6 bg-lightgrey rounded-3xl'>
                    <ProcessTitleBar step={viewStep}/>
                    <Title value={'REPORT GENERATOR'} option={1}/>
                    {view()}
                </div>
            </div>

            {/* Errormessage if a inputfield is empty */}
            {filled == true && 
                <div className='flex justify-center'>
                    <div className='error-message mt-6 border-green py-1 px-4 inline-flex items-center border-4 rounded-md'>
                        <span className='text-4xl text-green font-extrabold mr-3'>!</span>Bitte überprüfe ob deine Angaben vollständig sind
                    </div>
                </div>
            }
            <StepNavigationBar formData={formData} viewStep={viewStep} setViewStep={setViewStep} setFilledState={setFilledState} />
        </>
    )
}