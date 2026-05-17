//IMPORT - Hooks
import { useContext, useState} from "react"

//IMPORTS - Components
import { AccountContext } from "../components/AccountContext"
import NoteBook from "../components/NoteBook"

//IMPORTS - Styles
import styles from "./Favorites.module.css"

function Favorites(){
    const [displayTopic, setDisplayTopic] = useState("")

    const accountCtx = useContext(AccountContext)
    const currentNote = accountCtx.notes[displayTopic]
   
    const displayTopicHandler = (topicId) => {
        setDisplayTopic(topicId)
        if (displayTopic){
            setDisplayTopic("")
        }
    }

    return (
        <main className={styles.mainDiv}>
            <header className={styles.header}>
                <h1>User Account Saved Topics</h1>
                <NoteBook key ="general" id ="general"/>
            </header>
            {accountCtx.favoriteTopics.map((topic) => (
                <div key={topic.id} className={styles.divWrapper}>  
                    <button onClick = {() => displayTopicHandler(topic.id)}>{topic.name}</button>
                        {displayTopic === topic.id &&
                            <div className={styles.topicContent}> 
                                <div className= {styles.topicHeader}>
                                    <h1>{topic.name}</h1>
                                    <p>{topic.description}</p>
                                </div>
                                <div className= {styles.topicSourcesWrapper}>
                                    <div className= {styles.topicSource}>
                                        <h1>{topic.resources[0].title}</h1>
                                        <a href = {topic.resources[0].link} target="_blank" >Source Link: {topic.resources[0].summary}</a>
                                    </div>
                                    <div className= {styles.topicSource}>
                                        <h1>{topic.resources[1].title}</h1>
                                        <a href = {topic.resources[1].link} target="_blank" >Source Link: {topic.resources[1].summary}</a>
                                    </div>
                                </div>
                                {accountCtx.notes[displayTopic]
                                    ? <div className = {styles.notes}>
                                            {currentNote && currentNote.split("\n").map((note) =>
                                                <p>{note}</p>
                                            )}
                                    </div>
                                    : <></>
                                }
                                <NoteBook key={topic.id} id={topic.id}/>
                            </div>
                        }
                    </div>
                ))}
        </main>
    )
}

export default Favorites