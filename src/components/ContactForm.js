import React, { Component } from 'react';
import emailjs from 'emailjs-com';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      formErrors: {
        name: '',
        email: '',
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, number} = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        number: number,
      };
      emailjs.send('service_cmtdixa', 'template_hb1dv4b', templateParams, 'user_hPRLmapB4SAjTHf4l51O5');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Number: ${number}

      `);

      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className='ContactForm'>
        <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
          <div className="form-input-split">
            <label>
              <div className="input-div high-columns">
                  <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  placeholder='Name'
                  noValidate
                ></input>
                {formErrors.name.length > 0 && (
                  <span className='errorMessage'>{formErrors.name}</span>
                )}
              </div>
            </label>

            <label>
              <div className="input-div high-columns">
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  placeholder='Email'
                  noValidate
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
              </div>
            </label>

            <label>
              <div className="input-div">
                <input
                  type='tel'
                  name='number'
                  value={this.state.number}
                  className={`form-control formInput`}
                  onChange={this.handleChange}
                  placeholder='Number'
                  noValidate
                ></input>
              </div>
            </label>
          </div>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;