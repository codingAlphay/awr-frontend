import FormInput from '../../../interactive/FormInput'

export default function StepTwo({formData, setFormData}) {
    const temporariyLocale = {
        driver_first_name: 'Vorname',
        driver_last_name: 'Nachname', 
        driver_street: 'Straße & Hausnummer', 
        driver_zip: 'PLZ',
        driver_city: 'Stadt' 
    }

    const formTable = ['driver_first_name', 'driver_last_name', 'driver_street', 'driver_zip', 'driver_city']

    return (
        <div className='generator-step-two mt-12'>
            <div className='w-full flex'>
                {/*Take only first two form entries*/}
                {formTable.slice(0,2).map((formElement) => (
                    <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={temporariyLocale[formElement]}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
            <div className='w-full flex mt-4'>
                {/*Take only last three form entries*/}
                {formTable.slice(2).map((formElement) => (
                    <div key={formElement} className='w-1/3 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={temporariyLocale[formElement]}
                            type={(formElement == 'driver_zip') ? 'number' : 'text'}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
        </div>
    )
}