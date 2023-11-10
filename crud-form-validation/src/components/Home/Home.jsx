import { useEffect, useState } from "react";
// import Data from "./Data";
import { v4 as uuid } from "uuid";
const Home = () => {
  const localData = JSON.parse(localStorage.getItem("userDetails")) || [];
  const [userData, setUserData] = useState(localData);
  // New data
  const [NameAdd, setNameAdd] = useState();
  const [EmailAdd, setEmailAdd] = useState();

  // Edit data
  const [nameEdit, setNameEdit] = useState();
  const [emailEdit, setEmailEdit] = useState();
  const [idEdit, setidEdit] = useState();

  const [searchItem, setsearchItem] = useState([]);
  const [isSearch, setsearch] = useState(false);

  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isPopupEditVisible, setPopupEditVisible] = useState(false);
  const [isPopupCreateVisible, setPopupCreateVisible] = useState(false);
  const handleCreate = () => {
    setPopupCreateVisible(!isPopupCreateVisible);
  };
  const handleOutsideClickCreate = () => {
    setPopupCreateVisible(!isPopupCreateVisible);
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const dateTime =
      day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec;
    let uniqueId = ids.slice(0, 8);
    let a = nameAdd.value,
      b = emailAdd.value;
    if (!a) {
      alert(" name is required");
    } else if (a.length < 4) {
      alert("invalid name");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!b) {
      alert("Email is required");
      return false;
    } else if (!emailRegex.test(b)) {
      alert("Email is invalid");
      return false;
    }
    let newData = {
      id: uniqueId,
      Name: a,
      Email: b,
      Editdate: dateTime,
    };
    const updateUsers = [...userData, newData];
    setUserData(updateUsers);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    alert("New data added successfully");
    console.log("userdata: " + JSON.stringify(userData));

    setPopupCreateVisible(!isPopupCreateVisible);
  };
  const handleEdit = (id, e) => {
    const x = e.clientX;
    const y = e.clientY;
    setPopupPosition({ x, y });
    let vals = userData.map((x) => {
      if (x.id === id) {
        setPopupEditVisible(!isPopupEditVisible);
        const editVal = {
          id: x.id,
          name: x.Name,
          email: x.Email,
        };
        // setEditData(editVal);
        setEmailEdit(x.Email);
        setNameEdit(x.Name);
        setidEdit(x.id);
      }
    });
  };
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const dateTime =
      day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec;
    userData.map((x) => {
      if (x.id === id) {
        x.Name = nameEdit;
        x.Email = emailEdit;
        x.Editdate = dateTime;
      }
    });
    // setUserData(Data);
    console.log(id);
    console.log(setUserData);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    alert("user data Updated successfully");

    setPopupEditVisible(!isPopupEditVisible);
  };
  // useEffect(()=>{
  //   set
  // })
  const handleOutsideClick = () => {
    setPopupEditVisible(!isPopupEditVisible);
  };
  const handleDelete = (id) => {
    const confrimDelete = confirm("Are you sure you want to delete this data");
    // let index1 = Data.map((e) => {
    //   return e.id;
    // }).indexOf(id);
    if (confrimDelete) {
      let index = userData.filter((x) => x.id !== id);
      setUserData(index);
      localStorage.setItem("userDetails", JSON.stringify(index));
      alert("user data deleted successfully");

      // setUserData(Data.splice(index1, 1));
    }
  };
  const handleSearch = (e) => {
    const valSearch = search.value;
    valSearch ? setsearch(true) : setsearch(false);
    let index = userData.filter(
      (x) => x.Name.toLowerCase() === valSearch.toLowerCase()
    );
    setsearchItem(index);
  };
  return (
    <div className="mt-5">
      <h3 className="text-center text-light mb-4">Welcome to Dashboard</h3>
      <div className="text-center">
        <button className="createBtn mb-3" onClick={(e) => handleCreate(e)}>
          ADD
        </button>
        {userData && userData.length > 0 ? (
          <>
            <div className="searchText mb-4">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search"
                id="search"
                onChange={(e) => handleSearch(e)}
              />
            </div>

            <table className="tableForm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isSearch
                  ? searchItem.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.Name}</td>
                          <td>{item.Email}</td>
                          <td>{item.Editdate}</td>
                          <td>
                            <button
                              className="EditBtn"
                              onClick={(e) => handleEdit(item.id, e)}
                            >
                              Edit
                            </button>
                            <button
                              className="DangerBtn"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : userData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.Name}</td>
                          <td>{item.Email}</td>
                          <td>{item.Editdate}</td>
                          <td>
                            <button
                              className="EditBtn"
                              onClick={(e) => handleEdit(item.id, e)}
                            >
                              Edit
                            </button>
                            <button
                              className="DangerBtn"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </>
        ) : (
          <h2 className="mb-5">
            No Data Available, Click on Add to create new User Details
          </h2>
        )}
      </div>
      {isPopupEditVisible && (
        <>
          <div
            className="overlay"
            onClick={handleOutsideClick}
            style={{
              top: popupPosition.y - 250,
            }}
          ></div>
          <div
            className="editPopup text-light"
            style={{
              left:
                window.innerWidth <= 500
                  ? "13%"
                  : window.innerWidth <= 800
                  ? popupPosition.x / 3
                  : popupPosition.x / 2,
              top: window.innerWidth <= 500 ? "13%" : popupPosition.y,
            }}
          >
            <span className="closePopup">
              <i className="bi bi-x-lg" onClick={handleOutsideClick}></i>
            </span>
            <h3 className="text-center mb-3">Edit</h3>
            <form className="editForm">
              <div className="mb-3" key={idEdit}>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={nameEdit}
                  id="nameEdit"
                  onChange={(e) => setNameEdit(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={emailEdit}
                  id="emailEdit"
                  onChange={(e) => setEmailEdit(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="mb-3">
                <button
                  className="btnSubmit"
                  onClick={(e) => handleUpdate(e, idEdit)}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {/* // Add new Data */}
      {isPopupCreateVisible && (
        <>
          <div className="overlay" onClick={handleOutsideClickCreate}></div>
          <div
            className="editPopup text-light"
            style={{
              left:
                window.innerWidth <= 500
                  ? "13%"
                  : window.innerWidth <= 900
                  ? "30%"
                  : "39%",
              top: "30%",
            }}
          >
            <span className="closePopup">
              <i className="bi bi-x-lg" onClick={handleOutsideClickCreate}></i>
            </span>
            <h3 className="text-center">ADD</h3>
            <span>
              <p className="text-center  mb-3">new data</p>
            </span>
            <form className="editForm">
              <div className="mb-3">
                <input
                  type="text"
                  name="nameAdd"
                  id="nameAdd"
                  placeholder="Enter Name"
                  className="form-input"
                  onChange={(e) => setNameAdd(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="emailAdd"
                  id="emailAdd"
                  placeholder="Enter Email"
                  className="form-input"
                  onChange={(e) => setEmailAdd(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  className="btnSubmit"
                  onClick={(e) => handleAddSubmit(e)}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
