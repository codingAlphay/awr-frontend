import FormInput from '../../../interactive/FormInput'
import Title from '../../../elements/Title'

export default function StepThree({locale, formData, setFormData}) {
    const t = locale
    const dict = {
        result_before: t.before,
        result_after: t.after,
        recommendation: t.service,
        cleaned_on_year: 'Gereinigt am (Monat)',
        cleaned_on_month: 'Gereinigt am (Jahr)',
        pf_cleaning: t.incl_cleaning_box,
        ev_cleaning: t.incl_cleaning_evaporator,
        pf_change: t.incl_change_filter,
        month: t.month,
        year: t.year,
    }

    const formTable = ['result_before', 'result_after', 'recommendation', 'cleaned_on_year', 'cleaned_on_month', 'pf_cleaning', 'ev_cleaning', 'pf_change', 'month', 'year']

    return (
        <div className='mt-12 generator-step-two'>
            <div className='pl-4 my-6 border-4 border-transparent border-l-green'>
                <div className='my-4'>
                    <Title option={2} value={t.measurement_data + ' *'} />
                </div>
                <div className='flex w-2/3 mt-8 ml-1'>
                    {formTable.slice(0, 2).map((formElement) => (
                        <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                            <FormInput
                                id={formElement}
                                value={formData[formElement]}
                                text={dict[formElement]}
                                type={'number'}
                                onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='pl-4 my-6 border-4 border-transparent border-l-green'>
                <div className='my-4'>
                    <Title option={2} value={t.recommendation + ' *'} />
                </div>

                <div className='flex w-full mt-6'>
                    <div className='w-3/4'>
                        {formTable.slice(2, 3).map((formElement) => (
                            <div key={formElement} className='w-full mx-2 first:ml-0 last:mr-0'>
                                <FormInput
                                    id={formElement}
                                    value={formData[formElement]}
                                    setting={'select'}
                                    locale={locale}
                                    onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                            </div>
                        ))}
                        {formData.recommendation == '1' && (
                            <div className='flex w-full mt-8 ml-1'>
                            {formTable.slice(3, 5).map((formElement) => (
                                <div key={formElement} className='mx-2 first:ml-0 last:mr-0'>
                                    <FormInput
                                        id={formElement}
                                        value={formData[formElement]}
                                        text={dict[formElement]}
                                        type={'number'}
                                        onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                    <div className='flex flex-col w-full ml-8'>
                        {formTable.slice(5, 8).map((formElement) => (
                            <div key={formElement}>
                                <FormInput
                                    id={formElement}
                                    value={formData[formElement]}
                                    text={dict[formElement]}
                                    setting={'checkbox'}
                                    onChange={(event) => setFormData({ ...formData, [formElement]: (event.target.checked == true) ? 'on' : 'off' })}
                                    checked={formData[formElement] === 'on' ? 'true' : 'false'} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pl-4 my-6 border-4 border-transparent border-l-green'>
                <div className='my-4'>
                    <Title option={2} value={t.next_cleaning + ' *'} />
                </div>
                <div className='flex w-1/2 mt-8 ml-1'>
                    {formTable.slice(8, 10).map((formElement) => (
                        <div key={formElement} className='w-1/2 mx-2 first:ml-0 last:mr-0'>
                            <FormInput
                                id={formElement}
                                value={formData[formElement]}
                                text={dict[formElement]}
                                type={'number'}
                                onChange={(event) => setFormData({ ...formData, [formElement]: event.target.value })} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}