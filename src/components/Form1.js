import React from "react";
import {useNavigate} from 'react-router-dom';
import FormRegistration from '../components/forms/FormRegistration';
function Form1(){
const navigate = useNavigate();

  return (
    <div>
      <h5>Registration Form</h5>
	  <FormRegistration />
	  <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
    </div>
  );
}

export default Form1;