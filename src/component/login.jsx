import { observer } from "mobx-react";
import {useNavigate} from 'react-router-dom';
import Counter from "./counter";


 function Login ({userData}){
     const navigate = useNavigate()
     function submitHandler(e){
         e.preventDefault()

        if(userData.username&&userData.userPass !== null){
            localStorage.setItem('Username',userData.username)
            localStorage.setItem('Password',userData.userPass)
            userData.loggedIn()
            if(userData.loginState===true){
                navigate('/dashboard')
            }else{
                alert('access Denied')
            }
        } else {
            alert('invalid Credential')
            userData.loggedOut()
            navigate('/')
        }
     }
        return(
            <div>
            <form className="flex wrap" onSubmit={submitHandler}>
                <br/>
                <label><b>Username</b></label><br/><br/>
                <input type="text" 
                onChange={(e)=>userData.setUser(e.target.value)}
                placeholder="username"
                required
                /><br/><br/>
                 <label><b>Password</b></label><br/><br/>
                <input type="password"
                onChange={(e)=>userData.setPass(e.target.value)} 
                placeholder="Password"
                required
                /><br/><br/>
                <button type="submit">Login</button>    
            </form>
            <br/><br/>
            <h4> Name : {userData.username}</h4>
            <h4> Password : {userData.userPass}</h4>
            <h4> Login Status : {userData.loginState!==true ? "false" : "true"}</h4>
            </div>
        )
        }
    
export default observer(Login);

