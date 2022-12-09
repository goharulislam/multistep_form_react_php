import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, FieldArray, ErrorMessage} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function FormWaiter(){
const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});
let formData = new FormData();
const navigate = useNavigate();
const [data, setData] = useState({
	function: 'create_employee',
	title: '',
	first_name1: '',
	last_name1: '',
	phone1: '',
	email1: '',
	home_address1: '',
	post_code1: '',
	work_sought: 'Waiter',
	hotel: '',
	eligible_uk: false,
	permit_expiry: '',
	passport: false,
	passport_expiry: '',
	bank_name: '',
	sort_code: '',
	account_number: '',
	emergency_contact_name: '',
	emergency_contact_relation: '',
	emergency_contact_number: '',
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
	home_address2: '',
	hotel2: '',
	report_to1: '',
	start_date1: '',
	start_time1: '',
	job_role2: 'Waiter',
	hourly_rate2: '11',
	dress1: 'BLACK POLO SHIRT, BLACK TROUSER, BLCAK SHOES',
	medical1: '',
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
	agency1: '',
	sign5: '',
	date5: '',
	trainer_name1: 'Vlad, Rosou',
	trainer_sign1: '',
	/*step3*/
	eligible_uk2: false,
	select_document: '',
	rehab_eligible: false,
	rehab_confirm: false,
	rehab_understand: false,
	rehab_sign: '',
	rehab_print: '',
	rehab_date: '',
	ccj: false,
	ccj_detail: '',
	iva: false,
	iva_detail: '',
	bankcrupt: false,
	bankcrupt_detail: '',
	request_ni_number: '',
	request_date1: '',
	request_current_address: '',
	request_previous_address: '',
	/*step4*/
	file_passport: '',
	file_picture: '',
	file_national_insurance_letter: '',
	file_proof_address: '',
	file_brp1: '',
	file_brp2: '',
	/*step6*/
	declaration1: false,
});

function formatDate(date){
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const makeRequest = (newData) => {
//console.log('form submitted', newData);
//document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, '', 4);

Object.keys(newData).forEach(fieldName => {
	if(fieldName === 'request_date1'){
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

axios.post('api_form_waiter.php', formData);
}

const handleNextStep = (newData, final = false) => {
	if(final === false){
		window.scrollTo(0, 0);
		//document.body.scrollTop = 0;
		//window.scrollBy(0, 0);
		console.log('INSIDE');
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
	<StepThree next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
	<StepFour next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
	<StepFive next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
]

return(
<section className='steps steps_two'>
<h3 className='float-start'>Form: Waiter</h3>
<button className="btn1 btn2 float-end" onClick={() => navigate('/')}>Back</button>
<div>
	<ul className="steps-progress-bar">
		<li className='active'></li>
		<li className={currentStep >= 1 ? 'active' : '' }></li>
		<li className={currentStep >= 2 ? 'active' : '' }></li>
		<li className={currentStep >= 3 ? 'active' : '' }></li>
		<li className={currentStep >= 4 ? 'active' : '' }></li>
	</ul>
</div>
<div className='clearfix'></div>
	<p>Step {currentStep+1} out of 5</p>
	{steps[currentStep]}
	<pre id="whereToPrint"></pre>
</section>
);
}

const stepOneValidationSchema = Yup.object().shape({
/*first_name1: Yup.string().required().label('First Name'),
last_name1: Yup.string().required().label('Last Name'),
gender: Yup.string().required().label('Gender'),
home_address: Yup.string().required().label('Home Address'),
postal_code: Yup.string().required().label('Postal Code'),
region: Yup.string().required().label('Region'),
city: Yup.string().required().label('City'),
phone: Yup.string().required().label('Phone'),
email: Yup.string().required().label('Email'),
	
marital_status: Yup.string().required().label('Marital status'),
date_of_birth: Yup.string().required().label('Date of birth'),
place_of_birth: Yup.string().required().label('Palce of birth'),
country_of_birth: Yup.string().required().label('Country of birth'),
bank_name: Yup.string().required().label('Banke Name'),
bank_email: Yup.string().required().label('Bank Email'),
sort_code: Yup.string().required().label('Sort Code'),
bank_statement_date: Yup.string().required().label('Bank statement date'),
valid_passport: Yup.string().required().label('valid passort'),
uk_full_time: Yup.string().required().label('UK full time'),
brp: Yup.string().required().label('BRP'),
criminal_convictions: Yup.string().required().label('Criminal convictions'),
international_student: Yup.string().required().label('International student'),
own_vehicle: Yup.string().required().label('Own vehicle'),
driving_license: Yup.string().required().label('Driving license'),
driving_license_number: Yup.string().required().label('Driving license number'),
driving_endorsements: Yup.string().required().label('Driving endorsements'),
kin_name: Yup.string().required().label('KIN name'),
kin_phone: Yup.string().required().label('KIN phone'),
kin_email: Yup.string().required().label('KIN email'),
kin_address: Yup.string().required().label('KIN address'),
kin_relationship: Yup.string().required().label('KIN relationship'),*/
});

const StepOne = (props) => {

const handleSubmit = (values) => {
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
	<FormikControl control='input' type='text' label='Home Address' name='home_address1' />
</div>
<div className="col-md-2">
	<FormikControl control='input' type='text' label='Post Code' name='post_code1' />
</div>
<div className="col-md-4">
	<FormikControl control='input' type='text' label='Work sought' name='work_sought' disabled />
</div>
<div className="col-md-4">
	<FormikControl control='input' type='text' label='Hotel assigned' name='hotel' placeholder='To be filled by Admin' />
</div>
<div className='clearfix'></div>
<div className="col-md-6">
	<FormikControl control='checkbox_toggle_switch' label='Are eligeable to work in the UK?' name='eligible_uk' />
</div>
<div className="col-md-6">
	<FormikControl control='date' label='Permit Expiry Date' name='permit_expiry' />
</div>
<div className="col-md-6">
	<FormikControl control='checkbox_toggle_switch' label='Do you have a Passport?' name='passport' />
</div>
<div className="col-md-6">
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
	<FormikControl control='input' type='text' label='Emergency Contact Number' name='emergency_contact_number' />
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
        	<button type="button" className="float-end btn1" onClick={() => push({ company_name: '', phone: '', email: '' })}><i className='fa fa-plus'></i></button>
		</div>
	</div>)}
	</FieldArray>
	<div className="col-md-12">
		<FormikControl control='checkbox_toggle_switch' label='Do you have any unspent criminal convictions?' name='crime' />
	</div>
	<div className="col-md-12">
		<FormikControl control='input' type='text' label='Detail' placeholder='Crime detail' name='crime_detail' />
	</div>
	<div className="col-md-12">
		<p>NB Certain types of employment and professions are exempt from the Rehabilitation of Offenders Act 1974 and in those cases particularly where the employment sought in relation to positions involving working with children or vulnerable adults, details of all criminal convictions must be given the information given will be treated in the strictest of confidence. Failure to declare a conviction may require us to exclude you from our register or terminate an assignment if the offence is not declared but later comes to light.</p><p className='strong'>GDPR:</p><p>I hereby confirm that the information given is true and correct; I consent to my personal data being included on a computerized database for 36 months and its use to secure me employment/temporary assignments/contracts. I consent to my CV/ID/personal data being forwarded to clients via electronic mail/post and I understand the risk of my documents being unintentionally alerted during the process. I consent to references being passed onto potential employers. If during the course of a temporary assignment the client wishes to employ me direct, I acknowledge that H&D will be entitled either to charge the client an introduction transfer fee, or to agree an extension of the hiring period with the client (after which I may be employed by the client without further charge being applicable to the client).H&D Recruitment Ltd will not market your data without your consent. I fully understand and accept all terms and conditions of H&D Recruitment Ltd.</p>
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Signature' name='sign1' />
	</div>
	<div className="col-md-4">
		<FormikControl control='date' label='Date' name='date1' />
	</div>
	<div className='clearfix'></div>

	<div className="col-md-12">
		<h4>Medical Health Certification & Health Declaration</h4>
		<p>To comply with the Health and Safety at Work Act 1974, H&D Recruitment Limited are obliged to ensure that the health and safety of our temporary workers remains our highest priority. If you are on working machines, or doing a task that could harm others if you are not medically fit, you could be held personally liable for not declaring this to the site where you are working and also to H&D Recruitment Ltd, your employing organization. Alertness and reasonable physical fitness are essential for duties which may interact with moving trains. It is, therefore, important to be accurate with your answers to this questionnaire, although trivial matters should be ignored (e.g. transient dizziness while gardening two years ago).</p>
		<p className="strong">When you declare NO, you are accepting a degree of responsibility for your safety, and those of others who may come to harm in your work place.</p>
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

	<div className="col-md-8">
		<p className='error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
	</div>
	<div className="col-md-4">
		<button type='submit' className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
	</div>
</div>{/*row*/}
</Form>
)}}
</Formik>
);
}

const stepTwoValidationSchema = Yup.object().shape({
	/*email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().label('Password'),
	university_start_date: Yup.string().required(),
	university_finish_date: Yup.string().required(),*/
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
	props.next(values);
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
		<FormikControl control='input' type='text' label='Job role' name='job_role2' disabled />
	</div>
	<div className="col-md-2">
		<FormikControl control='input' type='text' label='Hourly rate' name='hourly_rate2' disabled />
	</div>
	<div className="col-md-8">
		<FormikControl control='input' type='text' label='Uniform' name='dress1' disabled />
	</div>
	<div className="col-md-12">
		<FormikControl control='input' type='text' label='Medical History and Allergies' name='medical1' />
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
		<FormikControl control='input' type='text' label='Hourly rate' name='rate' disabled />
	</div>
	<div className="col-md-4">
		<FormikControl control='date' label='First payment date' name='payment_date' />
	</div>
	<div className="col-md-12">
		<p className='bold'>And bi-weekly thereafter.</p>
		<p>Please note that prior to starting work; <span className='strong'>you might receive 2-3 days of training</span>, which will not be included in your first payment. H&D Recruitment will provide the remuneration for these training days, once you have completed the duration of one month with our agency.</p>
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
		<FormikControl control='input' type='text' label='Agency' name='agency1' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Signature' name='sign5' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Date' name='date5' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label="Trainer's Name" name='trainer_name1' disabled />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label="Trainer's signature" name='trainer_sign1' disabled />
	</div>

	<div className="col-md-4">
		<button type='button' className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
	</div>
	<div className="col-md-4">
		<p className='error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
	</div>
	<div className="col-md-4">
		<button type='submit' className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
	</div>
</div>{/*row*/}
</Form>
)}}
</Formik>
);
}

const stepThreeValidationSchema = Yup.object().shape({
	/*email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().label('Password'),
	university_start_date: Yup.string().required(),
	university_finish_date: Yup.string().required(),*/
});

const StepThree = (props) => {

const handleSubmit = (values) => {
	props.next(values);
}

const dropdownDocuments = [
	{key:'', value:'Select a document'},
	{key:'Passport', value:'Passport'},
	{key:'Birth Certificate', value:'Birth Certificate'},
	{key:'EU ID Card', value:'EU ID Card'},
	{key:'Visa', value:'Visa'}
];

return(
<Formik initialValues={props.data} validationSchema={stepThreeValidationSchema} onSubmit={handleSubmit}>
{(formik) => (
<Form>
<div className="row">
	<div className="col-md-12">
		<h4>Background information</h4>
	</div>
	<div className="col-md-12">
		<FormikControl control='checkbox_toggle_switch' label='Are you currently eligible for employment in the UK?' name='eligible_uk2' />
	</div>
	<div className="col-md-9" style={{display: formik.values.eligible_uk2 ? 'block' : 'none' }}>
		<p>Please state what documentation you can provide in order to demonstrate this</p>
		<p className='small'>(e.g. Passport/ Birth Certificate/ EU ID Card/ Visa)</p>
	</div>
	<div className="col-md-3" style={{display: formik.values.eligible_uk2 ? 'block' : 'none' }}>
		<FormikControl className='float-end' control='select' label='' name='select_document' options={dropdownDocuments} />
	</div>
	<div className="col-md-9">
		<p className='strong'>Rehabilitation of Offenders Act 1974</p>
		<p>Do you have any prosecution pending or have you ever been convicted of a criminal offence which cannot, at this point in time, be considered “spent” as defined by the Rehabilitation of Offenders Act 1974? Please note that this also includes any motoring offences.?</p>
		<p>Please give details on a separate sheet of paper which when completed should be sealed in a plain envelope and marked “Private & Confidential” and attached to this form. Please note that any information disclosed is dealt with in the strictest confidence.</p>
	</div>
	<div className="col-md-3">
		<FormikControl control='checkbox_toggle_switch' label='' name='rehab_eligible' />
	</div>
	<div className='col-md-12' style={{display: formik.values.rehab_eligible ? 'block' : 'none' }}>
		<FormikControl placeholder='Type here the detail' control='input' type='text' label='' name='rehab_private' />
	</div>
	<div className="col-md-12 green">
		<FormikControl control='input' type='checkbox' label="I confirm that I have declared all prosecutions pending and all convictions which cannot be considered 'spent', as defined by the Rehabilitation of Offenders Act 1974." name='rehab_confirm' />
		<div className='clearfix'></div>
		<FormikControl control='input' type='checkbox' label='I understand that if I were to be employed by H&D Recruitment and it was subsequently discovered that I have failed to disclose any prosecutions pending, convictions or have been deliberately dishonest or evasive in my response to the questions on this form, I may falsify my position with the company and this may lead to disciplinary action being taken, and constitute grounds for dismissal.' name='rehab_understand' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Signature' name='rehab_sign' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Print' name='rehab_print' />
	</div>
	<div className="col-md-4">
		<FormikControl control='date' label='Date' name='rehab_date' />
	</div>
	<div className="col-md-12">
		<FormikControl control='checkbox_toggle_switch' label='Has a County Court Judgment (CCJ) ever been awarded against you or is there one pending?' name='ccj' />
	</div>
	<div className="col-md-12" style={{display: formik.values.ccj ? 'block' : 'none'}}>
		<FormikControl control='input' type='text' label='Please provide detail' name='ccj_detail' />
	</div>
	<div className="col-md-12">
		<FormikControl control='checkbox_toggle_switch' label='Have you ever entered into an Individual Voluntary Arrangement (IVA) with a creditor?' name='iva' />
	</div>
	<div className="col-md-12" style={{display: formik.values.iva ? 'block' : 'none'}}>
		<FormikControl control='input' type='text' label='Please provide detail' name='iva_detail' />
	</div>
	<div className="col-md-12">
		<FormikControl control='checkbox_toggle_switch' label='Have you ever been declared bankrupt?' name='bankcrupt' />
	</div>
	<div className="col-md-12" style={{display: formik.values.bankcrupt ? 'block' : 'none'}}>
		<FormikControl control='input' type='text' label='Please provide detail' name='bankcrupt_detail' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='NI Number' name='request_ni_number' />
	</div>
	<div className="col-md-4">
		<FormikControl control='date' label='Date of Birth' name='request_date1' />
	</div>
	<div className="col-md-6">
		<FormikControl control='input' type='text' label='Current Address' name='request_current_address' />
	</div>
	<div className="col-md-6">
		<FormikControl control='input' type='text' label='Previous Address' name='request_previous_address' />
	</div>

	<div className="col-md-4">
		<button type='button' className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
	</div>
	<div className="col-md-4">
		<p className='error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
	</div>
	<div className="col-md-4">
		<button type='submit' className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
	</div>
</div>{/*row*/}
</Form>
)}
</Formik>
);
}

const stepFourValidationSchema = Yup.object().shape({
	/*email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().label('Password'),
	university_start_date: Yup.string().required(),
	university_finish_date: Yup.string().required(),*/
});

const StepFour = (props) => {

const handleSubmit = (values) => {
	props.next(values);
}
return(
<Formik initialValues={props.data} validationSchema={stepFourValidationSchema} onSubmit={handleSubmit}>
{(formik) => (
<Form>
<div className="row">
	<div className="col-md-12">
		<h4>Passport</h4>
		<div className="alert" role="alert"><i className="fa fa-info-circle"></i><p>Make sure your Passport is VALID.</p></div>
		<input type='file' name='file_passport' onChange={(event)=>{formik.setFieldValue('file_passport', event.currentTarget.files[0])}} />
		<ErrorMessage name="file_passport" />
	</div>
	<div className="clearfix"></div>
	<div className="col-md-12">
		<h4>Picture</h4>
		<div className="alert" role="alert"><i className="fa fa-info-circle"></i><p>Make sure you upload a picture having white background and your head, shoulder and all the corners of the picture must be visible.</p></div>
		<input type='file' onChange={(event)=>{formik.setFieldValue('file_picture', event.target.files[0])}} />
		<ErrorMessage name="file_picture" />
	</div>
	<div className="col-md-12">
		<h4>National Insurance Letter/NI Insurance Card</h4>
		<div className="alert" role="alert"><i className="fa fa-info-circle"></i><p>Make sure you upload your National Insurance Number not your Reference Number. The source of your NI must be from Her Majesty's Revenue and Customs (HMRC).</p></div>
		<input type='file' onChange={(event)=>{formik.setFieldValue('file_national_insurance_letter', event.target.files[0])}} />
		<ErrorMessage name="file_national_insurance_letter" />
	</div>
	<div className="col-md-12">
		<h4>Proof of Address</h4>
		<div className="alert" role="alert"><i className="fa fa-info-circle"></i><p>Proof of Address must not be older than 3 months Upload any one of them as your POA: Full Driving License, Utility Bill, Council Tax Letter, Bank Statement, Tenancy Agreement, Letter from your university confirmation your address (if you're a student)</p></div>
		<input type='file' onChange={(event)=>{formik.setFieldValue('file_proof_address', event.target.files[0])}} />
		<ErrorMessage name="file_proof_address" />
	</div>
	<div className="col-md-12">
		<h4>Biometric Residence Permit (BRP) / EU Share Code</h4>
		<div className="alert" role="alert">
			<i className="fa fa-info-circle"></i>
			<ul>
				<li>If you're a British Citizen,</li>
				<li>skip BRPIf you're a Non-British and European Citizen, upload BRP (Front and Back)</li>
				<li>If you're a Non-British and Non-European Citizen, upload your EU Share Code</li>
			</ul>
		</div>
	</div>
	<div className="col-md-6">
		<input type='file' onChange={(event)=>{formik.setFieldValue('file_brp1', event.target.files[0])}} />
		<ErrorMessage name="file_brp1" />
	</div>
	<div className="col-md-6">
		<input type='file' onChange={(event)=>{formik.setFieldValue('file_brp2', event.target.files[0])}} />
		<ErrorMessage name="file_brp2" />
	</div>
	
	<div className="col-md-4">
		<button type='button' className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
	</div>
	<div className="col-md-4">
		<p className='error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
	</div>
	<div className="col-md-4">
		<button type='submit' className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
	</div>
</div>{/*row*/}
</Form>
)}
</Formik>
);
}

const stepFiveValidationSchema = Yup.object().shape({
	declaration1: Yup.boolean().oneOf([true],'Scroll down the above text to accept.'),
});

const StepFive = (props) => {
const [d, setD] = useState(false);

const handleSubmit = (values) => {
	props.next(values, true);
}

useEffect(()=>{
	document.getElementById('declaration1').addEventListener('scroll', function(){
		var scrollTop = document.getElementById('declaration1').scrollTop;
		var scrollHeight = document.getElementById('declaration1').scrollHeight; // added
		var offsetHeight = document.getElementById('declaration1').offsetHeight;
		// var clientHeight = document.getElementById('box').clientHeight;
		var contentHeight = scrollHeight - offsetHeight; // added
		if(contentHeight <= scrollTop) // modified
		{
			// Now this is called when scroll end!
			// console.log('declaration1 scroll reaches bottom.');
			setD(true);
		}
	},
	false
	)
});

return(
<Formik initialValues={props.data} validationSchema={stepFiveValidationSchema} onSubmit={handleSubmit}>
{(formik) => (
<Form>
<div className="row">
<div className='col-md-12'>
	<h4>Disclaimer and signature</h4>
	<div className='declaration1' id='declaration1'>
		<p className='strong'>General Data Storage Regulation Declaration</p>
		<p className='strong'>NB Certain types of employment and professions are exempt from the Rehabilitation of Offenders Act 1974 and in those cases particularly where the employment sought in relation to positions involving working with children or vulnerable adults, details of all criminal convictions must be given the information given will be treated in the strictest of confidence. Failure to declare a conviction may require us to exclude you from our register or terminate an assignment if the offence is not declared but later comes to light.</p>
		<p className='small'>I hereby confirm that the information given is true and correct; I consent to my personal data being included on a computerized database and its use in order to secure me employment/temporary assignments/contracts. I consent to my details being forwarded to clients via electronic mail and I understand the risk of my details being unintentionally alerted during the process. I consent to references being passed onto potential employers. If during the course of a temporary assignment the client wishes to employ me direct, I acknowledge that H&D will be entitled either to charge the client an introduction transfer fee, or to agree an extension of the hiring period with the client (after which I may be employed by the client without Further charge being applicable to the client). Furthermore, I authorize H&D Recruitment Ltd to pay all sums due to me in respect of services I supply to the nominated account above. I authorize H&D Recruitment Ltd to pay all sums due to me in respect of services I supply to the nominated account above. I agree that I will work for my client or indirectly, if I do this without the written consent of H&D, then I would be liable to a £1100 charge.</p>
		<p className='small'>This agreement is drawn up under the General Data Protection Regulation and allows you to enter into agreement with H&D Recruitment to consent to the Company sharing your information with a third- Party HR Company and in online marketing.</p>
		<p className='small'>The Company will display the certificate confirming the HR Company being used in Quality Management System/Certificates. The Company will notify you of when your name and picture will be used for marketing purposes.</p>
		<p className='small'>The Company confirm that the HR Company adhere to the GDPR and will only utilize the information provided in their advisory capacity to the Company.</p>
		<p className='small'>1. I agree that the GDPR, shall not apply to my records in so far as the Company seeking advice on my employment.</p>
		<p className='small'>2. I agree the Company can use my name and photo on Company social media and website for any Company recognition scheme.</p>
		<p className='small'>3. I understand that this agreement will apply with effect from:</p>
		<p className='small'>4. Notwithstanding my agreement to dis-apply the GDPR in these specific circumstances, I am fully aware that I can opt back in at any time.</p>
		<p className='small'>5. I agree that I have entered into this agreement voluntarily and understand I am under no obligation to sign this agreement and that it is illegal for me to be subject to any detriment if    I decline to sign.</p>
		<h4>Security Screening Disclosure & Authorization Form (BS 7858: 2012)</h4>
		<p className='small'>Performing security screening necessitates the handling of personal data and as such must comply with the Data Protection Act. A requirement of the Act is that individuals must explicitly consent to any processing of their personal data. The details you are asked to provide within this Disclosure and Authorization form along with supporting certificates and documentation will be used by H&D Recruitment to carry out checks and searches of all or any of these details. This will include a search or searches carried out with a licensed credit reference agency, with previous employers, Government agencies and related persons and organization. The information obtained will be securely handled and recorded in a standard report format. I hereby authorize H&D Recruitment to approach my former employers, persons you have provided as character references, connected businesses and suppliers, schools, colleges, character referees, the Police, credit reference agencies, criminal record bureau and any government agencies for verifying the information that I have supplied in the Application for Employment Form. By signing this form, you expressly consent to H&D Recruitment using your information for purposes of vetting to conduct these enquiries and the licensed credit reference agency to report information personal to yourself to H&D Recruitment (The credit reference search is limited to a search for Bankruptcy, Insolvency or County Court Judgments and does not access personal credit details). The data will be controlled by The Client and will be kept secure in your personal screening file. The information will be retained in electronic data back-up format by H&D Recruitment only if for BS 7858: 2006 accreditation and audit purposes. Please note, however, that the data may be for audit purpose by other inspectorate boards or in relation to BS 7799 and 7499 Information Security Audit. About this security screening, H&D Recruitment will carry out any searches. Contacting establishments and organizations named by me to check any or all the information supplied. I agree that this may include a search with a credit reference agency. I hereby expressly consent to such searches being carried out and where a record of such search or check being retained. I further authorize H&D Recruitment to take up a consumer information search with a credit reference agency. I am aware that the credit reference agency will keep a record of that search and may share that information with other credit reference agencies. By completing this application form, I consent to the transfer of my information to the Disclosure and Barring Service for a Disclosure Application. I confirm that the information that I have provided in support of this application is complete and true and understand that to knowingly make a false statement for this purpose is a criminal offence.</p>
		<p className='small'>Give approval for my personal information which I have supplied herein to be transferred to H&D Recruitment to assist in this security screening process and that the information I have provided may be screened for verification, accuracy and authenticity. In turn I also expressly consent to H&D Recruitment to return the result of such checks to The Client.</p>
		<p className='small'>I hereby authorize the screening of my:</p>
		<p className='small'>1. Address verification including 10-year residential history</p>
		<p className='small'>2. County Court Judgments, bankruptcy and insolvency search</p>
		<p className='small'>3. Obtaining references from referees</p>
		<p className='small'>4. 10-year employment history checked to source</p>
		<p className='small'>5. Outstanding, or unresolved criminal cases (CRB) only where necessary</p>
		<p className='small'>I further declare that all the information I have supplied herein is, to the best of my knowledge and belief, correct. If I agree to obtain information or certificates which may be to substantiate any information. I acknowledge that misrepresentation, or failure to disclose material facts either during application or throughout employment may constitute grounds for immediate dismissal and/or legal action.</p>
		<h5>Working Time Directive</h5>
		<h4>The Working Time Regulations 1998</h4>
		<p className='small'>These have been designed to implement the provisions of the 1993 EC Working Time Directive and set down regulations which allow restrictions on the number of average weekly hours worked by employee.</p>
		<h5>EMPLOYEE RIGHTS</h5>
		<p className='small'>These have been designed to implement the provisions of the 1993 EC Working Time Directive and set down regulations which allow restrictions on the number of average weekly hours worked by employee</p>
		<h5>EMPLOYEE RIGHTS</h5>
	<ul className='small'>
		<li>A limit of 48 hours on the average weekly working time.</li>
		<li>A minimum of four weeks (20 days) paid annual leave.</li>
		<li>Entitlements to daily and weekly rest periods.</li>
		<li>Provision to limit the working hours for night workers.</li>
		<li>The right for health assessment for workers involved in night working.</li>
		<li>Where the employee agrees to work more than 48 hours per week. The Employer is to provide compensatory rest peri</li>
	</ul>
	<h5>FLEXIBILTY</h5>
	<ul className='small'>
		<li>To allow employers and employees to enter into agreement to allow for average working time in excess of 48 hours per week.</li>
		<li>Workers engaged in security surveillance work (Security Guards & Caretakers), in providing services relating to reception, treatment, or care provided by hospitals, similar establishments, residential institutions, are exempt from the regulations governing rest periods and night work.</li>
		<li>Entitlements to daily and weekly rest periods.</li>
		<li>Employees who agree to work over 48 hours per week are entitled to compensatory rest periods.</li>
	</ul>
	<p className="strong">I, have been made aware of my rights as an employee under the provisions of the Working Time Regulations 1998. I hereby voluntary agree to waive my rights under the Regulations to restrict my average working weekly hours to 48. I accept that my employer may therefore require me to work more than an average of 48 hours per week and understand that this Agreement should be read in conjunction with my Terms and Conditions of service. Furthermore, I agree to be bound by this Agreement unless I give my employer three months' notice in writing of my intentions to revoke this Agreement.</p>
	<h5>Subject Access Request Team Mandate</h5>
	<p className='strong'>I the undersigned would like to request a 5 YEAR EMPLOYMENT HISTORY, with details of Employers, Earnings & National Insurance details under the terms of the Data Protection Act 1998.</p>
	<p className='strong'>I would like this record issued directly to the third party detailed below</p>
	<p className='small'>Your Company Name</p>
	<p className='small yellow'>H&D Recruitment</p>
	<p className='small'>Your Company Address</p>
	<p className='small yellow'>4 Bell Parade Bell Road Hounslow TW3 3NU</p>
	<p className='small'>Your Company Email</p>
	<p className='small yellow'>info@handdservices.co.uk</p>
	</div>{/*declaration1*/}
	<h6 className='float-start' style={{marginTop:'42px'}}>I have read the Agreement and concur with all of the Declarations.</h6>
	</div>
	<div className="col-md-4">
		<button type='button' className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
	</div>
	<div className="col-md-4">
		<p className='error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
	</div>
	<div className="col-md-4">
		<button type='submit' className='float-end btn1' onClick={()=>{formik.setFieldValue('declaration1', true)}} disabled ={(d) ? false : true}>Agree and Submit</button>
	</div>
</div>{/*row*/}
</Form>
)}
</Formik>
);
}

export default FormWaiter;