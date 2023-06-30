import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOne } from '../redux/users/operations';
import { selectCurrentUser } from '../redux/users/selectors';

const UserEditPage = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [phone, setPhone] = useState(currentUser.phone);
  const [address, setAddress] = useState(currentUser.address);
  const [email, setEmail] = useState(currentUser.email);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [id, dispatch]);

  function handleChange(e) {
    if (name === 'name') {
      setName(e.target.elements.name.value);
    } else if (e.target.name === 'avatar') {
      setAvatar(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  }

  return (
    <div>
      <form>
        <label>
          <input
            name="image"
            placeholder="photo"
            type="url"
            onChange={handleChange}
            value={avatar}
          />
        </label>
        <label>
          <input
            name="name"
            placeholder="name"
            type="text"
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <input
            name="phone"
            placeholder="phone number"
            type="number"
            onChange={handleChange}
            value={phone}
          />
        </label>
        <label>
          <input
            name="address"
            placeholder="adress"
            type="text"
            onChange={handleChange}
            value={address}
          />
        </label>
        <label>
          <input
            name="email"
            placeholder="email"
            type="text"
            onChange={handleChange}
            value={email}
          />
        </label>
        <button></button>
      </form>
    </div>
  );
};

export default UserEditPage;
