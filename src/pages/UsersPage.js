import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/users/operations';
import { selectUsers } from '../redux/users/selectors';
import { Link } from 'react-router-dom';

export const UsersPages = () => {
  const users = useSelector(selectUsers);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (<>
    <ul>
      {users.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        );
      })}
    </ul>
    <Link to='add'>Add user</Link>
    </>
  );
};
