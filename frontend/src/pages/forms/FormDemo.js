/*
In below example problem of formData and Formik values is solved.
*/
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, FieldArray} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function FormHouseKeepers(){
const navigate = useNavigate();
let formData = new FormData();
const [data, setData] = useState({
	function: 'create_post',
	first_name: '',
});

const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});

const makeRequest = (newData) => {
	//console.log('form submitted', newData);
	document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);
	Object.keys(newData).forEach(fieldName => {
		console.log(fieldName, newData[fieldName]);
		formData.append(fieldName, newData[fieldName]);
	});
	
	axios.post('index2.php', formData);
}

const handleNextStep = (newData, final = false) => {
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return;
	}
	setCurrentStep((prev) => prev + 1);
};

const handlePrevStep = (newData) => {
	setData((prev) => ({...prev, ...newData}));
	setCurrentStep((prev) => prev - 1);
};

const steps = [
				<StepOne next={handleNextStep} data={data} errors={errors} />,
			]

return(
	<section className='steps steps2'>
		<h3 className='float-start'>Form: House Keepers</h3>
		<button className="btn1 btn2 float-end" onClick={() => navigate(-1)}>Back</button>
		<div>
			<ul className="steps-progress-bar">
				<li className='active'></li>
			</ul>
		</div>
		<div className='clearfix'></div>
		<p>Step {currentStep+1} out of 1</p>
		{steps[currentStep]}
		<pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object().shape({
	first_name: Yup.string().required().label('First Name'),
});

const StepOne = (props) => {

const handleSubmit = (values) => {
	//console.log('Formik:', Formik)
	props.next(values, true);
}

return(
	<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
	{formik => {
		//console.log('formik', formik)
		return(
	<Form>
	<div className="row">
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='First Name' name='first_name' placeholder='John' />
		</div>
		<div className="col-md-4">
			<button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Next <i className='fa fa-angle-right'></i></button>
		</div>
	</div>{/*row*/}
	</Form>
	)}}
</Formik>
);
}

export default FormHouseKeepers;