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
    const accountCtx = useContext(AccountContext)

    function handleCreateAccount(){
        accountCtx.startCreatingAccount()
    }

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
                    <li>
                        <Bttn>Log In</Bttn>
                    </li>
                    <li>
                         <Bttn >Log Out</Bttn>
                    </li>
                    <li>
                     
                        <Bttn onClick= {handleCreateAccount}>Create Account</Bttn>
                       
                    </li>
                </ul>
            </nav> 
            <AccountCreationForm/>       
        </header>
       
    )
}

export default MainNavigation