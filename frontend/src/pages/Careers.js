import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
function Careers(){
const navigate = useNavigate();
const [val1, setVal1] = useState('');

function change(event){
	setVal1(event.target.value);
}

return(
<section>
<div className="row">
<div className="col-md-12 mb70">
	<h6 className="float-start">Following are the available jobs.</h6>
	<a className="btn1 btn2 float-end" href="https://handdservices.co.uk/">Back</a>
</div>
<div className="col-md-4">
	<select id="lang" onChange={change} value={val1} className='form-control'>
       	<option value="select">Select</option>
       	<option value="/formsiadoorsupervisor">SIA Door Supervisor</option>
       	<option value="/formwaiter">Waiter</option>
       	<option value="/formpublicareacleaner">Public Area Cleaner</option>
       	<option value="/formporter">Porter</option>
       	<option value="/formlinenporter">Linen Porter</option>
       	<option value="/formhousekeepers">House Keepers</option>
    </select>
</div>
<div className="col-md-8">
	{val1 === 'select' ? null : <button className="btn1" onClick={() => navigate(val1)}>Apply</button>}
</div>
</div>{/*row*/}
</section>
);
}
export default Careers;