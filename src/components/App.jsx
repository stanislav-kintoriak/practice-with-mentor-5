import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { UsersPages } from '../pages/UsersPage';
import { UserDetailPage } from '../pages/UserDetailPage';
import AddUserPage from '../pages/AddUserPage'
import UserEditPage from '../pages/UserEditPage'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPages />} />
        <Route path="users/:id" element={<UserDetailPage />} />
        <Route path="users/add" element = {<AddUserPage/>}/>
        <Route path="users/:id/edit" element = {<UserEditPage/>}/>
      </Route>
    </Routes>
  );
};
