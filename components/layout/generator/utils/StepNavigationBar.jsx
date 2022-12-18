import CustomButton from '../../../interactive/CustomButton'
import Router from 'next/router'

export default function StepNavigationBar({formData, viewStep, setViewStep, setFilledState}) {
    return (
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
                <div onClick={() => {
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
                    console.log('funzt')
                    } else {
                        setFilledState(true)
                    }
                }}>
                    <CustomButton setting={'text'} value={'Erstellen'} />
                </div>
            ) : (
                <>
                    <div onClick={() => setViewStep(viewStep + 1)}>
                        <CustomButton setting={'next'} />
                    </div>
                </>
            )}
        </div>
    )
}