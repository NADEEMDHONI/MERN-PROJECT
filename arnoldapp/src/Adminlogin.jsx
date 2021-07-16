import react, { useState } from 'react';
// import '../css.style/Login.css'
import { NavLink, useHistory } from 'react-router-dom';
const Adminlogin = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/adminlogin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                name,
                password
            })
        })
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("invalid Credentials");
        } else {
            window.alert("Login successfull");
            history.push('/adminpage');
        }

    }
    return (

        <>
            <main>
                <div className="background">
                    <div className="text">
                        <h1>Admin </h1>
                        <p>User Login? <NavLink to="/login">Login</NavLink></p>
                       
                        
                    </div>
                    <div className="box">
                   
                        <form method="POST" className="form">
                        <h1>Admin</h1>
                            <input type="text" className="name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

                            <input type="password" className="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                            <input type="submit"  className="button" name="signin" id="signin" value="login" onClick={loginUser}></input>
            
                        </form>
                     
                    </div>
                </div>
            </main>
        </>
    );
};
export default  Adminlogin;
