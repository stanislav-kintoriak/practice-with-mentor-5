import { fetchOne } from 'redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectCurrentUser } from '../redux/users/selectors';

export const UserDetailPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch, id]);

  return (
    <>
      {currentUser && (
        <>
          <p>{currentUser.name}</p>
          <img src={currentUser.avatar} alt={currentUser.name} />
          <p>{currentUser.phone}</p>
          <p>{currentUser.address}</p>
          <p>{currentUser.email}</p>
        </>
      )}
    </>
  );
};
