import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import Title from '../../elements/Title'
import { useState } from 'react'
import Router from 'next/router'
import CustomButton from '../../interactive/CustomButton'

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
        pf_cleaning: 'on',
        ev_cleaning: 'on',
        pf_change: 'on',
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
            <div className='w-full max-w-5xl px-16 mx-auto py-11 bg-lightgrey rounded-3xl'>
                <Title value={'REPORT GENERATOR'} option={1}/>
                {view()}
            </div>
            {filled == true && 
                <div className='flex justify-center'>
                    <div className='error-message mt-6 border-green py-1 px-4 inline-flex items-center border-4 rounded-md'>
                        <span className='text-4xl text-green font-extrabold mr-3'>!</span>Bitte überprüfe ob deine Angaben vollständig sind
                    </div>
                </div>
            }
            <div className='flex justify-center items-center mt-4'>
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
                    <button submit onClick={() => {
                        if(
                        (formData.driver_first_name && 
                        formData.driver_last_name && 
                        formData.driver_city &&
                        formData.driver_street &&
                        formData.driver_zip &&
                        formData.car_license &&
                        formData.car_manufacturer &&
                        formData.car_model &&
                        formData.ev_cleaning &&
                        formData.pf_change &&
                        formData.pf_cleaning &&
                        formData.result_after &&
                        formData.result_before &&
                        formData.recommendation &&
                        formData.month &&
                        formData.year) != ''
                        ) {
                        Router.reload(window.location.pathname);
                        fetch('/api/reporthandler/createreport', {
                            method: 'post',
                            body: JSON.stringify(formData)
                            })
                        } else {
                            setFilledState(true)
                        }
                    }}>
                        <CustomButton setting={'text'} value={'Erstellen'} />
                    </button>
                ) : (
                    <>
                        <div onClick={() => setViewStep(viewStep + 1)}>
                            <CustomButton setting={'next'} />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}