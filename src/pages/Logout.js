import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Footer from './Footer';
import Navbar from './Navbar';

const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://upkeep.crmcity.org:8099/logout", {
            // method: "GET",
            // headers: {
            //   "Accept": "application/json",
            //   "Content-Type": "application/json"
            // },
            // credentials: "include"
          }).then((res) => {
            dispatch({type: "USER",payload: false})
            navigate('/signin', {replace: true});
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error
            }
          }).catch((err) => {
            console.log(err);
          });
    }, [])
    
    
  return (
    <>  
        <Navbar />
        <h1>Logout Page</h1>
        <Footer />
    </>
  )
}

export default Logout