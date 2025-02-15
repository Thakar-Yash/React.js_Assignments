import axios from "axios";
import React, {useEffect, useState} from "react"; 
import { Link, useNavigate, useParams } from "react-router-dom";

function Upadate() {
//   const [data, setData] = useState([]);
  const { id } = useParams();

  const [values, setValues] = useState({
      fname: "",
      lname: "",
      email: ""
    })

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((res) => {
        setValues(res.data)
      })
      .catch((err) => console.log(err));
  }, [])

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:3000/user/'+id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
        <h1>Update Employee</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-2">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="Enter First Name"
            value={values.fname}
            onChange={(e) => setValues({ ...values, fname: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Enter Last Name"
            value={values.lname}
            onChange={(e) => setValues({ ...values, lname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success m-3">
          Update
        </button>
        <Link to="/" className="btn btn-primary m-3">
          Back
        </Link>
      </form>
    </div>
  );
}

export default Upadate;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const Empcomponent = () => {
//     const [empdata,setEmpData] = useState({
//         name:"",
//         age:""
//     })
//     const [id,setId] = useState('')
//     const [data,setData] = useState([])
//     const handleChange = (e)=>{
//         // let nm = e.target.name
//         //let val = e.target.value
//        const {name,value} = e.target
//        setEmpData({
//             ...empdata,
//             [name]:value
//        })
//     }
//     const disp = ()=>{
//         axios.get("http://localhost:3000/users")
//         .then((msg)=>setData(msg.data))
//     }
//     useEffect(()=>{
//         disp()
//     },[])
//     const saveData = (e)=>{
//         e.preventDefault()
//         if(id!=''){
//             //update
//             axios.put("http://localhost:3000/users/"+id,empdata)
//             .then((msg)=>console.log(msg))
//             // let res = data.map((i,index)=>{
//             //     if(index == id){
//             //         i.name = empdata.name
//             //         i.age = empdata.age
//             //     }
//             //     return i
//             // })
//             // localStorage.setItem("userdata",JSON.stringify(res))
//             // setData(res)
//         } else {
//             //insert
//             // setData([
//             //     ...data,
//             //     empdata
//             // ])
//             axios.post("http://localhost:3000/users",empdata)
//             .then((msg)=>console.log(msg))
//         }
//         disp()
//         setEmpData({
//             name:"",
//             age:""
//         })
//         setId('')
//     }
//     const delData = (id)=>{
//         axios.delete("http://localhost:3000/users/"+id)
//         .then(()=>console.log("data deleted.."))
//         disp()
//         // let res = data.filter((i,index)=>{
//         //     return index!=id
//         // })
//         // data.splice(id,1)
//         // console.log(data);
//         // setData(res)
//     }
//     const editData = (id)=>{
//         axios.patch("http://localhost:3000/users/"+id)
//         .then((res)=>{
//             setEmpData({
//                 name:res.data.name,
//                 age:res.data.age
//             })
//             setId(res.data.id)

//         })
//         // let res = data.find((i,index)=>{
//         //     return index==id
//         // })

//     }
//   return (
//     <div>
//       <form action="#" method='post' onSubmit={saveData}>
//         <label htmlFor="">Name:</label>
//         <input type="text" name="name" id="name" onChange={handleChange} value={empdata.name}/><br /><br />
//         <label htmlFor="">Age:</label>
//         <input type="number" name="age" id="age" onChange={handleChange} value={empdata.age}/><br /><br />
//         <input type="submit" value='Save' /><br /><br />
//       </form>
//       <br /><br />
//       <table border={'2'}>
//         <thead>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 data.map((i,index)=>{
//                     return (
//                         <tr>
//                             <td>{i.id}</td>
//                             <td>{i.name}</td>
//                             <td>{i.age}</td>
//                             <td>
//                             <button onClick={()=>editData(i.id)}>Edit</button>
//                             <button onClick={()=>delData(i.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     )
//                 })
//             }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Empcomponent
