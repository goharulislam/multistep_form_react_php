import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikContainer(){
const [data, setData] = useState({
	first_name: '',
	last_name: '',
	email: '',
	password: '',
});
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});

const makeRequest = (formData) => {
	console.log('form submitted', formData);
}

const handleNextStep = (newData, final = false) => {
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return
	}
	setCurrentStep((prev) => prev + 1);
};

const handlePrevStep = (newData) => {
	setData((prev) => ({...prev, ...newData}));
	setCurrentStep((prev) => prev - 1);
};

const steps = [
				<StepOne next={handleNextStep} data={data} errors={errors} />,
				<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />
			]

return(
	<div>
		<h3>Form: Registration</h3>
		{steps[currentStep]}
	</div>
);
}

const stepOneValidationSchema = Yup.object({
	first_name: Yup.string().required().label('First Name'),
	last_name: Yup.string().required().label('Last Name'),
});

const StepOne = (props) => {

	const handleSubmit = (values) => {
		props.next(values);
	}

	return(
		<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
		{() => (
			<Form>
				<label>First Name</label>
				<Field name='first_name' />
				<div className="error"><ErrorMessage name="first_name" /></div>
				<label>Last Name</label>
				<Field name='last_name' />
				<div className="error"><ErrorMessage name="last_name" className="error" /></div>
				<button type="submit">Next</button>
			</Form>
		)}
		</Formik>
	);
}

const stepTwoValidationSchema = Yup.object({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().label('Password'),
});

const StepTwo = (props) => {

	const handleSubmit = (values) => {
		props.next(values, true);
	}

	return(
		<Formik initialValues={props.data} validationSchema={stepTwoValidationSchema} onSubmit={handleSubmit}>
		{(formProps) => (
			<Form>
				<label>Email</label>
				<Field name='email' />
				<div className="error"><ErrorMessage name="email" /></div>
				<label>Password</label>
				<Field name='password' />
				<div className="error"><ErrorMessage name="password" /></div>
				<button type="button" onClick={() => props.prev(formProps.values)}>Back</button>
				<button type="submit">Submit</button>
			</Form>
		)}
		</Formik>
	);
}

export default FormikContainer;