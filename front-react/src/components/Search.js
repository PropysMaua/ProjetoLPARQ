import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {

    const [searchCity, setSearchCity] = useState('')
    const [usersSearch, setUsersSearch] = useState([])
    const url = "http://localhost:3002"

    useEffect(() => {
        const aux = async () => {
            const res = await axios.get(`${url}/search-user?city=${searchCity}`)
            setUsersSearch(res.data)
            console.log(res.data)
        }
        const timeoutID = setTimeout(() => {
            aux()
            .catch(error => console.log(`Error: ${error}`))
        }, 2000)
        return()=>{
            clearTimeout(timeoutID)
        }
    }, [searchCity])

    const displayData = usersSearch.map((info)=>{
        return(
            <tr key={info.id}>
                <td>{info.name}</td>
                <td>{info.nationality}</td>
                <td>{info.city}</td>
                <td>{info.country}</td>
                <td>{info.email}</td>
                <td>{info.phoneNumber}</td>
            </tr>
        )
    })



    return (
        <div className="mt-2 justify-content-center">
                <input onChange={(e) => setSearchCity(e.target.value)} className="form-control mr-sm-2" 
                type="search" placeholder="Search by city" aria-label="Search"/>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}


export default Search