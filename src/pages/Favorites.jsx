//IMPORT - Hooks
import { useContext } from "react"

//IMPORTS - Components
import { AccountContext } from "../components/AccountContext"
import NoteBook from "../components/NoteBook"

//IMPORTS - Styles
import styles from "./Favorites.module.css"

function Favorites(){
    const accountCtx = useContext(AccountContext)

    return (
        <main className={styles.mainDiv}>
            <header className={styles.header}>
                <h1>User Account Saved Topics</h1>
                <NoteBook key ="general" id ="general"/>
            </header>
            {accountCtx.favoriteTopics.map((topic) => (
                <div key={topic.id} className={styles.topicContent}>
                    <div  className={styles.topicDes}>
                        <h1>{topic.name}</h1>
                        <p>{topic.description}</p>
                    <div/>
                    <div className={styles.resourcesDiv}>
                        <h1>{topic.resources[0].title}</h1>
                        <a href = {topic.resources[0].link} target="_blank" >{topic.resources[0].link}</a>
                        <p>{topic.resources[0].summary}</p>

                        <h1>{topic.resources[1].title}</h1>
                        <a href = {topic.resources[1].link} target="_blank" >{topic.resources[1].link}</a>
                        <p>{topic.resources[1].summary}</p>
                        <NoteBook key={topic.id} id={topic.name}/>
                    </div>
                    </div>
                </div>
                ))}
        </main>
    )
}

export default Favorites