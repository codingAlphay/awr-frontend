import FormInput from '../../../interactive/FormInput'
import { useState } from 'react'

export default function StepOne({locale, formData, setFormData }) {
    const t = locale
    const dict = {
        car_license: t.license_plate,
        car_manufacturer: t.brand,
        car_model: t.model,
        car_year: 'Baujahr',
        car_km: 'Kilometerstand'
    }

    const formTable = ['car_license', 'car_manufacturer', 'car_model', 'car_year', 'car_km']

    return (
        <div className='mt-12 generator-step-one'>
            <div className='md:flex w-full mt-4'>
                {/* Take only first three form entries */}
                {formTable.slice(0, 3).map((formElement) => (
                    <div key={formElement} className='w-full md:w-1/3 md:mx-2 md:first:ml-0 md:last:mr-0'>
                        <FormInput
                            id={formElement}
                            value={formData[formElement]}
                            text={dict[formElement] + ' *'}
                            onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                    </div>
                ))}
            </div>


            <div className='flex w-full mt-4'>
                {/* Take only las two form entries */}
                {formTable.slice(3, 5).map((formElement) => (
                    <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                        <FormInput
                            id={formElement}
                            value={formData[formElement]}
                            text={dict[formElement] + ' *'}
                            type={'number'}
                            onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                    </div>
                ))}
            </div>
        </div>
    )
}