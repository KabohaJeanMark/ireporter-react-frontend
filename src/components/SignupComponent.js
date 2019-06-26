import React from 'react';
import Navbar from './Navbar';

const SignUpPresentationComponent = ({ handleSubmit, handleChange}) => {
  return (
    <>
      <Navbar />
      <div className="create-signup" align="center">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="first_name"
                    id="firstname-input"
                    placeholder="first name"
                    required
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="last_name"
                    id="lastname-input"
                    placeholder="last name"
                    required
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                  <input
                  
                    type="text"
                    name="othernames"
                    id="othername-input"
                    placeholder="other name"
                    required
                    onChange={e => handleChange(e)}/>
                </div>
                <div className="form-group">
                <input                  
                    type="text"
                    name="email"
                    id="email-input"
                    placeholder="email"
                    required
                    onChange={e => handleChange(e)}/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    id="username-input"
                    placeholder="username"
                    required
                    onChange={e => handleChange(e)}/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    id="phonenumber-input"
                    placeholder="phone number"
                    required
                    onChange={e => handleChange(e)}/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="password"
                    id="password-input"
                    placeholder="password"
                    required
                    onChange={e => handleChange(e)}/>
                </div>
                <button type="submit" className="btn postarticle-btn btn-outline-primary">Sign up</button>
              </form>
            </div>
          </div>
    </>
  );
};

export default SignUpPresentationComponent;
