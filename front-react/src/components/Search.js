import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchCity, setSearchCity] = useState('São Paulo')
    const url = "http://localhost:3002"

    useEffect(() => {
        console.log("Searching...")
        console.log(searchCity)
    }, [searchCity])



    return (
        <div className="mt-2 d-flex justify-content-center">
            <form onSubmit={(e) => setSearchCity(e.target.value)} className="form-inline my-2 my-lg-0 d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by city" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search