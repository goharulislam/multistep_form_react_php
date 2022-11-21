import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "../axios/index";

function Read(){
const [rows, setRows] = useState([]);
const formData = new FormData();
const navigate = useNavigate();

useEffect(() => {
    getData();
}, []);

async function getData(){
  try{
    formData.append('function', 'get_all');
    let response = await axios.post('index2.php', formData);
    //console.log('Response:', response.data);
    setRows(prevRows => prevRows = response.data);
    //console.log('Users:', users);
  }catch(err){
    console.log(err);
  }
}

function removeTags(str){
  if((str===null) || (str==='')){
      return false;
  } else {
      str = str.toString();
  }
  // Regular expression to identify HTML tags in the input string. Replacing the identified HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

function Post_detail(i){
  navigate('/post-detail', {
    state: {
      i,
    }
  });
}

return(
<div>
<section className='blog2'>
<div className="container">
<div className="row">
<div className="col-md-12">
  <p className='large'>BLOG</p>
  <h3>Grow Your Digital Knowledge With DotOxygen</h3>
</div>
{
  rows && rows.length > 0 && rows.map((i) => (
    <div className="col-md-6" key={i.id} onClick={()=>Post_detail(i)}>
      <p className='large'>{i.author} <span></span></p>
      <h4>{i.heading}</h4>
      <div className='arrow1'><p className='effect1 large'>{removeTags(i.text)}</p><i className='fa fa-arrow-right'></i></div>
    </div>
  ))
}
</div>
</div>
</section>
</div>
);
}
export default Read;