import { Navigate, useRoutes } from 'react-router-dom';
import { UserForm } from './components/UserForm';
import { UserInfo } from './components/UserInfo';

const Routes = () => {
    return useRoutes([
        { path: '/form', element: <UserForm /> },
        { path: '/user', element: <UserInfo /> },
        { path: '*', element: <Navigate to="/user" replace /> },
    ]);
};

export default Routes;
