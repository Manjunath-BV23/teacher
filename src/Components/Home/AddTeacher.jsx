import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const AddTeacher = () => {
    const [data, setData] = useState({
        teacher_name: "",
        gender: "",
        age: "",
        grade: "",
        section: "",
        subject: ""

    })
    const handleChange = (e) => {
        const {className, value} = e.target;
        setData({
            ...data,
            [className]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/teacher", data).then(() => {
            console.log(data)
        })
    }
    return (
        <div>
            <Link to="/"><button>Goto Home</button></Link>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="">Name: </label>
                <input type="text" className="teacher_name" value={data.teacher_name} onChange={handleChange}/><br />
                <label htmlFor="">Gender: </label>
                <input type="text" className="gender" value={data.gender} onChange={handleChange}/><br />
                <label htmlFor="">Age: </label>
                <input type="number" className="age" value={data.age} onChange={handleChange}/><br />
                <label htmlFor="">Grade: </label>
                <input type="text" className="grade" value={data.grade} onChange={handleChange}/><br />
                <label htmlFor="">Section: </label>
                <input type="text" className="section" value={data.section} onChange={handleChange}/><br />
                <label htmlFor="">Subject: </label>
                <input type="text" className="subject" value={data.subject} onChange={handleChange}/>

                <br /><br />

                <input type="submit" value={"Add Teacher"}/>
            </form>
        </div>
    )
}