import NavbarElement from "./NavbarElement"

export default function Navbar() {

    return (
        <>
            <div className="fixed w-full">
                <div className="flex items-center mx-auto font-extrabold h-28 max-w-7xl">
                    <div className="mr-8">
                        <NavbarElement type={'logo'}/>
                    </div>
                    <NavbarElement type={'generator'}/>
                    <NavbarElement type={'archive'}/>
                </div>
            </div>
            <div className="h-24"/>
        </>
    )
}