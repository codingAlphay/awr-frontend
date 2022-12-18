import FormInput from '../../../interactive/FormInput'
import Title from '../../../elements/Title'

export default function StepThree({formData, setFormData}) {
    const temporariyLocale = {
        result_before: 'Vor der Reinigung',
        result_after: 'Nach der Reinigung',
        recommendation: 'Handlung',
        pf_cleaning: 'inkl. Reinigung der Pollenfilterumgebung',
        ev_cleaning: 'inkl. Verdampfer-Reinigung',
        pf_change: 'inkl. Austausch des Pollenfilters',
        month: 'Monat', 
        year: 'Jahr',
    }

    const formTable = ['result_before', 'result_after', 'recommendation', 'pf_cleaning', 'ev_cleaning', 'pf_change', 'month', 'year']

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
                {formTable.slice(2,3).map((formElement) => (
                    <div key={formElement} className='w-full mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={temporariyLocale[formElement]}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
            <div className='w-full flex mt-4'>
                {formTable.slice(3,6).map((formElement) => (
                    <div key={formElement} className='w-1/3 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={temporariyLocale[formElement]}
                            setting={'checkbox'}
                            onChange={(event) => setFormData({...formData, [formElement]: (event.target.checked == true) ? 'on' : 'off' })}
                            checked={formData[formElement] === 'on' ? 'true' : 'false' }/>
                    </div>
                ))}
            </div>
            <div className='my-8'>

                <Title option={2} value={'Nächste Reinigung'}/>
            </div>
            <div className='w-full flex mt-8'>
                {/*Take only first two form entries*/}
                {formTable.slice(6,8).map((formElement) => (
                    <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                        <FormInput 
                            id={formElement}
                            value={formData[formElement]}
                            text={temporariyLocale[formElement]}
                            onChange={(event) => setFormData({...formData, [formElement]: event.target.value})}/>
                    </div>
                ))}
            </div>
        </div>
    )
}