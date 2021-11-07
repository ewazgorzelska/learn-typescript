enum Proficiency {
    Junior = 'junior',
    Regular = 'regular',
    Expert = 'expert'
};

interface Candidate {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    mainLanguage: string,
    proficiency: Proficiency,
    hobbies: string[]
}

const candidate = {
    firstName: "John",
    lastName: 'Doe',
    age: 29,
    email: "john.doe@com",
    mainLanguage: "C#",
    proficiency: Proficiency.Expert,
    hobbies: ['sport', 'netflix', 'books']
}

function getName(candidate: Candidate): string {
    return `${candidate.firstName} ${candidate.lastName}`;
};

function processCandidate(candidate: Candidate) {
    const fullName = getName(candidate);
    console.log('hello, ' + fullName + '!');

    if (candidate.email == null) {
        console.log('We cannot process your resume because email is missing');
        return;
    }
    if (candidate.proficiency === Proficiency.Junior || candidate.proficiency === Proficiency.Regular) {
        console.log('Unfortunately right now we\'re looking for ' + candidate.mainLanguage + ' experts :(');
        return;
    }
    if (candidate.age.length < 2) {
        console.log('You are too young');
    }
    console.log('Your resume is being processed');
};

processCandidate(candidate)
