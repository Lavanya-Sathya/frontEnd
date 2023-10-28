import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function App() {
  const [user, setUser] = useState("");
  const loggedIn = () => {
    setUser("Lavanya");
  };
  const logOut = () => {
    setUser("");
  };

  return (
    <div>
      <h1>API Fetch</h1>
      {user ? (
        <FetchAPIData logOut={logOut} user={user} />
      ) : (
        <div className="log">
          <h3>Please Login</h3>
          <button type="button" onClick={loggedIn}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

// API Fetch
const FetchAPIData = (props) => {
  const { logOut, user } = props;
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
        }
        const data = await res.json();
        console.log(data);
        setValue(data);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>Error Loading....</h4>;
  }
  return (
    <>
      <div className="log">
        <h3>Welcome, {user}!</h3>
        <button type="button" onClick={logOut}>
          LogOut
        </button>
      </div>
      {value.map((x) => {
        const { id, avatar_url, html_url, login } = x;
        return (
          <div key={id} className="background">
            <div className="nav">
              <img src={avatar_url} alt={login} />
              <div className="name_profile">
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  Profile
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
