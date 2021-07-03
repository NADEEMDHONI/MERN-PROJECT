import react,{useState} from 'react';
// import '../css.style/Login.css'
import { NavLink,useHistory } from 'react-router-dom';
const Login = () => {

    const history=useHistory();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const loginUser= async(e)=>{
        e.preventDefault();

        const res=await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body: JSON.stringify({
                email,
                password
            })
        })
        const data=res.json();
        if(res.status === 400 || !data){
            window.alert("invalid Credentials");
        }else{
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
                <p>No Account? <a href="/register">Sign up</a></p>
            </div>
            <div className="box">
            <form method="POST" className="form">
                <input type="email" className="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />

                <input type="password" className="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />

                <input type="submit" name="signin" id="signin" value="login" onClick={loginUser}></input>

                </form>
                <NavLink to="/register" > create on account</NavLink>
            </div>
        </div>
    </main>
        </>
    );
};
export default Login;
