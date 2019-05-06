const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// ****************** user object has at least 3 languages
const threeLanguages = users.filter((n) => {
        return n.languages.length >= 3;
});
console.log(threeLanguages);
// ******************

// // practice for users that have 5 or more years of experience
// const yearsOfExp = users.filter((e) => {
//     return e.yearsOfExperience >= 5;
// });
// console.log(yearsOfExp);

// practice for filtering users with a name that has 4 letters or less
// const shortNames = users.filter((s) => {
//     return s.name.length <= 4;
// });
// console.log(shortNames);

// practice for filtering users with a name that has greater than 4 letters
// const longNames = users.filter((l) => {
//     return l.name.length > 4;
// });
// console.log(longNames);

// ****************** Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map((e) => {
    return e.email;
});
console.log(userEmails);
// ******************

// // practice for mapping an array of strings of each users name
// const userNames = users.map((un) => {
//     return un.name;
// });
// console.log(userNames);

// ****************** Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const getAverageExperience = persons => {

    let totalExperience = users.reduce((total, person) => {
        return person.yearsOfExperience  + total;
    }, 0);
    console.log(totalExperience);
    return totalExperience/persons.length;
};
console.log(getAverageExperience(users));
// ******************

// ****************** Use reduce to get the longest email from the list of users.
