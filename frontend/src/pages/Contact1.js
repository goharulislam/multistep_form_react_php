import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form} from 'formik';
import FormikControl from './forms/assets/FormikControl';
import * as Yup from 'yup';
import axios from '../axios/index';

function Contact1(){
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});
let formData = new FormData();
const navigate = useNavigate();

const [data, setData] = useState({
	function: 'contact1',
	to_name: 'Muhammad Ashraf Khan',
	to_email: 'contact@dotoxygen.com, contactdotoxygen@gmail.com,',
	from_name: '',
	from_email: '',
  	from_country_code: '',
	from_phone: '',
	from_message: '',
});

const makeRequest = (newData) => {
//console.log('form submitted', newData);
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
	formData.append(fieldName, newData[fieldName]);
});

/*
	// V IMP CODE
	for(var pair of formData.entries()){
		console.log(pair[0]+ ', ' + pair[1]); 
	}
*/

axios.post('api_email.php', formData);
}

const handleNextStep = (newData, final = false) => {
	if(final === false){
		window.scrollTo(0,0);
	}
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return;
		//navigate('https://handdservices.co.uk/career/');
	}
	setCurrentStep((prev) => prev + 1);
};

const steps = [
	<StepOne next={handleNextStep} data={data} errors={errors} />,
]

return(
	<section className='steps'>
		<h3 className='float-start'>Contact us</h3>
		<button className="btn1 btn2 float-end" onClick={() => navigate('/')}>Back</button>
		<div className='clearfix'></div>
		{steps[currentStep]}
		<pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object().shape({
	from_name: Yup.string().required().label('Name'),
	from_email: Yup.string().email().required().label('Email'),
  	from_country_code: Yup.string().required().label('Country code'),
	from_phone: Yup.string().required().label('Phone number'),
	from_message: Yup.string().required().label('Message'),
});

const StepOne = (props) => {

const handleSubmit = (values) => {
	console.log('Form data', values);
	console.log('saved data', JSON.parse(JSON.stringify(values)));
	props.next(values, true);
}

return(
<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
{formik => {
console.log('formik', formik)
return(
<Form>
<div className="row">
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Full Name' name='from_name' />
	</div>
	<div className="col-md-4">
    <FormikControl control='input' type='text' label='Email' name='from_email' />
	</div>
	<div className="col-md-1">
		<FormikControl control='input' type='text' label='' name='from_country_code' />
	</div>
	<div className="col-md-3">
		<FormikControl control='input' type='text' label='Phone' name='from_phone' />
	</div>
	<div className="col-md-12">
		<FormikControl control='textarea' label='Message' name='from_message' />
	</div>

	<div className="col-md-12">
		<p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
		<button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Send</button>
	</div>
</div>{/*row*/}
</Form>
)}}
</Formik>
);
}


export default Contact1;