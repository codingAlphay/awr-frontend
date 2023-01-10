export default function CustomButton({value, setting}) {

    if(setting == "text") {
        return (
            <button type="button" className="px-16 py-3 mb-2 mr-2 text-sm font-medium text-center text-white rounded-full bg-green hover:bg-hovergreen ">{value}</button>
        )
    } else if(setting == "prev") {
        return (
            <button type="button" className="transition-all hover:-translate-x-[2px] duration-150 text-white hover:text-green bg-green hover:bg-hovergreen rotate-180  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 mb-2">
                <svg aria-hidden="true" className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        )
    } else if(setting == "next") {
        return (
            <button type="button"  className="transition-all hover:translate-x-[2px] duration-150 text-white hover:text-green bg-green hover:bg-hovergreen  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 mb-2">
                <svg aria-hidden="true" className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        )
    } else if(setting == "delete") {
        return (
            <button type="button" className="inline-flex items-center p-3.5 mb-2 text-sm font-medium text-center text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-300 fill-black">
                {value} <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="15" height="15" viewBox="0 0 16.763 19.157"><path id="trash-can-solid" d="M5.059.662A1.193,1.193,0,0,1,6.129,0h4.5A1.193,1.193,0,0,1,11.7.662l.269.535h3.592a1.2,1.2,0,0,1,0,2.395H1.2A1.2,1.2,0,1,1,1.2,1.2H4.789ZM1.2,4.789H15.565V16.763a2.4,2.4,0,0,1-2.395,2.395H3.592A2.4,2.4,0,0,1,1.2,16.763ZM4.789,7.184a.6.6,0,0,0-.6.6v8.381a.6.6,0,0,0,1.2,0V7.783A.6.6,0,0,0,4.789,7.184Zm3.592,0a.6.6,0,0,0-.6.6v8.381a.6.6,0,0,0,1.2,0V7.783A.6.6,0,0,0,8.381,7.184Zm3.592,0a.6.6,0,0,0-.6.6v8.381a.6.6,0,0,0,1.2,0V7.783A.6.6,0,0,0,11.973,7.184Z" fill="#fff"/></svg>
            </button>
        )
    }  else if(setting == "open") {
        return (
            <button type="button" className="inline-flex items-center p-3.5 mb-2 text-sm font-medium text-center text-white transition-all duration-150 bg-gray-400 rounded-full hover:bg-gray-300 fill-black">
                Bericht Öffnen <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="ml-2" viewBox="0 0 24.239 18.851"><path id="eye-solid" d="M12.142,32a11.84,11.84,0,0,0-8.1,3.391A16.672,16.672,0,0,0,.129,40.908a1.338,1.338,0,0,0,0,1.035,16.672,16.672,0,0,0,3.909,5.516,11.84,11.84,0,0,0,8.1,3.391,11.84,11.84,0,0,0,8.1-3.391,16.8,16.8,0,0,0,3.913-5.516,1.338,1.338,0,0,0,0-1.035,16.756,16.756,0,0,0-3.913-5.516A11.84,11.84,0,0,0,12.142,32ZM18.2,41.425a6.059,6.059,0,1,1-6.059-6.059A6.061,6.061,0,0,1,18.2,41.425Zm-6.059-2.693a2.7,2.7,0,0,1-2.693,2.693,2.637,2.637,0,0,1-1.33-.353c-.008.118-.017.231-.017.353a4.039,4.039,0,1,0,4.039-4.039,3.313,3.313,0,0,0-.353.017A2.681,2.681,0,0,1,12.142,38.732Z" transform="translate(-0.025 -32)" fill="#fff"/></svg>
            </button>
        )
    }

}



// Icon Description ja oder nein ?

//text = beliebiger Text
//prev = <--
//next = -->