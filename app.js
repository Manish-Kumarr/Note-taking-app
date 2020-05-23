const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add a new note !',
    bundler: {
            title: {
                describe: 'Note title',
                demandOption:true,
                type: 'string'
            },
            body:{
                    describe: 'Body Part',
                    demandOption: true,
                    type: 'string'
            },
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove note !',
    bundler:{
        title:{
            describe:'Enter Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'listing new note !',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read note !',
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
