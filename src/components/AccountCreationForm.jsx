//IMPORT - HOOKS
import { useContext } from "react"
//IMPORT - CONTEXT
import { AccountContext } from "./AccountContext"
//IMPORT - COMPONENTS
import Input from "./Input"
import Modal from "./modal"
import Bttn from "./Bttn"


//IMPORT - Styles


function AccountCreationForm(){
    const accountCtx = useContext(AccountContext)

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData (event.target)
        const userName = formData.get('userName')
        const email = formData.get('email')
        const password = formData.get('password')
        

        const newAccountData = {
            userName,
            email,
            password,
            
        }
        
        accountCtx.createAccount(newAccountData)
        accountCtx.stopCreatingAccount()
    }


    return(
     <>
     <Modal open={accountCtx.isCreatingAccount}>
      <form onSubmit={handleSubmit}>
                <div>
                    <h2>Create Account</h2>
                    <Input
                        label= "User Name: "
                        id = "userName"
                        name="userName" 
                    />
                    <Input
                        label= "Email: "
                        id = "email"
                        name="email"
                    />
                    <Input
                        label= "Password: "
                        id = "password"
                        name="password"
                    />
                    <Bttn type="submit">Create Account</Bttn>
                </div>
        </form> 
        </Modal>
     </>
    )
}

export default AccountCreationForm