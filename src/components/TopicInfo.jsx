import WhereToStart from "./WhereToStart"

//IMPORTS - Styles
import styles from "./TopicInfo.module.css"

function TopicInfo({topic}){
    
    return(
        <>
        <div key={topic.id} className={styles.mainDiv}>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
        </div>
            <WhereToStart topic={topic}/>
        </>
    )
}

export default TopicInfo