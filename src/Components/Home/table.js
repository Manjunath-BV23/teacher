import { useState, useEffect } from "react";
import { addData } from "../../Redux/Data/action.js";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios"

 export const Table = ({toggleShow, show, setshow}) => {
//   const {data} = useSelector((store) => (store.data))
  const [teachers, setTeachers] = useState([])
//   const dispatch = useDispatch();

//   const getData = () => {
//     fetch("http://localhost:8080/teacher")
//       .then((res) => res.json())
//       .then((value) => dispatch(addData(value)));
//   };
  

    useEffect(() => {
        getTeacher();
    }, [teachers])

    const getTeacher = () => {
        axios.get("http://localhost:8080/teacher").then((res) => {
            setTeachers(res.data)
        })
    }

//   const handleDelete = (id) => {
//     fetch(`https://big-geode-ski.glitch.me/cities/${id}`, {
//       method: "DELETE"
//     })
//     .then(alert("Proceed To Delete ?"))
//     .then(getData())
//   }

//   useEffect(() => {
//     getData();
//   }, []);
//   console.log(data)
  return (
    <table border="1px solid black">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
            <th>Grade</th>
            <th>Section</th>
            <th>Subject</th>
          
          {/* <th>Edit</th>
          <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {teachers.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.teacher_name}</td>
            <td>{e.gender}</td>
            <td>{e.age}</td>
            <td>{e.grade}</td>
            <td>{e.section}</td>
            <td>{e.subject}</td>
            

            
            {/* <td>
              <button onClick = {() => {toggleShow(e)}} style = {{backgroundColor: "green", color: "white", fontWeight: "bold", fontSize: "14px", borderRadius:"3px"}}>Edit</button>
            </td>
            <td>
              <button onClick = {() => {handleDelete(e.id)}} style = {{backgroundColor: "red", color: "white", fontWeight: "bold", fontSize: "14px", borderRadius:"3px"}}>Delete</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};