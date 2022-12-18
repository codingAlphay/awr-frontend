export default function ProcessBar({step}) {
    return (
        <div className="w-full flex mb-4">
            <div className="w-1/3 h-3 bg-green mr-2 rounded-xl"/>
            <div className={`w-1/3 h-3  mr-2 rounded-xl transition-all duration-500 ${step > 0 ? "bg-green" : "bg-lightgreen"}`}/>
            <div className={`w-1/3 h-3  mr-2 rounded-xl transition-all duration-500 ${step > 1 ? "bg-green" : "bg-lightgreen"}`}/>
        </div>
    )
}
