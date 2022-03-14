import { observer } from "mobx-react-lite";
import React from "react";
// import { store,UserStore } from "./model/first-store.mjs";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import ErrorPage from './errorpage'
function Dashboard({userData}){
    const navigate = useNavigate()
    function logoutHandler(){
        localStorage.clear();
        userData.loggedOut();
        navigate('/')
        }
        
    function handler(){
        navigate('/note')
    }

    return userData.loginState === true ? (
        <><br/>
         {/* {userData.loginState===false ? navigate('/') : navigate('/dashboard') } */}
        {/* { userData.username && userData.userPass==='' ? navigate('/') : navigate('/dashboard')} */}
        <h1>HI, {userData.username.toUpperCase()}</h1><br/><br/>
        <Button variant="primary" onClick={handler}><h5>Add Node</h5></Button>
        <br/><br/>
        <Button variant="danger" onClick={logoutHandler}>Logout</Button><br/><br/>
        <h3> Login Status : {userData.loginState!==true?"false":"true"}</h3>
        
        </>
    ) :(<ErrorPage userData={userData}/>)
}

export default observer (Dashboard)