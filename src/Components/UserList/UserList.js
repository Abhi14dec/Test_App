import React, { useEffect, useState } from 'react';
import members from './Json/user.json'


function UserList() {
    const [userList, setUserList] = useState([]);
    const [activityPeriods, setActivityPeriods] = useState([])

    useEffect(() => {
        if (members.ok === true) {
            setUserList(members.members)
        }
    });

    const activeTime = (activity_periods) => {
        setActivityPeriods(activity_periods);
    }

    return (
        <div className="container">
            <h3>User List</h3>
            <hr />
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Time Zone</th>
                            <th scope="col">Last Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{`${index + 1}.`}</th>
                                    <td>{user.real_name}</td>
                                    <td>{user.tz}</td>
                                    <td><button type="button" className="btn btn-outline-info" onClick={activeTime.bind(this, user.activity_periods)} data-toggle="modal" data-target="#exampleModal">View</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal" tabIndex="-1" role="dialog" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">User Last Activity</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sno.</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">End Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activityPeriods.map((active, index) => {
                                        return (
                                            <tr>
                                                <td scope="row">{index + 1}</td>
                                                <td>{active.start_time}</td>
                                                <td>{active.end_time}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
