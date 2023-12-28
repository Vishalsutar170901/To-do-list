import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BasicForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <div className="container-fluid bg-gray">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitForm}>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      autoComplete="off"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                  </div>
                  <div>
                  <br></br>
                </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      autoComplete="off"
                      placeholder="Name"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>
                </div>
                <div>
                  <br></br>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                  <center> <button type="submit" className="btn btn-primary">ADD</button></center> 
                  <hr></hr>
                  </div>
                </div>
              </form>
              <div>
                {allEntry.map((curElem, index) => (
                  <div className="showDataStyle" key={index}>
                    <p>Email: {curElem.email}</p>
                    <p>Password: {curElem.password}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
