/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const firstNote = {
    id: 1,
    text: "Roses are red.",
    author: "Queen of Hearts",
    date: "08/18/1942",
    topics: ["observation", "learning", "irrelevant"]
}

const secondNote = {
    id: 2,
    text: "Simplicity is the soul of efficiency",
    author: "Austin Freeman", 
    date: "08/18/1935",
    topics: ["observation", "coding", "inspiration" ]

}
 
const thirdNote = {
    id: 3,
    text: "Modify for loop to iterate through array",
    author: "John Doe",
    date: "08/18/2022",
    topics: ["instruction", "coding", "edits"]
}

const fourthNote = {
    id: 4,
    text: "I'm glad Labor Day weekend is almost here.",
    author: "Ashlee Smith", 
    date: "08/17/2022",
    topics: ["observational", "scheduling", "feelings"]

}

const fifthNote = {
    id: 5,
    text: "Check to make sure there are no superfluous commas or brackets.",
    author: "Jeremy Branch",
    date: "08/15/2022",
    topics: ["coding", "instruction", "learning", "edits"]

}
notes.push(firstNote)
notes.push(secondNote)
notes.push(thirdNote)
notes.push(fourthNote)
notes.push(fifthNote)
console.log(notes)
console.log("*** Average Topics Per Note***")
let totalTopics = 0
for (const note of notes){
     
     totalTopics += note.topics.length
     //console.log(totalTopics)
     
}

let averageTopics = totalTopics / notes.length
console.log(averageTopics)

const filteredNotes = []

for (const note of notes) {
    if(note.topics.includes("coding")){
        filteredNotes.push(note)
    }
}
console.log("*** Notes with the coding topic ***")
console.log(filteredNotes)

console.log("*** Note Articles ***")

for (const note of notes) {
    let topicString = note.topics.join("</section>\n<section>")
    console.log(`<article>\n${note.text}\n<section>${topicString}</section>\n</article>`)
    
    
}
