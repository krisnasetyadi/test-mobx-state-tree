import { observer } from "mobx-react";
import React,{useEffect, useState} from "react";
import { Form, Table,Button } from "react-bootstrap";
import EditNote from "./editNote";
import Errorpage from "./errorpage";
import { FaAngleDoubleLeft } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import Items from './model/item.mjs'

function NotePage({dataItem,userData}){
    const navigate = useNavigate()
    const [textData,setTextData]=useState([])

    function addHandler(e){
        e.preventDefault()
        const adder = Items.create({
            id:dataItem.countId(Math.floor(Math.random(1)*10000)),
            textNote:''
        })
        if(dataItem.textNote !== null){
             setTextData([...textData,dataItem.textNote]) 
        }
        console.log(adder)
        // try{
        //     const data = {textData}
        //     const response = await fetch('http://localhost:3000/itemsJson',{
        //         method:'POST',
        //         headers:{'Content-Type':'application/json'},
        //         body:JSON.stringify(data)
        //     })
        //     console.log(response)
        // }catch(err){
        // console.error(err.message)
        // }
    }
    useEffect(()=>{
        localStorage.setItem('List Text',JSON.stringify(textData))
    },[textData])
    function deleteHandler(id){
         localStorage.removeItem('List Text',dataItem.textNote)
         const deleteItem = textData.filter((item,index)=>{
            // console.log(index)
             return index !== id 
         })
        // console.log(id)
        setTextData(deleteItem)
    }
    function backIcon(){
        navigate('/dashboard')
    }
    function logoutHandler(){
        localStorage.clear();
        userData.loggedOut();
        navigate('/')
        }
        
    return userData.loginState === true ? (
        <div className="container">
        <Form onSubmit={addHandler} key={dataItem.id}>
            <label><b>Add Note</b></label><br/>
            <input 
            type="text"
            placeholder="add something"
            onChange={(e)=>dataItem.changeText(e.target.value)}
            /><br/><br/>
            <Button type="reset" onClick={addHandler}>Add Notes</Button><br/>
            <h5>Text1 :{dataItem.textNote}</h5>
        </Form>
        <FaAngleDoubleLeft size="30px" onClick={backIcon}/><br/>
        <Button variant="danger" onClick={logoutHandler}>Logout</Button>
        <><br/>
        <h2><b>List Notes</b></h2>
        <br/>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {textData.map((item,index)=>{
            return(
                
                <tr key={index}>
                    <td >{item}</td>
                    {/* <td><Button onClick={()=>editHandler(index)}>Edit</Button> </td> */}
                    <td><EditNote dataItem={dataItem} index={index}/> </td>
                    <td><Button onClick={()=>deleteHandler(index)}>Delete</Button></td>
                </tr>)})}
            </tbody>
        </Table>
        </>
      
        </div>
    ) : <Errorpage userData={userData} />
};

export default observer(NotePage);