export default function Title({value, option}) {
    {/*Option for biggest headline*/}
    if(option == 1) {
        return (
            <h1 className="text-4xl font-extrabold md:text-5xl text-darkblue">{value}</h1>
        )
    }
    {/*Option for medium headline*/}
    if(option == 2) {
        return (
            <h2 className="text-2xl font-bold md:text-3xl text-darkblue">{value}</h2>
        )
    }
    {/*Option for report generation progress headline*/}
    if(option == 3) {
        return (
            <h3 className="text-xl font-bold text-blue tracking-wider">{value}</h3>
        )
    }
}