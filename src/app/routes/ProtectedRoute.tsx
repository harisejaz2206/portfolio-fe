import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../features/auth/auth.selector';
import { Navigate, useLocation } from 'react-router-dom';

// interface Props {
//     component: FC;
//     [key: string]: any;
// }

const ProtectedRoute: any = ({ children, allowedRoles }: any) => {
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const location = useLocation();
    const publicPaths = ['/', '/login', '/superlogin', '/multilogin', '/solelogin', '/signUp'];
    const noAuthRedirectPaths = ['/login', '/superlogin', '/multilogin', '/solelogin', '/signUp'];

    if (token && noAuthRedirectPaths.includes(location.pathname)) {
        return <Navigate to="/" />;
    }

    if (!token && !publicPaths.includes(location.pathname)) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/login" />;
    }

    return children
};

export default ProtectedRoute;
