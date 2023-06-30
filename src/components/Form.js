import { useDispatch } from 'react-redux';

import React from 'react';

import { addUser } from 'redux/users/operations';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();


  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    const element = e.target.element;
    const userDetails = await dispatch(
      addUser({
        name: element.name.value,
        avatar: element.image.value,
        phone: element.phone.value,
        address: element.address.value,
        email: element.email.value,
      })
    ).unwrap();

    console.log(userDetails);

    navigate(`/users/:${userDetails.id}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="image" placeholder="photo" type="url">
          <input />
        </label>
        <label>
          <input name="name" placeholder="name" type="text" />
        </label>
        <label>
          <input name="phone" placeholder="phone number" type="number" />
        </label>
        <label>
          <input name="adress" placeholder="adress" type="text" />
        </label>
        <label>
          <input name="email" placeholder="email" type="text" />
        </label>
        <button></button>
      </form>
    </div>
  );
};

export default Form;
