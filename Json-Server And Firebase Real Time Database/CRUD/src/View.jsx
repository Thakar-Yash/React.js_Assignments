import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function View() {
  const [data, setData] = useState([])
    const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/user/'+ id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-80">
        <h1>Employee Details</h1>
        <div className="mb-2">
          <strong>First Name : {data.fname}</strong>
        </div>
        <div className="mb-2">
          <strong>Last Name : {data.lname}</strong>
        </div>
        <div className="mb-2">
          <strong>Emp Email : {data.email}</strong>
        </div>
        <Link to={`/Update/${id}`} className="btn btn-success m-3">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary m-3">
          Back
        </Link>
        </div>
        </div>
  )
}

export default View;
