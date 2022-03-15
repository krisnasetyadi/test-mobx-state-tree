import { observer } from "mobx-react";
import React, { useState,useEffect } from "react";
import {Modal,Button} from 'react-bootstrap';

function EditText({dataItem,textData}){
    const [show,setShow] = useState('')
    const handleShow =()=>  setShow(true)
    const handleClose =()=>  setShow(false)
    const [updateData,setUpdateData] = useState([])

    // function updateText(){
    //     if(dataItem.textNote !== null){
    //         setUpdateData([...updateData,dataItem.textNote]) 
    //    }

    // var local = localStorage.getItem('List Text',((item,index)=>{
    //     console.log(item)
    //     console.log(index)
    // }))
        // setTextData(localStorage.index)
        // console.log(updateData)
        // console.log(update)
    //   }
    function updateText(index){
        let newData = textData.find((item)=>{
            return textData.length-1 === index 
            // console.log('tes',item)
            //  console.log(index.length)
         })
         console.log('index',dataItem.textNote.length );
         setUpdateData(dataItem.textNote)
         console.log('item',dataItem.textNote)
         console.log('newData',newData)
         console.log('index tabel',index);
         console.log('id textData',updateData.length-1);
         console.log('update',updateData)
    }

      useEffect(()=>{
        localStorage.setItem('List Text',JSON.stringify(updateData))
    },[updateData])
    
  
    return(
         <>
    <Button variant="primary" 
    onClick={handleShow} data-target={`#id${updateData}`}>
    Edit
    </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <input 
                type="text"
                className="form-control" 
                value={dataItem.textNote}
                onChange={(e) => dataItem.changeText(e.target.value)}/>
            </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" 
                onClick={e=>updateText(e)}>
                Save Changes
            </Button>
            <h3>Text1 :{dataItem.textNote}</h3>
        </Modal.Footer>
    </Modal>
</>
    )
}
export default observer (EditText)