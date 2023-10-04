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
      emailjs.send('service_1wsipth', 'template_0guzkss', templateParams, 'JQvfmVQAl_wtvH1Qp');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Number: ${number}

      `);

      const thanksMes = document.getElementById('thanks-message');
      if (thanksMes) {
        thanksMes.style.display = 'block';
      }

      const contactError = document.getElementById('error-message');
      if (contactError) {
        contactError.style.display = 'none';
      }

      this.resetForm();
    } else {
      // Handle form validation failure
      const contactError = document.getElementById('error-message');
      if (contactError) {
        contactError.style.display = 'block';
      }
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      number: '',
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
                  <span className='errorMessage'>Please enter a name</span>
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
                  <span className='errorMessage'>Please enter an email</span>
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
            <p id="error-message">Please ensure all fields are entered correctly</p>
            <p id="thanks-message">Thank you, we will be in touch soon</p>
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