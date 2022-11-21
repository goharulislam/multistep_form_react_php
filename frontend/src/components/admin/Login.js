import React, {useState} from 'react';
import axios from '../../axios/index';
import {Formik, Form} from 'formik';
import FormikControl from '../../pages/forms/assets/FormikControl';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';

function Login(){
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState(null);
let formData = new FormData();
const navigate = useNavigate();
const [data, setData] = useState({
	function: 'login',
	uid: '',
	pw: '',
});

const makeRequest = (newData) => {
//console.log('form submitted', newData);
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
	//console.log(fieldName, newData[fieldName]);
	formData.append(fieldName, newData[fieldName]);
});
login();
}

async function login(){
	try{
    	formData.append('function', 'login');
    	let response = await axios.post('api_forms.php', formData);
    	console.log('Response:', response.data);
    	if(response.data === true){
			navigate('/downloadcsv');
		}else{
			setErrors("ID and/or Password doesn't match.");
		}
  	}catch(err){
		console.log(err);
	}
}

const handleNextStep = (newData, final = false) => {
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return;
	}
	setCurrentStep((prev) => prev + 1);
};

const steps = [
	<StepOne next={handleNextStep} data={data} errors={errors} />
]

return(
<section className='steps'>
	<h3 class="p-3 mb-2 bg-secondary text-white">Admin Panel</h3>
	<h3 className='float-start'>Login</h3>
	<button className="btn1 btn2 float-end" onClick={() => navigate('/')}>Back</button>
	<div className='clearfix'></div>
	<p>{errors}</p>
	{steps[currentStep]}
    <pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object({
	uid: Yup.string().required().label('User id'),
	pw: Yup.string().required().label('Password'),
});

const StepOne = (props) => {

const handleSubmit = (values) => {
	console.log('Form data', values);
	console.log('saved data', JSON.parse(JSON.stringify(values)));
	props.next(values, true);
}

return(
<div>
<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
{formik => {
	console.log('formik', formik)
	return(
	<Form>
	<div className="col-md-4 offset-md-8">
		<FormikControl control='input' type='text' label='User ID' name='uid' placeholder='User ID' />
	    <div className='clearfix'></div>
		<FormikControl control='input' type='password' label='Password' name='pw' placeholder='Password' />
		<button type="submit" className="btn1" disabled={!(formik.isValid)}>Submit</button>
	</div>
	</Form>
	)}}
</Formik>
</div>
);
}
export default Login;