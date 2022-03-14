import './App.css';
import Login from './component/login';
import {Navigate,Route,Routes} from 'react-router-dom';
import Dashboard from './component/dashboard';
import NotePage from './component/note'
import Items from './component/model/item.mjs';

function App ({userData,i}) {
  // function counterId( ){
  //   let i  = 0
  //   for (i=0; i<=100; i++){
  //   }
  // }
  const items = Items.create({
    id:0,
    textNote:''
})

    return (
      <div className="App"> 
          <Routes>
            <Route path='/' element={<Login userData={userData}/>}/>
            <Route path='/dashboard' element={<Dashboard userData={userData}/>}/>
            <Route path='/note' element={<NotePage dataItem={items} userData={userData} />}/>
            {/* <Route path='/' element={userData.loginState===true ? (<Dashboard userData={userData}/>)
            :(<Navigate to='/Server-Error'/>)}/> */}
            {/* <Route path='/dashboard' element={userData.loginState===true ? (<Dashboard userData={userData}/>)
            : (<Navigate to='/'/>)}/> */}
          </Routes>
      </div>
    );
  }


export default App;
