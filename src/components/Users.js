import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function Users() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(
        response=>setData(response.data)
    ).catch(err=>console.log(err))
  },[])
  return (
    <div>
        <h1>Users</h1>
        <table border= "4">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
            </tr>
            {data.map( doc=> (
                <tr key={doc.id}>
                    <td>{doc.id}</td>
                    <td>{doc.name}</td>
                    <td>{doc.username}</td>
                    <td>{doc.email}</td>
                </tr>
            ))}
        </table>
    </div>

  )
}
