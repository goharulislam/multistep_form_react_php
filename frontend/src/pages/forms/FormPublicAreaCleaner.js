import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, FieldArray} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function FormPublicAreaCleaner(){
const navigate = useNavigate();
let formData = new FormData();
const [data, setData] = useState({
	first_name: '',
	last_name: '',
	home_address: '',
	postal_code: '',
	region: '',
	city: '',
	phone: '',
	email: '',
	gender: '',
	marital_status: '',
	date_birth: '',
	place_birth: '',
	country_of_birth: '',
	sia_license: '',
	sia_badge_no: '',
	sia_badge_expiry: '',
	bank_name: '',
	bank_account_number: '',
	sort_code: '',
	bank_statement_date: '',
	valid_passport: false,
	uk_full_time: false,
	brp: false,
	criminal_convictions: false,
	international_student: false,
	own_vehicle: false,
	driving_license: false,
	driving_license_number: '',
	driving_endorsements: false,
	kin_name: '',
	kin_phone: '',
	kin_email: '',
	kin_address: '',
	kin_relationship: '',

	university_address: '',
	university_start_date: '',
	university_finish_date: '',
	college_address: '',
	college_start_date: '',
	college_finish_date: '',
	school_address: '',
	school_start_date: '',
	school_finish_date: '',
	employment_history: [
		{
			company_name: '',
			phone: '',
			email: '',
		},
	],
	changed_nationality: false,
	changed_nationality_detail: '',
	changed_surname: false,
	changed_surname_detail: '',
	current_address: '',
	current_address_date: '',
	address_history: [
		{
			house_number: '',
			name: '',
			street: '',
			town: '',
			country: '',
			date_moved_in: '',
			date_leaved_out: '',
		},
	],
	self_employment: [
		{
			company_name: '',
			company_address: '',
			company_phone: '',
			company_email: '',
		},
	],
	gaps_employment: [
		{
			start_date: '',
			end_date: '',
			reason: '',
		},
	],
	p1_full_name: '',
	p1_address: '',
	p1_phone: '',
	p1_email: '',
	p1_occupation: '',
	p1_relationship: '',
	p1_period: '',
	p2_full_name: '',
	p2_address: '',
	p2_phone: '',
	p2_email: '',
	p2_occupation: '',
	p2_relationship: '',
	p2_period: '',
	eligible_uk: '',
	select_document: '',
	rehab_eligible: false,
	rehab_private: '',
	rehab_confirm: '',
	rehab_understand: '',
	rehab_name: '',
	rehab_print: '',
	rehab_date: '',
	ccj: false,
	ccj_detail: '',
	iva: false,
	iva_detail: '',
	bankrupt: false,
	bankrupt_detail: '',
	file_passport: {},
	file_picture: {},
	file_national_insurance_letter: {},
	file_proof_address: {},
	file_brp1: {},
	file_brp2: {},
	file_badge1: {},
	file_badge2: {},
	disclaimer_name: '',
	disclaimer_date: '',
	gdpr_name1: '',
	gdpr_department: '',
	gdpr_date1: '',
	gdpr_date2: '',
	gdpr_name2: '',
	gdpr_name3: '',
	gdpr_date3: '',
	screening_name: '',
	screening_date_birth: '',
	screening_place_birth: '',
	approval_name1: '',
	approval_name2: '',
	approval_date: '',

	diabetes: false,
	epilepsy: false,
	blackouts: false,
	discomfort: false,
	moving: false,
	looking: false,
	outdoor: false,
	enclosed: false,
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
	hr_name1: '',
	hr_name2: '',
	hr_date: '',
	agreement_name1: '',
	agreement_name2: '',
	agreement_name3: '',
	agreement_name4: '',
	agreement_date: '',
	request_name1: '',
	request_ni_number: '',
	request_date1: '',
	request_current_address: '',
	request_previous_address: '',
	request_name2: '',
	request_date2: ''
});

const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});

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
document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
	if(fieldName === 'date_birth' || fieldName === 'sia_badge_expiry' || fieldName === 'bank_statement_date'){
		let d1 = formatDate(newData[fieldName]);
		formData.append(fieldName, d1);
	} else if (fieldName === 'employment_history' || fieldName === 'address_history' || fieldName === 'self_employment' || fieldName === 'gaps_employment'){
		formData.append(fieldName, JSON.stringify(newData[fieldName]));
	} else {
		//console.log(fieldName, newData[fieldName]);
		formData.append(fieldName, newData[fieldName]);
	}

});

//document.getElementById("whereToPrint").innerHTML = JSON.stringify(formData, null, 4);
/*
	// V IMP CODE
	for(var pair of formData.entries()){
	console.log(pair[0]+ ', ' + pair[1]); 
}
*/

axios.post('api_forms.php', formData);
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
				<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
			]

return(
	<section className='steps'>
		<h3 className='float-start'>Form: Public Area Cleaner</h3>
		<button className="btn1 btn2 float-end" onClick={() => navigate(-1)}>Back</button>
		<div>
			<ul className="steps-progress-bar">
				<li className='active'></li>
				<li className={currentStep >= 1 ? 'active' : '' }></li>
				<li className={currentStep >= 2 ? 'active' : '' }></li>
				<li className={currentStep >= 3 ? 'active' : '' }></li>
				<li className={currentStep >= 4 ? 'active' : '' }></li>
				<li className={currentStep >= 5 ? 'active' : '' }></li>
			</ul>
		</div>
		<div className='clearfix'></div>
		<p>Step {currentStep+1} out of 6</p>
		{steps[currentStep]}
		<pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object({
	/*first_name: Yup.string().required().label('First Name'),
	last_name: Yup.string().required().label('Last Name'),
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
	sia_license: Yup.string().required().label('SIA License'),
	sia_badge_no: Yup.string().required().label('SIA Badge Number'),
	sia_badge_expiry: Yup.string().required().label('SIA Badge Expiry'),
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
	console.log('p-e', Formik)
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
			<FormikControl control='input' type='text' label='Surname' name='last_name1' placeholder='Doe' />
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
			<FormikControl control='input' type='text' label='Work sought' name='work_sought' value='Public Area Cleaner' disabled />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Date of birth' name='date_birth' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='NI number' name='ni_number1' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Hotel assigned' name='hotel1' placeholder='To be filled by Admin' />
		</div>
		<div className="col-md-8">
			<FormikControl control='checkbox_toggle_switch' label='Are eligeable to work in the UK?' name='eligible_uk' />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Permit Expiry Date' name='permit_expiry' />
		</div>
		<div className="col-md-8">
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
                			<button type="button" className="float-end btn1" onClick={() => push({ company_name: '', job_title: '', job_started: '', job_finished: '', address: '', phone: '', email: '', reason_leaving: '', contact_employer: '' })}><i className='fa fa-plus'></i></button>
					</div></div>)}
				</FieldArray>
		<div className="col-md-12">
			<FormikControl control='checkbox_toggle_switch' label='Do you have any unspent criminal convictions?' name='crime' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='text' label='Detail' placeholder='Detail' name='crime_detail' />
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
			<h3>Medical Health Certification & Health Declaration</h3>
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
			<p className="float-start"></p>
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
			<FormikControl control='input' type='checkbox' label='Do you have any difficulty with your eyesight (other than the wearing of glasses or contact lenses where )? E.g. Color blind.' name='eyesight' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Are you capable of repetitive lifting as for the employment?' name='lifting' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Have you ever had a serious accident or operation?' name='accident' />
		</div>
		<div className="col-md-12">
			<FormikControl control='input' type='checkbox' label='Do you have / ever suffered from Back/Neck problems?' name='back' />
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
			<FormikControl control='input' type='checkbox' label='Have you have / ever had heart problems?' name='heart' />
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
	<p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s).</p>
<button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Next <i className='fa fa-angle-right'></i></button>
</div>
</div>{/*row*/}
</Form>
)}}
</Formik>
);
}

const stepTwoValidationSchema = Yup.object({
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
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Phone number' name='phone2' />
	</div>
	<div className="col-md-12">
		<FormikControl control='input' type='text' label='Home Address' name='home_address2' />
	</div>
	<div className="col-md-6">
		<FormikControl control='input' type='text' label='Hotel' placeholder='To be filled by Admin' name='hotel2' />
	</div>
	<div className="col-md-6">
		<FormikControl control='input' type='text' label='Report to' name='report_to1' placeholder='To be filled by Admin' />
	</div>
	<div className="col-md-6">
		<FormikControl control='date' label='Start date' name='start_date1' placeholder='To be filled by Admin' />
	</div>
	<div className="col-md-6">
		<FormikControl control='time' label='Start time' name='start_time1' placeholder='To be filled by Admin' />
	</div>
	<div className="col-md-2">
		<FormikControl control='input' type='text' label='Job role' name='job_role2' placeholder='Public Area Cleaner' disabled />
	</div>
	<div className="col-md-2">
		<FormikControl control='input' type='text' label='Hourly rate' name='hourly_rate2' placeholder='11' disabled />
	</div>
	<div className="col-md-8">
		<FormikControl control='input' type='text' label='Uniform' name='dress1' placeholder='BLACK POLO SHIRT, BLACK TROUSER, BLCAK SHOES' disabled />
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
		<FormikControl control='input' type='text' label='Date' name='date3' />
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
		<FormikControl control='input' type='text' label='Designated hotel' name='hotel3' placeholder='To be filled by Admin' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Hourly rate' name='rate' placeholder='11' disabled />
	</div>
	<div className="col-md-12">
		<FormikControl control='input' type='text' label='This is conditional on at least 2 rooms cleaned in one hour. With a total of up _____ rooms cleaned in an 8-hour shift. You will also clean the corridors as and when required by the supervisors.' name='total_rooms' />
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
		<FormikControl control='input' type='text' label='Agency' name='agency1' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Signature' name='sign5' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label='Date' name='date5' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label="Trainer's Name" name='trainer_name' />
	</div>
	<div className="col-md-4">
		<FormikControl control='input' type='text' label="Trainer's signature" name='trainer_sign' />
	</div>

	<div className="col-md-4">
		<button type="button" className='btn1 btn2' onClick={()=>props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
	</div>				
	<div className="col-md-4">
		<p className='float-start' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required value(s).</p>
	</div>
	<div className="col-md-4">
		<button type="submit" className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
	</div>
</div>{/*row*/}
</Form>
)}}
</Formik>
);
}
export default FormPublicAreaCleaner;