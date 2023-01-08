import FormInput from '../../../interactive/FormInput'
import { useState } from 'react'

export default function StepOne({formData, setFormData}) {

    const temporariyLocale = {
        car_license: 'Nummernschild',
        car_model: 'Hersteller',
        car_manufacturer: 'Modell',
    }

    const formTable = ['car_license', 'car_model', 'car_manufacturer']

    return (
        <div className='flex mt-12 generator-step-one'>
            {formTable.map((formElement) => (
                <div key={formElement} className='w-1/3 mx-2 first:ml-0 last:mr-0'>
                    <FormInput 
                        id={formElement}
                        value={formData[formElement]}
                        text={temporariyLocale[formElement]}
                        onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                </div>
            ))}
        </div>
    )
}