import react, { useState } from 'react';
// import '../css.style/sinup.css'
import { useHistory,NavLink } from 'react-router-dom';

const Singup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword
      })

    })
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid registraton");
      console.log("invalid registraton");
    }
    else {
      window.alert(" registraton successfull");
      console.log("successfull registraton");
      history.push("/")
    }
  }


  return (
    <>


      <main>
        <div className="background">
          <div className="text">
            <h1>Signup</h1>
            <p>Have Account? <NavLink to="/">Login</NavLink></p>
          </div>
          <div className="box">
            <form method="POST" className="form">

              <input type="text" className="name" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Enter your name" />


              <input type="email" className="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Enter email" />


              <input type="password" className="password" name="password" id="password" autoComplete="off" value={user.password}
                onChange={handleInputs} placeholder="Password" />

              <input type="password" className="cpassword" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword}
                onChange={handleInputs} placeholder="Conform Password" />

              

              <input type="submit" className="button" name="signup" id="signup" value="Submit" onClick={PostData}></input>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}


export default Singup;