import { fetchOne } from 'redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectCurrentUser } from '../redux/users/selectors';
import Modal from '../components/Modal'
import { Link } from 'react-router-dom';

export const UserDetailPage = () => {

const [isOpen, setIsOpen] = useState(false)


  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch, id]);


function closeModal(){
  setIsOpen(false)
}

  return (
    <>
      {currentUser && (
        <>
          <p>{currentUser.name}</p>
          <img src={currentUser.avatar} alt={currentUser.name} />
          <p>{currentUser.phone}</p>
          <p>{currentUser.address}</p>
          <p>{currentUser.email}</p>
          <button type='button' onClick = {() => {setIsOpen(true)}}>Delete</button>
          <Link to='edit'>Edit user</Link>
          {isOpen && <Modal id={currentUser.id}  onClose ={closeModal}/>}
        </>
      )}
    </>
  );
};
