import { observer } from "mobx-react";
import React from "react";

function ErrorPage({userData}){
    return(
        <div className="deniedInfo"><br/><br/>
        <h1> <b className='text-danger'>Access Denied !</b></h1><br/><br/>
        <h3>Your Login Status: {userData.loginState!==true?"false":"true"} </h3><br/>
        <h5>Please Do <a href='/'> Login</a> First</h5>
         </div>
    )
}

export default observer(ErrorPage)