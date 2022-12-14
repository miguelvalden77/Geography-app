import Link from "next/link"

const Navbar = ()=>{
    return(
        <nav>
            <Link href={`/`}>Home</Link>
            <Link href={`/countries`}>Countries</Link>
            <Link href={`/compare`}>Compare</Link>
        </nav>
    )
}

export default Navbar