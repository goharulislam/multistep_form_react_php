import React from "react";
import {useNavigate} from 'react-router-dom';

function Home(){
const navigate = useNavigate();

  return (
    <div>
      <h5>Home</h5>
	  <button className="btn btn-success" onClick={() => navigate('form1')}>Form 1</button>
	</div>
  );
}

export default Home;