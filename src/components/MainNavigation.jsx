//IMOPORTS - HOOKS
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
//IMPORTS - COMPONENTS / PAGES
import Bttn from './Bttn';
import { AccountContext } from './AccountContext';
import AccountCreationForm from './AccountCreationForm';

//IMPORTS - Styles
import styles from "./MainNavigation.module.css"



function MainNavigation(){
    //const accountCtx = useContext(AccountContext)

    //function handleCreateAccount(){
        //accountCtx.startCreatingAccount()
    //}

                     
    //<Bttn>Log In</Bttn>          
    //<Bttn >Log Out</Bttn>                        
    //<Bttn onClick= {handleCreateAccount}>Create Account</Bttn>
                       
                  
            


    return (
        <header className={styles.headerStyle}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                     <li>
                        <NavLink to="/Favorites">Favorite Topics</NavLink>
                    </li>
                </ul>
            </nav> 
            <AccountCreationForm/>       
        </header>
       
    )
}

export default MainNavigation