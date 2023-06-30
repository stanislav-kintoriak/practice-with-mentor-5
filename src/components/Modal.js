import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "redux/users/operations";


const Modal = ({id,onClose}) => {

const dispatch = useDispatch()
const navigate = useNavigate()


function handleDelete(){
    dispatch(deleteUser(id));
    navigate('/users')

}


return (
<div>
    <div>
   <h2>Are you sure?</h2>
   <button type='button' onClick = {handleDelete}>Yes</button>
   <button type='button' onClick = {onClose}>No</button>
    </div>
</div>


)


}

export default Modal;