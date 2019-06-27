import React from 'react';
import Navbar from './Navbar';

const LoginPresentationComponent = ({ handleSubmit, handleChange}) => {
  return (
    <>
      <Navbar />
      <div align="center">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                id="username-input"
                placeholder="username"
                required
                onChange={e => handleChange(e)}/>
            </div>
                
            <div>
              <input
                type="password"
                name="password"
                id="password-input"
                placeholder="password"
                required
                onChange={e => handleChange(e)}/>
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPresentationComponent;
