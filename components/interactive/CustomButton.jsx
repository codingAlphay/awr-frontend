export default function CustomButton({value, setting}) {

    if(setting == "text") {
        return (
            <button type="button" className="text-white bg-green hover:bg-hovergreen font-medium rounded-full text-sm px-16 py-3 text-center mr-2 mb-2 ">{value}</button>
        )
    } else if(setting == "prev") {
        return (
            <button type="button" className="text-white bg-green hover:bg-hovergreen rotate-180  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 mb-2">
                <svg aria-hidden="true" className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        )
    } else if(setting == "next") {
        return (
            <button type="button"  className="text-white bg-green hover:bg-hovergreen  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 mb-2">
                <svg aria-hidden="true" className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        )
    }

}



// Icon Description ja oder nein ?

//text = beliebiger Text
//prev = <--
//next = -->