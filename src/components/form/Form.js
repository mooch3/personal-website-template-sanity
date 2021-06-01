import { useState } from 'react';
import classes from './Form.module.css';
import useForm from '../../hooks/use-form';
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

init("user_xaMfEHddsv1BaMT7btgvX");

const isNotEmpty = value => value.trim().length > 0;
const isEmail = value => value.includes('@');

const Form = (props) => {
    const [status, setStatus] = useState('Submit');
    const [isError, setIsError] = useState(null)


    const {
        isValid: fNameValid,
        hasError: fNameHasError,
        valueChangedHandler: fNameValueChangedHandler,
        onBlurHandler: fNameBlurHandler,
        reset: fNameReset,
        value: fNameValue

    } = useForm(isNotEmpty);

    const {
        isValid: lNameValid,
        hasError: lNameHasError,
        valueChangedHandler: lNameValueChangedHandler,
        onBlurHandler: lNameBlurHandler,
        reset: lNameReset,
        value: lNameValue

    } = useForm(isNotEmpty);

    const {
        isValid: emailValid,
        hasError: emailHasError,
        valueChangedHandler: emailValueChangedHandler,
        onBlurHandler: emailBlurHandler,
        reset: emailReset,
        value: emailValue

    } = useForm(isEmail);


    const {
        isValid: subjectValid,
        hasError: subjectHasError,
        valueChangedHandler: subjectValueChangedHandler,
        onBlurHandler: subjectBlurHandler,
        reset: subjectReset,
        value: subjectValue

    } = useForm(isNotEmpty);

    const {
        isValid: messageValid,
        hasError: messageHasError,
        valueChangedHandler: messageValueChangedHandler,
        onBlurHandler: messageBlurHandler,
        reset: messageReset,
        value: messageValue

    } = useForm(isNotEmpty);


    let formIsValid = false;

    if (fNameValid && lNameValid && emailValid && subjectValid && messageValid) {
        formIsValid = true;
    }

    const invalidHelper = `${classes['form-control']} ${classes['invalid']}`

    const fNameInputClasses = !fNameHasError ? classes['form-control'] : invalidHelper;
    const lNameInputClasses = !lNameHasError ? classes['form-control'] : invalidHelper;
    const emailInputClasses = !emailHasError ? classes['form-control'] : invalidHelper;
    const subjectInputClasses = !subjectHasError ? classes['form-control'] : invalidHelper;
    const messageInputClasses = !messageHasError ? classes['form-control'] : invalidHelper;

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(event.target.fName)

        if (!formIsValid) {
            return;
        }

        // TODO: send errors to user if problems arise

        // contact server to send email
        setStatus('Sending...');

        let templateParams = {
            email: emailValue,
            message: messageValue,
            subject: subjectValue,
            fName: fNameValue,
            lName: lNameValue
        }

        emailjs.send(
            'service_klhp62d',
            'template_ta0j1jr',
            templateParams,
        ).then((res) => {
            console.log(res);

            setStatus("Submit");

            messageReset();
            fNameReset();
            lNameReset();
            emailReset();
            subjectReset();
    
            props.closeContact();
        }).catch(err => {
            console.log(err.text);
            setIsError(true);
            return;
        });



    }

    return (
        <>
            {isError ? <div className="centered"><h1>We could not complete your request at this time.</h1></div>
            
            :
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes['control-group']}>
                        <div className={fNameInputClasses}>
                            <label htmlFor="fName">First Name</label>
                            <input
                                onBlur={fNameBlurHandler}
                                onChange={fNameValueChangedHandler}
                                value={fNameValue}
                                autoComplete="off"
                                type="text"
                                id="fName" />
                            {fNameHasError && <p className={classes['invalid-notif']}>Please enter a first name.</p>}
                        </div>
                        <div className={lNameInputClasses}>
                            <label htmlFor="lName">Last Name</label>
                            <input
                                onBlur={lNameBlurHandler}
                                onChange={lNameValueChangedHandler}
                                value={lNameValue}
                                autoComplete="off"
                                type="text"
                                id="lName"
                            />
                            {lNameHasError && <p className={classes['invalid-notif']}>Please enter a last name.</p>}
                        </div>
                    </div>
                    <div className={classes['control-group']}>
                        <div className={emailInputClasses}>
                            <label htmlFor="email">Email</label>
                            <input
                                onBlur={emailBlurHandler}
                                onChange={emailValueChangedHandler}
                                value={emailValue}
                                autoComplete="off"
                                type="email"
                                id="email"
                            />
                            {emailHasError && <p className={classes['invalid-notif']}>Please enter an email.</p>}

                        </div>
                        <div className={subjectInputClasses}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                onBlur={subjectBlurHandler}
                                onChange={subjectValueChangedHandler}
                                value={subjectValue}
                                autoComplete="off"
                                type="text"
                                id="subject"
                            />
                            {subjectHasError && <p className={classes['invalid-notif']}>Please enter a subject.</p>}
                        </div>
                    </div>
                    <div className={messageInputClasses}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            onBlur={messageBlurHandler}
                            onChange={messageValueChangedHandler}
                            value={messageValue}
                            autoComplete="off"
                            type="text"
                            id="message"
                        />
                        {messageHasError && <p className={classes['invalid-notif']}>Please enter a message.</p>}
                    </div>
                    <div className={classes['form-actions']}>
                        <button disabled={!formIsValid}>{status}</button>
                    </div>

                </form>
            }
        </>
    )
}

export default Form;