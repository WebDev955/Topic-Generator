
//IMPORTS - Styles
import styles from "./WhereToStart.module.css"



function WhereToStart({topic}){

    return(
        <div key={topic.id} className={styles.whereToStartWrapper}>
            <h1 className={styles.h1}>Where to Start</h1>
            <div className={styles.resourcesDiv}>
                <div className={styles.links}>
                    <h2>{topic.resources[0].title}</h2>
                        <p>{topic.resources[0].summary}</p>
                        <a href = {topic.resources[0].link} target="_blank" >Click Here to Explore this resource.</a>
                    <h2>{topic.resources[1].title}</h2>
                        <p>{topic.resources[1].summary}</p>
                        <a href = {topic.resources[1].link} target="_blank" >Click Here to Explore this resource.</a>
                </div>
            </div>
        </div>
    ); 
}
export default WhereToStart