import { observer } from "mobx-react";
import React, { useState,useEffect } from "react";
import {Modal,Button} from 'react-bootstrap';

function EditText({dataItem,index}){
    const [show,setShow] = useState('')
    const handleShow =()=>  setShow(true)
    const handleClose =()=>  setShow(false)
    const [textData,setTextData]=useState([])

    function updateText(){
        if(dataItem.textNote !== null){
            setTextData([...textData,dataItem.textNote]) 
       }

    var local = localStorage.getItem('List Text',((item,index)=>{
        console.log(item)
        console.log(index)
    }))
        // setTextData(localStorage.index)
        console.log(textData)
        // console.log(update)
      }
      useEffect(()=>{
        localStorage.setItem('List Text',JSON.stringify(textData))
    },[textData])
    function updateText(index){
        let updateData = textData.find((item)=>{
            return textData.length-1 === index 
            // console.log('tes',item)
            //  console.log(index.length)
         })
         console.log(dataItem.textNote.length );
         console.log('klikS',index);
         console.log('testlagi',textData.length-1);
        console.log(updateData);
        setTextData(textData)
        console.log('hasil',textData)
    }
    return(
         <>
    <Button variant="primary" 
    onClick={handleShow} data-target={`#id${textData}`}>
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