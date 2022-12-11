import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const [name, setName] = useState("")
    const [nationality, setNationality] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const url = "http://localhost:3001"

    const handleInputChange = (e) => {
        const {id, value} = e.target

        switch (id) {
            case "name":
                setName(value)
                break
            case "nationality":
                setNationality(value)
                break
            case "birthdate":
                setBirthdate(value)
                break
            case "gender":
                setGender(value)
                break
            case "city":
                setCity(value)
                break
            case "country":
                setCountry(value)
                break
            case "email":
                setEmail(value)
                break
            case "phoneNumber":
                setPhoneNumber(value)
                break
            case "username":
                setUsername(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                break
        }
    }

    let jsonData = {
        name: name,
        nationality: nationality,
        birthDate : birthdate,
        gender : gender,
        city : city,
        country : country,
        email : email,
        phoneNumber : phoneNumber,
        username : username,
        password : password
    }

    const handleSubmit = async () => {
        await axios.post(`${url}/user`, jsonData)
        .then(console.log(jsonData))
        .catch(error => console.log(`Error: ${error}`))
    }


    return (
        <div className="mt-4 px-2 d-flex justify-content-center">
            <form>
                <div className="form-row d-flex">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="name">Personal Info</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" required
                        value={name} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="gender"></label>
                        <input type="text" className="form-control" id="gender" placeholder="Gender (M/F)" required
                        value={gender} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="birthdate"></label>
                        <input type="text" className="form-control" id="birthdate" placeholder="Birthdate (DD/MM/YYYY)" required
                        value={birthdate} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="nationality"></label>
                        <input type="text" className="form-control" id="nationality" placeholder="Nationality" required
                        value={nationality} onChange={(e) => handleInputChange(e)}/>
                    </div>
                </div>
                <div className="form-row d-flex">
                    <div className="col-md-4 mb-3"> Contact Info
                        <label htmlFor="email"></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="email" className="form-control" id="email" placeholder="Email" aria-describedby="inputGroupPrepend2" required
                            value={email} onChange={(e) => handleInputChange(e)}/>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="phoneNumber"></label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" required
                        value={phoneNumber} onChange={(e) => handleInputChange(e)}/>
                    </div>
                </div>
                <div className="form-row d-flex">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city">Address</label>
                        <input type="text" className="form-control" id="city" placeholder="City" required
                        value={city} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="country"></label>
                        <input type="text" className="form-control" id="country" placeholder="Country" required
                        value={country} onChange={(e) => handleInputChange(e)}/>
                    </div>
                </div>
                <div className="form-row d-flex">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="username">Account</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" required
                        value={username} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="password"></label>
                        <input type="text" className="form-control" id="password" placeholder="Password" required
                        value={password} onChange={(e) => handleInputChange(e)}/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp