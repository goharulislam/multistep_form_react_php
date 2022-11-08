import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
function Careers(){
const navigate = useNavigate();
//const [val1, setVal1] = useState('');
/*
function change(event){
	setVal1(event.target.value);
}
*/
return(
	<section>
	<div className="row">
	<div className="col-md-12 mb70">
		{/*<div>
           	<select id="lang" onChange={change} value={val1}>
               	<option value="select">Select</option>
               	<option value="Java">Java</option>
               	<option value="C++">C++</option>
           	</select>
           	<p></p>
           	<p>{val1}</p>
		</div>*/}
		<h6 className="float-start">Following are the available jobs.</h6>
		{/*<button className="btn1 btn2 float-end" onClick={() => navigate(-1)}>Back</button>*/}
		<a className="btn1 btn2 float-end" href="https://handdservices.co.uk/">Back</a>
	</div>
	<div className="col-md-12">
		<h3>Security</h3>
	</div>
	<div className="col-md-4">
		<p>SIA Door Supervisor</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formsiadoorsupervisor')}>Apply</button>
	</div>
	<div className="col-md-12">
		<h3>Hospitality</h3>
	</div>
	<div className="col-md-4">
		<p>Waiter</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formwaiter')}>Apply</button>
	</div>
	<div className="col-md-4">
		<p>Public Area Cleaner</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formpublicareacleaner')}>Apply</button>
	</div>
	<div className="col-md-4">
		<p>Porter</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formporter')}>Apply</button>
	</div>
	<div className="col-md-4">
		<p>Linen Porter</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formlinenporter')}>Apply</button>
	</div>
	<div className="col-md-4">
		<p>House Keepers</p>
	</div>
	<div className="col-md-8">
		<button className="btn1" onClick={() => navigate('/formhousekeepers')}>Apply</button>
	</div>
	</div>{/*row*/}
	</section>
);
}
export default Careers;