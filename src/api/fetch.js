// import React, {useState} from 'react';



async function findUserByUsername(username) {
    const result = await fetch(`http://localhost:8081/authentication/${username}`)
    .then(res => res.json())
    .then(res => res)
    // .then(res => console.log(`db response: ${res}`));
    // .then(res => {return res});
    return result
};

// async function findUserByUsername(username, setState) {
//     const result = await fetch(`http://localhost:8081/authentication/${username}`)
//     .then(res => res.json())
//     .then(res => setState({userId: res}))
//     // .then(res => console.log(`db response: ${res}`));
//     // .then(res => {return res});
//     return result
// };

module.exports = {findUserByUsername};