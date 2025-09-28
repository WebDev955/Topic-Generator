import Bttn from "../components/Bttn";
import TopicInfo from "../components/TopicInfo";
import { useContext, useState } from "react";
import Topics from "../data/Topics";
import { AccountContext } from "../components/AccountContext";

//IMPORTS - Styles
import styles from "./HomePage.module.css"

function HomePage(){    
    const accountCtx = useContext(AccountContext)

    //Store randomly generated Topic
    const [randomTopic, setRandomTopic] = useState(null)

    //Genrate topic upon button press
        //a. randomIndex = find a randmon index of the Topics array via length of Topics array 
    function genrateTopic(){
        const randomIndex = Math.floor(Math.random()*Topics.length)
        setRandomTopic(Topics[randomIndex])
    }

    function saveTopic(){
        accountCtx.saveFavoriteTopic(randomTopic)
        window.alert("Topic Saved!")
    }
    
    return (
        <main className = {styles.mainDiv}>
            <header className = {styles.header}>
                <h1>Learn About Something New!</h1>
                <Bttn onClick ={genrateTopic}>Generate a Topic!</Bttn>
            </header>
            {randomTopic && 
                <div className = {styles.topicsDiv}>
                    <TopicInfo topic={randomTopic}/>
                    <Bttn onClick= {saveTopic}>Save Topic</Bttn>
                </div>
            }
        </main>
    );
}

export default HomePage