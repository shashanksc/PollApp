import {writable} from 'svelte/store';
const PollStore = writable([
    {
        id: 1,
        question:'Java or C++?',
        answerA: 'java',
        answerB: 'c++',
        votesA: 15,
        votesB:9,
    },{
        id: 2,
        question:'Machine Learning or Cloud Computing?',
        answerA: 'Machine Learning',
        answerB: 'Cloud Computing',
        votesA: 5,
        votesB:2,
    },
    {
        id: 3,
        question:'Paris or Rome',
        answerA: 'Paris',
        answerB: 'Rome',
        votesA: 15,
        votesB:12,
    }
]);


export default PollStore;