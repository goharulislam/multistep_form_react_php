import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, FieldArray} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';
function FormLinenPorter(){
const navigate = useNavigate();
let formData = new FormData();
const [data, setData] = useState({
	function: 'create_linenporter',
	uid: Math.floor(Math.random()*(9999999-100+1))+100,
	title: '',
	first_name1: '',
	last_name1: '',
	phone1: '',
	email1: '',
	home_address1: '',
	post_code1: '',
	work_sought: 'Linen Porter',
	dob1: '',
	ni_number: '',
	hotel1: '',
	eligible_uk: false,
	permit_expiry: '',
	passport: false,
	passport_expiry: '',
	bank_name: '',
	sort_code: '',
	account_number: '',
	emergency_contact_name: '',
	emergency_contact_relation: '',
	emergency_contact_phone: '',
	emergency_contact_address: '',
	employment_history: [
		{
			company_name: '',
			phone: '',
			email: '',
		},
	],
	crime: false,
	crime_detail: '',
	sign1: '',
	date1: '',
	diabetes: false,
	epilepsy: false,
	blackouts: false,
	discomfort: false,
	moving: false,
	looking: false,
	outdoor: false,
	enclosed1: false,
	head_height: false,
	eyesight: false,
	lifting: false,
	accident: false,
	back: false,
	feet: false,
	hernia: false,
	bp: false,
	heart: false,
	hearing: false,
	dizziness: false,
	drugs: false,
	alcohol: false,
	sign2: '',
	name2: '',
	date2: '',
	/*step2*/
	first_name2: '',
	surname2: '',
	phone2: '',
	home_address2: '',
	hotel2: '',
	report_to1: '',
	start_date1: '',
	start_time1: '',
	job_role2: 'Linen Porter',
	hourly_rate2: '11',
	dress1: 'BLACK POLO SHIRT, BLACK TROUSER, BLCAK SHOES',
	medical: '',
	pregnant: '',
	emergency_name1: '',
	emergency_number1: '',
	emergency_address1: '',
	sign3: '',
	date3: '',
	name3: '',
	address3: '',
	hotel3: 'To be filled by Admin',
	rate: '11',
	payment_date: '',
	sign4: '',
	date4: '',
	name5: '',
	agency1: 'H&D Recruitment',
	sign5: '',
	date5: '',
	trainer_name1: 'Vlad, Rosou',
	trainer_sign1: 'Vlad, Rosou',
});

const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});

function formatDate(date){
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
		
		/*
		d2 = new Date(),
		hours = d2.getHours(),
		minutes = d2.getMinutes(),
		seconds = d2.getSeconds(),
		ampm = hours >= 12 ? 'pm' : 'am';
		*/

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    /*
	let dt1 = [year, month, day, 'T'].join('-');
	let dt2 = [hours, minutes, seconds].join(':');
	let dt3 = dt1 + dt2 + ' ' + ampm;
	return dt3;
	*/
	let dt1 = [year, month, day].join('-');
	return dt1;
}

const makeRequest = (newData) => {
//console.log('form submitted', newData);
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
	if(fieldName === 'uid'){
		let d1 = 'linenporter-'+newData[fieldName];
		formData.append(fieldName, d1);
	} else if(fieldName === 'dob1'){
		let d1 = formatDate(newData[fieldName]);
		formData.append(fieldName, d1);
	} else if (fieldName === 'employment_history'){
		formData.append(fieldName, JSON.stringify(newData[fieldName]));
	} else {
		//console.log(fieldName, newData[fieldName]);
		formData.append(fieldName, newData[fieldName]);
	}

});

/*
// V IMP CODE
for(var pair of formData.entries()){
	console.log(pair[0]+ ', ' + pair[1]); 
}
*/

axios.post('api_form_linenporter.php', formData);
}

const handleNextStep = (newData, final = false) => {
	if(final === false){
		window.scrollTo(0,0);
	}
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return
	}
	setCurrentStep((prev) => prev + 1);
};

const handlePrevStep = (newData) => {
	window.scrollTo(0,0);
	setData((prev) => ({...prev, ...newData}));
	setCurrentStep((prev) => prev - 1);
};

const steps = [
				<StepOne next={handleNextStep} data={data} errors={errors} />,
				<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
			]

return(
	<section className='steps steps_two'>
		<h3 className='float-start'>Form: Linen Porter</h3>
		<button className="btn1 btn2 float-end" onClick={() => navigate('/')}>Back</button>
		<div>
			<ul className="steps-progress-bar">
				<li className='active'></li>
				<li className={currentStep >= 1 ? 'active' : '' }></li>
			</ul>
		</div>
		<div className='clearfix'></div>
		<p>Step {currentStep+1} out of 2</p>
		{steps[currentStep]}
		<pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object().shape({
	title: Yup.string().required().label('Title'),
	first_name1: Yup.string().required().label('First name'),
	last_name1: Yup.string().required().label('Last name'),
	phone1: Yup.string().required().label('Phone'),
	email1: Yup.string().required().label('Email'),
	home_address1: Yup.string().required().label('Address'),
	post_code1: Yup.string().required().label('Post code'),
	work_sought: Yup.string().required().label('Work sought'),
	dob1: Yup.string().required().label('Birth date'),
	ni_number: Yup.string().required().label('NI number'),
	hotel1: Yup.string().required().label('Hotel'),
	permit_expiry: Yup.string().required().label('Date'),
	passport_expiry: Yup.string().required().label('Date'),
	bank_name: Yup.string().required().label('Bank'),
	sort_code: Yup.string().required().label('Sort code'),
	account_number: Yup.string().required().label('Account Number'),
	emergency_contact_name: Yup.string().required().label('Name'),
	emergency_contact_relation: Yup.string().required().label('Relation'),
	emergency_contact_phone: Yup.string().required().label('Phone'),
	emergency_contact_address: Yup.string().required().label('Address'),
	employment_history: Yup.array().of(
		Yup.object().shape({
			company_name: Yup.string().required(),
			phone: Yup.string().required(),
			email: Yup.string().email().required(),
		})
	),
	crime_detail: Yup.string().required().label('Detail'),
	sign1: Yup.string().required().label('Sign'),
	date1: Yup.string().required().label('Date'),
	sign2: Yup.string().required().label('Sign'),
	name2: Yup.string().required().label('Name'),
	date2: Yup.string().required().label('Date'),
});

const StepOne = (props) => {

const handleSubmit = (values) => {
	console.log('Formik', Formik)
	props.next(values);
}

return(
	<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
	{formik => {
		console.log('formik', formik)
		return(
	<Form>
		<h4>Application Information</h4>
		<div className="row">
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Title' name='title' placeholder='Mr.' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='First Name' name='first_name1' placeholder='John' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Surname' name='last_name1' placeholder='Smith' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Phone' name='phone1' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Email' name='email1' />
		</div>
		<div className="col-md-10">
			<FormikControl control='input' type='text' label='Home address' name='home_address1' />
		</div>
		<div className="col-md-2">
			<FormikControl control='input' type='text' label='Post code' name='post_code1' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Work sought' name='work_sought' disabled />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Date of Birth' name='dob1' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='NI Number' name='ni_number' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Hotel assigned' name='hotel1' placeholder='To be filled by Admin' />
		</div>
		<div className='clearfix'></div>
		<div className="col-md-6">
			<FormikControl control='checkbox_toggle_switch' label='Are you eligeable to work in the UK?' name='eligible_uk' />
		</div>
		<div className="col-md-4 offset-md-2">
			<FormikControl control='date' label='Permit Expiry Date' name='permit_expiry' />
		</div>
		<div className="col-md-6">
			<FormikControl control='checkbox_toggle_switch' label='Do you have a Passport?' name='passport' />
		</div>
		<div className="col-md-4 offset-md-2">
			<FormikControl control='date' label='Passport Expiry Date' name='passport_expiry' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Bank Name' name='bank_name' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Sort Code' name='sort_code' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Account Number' name='account_number' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Name' name='emergency_contact_name' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Relation with emergency contact' name='emergency_contact_relation' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Number' name='emergency_contact_phone' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Address' name='emergency_contact_address' />
		</div>
		<div className="col-md-12">
			<h4>Previous Work Reference Detail</h4>
		</div>
		<FieldArray name="employment_history">
					{({ insert, remove, push }) => (
						<div>
							{formik.values.employment_history.length > 0 && formik.values.employment_history.map((i, index) => (
								<div className="row" key={index}>
									<div className="col-md-4">
										<FormikControl control='input' type='text' label='Company Name' name={`employment_history.${index}.company_name`} />
									</div>
									<div className="col-md-4">
										<FormikControl control='input' type='text' label='Phone/Mobile' name={`employment_history.${index}.phone`} />
									</div>
									<div className="col-md-4">
										<FormikControl control='input' type='email' label='Email' name={`employment_history.${index}.email`} />
									</div>
									<div className="col-md-12">
										{index > 0 && (<button type="button" className="float-end btn1 btn2" onClick={() => remove(index)}><i className='fa fa-minus'></i></button>)}
									</div>
								</div>
							))}
					<div className="col-md-12">
                			<button type="button" className="float-end btn1" onClick={() => push({company_name: '', phone: '', email: ''})}><i className='fa fa-plus'></i></button>
					</div></div>)}
				</FieldArray>
		<div className="col-md-12">
			<FormikControl control='checkbox_toggle_switch' label='Do you have any unspent criminal convictions?' name='crime' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='text' label='Detail' name='crime_detail' placeholder='Detail' />
		</div>
		<div className="col-md-12">
			<p>NB Certain types of employment and professions are exempt from the Rehabilitation of Offenders Act 1974 and in those cases particularly where the employment sought in relation to positions involving working with children or vulnerable adults, details of all criminal convictions must be given the information given will be treated in the strictest of confidence. Failure to declare a conviction may require us to exclude you from our register or terminate an assignment if the offence is not declared but later comes to light.</p><p className='bold'>GDPR:</p><p>I hereby confirm that the information given is true and correct; I consent to my personal data being included on a computerized database for 36 months and its use to secure me employment/temporary assignments/contracts. I consent to my CV/ID/personal data being forwarded to clients via electronic mail/post and I understand the risk of my documents being unintentionally alerted during the process. I consent to references being passed onto potential employers. If during the course of a temporary assignment the client wishes to employ me direct, I acknowledge that H&D will be entitled either to charge the client an introduction transfer fee, or to agree an extension of the hiring period with the client (after which I may be employed by the client without further charge being applicable to the client).H&D Recruitment Ltd will not market your data without your consent. I fully understand and accept all terms and conditions of H&D Recruitment Ltd.</p>
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Signature' name='sign1' />
		</div>
		<div className="col-md-6">
			<FormikControl control='date' label='Date' name='date1' />
		</div>

		<div className="col-md-12">
			<h4>Medical Health Certification & Health Declaration</h4>
			<p>To comply with the Health and Safety at Work Act 1974, H&D Recruitment Limited are obliged to ensure that the health and safety of our temporary workers remains our highest priority. If you are on working machines, or doing a task that could harm others if you are not medically fit, you could be held personally liable for not declaring this to the site where you are working and also to H&D Recruitment Ltd, your employing organization. Alertness and reasonable physical fitness are essential for duties which may interact with moving trains. It is, therefore, important to be accurate with your answers to this questionnaire, although trivial matters should be ignored (e.g. transient dizziness while gardening two years ago).</p>
			<p className="bold">When you declare NO, you are accepting a degree of responsibility for your safety, and those of others who may come to harm in your work place.</p>
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have Diabetes needing Insulin?' name='diabetes' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you suffer from Epilepsy or fits?' name='epilepsy' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you ever had blackouts, recurrent dizziness or any condition, which may cause sudden collapse or In capacity?' name='blackouts' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you get discomfort or pain in the chest or shortness of breath on exercise, e.g. climbing a single flight of stairs?' name='discomfort' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have difficulty in moving rapidly over short distances, including on slopes, steps or rough ground?' name='moving' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Would you have difficulty in looking over either shoulder?' name='looking' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Would you have difficulty working in out-door open areas?' name='outdoor' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Would you have difficulty working in enclosed spaces?' name='enclosed1' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Would you have difficulty working above head height (e.g. using ladders or maintenance platforms)?' name='head_height' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have any difficulty with your eyesight?' name='eyesight' />
			<p style={{margin:'-35px 0 30px'}}>(other than the wearing of glasses or contact lenses where required)? E.g. Color blind.</p>
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Are you capable of repetitive lifting as for the employment?' name='lifting' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you ever had a serious accident or operation?' name='accident' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have/ever suffered from Back/Neck problems?' name='back' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Would being on your feet all day cause you a problem?' name='feet' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you had a hernia?' name='hernia' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have High/low blood pressure?' name='bp' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you have/ever had heart problems?' name='heart' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have any difficulty with your hearing?' name='hearing' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Are you taking any medication that is giving you dizziness or drowsiness?' name='dizziness' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you used, or abused, drugs within the last 12 months?' name='drugs' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you had any alcohol-related illness during the last 12 months?' name='alcohol' />
		</div>
		<div className="col-md-12">
			<p className="strong">I will inform H&D Recruitment limited of any change to my health which may affect my ability to perform my duties</p>
		</div>
				
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Signature' name='sign2' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Name' name='name2' />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Date' name='date2' />
		</div>

		<div className="col-md-12">
			<p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s) first.</p>
			<button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Next <i className='fa fa-angle-right'></i></button>
		</div>
	</div>{/*row*/}
	</Form>
	)}}
</Formik>
);
}

const stepTwoValidationSchema = Yup.object().shape({
	first_name2: Yup.string().required().label('Name'),
	surname2: Yup.string().required().label('Surname'),
	phone2: Yup.string().required().label('Last name'),
	home_address2: Yup.string().required().label('Phone'),
	hotel2: Yup.string().required().label('Email'),
	report_to1: Yup.string().required().label('Address'),
	start_date1: Yup.string().required().label('Post code'),
	start_time1: Yup.string().required().label('Work sought'),
	job_role2: Yup.string().required().label('Birth date'),
	hourly_rate2: Yup.string().required().label('NI number'),
	dress1: Yup.string().required().label('Hotel'),
	medical: Yup.string().required().label('Date'),
	pregnant: Yup.string().required().label('Date'),
	emergency_name1: Yup.string().required().label('Bank'),
	emergency_number1: Yup.string().required().label('Sort code'),
	emergency_address1: Yup.string().required().label('Account Number'),
	sign3: Yup.string().required().label('Name'),
	date3: Yup.string().required().label('Relation'),
	name3: Yup.string().required().label('Phone'),
	address3: Yup.string().required().label('Address'),
	hotel3: Yup.string().required().label('Detail'),
	rate: Yup.string().required().label('Sign'),
	payment_date: Yup.string().required().label('Date'),
	sign4: Yup.string().required().label('Sign'),
	date4: Yup.string().required().label('Name'),
	name5: Yup.string().required().label('Date'),
	agency1: Yup.string().required().label('Date'),
	sign5: Yup.string().required().label('Date'),
	date5: Yup.string().required().label('Date'),
	trainer_name1: Yup.string().required().label('Date'),
	trainer_sign1: Yup.string().required().label('Date'),

	changed_nationality: Yup.boolean(),
	changed_nationality_detail: Yup.string().when('changed_nationality', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
	changed_surname: Yup.boolean(),
	changed_surname_detail: Yup.string().when('changed_surname', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
});

const StepTwo = (props) => {
const handleSubmit = (values) => {
	props.next(values, true);
}

	return(
		<Formik initialValues={props.data} validationSchema={stepTwoValidationSchema} onSubmit={handleSubmit}>
		{formik => {
		console.log('formik', formik)
		return(
			<Form>
				<div className="row">
				<div className="col-md-12">
					<h4>Personal Details Form</h4>
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='First Name' name='first_name2' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Surname' name='surname2' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Phone' name='phone2' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='text' label='Home Address' name='home_address2' />
				</div>
				<div className="col-md-6">
					<FormikControl control='input' type='text' label='Hotel Name' name='hotel2' placeholder='To be filled by Admin' />
				</div>
				<div className="col-md-6">
					<FormikControl control='input' type='text' label='Report to' name='report_to1' placeholder='To be filled by Admin' />
				</div>
				<div className="col-md-6">
					<FormikControl control='date' label='Start date' name='start_date1' placeholder='To be filled by Admin' />
				</div>
				<div className="col-md-6">
					<FormikControl control='date' label='Start time' name='start_time1' placeholder='To be filled by Admin' />
				</div>
				<div className="col-md-2">
					<FormikControl control='input' type='text' label='Job role' name='job_role2' placeholder='Porter' disabled />
				</div>
				<div className="col-md-2">
					<FormikControl control='input' type='text' label='Hourly rate' name='hourly_rate2' disabled />
				</div>
				<div className="col-md-8">
					<FormikControl control='input' type='text' label='Uniform' name='dress1' disabled />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='text' label='Medical History and Allergies' name='medical' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Are you pregnant (if applicable)?' name='pregnant' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Emergency Contact Name' name='emergency_name1' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Emergency Contact Number' name='emergency_number1' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Emergency Contact Address' name='emergency_address1' />
				</div>
				<div className="col-md-8">
					<FormikControl control='input' type='text' label='Signature' name='sign3' />
				</div>
				<div className="col-md-4">
					<FormikControl control='date' label='Date' name='date3' />
				</div>

				<div className="col-md-12">
					<h4>Payment Terms for H&D Staff</h4>
				</div>
				<div className="col-md-6">
					<FormikControl control='input' type='text' label='Name' name='name3' />
				</div>
				<div className="col-md-6">
					<FormikControl control='input' type='text' label='Address' name='address3' />
				</div>
				<div className="col-md-8">
					<FormikControl control='input' type='text' label='Designated hotel' name='hotel3' disabled />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Hourly rate' name='rate' placeholder='11' disabled />
				</div>
				<div className="col-md-6">
					<FormikControl control='date' label='First payment date' name='payment_date' />
				</div>
				<div className="col-md-12">
					<p className='bold'>And bi-weekly thereafter.</p>
					<p>Please note that prior to starting work; <span className='bold'>you might receive 2-3 days of training</span>, which will not be included in your first payment. H&D Recruitment will provide the remuneration for these training days, once you have completed the duration of one month with our agency.</p>
					<p>The first payment will include the wages from the second week of your employment, as will be the case for the following weeks. All payments will be processed on Tuesday. However, due to occasional technical circumstances beyond our control, the payment may be processed on a Wednesday.</p>
					<p>Additionally, please be advised that our company's payment procedure follows a bi-weekly format. Therefore, you will only be paid for the days that you have worked in TWO continuous weeks.</p>
					<p className='bold'>Please note that you need to give us one week notice before you decide to leave the job.</p>
					<p className='bold'>I understand and accept the payment terms from H&D. I can work 5 days a week including the weekends.</p>
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Signature' name='sign4' />
				</div>
				<div className="col-md-4">
					<FormikControl control='date' label='Date' name='date4' />
				</div>
				<div className="col-md-12">
					<h5>Agency Staff Quick Induction</h5>
					<p>I sign that I fully understand and was explained following points during housekeeping departmental induction:</p>
					<ul>
						<li>Shifts</li>
						<li>Accidents</li>
						<li>Mobile Phones</li>
						<li>General Appearance</li>
						<li>Holidays</li>
						<li>Sickness</li>
						<li>Fire Procedures</li>
						<li>Manual Handling</li>
						<li>Keys & Security</li>
						<li>Lost Property Procedure</li>
						<li>C.O.S.H.H.</li>
						<li>HK Risk Assessments</li>
						<li>Cleaning Practice</li>
						<li>Spot Checks</li>
					</ul>
					<p className='b2'>Any breach or abuse of the above policies may result in disciplinary action being taken!</p>
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Print name' name='name5' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Agency' name='agency1' disabled />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Signature' name='sign5' />
				</div>
				<div className="col-md-4">
					<FormikControl control='date' label='Date' name='date5' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label="Trainer's Name" name='trainer_name1' disabled />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label="Trainer's signature" name='trainer_sign1' placeholder='To be filled by Admin' />
				</div>

				<div className="col-md-4">
					<button type="button" className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
				</div>				
				<div className="col-md-4">
					<p className='float-start' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required value(s).</p>
				</div>
				<div className="col-md-4">
					<button type="submit" className='float-end btn1'>Submit</button>
				</div>
				</div>{/*row*/}
			</Form>
		)}}
		</Formik>
	);
}

export default FormLinenPorter;