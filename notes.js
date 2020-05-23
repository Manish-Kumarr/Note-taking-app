const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const  notes = loadNotes()
    debugger
        const duplicate = notes.find((note) => note.title === title)
            if(!duplicate){
            notes.push ({
                title:title,
                body:body
            })
            saveNotes(notes)
        }else{
            console.log(chalk.red.inverse("already title exixst"))
        }
}

const saveNotes = (note) => {
    const data = JSON.stringify(note)
    fs.writeFileSync("notes.json", data)
    console.log(chalk.green.inverse("note added"))
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return [ ]
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const deleteNote = notes.filter((note) => {
        return note.title !== title
    })

    if(notes.length > deleteNote.length){
        console.log(chalk.inverse.green("Note Removed"))
        saveNotes(deleteNote)
    }else{
        console.log(chalk.inverse.red("No note found"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) =>{
        console.log(chalk.blueBright.inverse(note.title))
    })
    console.log(chalk.red.inverse("Your Notes"))
}


const readNote = (title) =>{
    const  notes = loadNotes()
    const note = notes.find((note) => note.title == title )
    if(note){
        console.log(chalk.inverse.blueBright("Title = " + note.title))
        console.log(note.body)

    }else{
        console.log(chalk.red.inverse("No not found!"))
    }
}

module.exports = {
    listNotes:listNotes,
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote
}