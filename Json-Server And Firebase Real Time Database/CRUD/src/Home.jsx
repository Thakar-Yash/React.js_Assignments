import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import View from "./View";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to Delete the Record?");
    if(confirm) {
      axios.delete(`http://localhost:3000/user/${id}`)
      .then(res => {
        location.reload()
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-80">
      <h1>Employee List</h1>
      <div className="w-10 rounded bg-white border shadow p-4">
        <div> <Link to="/Create" className="btn btn-sm btn-primary m-3">Add Employee </Link></div>
        <table border={2} cellPadding={10} cellSpacing={20}>
        <thead>
          <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.fname}</td> 
                            <td>{d.lname}</td>
                            <td>{d.email}</td>
                            <td>
                              <Link to={`/Update/${d.id}`} className='btn btn-sm btn-primary m-2'>Update</Link>
                              <button onClick={(e) => handleDelete(d.id)} className="btn btn-sm btn-danger m-2">Delete</button>
                              <Link to={`/View/${d.id}`} className="btn btn-sm btn-primary m-2">View</Link>
                            </td>
                        </tr>
                    )
                )
            }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;
