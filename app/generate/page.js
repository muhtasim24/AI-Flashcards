// page in charge of generating flashcards

'use client'

import { useUser } from "@clerk/nextjs"
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
}   