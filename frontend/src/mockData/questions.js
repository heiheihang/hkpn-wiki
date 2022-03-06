let questions = {
    status: "success",
    data: [
        {
            questionId: 1,
            questionText: "What should I prepare for coding interviews?",
            answerText: "Do more Leetcode!",
            timeCreated: "1100", //in seconds in database, just put random number first. Bigger number -> more recent
            timeUpdated: "1100",
            userId: "a",
            group: "CS"
        },
        {
            questionId: 2,
            questionText: "What should I do to increase my chance of interview?",
            answerText: "",  //handle empty answer (they should not appear in the frontend)
            timeCreated: "1300", //in seconds in database, just put random number first. Bigger number -> more recent
            timeUpdated: "1300",
            userId: "b",
            group: "CS"
        },
        {
            questionId: 3,
            questionText: "What are the differences between CPT and OPT?",
            answerText: "CPT has to be approved by your university to work during your study. OPT is usually used after your graduation.",
            timeCreated: "1500", //in seconds in database, just put random number first. Bigger number -> more recent
            timeUpdated: "1500",
            userId: "b",
            group: "Pinned"  //this is not a defined group, and should be treated differently 
        }
    ]
}

export default questions