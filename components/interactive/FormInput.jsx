export default function FormInput({text, value, id, onChange, checked, type, setting}) {

    if(setting == 'checkbox')
    return (
        <div className="flex items-center mb-4">
            <input id={id} onChange={onChange} type="checkbox" value="" className="w-6 h-6 text-green accent-green bg-gray-100 rounded border-gray-300 focus:ring-green dark:focus:ring-green " {...(checked == 'true' ? {checked} : {})}/>
            <label htmlFor={id} className="ml-2 text-sm font-medium text-darkblue">{text}</label>
        </div>
    )
    return (
        <div className="relative z-0 w-full mb-6 group">
            <input type={type == null ? "text" : type }  name={id} onChange={onChange} value={value} id={id} className="block py-2.5 px-0 w-full text-sm text-darkblue bg-transparent border-0 border-b-2 border-green appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor={id} className="absolute font-bold text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkblue
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{text}</label>
        </div>
    )
}