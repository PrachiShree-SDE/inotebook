import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
  {
    "_id": "69b14e8594655bce4192a148",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:13.070Z",
    "__v": 0
  },
  {
    "_id": "69b14e8794655bce4192a14a",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:15.011Z",
    "__v": 0
  },
  {
    "_id": "69b14e8594655bce4192a148",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:13.070Z",
    "__v": 0
  },
  {
    "_id": "69b14e8794655bce4192a14a",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:15.011Z",
    "__v": 0
  },
  {
    "_id": "69b14e8794655bce4192a14a",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:15.011Z",
    "__v": 0
  },
  {
    "_id": "69b14e8594655bce4192a148",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:13.070Z",
    "__v": 0
  },
  {
    "_id": "69b14e8794655bce4192a14a",
    "user": "69b065b512319f74dada316f",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-03-11T11:14:15.011Z",
    "__v": 0
  }
]

const [notes, setNotes] = useState(notesInitial)
   return (
    <NoteContext.Provider value ={{notes, setNotes}}>
        {props.children};
    </NoteContext.Provider>
   )
}

export default NoteState;