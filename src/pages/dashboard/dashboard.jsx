import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateUserFetch } from "../../redux/slices/auth/auth.slice";
const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,isError} = useSelector((state) => state.auth)
    // let headline = <h1>Dashboard 1</h1>
    useEffect(() => {
        if (user) dispatch(validateUserFetch(user.token))
        else navigate("/sign-in")
        
    }, [ user, isError, navigate, dispatch]);

    return (
        <div>
            {user ? <h1>Dashboard</h1> : <h1>You are not signed in!</h1>}
        </div>
    );
}

export default Dashboard;
