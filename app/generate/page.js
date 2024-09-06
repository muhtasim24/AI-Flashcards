// page in charge of generating flashcards

'use client'

import { useUser } from "@clerk/nextjs"
import { getDoc, writeBatch } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Generate(){
    const {isLoaded, isSignedIn, user} = useUser()    // lets us access the clerk auth variables
    const [flashcards, setFlashcards] = useState([])    // generate flashcards
    const [flipped, setFlipped] = useState([])  // used to flip flashcards 
    const [text, setText] = useState('') 
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false) // for modals
    const router = useRouter // used to route between pages

    // helper fucntion will submit our text to generate
    // sending to our api
    const handleSubmit = async () => {
        fetch('api/generate', {
            method:'POST', // sending the method, we are POST
            body: text, // sending in the body, the text
        })
            .then((res) => res.json()) // .then with the response, and process as JSON
            .then((data > setFlashcards(data))) // take the data, then setFlashcards with the data, response is going to be an array of flashcards
    }

    // helper function to hanlde flipping the flashcard
    const handleCardClick = (id) => { // get the id of the card
        setFlipped((prev) => ({
            ...prev,    // keep all the cards the same
            [id]: !prev[id] // card with the specific id, flip it, if its True, becomes false, vice versa
        }))
    }
    // helper function to open modals
    const handleOpen = () => {
        setOpenI(true)
    }

    // helper function to close modals
    const handleClose = () => {
        setOpenI(false)
    }

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name')
            return
        }

        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id) // user id 
        const docSnap = await getDoc(userDocRef) // get document snapshot
        
        // if docSnap exists
        if(docSnap.exists()) {
            const collections = docSnap.data().flashcards || []
            if (collections.find((f) => f.name === name)) {
                alert("Flashcard collection with the same name already exists.")
                return
            }
            else {
                collections.push({name})
                batch.set(userDocRef, {flashcards: collections}, {merge: true}) // set merge to true so we dont overwrite any previous data
            }
        }
        // if doesnt exists, set it
        else {
            batch.set(userDocRef, {flashcards: [{name}]})
        }
        
        // need to actually set each individual flashcard, above is just the name
        const colRef = collection(userDocRef, name) // collection for name of flashcards and collection of flashcards themselves
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flashcard)
        })

        // using batches, so we dont have to write the flashcards one by one
        await batch.commit()
        handleClose()
        router.push('/flashcards') // pushes to flashcard page
    }
}   