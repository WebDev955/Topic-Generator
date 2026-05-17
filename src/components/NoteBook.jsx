//IMPORT - Hooks
import { useContext, useEffect} from "react"

//IMPORTS - Components
import { AccountContext } from "../components/AccountContext"
import Bttn from "./Bttn"


//IMPORTS - Styles
import styles from "./NoteBook.module.css"

function NoteBook({id}){

    const accountCtx = useContext(AccountContext)
    const editingNotes = accountCtx.isEditingNotes
    

    // load notes from localStorage
    useEffect(() => {
       const raw = localStorage.getItem("Notes-" + id);
       try {
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
        <div id = {id} className={styles.notebookWrapper}>
             <Bttn onClick = {() => accountCtx.editingNotes(id)}> {editingNotes === id ? "Close" :"Add Notes"}</Bttn> 
             {editingNotes === id ? <Bttn onClick= {() => accountCtx.saveNotes(id)}>Save</Bttn> : ""}
                {id === accountCtx.isEditingNotes && 
                    <div>
                        <textarea
                            value = {accountCtx.notes[id]}
                            defaultValue={"Provide notes and questions regarding this topic."}
                            onChange = {(e) => accountCtx.updateNotes(e.target.value, id)}
                        />
                    </div>
                }
        </div>
    )
}
export default NoteBook