import React from "react";

export default ({users}) => {
    console.log(users)
    const listItems = users.map((user) => {
        <tr>
            <td>{user.email}</td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.website}</td>
        </tr>
    })

    console.log(listItems)
    return <>
        <table>
            <thead>
            <tr>
                <th>Email</th>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {listItems}
            </tbody>
        </table>

    </>
}