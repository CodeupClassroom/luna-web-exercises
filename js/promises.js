"use strict";

{

    // const wait = (milliseconds) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, milliseconds);
    //     });
    // };
    //
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    const GITHUB_API_URL = 'https://api.github.com';

    function getDateOfLastCommit(username) {
        const ENDPOINT = `/users/${username}/events/public`;
        const CONFIG = {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        }
        return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
            .then(response => response.json())
            .then(events => {
                let mostRecentEvent = events.find((event) => event.type === 'PushEvent');
                let dateOfMostRecentPush = new Date(mostRecentEvent['created_at']).toDateString();
                return dateOfMostRecentPush;
            });
    }

    getDateOfLastCommit('jreich5')
        .then(console.log)
        .catch(console.error);

}