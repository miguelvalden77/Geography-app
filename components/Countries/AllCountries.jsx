import next from "next"
import Link from "next/link"


const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.RapidAPIKey
        // "X-RapidAPI-Host": process.env.RapidAPIHost
    }
}

const listFunction = (obj)=>{
    const codes = Object.keys(obj)
    const countries = Object.values(obj)

    const newArr = codes.map((e, index)=>{
        return {code: e, name: countries[index]}
    })

    return newArr
}

const getAllCountries = async ()=>{

    const response = await fetch("https://countries-cities.p.rapidapi.com/location/country/list", options,{next:{
        revalidate: 15
    }})
    const data = await response.json()

    const list = listFunction(data.countries)
    return list

}

const AllCountries = async ()=>{

    const countries = await getAllCountries()

    return(
        <section>
            {
                countries.map(country=>{
                    return(
                        <article>
                            <Link href={`/countries/${country.name}`}>
                                <p>{country.name}</p>
                            </Link>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default AllCountries