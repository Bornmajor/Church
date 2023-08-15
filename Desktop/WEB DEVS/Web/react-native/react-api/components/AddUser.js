
import axios from "axios";
import { useState } from "react";

export default () =>{

const AddUser = (usrname,mail,pwd) =>{
    const [feedback,setFeedback] = useState([]);
    const [errors,setError] = useState('');

    axios.post('https://symmetric-classific.000webhostapp.com/react-api/users/registration/',{
        username : usrname,
        email: mail,
        password: pwd
     })
    .then(function (response) {
        // handle success
        // console.log();
        setFeedback(response.message);
    })
    .catch(function (error) {
        // handle error
        setError('Something went wrong');
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

    return[feedback,errors];
}



};