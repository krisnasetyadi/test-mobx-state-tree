import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import UserData from './component/model/userInfo.mjs';

const userData = UserData.create({
  username:'',
  userPass:'',
  loginState:false,
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App 
    userData={userData}
    // noteData={noteData}
    />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


