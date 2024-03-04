const Register = () => {
  return (
    <div className="offset-lg-3 col-lg-6 ">
      <form className="container">
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Password <span className="errmsg">*</span>
                  </label>
                  <input type="password" className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Email <span className="errmsg">*</span>
                  </label>
                  <input type="email" className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Phone No <span className="errmsg">*</span>
                  </label>
                  <input className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Country <span className="errmsg">*</span>
                  </label>
                  <select className="form-select">
                    <option value="india">India</option>
                    <option value="singapore">Singapore</option>
                    <option value="china">China</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address </label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group ">
                  <label>Gender </label>
                  <br />
                  <div className="form-switch">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-check-input"
                    ></input>
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-switch">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-check-input"
                  ></input>
                  <label className="form-check-label">Female</label></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
