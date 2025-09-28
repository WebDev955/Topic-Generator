//IMPORT - Hooks
import { useContext, useEffect } from "react"

//IMPORTS - Components
import { AccountContext } from "../components/AccountContext"
import Bttn from "./Bttn"

//IMPORTS - Styles
//import styles from "./NoteBook.module.css"

function NoteBook({id}){

    const accountCtx = useContext(AccountContext)
    
    // load notes from localStorage
    useEffect(() => {
       const raw = localStorage.getItem("Notes-" + id);
       
       try{
        const savedNote = JSON.parse(raw);
        if (savedNote) {
            accountCtx.setNotes(prev => ({
            ...prev,
            [id]: savedNote
        }));
    }

     } catch (err) {
        console.error("Failed to parse notes from localStorage for id:", id, err);
    }
},[id]);

    return( 
        <div id = {id}>
             <Bttn onClick = {() => accountCtx.editingNotes(id)}>Notes</Bttn>
                {id === accountCtx.isEditingNotes && 
                    <div>
                        <textarea
                            value = {accountCtx.notes[id]}
                            onChange={(e) => accountCtx.updateNotes(e.target.value, id)}
                        />
                        <Bttn onClick= {() => accountCtx.saveNotes(id)}>Save</Bttn>
                    </div>
                }
        </div>
    )
}
export default NoteBook