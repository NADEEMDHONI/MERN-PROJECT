import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import '../css.style/Login.css'
import { NavLink, useHistory } from 'react-router-dom';
import { login } from './features/userSlice';
const Login = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({
          
            email:email,
            password:password,
            loggedIn:true,
        }))
    }
    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                email,
                password
            })
        })
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("invalid Credentials");
        } else {
            window.alert("Login successfull");
            history.push('/home');
        }

    }

   
    return (

        <>
            <main>
                <div className="background">
                    <div className="text">
                        <h1>Login</h1>
                        <p>No Account? <NavLink to="/register">Sign up</NavLink></p>
                        <p><NavLink to='/admin'>Adminlogin</NavLink></p>
                    </div>
                    <div className="box">
                        <form method="POST" className="form" onSubmit={(e)=>handleSubmit(e)} >
                       
                            <input type="email" className="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                            <input type="password" className="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                            <input type="submit"  className="button" name="signin" id="signin" value="login" onClick={loginUser}></input>

                        </form>
                        {/* <NavLink to="/register" > create on account</NavLink> */}
                    </div>
                </div>
            </main>
       
        </>
    );
};
export default Login;
