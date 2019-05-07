"use strict";

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));

const dateOfLastCommit = username => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {headers: {'Authorization': gitHubKey}};
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data[0].created_at);
};
console.log(dateOfLastCommit('CarsonBelew').then(lastCommitDate =>
    console.log(lastCommitDate)));
