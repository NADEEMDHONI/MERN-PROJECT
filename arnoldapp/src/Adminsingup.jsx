import react, { useState } from 'react';
// import '../css.style/sinup.css'
import { useHistory,NavLink } from 'react-router-dom';

const Adminsingup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", password: "", cpassword: ""
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
    const { name,  password, cpassword } = user;
    const res = await fetch('/admin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,  password, cpassword
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
      history.push("/adminpage")
    }
  }


  return (
    <>
{/* <div className="container-fluid">
    <div className='row'>
        <div className='col-10 mx-auto'>



{/* 
     
{/* <h1>this is nadeem</h1>
        </div>
    </div>
</div> */}

      
<div className="container ">
        <div className="row">
          <div className="col-10 mx-auto">
          <h1>nadeem</h1>
          <form method="POST">
              <div className="mb-3">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="password"
                />
              </div><div className="mb-3">
                <label className="form-label">cpassword</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="cpassword"
                />
              </div>
            

              <div className="col-12 mt-3 mb-3">
                <button className="btn btn-outline-primary " type="submit" onClick={PostData}>
                  Submit form
                </button>
              </div>
            </form>
          </div>
          </div>
          </div>
        
       
    
    </>
  )
}


export default Adminsingup;