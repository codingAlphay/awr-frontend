export default function FormInput({value}) {
    return (
        <div class="relative z-0 mb-6 w-full group">
            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-darkblue bg-transparent border-0 border-b-2 border-green appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute font-bold text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkblue
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value}</label>
        </div>
    )
}