import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'

const ViewVol = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:4000/view-vol").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
    return (


        <div className="container">
            <NaviBar />

            <div className="row">
                <div className="col-12">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Volunteer ID</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date Of Birth</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Department</th>
                                <th scope="col">Year Of Study</th>
                                <th scope="col">Camp Name</th>
                                <th scope="col">Hours Completed</th>
                                <th scope="col">Address</th>
                                <th scope="col">Unit Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.volunteerId}</td>
                                    <td>{value.fullName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.dateOfBirth}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.bloodGroup}</td>
                                    <td>{value.department}</td>
                                    <td>{value.yearOfStudy}</td>
                                    <td>{value.campName}</td>
                                    <td>{value.hoursCompleted}</td>
                                    <td>{value.address}</td>
                                    <td>{value.unitNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>


    )
}

export default ViewVol








