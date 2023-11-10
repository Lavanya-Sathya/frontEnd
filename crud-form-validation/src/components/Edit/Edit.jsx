const Edit = ({ name, email, id }) => {
  return (
    <>
      <p>In edit</p>
      <div className="overlay"></div>
      <div className="editPopup text-light">
        <h3 className="text-center mb-3">Edit</h3>
        <form className="editForm" key={id}>
          <div className="mb-3">
            <input
              type="text"
              //   placeholder="Enter name"
              value={name}
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              //   placeholder="Enter Email"
              value={email}
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <button className="btnSubmit">Edit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Edit;
