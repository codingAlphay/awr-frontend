import Title from "../../../elements/Title"

export default function ProcessBar({step}) {
    if(step == 0)
    return <Title option={3} value={'1/3 - FAHRZEUG DATEN'}/>
    
    if(step == 1)
    return <Title option={3} value={'2/3 - FAHRZEUGHALTER DATEN'}/>
    
    if(step == 2)
    return <Title option={3} value={'3/3 - REINIGUNG DATEN'}/>
}
