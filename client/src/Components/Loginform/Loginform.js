const Loginform = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-md-12 text-center">
        <button disabled={!email || !password} className="btn btn-primary col-6">
          Login
        </button>
      </div>
    </form>
  );
};

export default Loginform;
