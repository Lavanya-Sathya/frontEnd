import React from "react";
const Contact = () => {
  return (
    <div className="container my-4 ">
      <p className="h4 text-center">Contact Us</p>
      <form action="" className="w-70 me-auto">
        <div className="mt-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your name"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="query" className="form-label">
            Query
          </label>
          <textarea className="form-control" required></textarea>
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
