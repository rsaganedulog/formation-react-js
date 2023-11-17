import React from "react";

export default ({users}) => {
    const tableRows = users.map((user) => (
        <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.website}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
            <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    );
}
