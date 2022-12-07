import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UsersList = () => {
    
    const [users, getUsers] = useState([])
    const url = 'http://localhost:3000'

    useEffect(() => {
        getAllUsers()
    }, [])

    async function getAllUsers() {
        await axios.get(`${url}/user/getAll`)
        .then((res) => {
            const usersData = res.data
            getUsers(usersData)
        })
        .catch(error => console.log(`Error: ${error}`))
        }

    const displayData = users.map((info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.nationality}</td>
                    <td>{info.birthDate}</td>
                    <td>{info.gender}</td>
                    <td>{info.city}</td>
                    <td>{info.country}</td>
                    <td>{info.email}</td>
                    <td>{info.phoneNumber}</td>
                    <td>{info.username}</td>
                    <td>{info.password}</td>
                </tr>
            )
        }
    )
    
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Nationality</th>
                    <th>birthDate</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Username</th>
                    <th>Password</th>
                    </tr>
                </thead>
                <tbody>           
                    {displayData}   
                </tbody>
            </table> 
        </div>
    )
}

export default UsersList