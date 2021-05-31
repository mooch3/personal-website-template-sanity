import classes from './Form.module.css';
import useForm from '../../hooks/use-form';

const isNotEmpty = value => value.trim().length > 0;
const isEmail = value => value.includes('@');

const Form = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }

        console.log(fNameValue, lNameValue, subjectValue, emailValue, messageValue)

        messageReset();
        fNameReset();
        lNameReset();
        emailReset();
        subjectReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes['control-group']}>
                <div className={fNameInputClasses}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        onBlur={fNameBlurHandler}
                        onChange={fNameValueChangedHandler}
                        value={fNameValue}
                        autoComplete="off"
                        type="text"
                        id="first-name" />
                        {fNameHasError && <p className={classes['invalid-notif']}>Please enter a first name.</p>}
                </div>
                <div className={lNameInputClasses}>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        onBlur={lNameBlurHandler}
                        onChange={lNameValueChangedHandler}
                        value={lNameValue}
                        autoComplete="off"
                        type="text"
                        id="last-name"
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
                <button disabled={!formIsValid}>Submit</button>
            </div>

        </form>
    )
}

export default Form;