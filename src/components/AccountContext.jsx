import { createContext, useState, useEffect } from "react"

//Template for what the Context will do
    //a. Contains an empty skeleton of what makes up the context of the user account
    //b. tracking acount proceess, such as is one created? If so, are they logged in?
// eslint-disable-next-line react-refresh/only-export-components
export const AccountContext = createContext({
    userAccount: {
        userName: undefined,
        password: undefined,
        email: undefined,
    },

//Saving Topics
    favoriteTopics: [],
    saveFavoriteTopic: () => {},

//Account Creation / Login-Logout
    isCreatingAccount: false,
    isLoggingIn: false,
    isLoggedIn: false,
    createAccount: () => {},
    startCreatingAccount: () => {},
    stopCreatingAccount: () => {},

    //Notes
    notes: {},
    topicNote: (""),
    isEditingNotes: false,
    newNote: [],
    editingNotes: () => {},
    saveNotes: () => {},
    updateNotes: () => {},
    setNotes: () => {}


});

export function AccountContextProvider({children}){
    const [userAccount, setUserAccount] = useState({
        userName: undefined,
        password: undefined,
        email: undefined,
    })

/**********************
 ACCOUNT CREATION
***********************/
    //State - open/closes Create Account Modal
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    
    //Functions- open/close create modal 
    function startCreatingAccount(){
        setIsCreatingAccount(true)
    }

    function stopCreatingAccount(){
        setIsCreatingAccount(false)
    }

    //Function - create and store user account info, login user 
    function createAccount(newAccountData){
        setUserAccount(newAccountData)
        localStorage.setItem("user", JSON.stringify(newAccountData))
        setIsLoggedIn(true)
    }
    
/**********************
 LOGIN/LOGOUT 
***********************/
    
    //STATE - open/closes Login  Modal
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    
    //STATE - display current player location/Tutorial at start
    const [isLoggedIn, setIsLoggedIn] = useState(false)

/**********************
 USER ACTIONS
***********************/

/**** Saving-Loading a Topic ****/ 
    //STATE - store favorite topics
    const [favoriteTopics, setFavoriteTopics] = useState([])

    //Function - save and store topics in localStorage
    function saveFavoriteTopic(randomTopic){
        const updatedFavorites = [...favoriteTopics, randomTopic];
        setFavoriteTopics(updatedFavorites)
        localStorage.setItem("topic", JSON.stringify(updatedFavorites))
    }

    // load favorite topics from localStorage
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("topic"));
            if (savedFavorites) {
                setFavoriteTopics(savedFavorites)
            }
    },[])


/**** Using Notebook ****/ 
const [isEditingNotes, setIsEditingNotes] = useState()
const [notes, setNotes] = useState({})


function editingNotes(id){
    setIsEditingNotes(id)
}

function updateNotes(e,id){
    setNotes(prev => ({
        ...prev,
        [id]:e
    }))
}

function saveNotes(id){
    localStorage.setItem("Notes-" + id, JSON.stringify(notes[id]))
    setIsEditingNotes(false)
}

/**********************
 ACCOUNT CONTEXT OBJECT
***********************/
    const accountCtx = {
        userAccount,

        createAccount,
        isCreatingAccount,
        startCreatingAccount,
        stopCreatingAccount,

        isLoggedIn,
        //isLoggingIn,

        favoriteTopics,
        saveFavoriteTopic,

        isEditingNotes,
        setNotes,
        notes,
      
        editingNotes,
        saveNotes,
        updateNotes
    }

    return(
        <AccountContext.Provider value = {accountCtx}>
            {children}
        </AccountContext.Provider>
    );
}