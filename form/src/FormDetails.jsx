import React, { useState } from 'react'
import './Form.css';

export const FormDetails = () => {
    const [user, setUser] = useState({
        name: "Manibala M",
        age: 22,
        isMarried: true,
        gender: "Male",
        country: "India",
        bio: "About myself"
    })
    function eventHandler(e) {
        const name = e.target.name;
        console.log(name);
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [name]: value });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>Martial</th>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>
            <form >
                <input type="text" name="name" onChange={eventHandler} value={user.name} placeholder='Enter the Full Name' />
                <input type="number" name="age" onChange={eventHandler} value={user.age} placeholder='Enter the Age' />
                <div className="gender">
                    <label htmlFor="gender" >
                        <input type="radio" onChange={eventHandler} name='gender' checked={user.gender == "Male"} value="Male" id='male' /> Male
                    </label><label htmlFor="gender">
                        <input type="radio" onChange={eventHandler} name='gender' checked={user.gender == "Female"} value="Female" id='female' /> Female
                    </label>
                </div>
                <label htmlFor="isMarried">
                    <input type="checkbox" onChange={eventHandler} name="isMarried" checked={user.isMarried} id="isMarried" /> Is Married
                </label>
                <div className="select-div">Country:
                    <select name="country" id="country" value={user.country} onChange={eventHandler}>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="China">China</option>
                    </select>
                </div>
                <textarea name="bio" onChange={eventHandler} placeholder='Write about yourself' id="bio" value={user.bio} cols="30" rows="5"></textarea>
            </form>
        </>
    )
}
