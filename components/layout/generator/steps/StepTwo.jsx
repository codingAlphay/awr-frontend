import FormInput from '../../../interactive/FormInput'

export default function StepTwo({locale, formData, setFormData}) {
    const t = locale
    const dict = {
        driver_first_name: t.first_name,
        driver_last_name: t.last_name, 
        driver_street: t.street, 
        driver_zip: t.zip_code,
        driver_city: t.city 
    }

    const formTable = ['driver_first_name', 'driver_last_name', 'driver_street', 'driver_zip', 'driver_city']

    return (
        <div className='mt-12 generator-step-two'>
            <div className='flex w-full'>
                {/*Take only first two form entries*/}
                {formTable.slice(0,2).map((formElement) => (
                    <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={dict[formElement]}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
            <div className='flex w-full mt-4'>
                {/*Take only last three form entries*/}
                {formTable.slice(2).map((formElement) => (
                    <div key={formElement} className='w-1/3 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={dict[formElement]}
                            type={'text'}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
        </div>
    )
}