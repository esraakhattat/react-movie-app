import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Context/ThemeContext";
import "./SignUp.css"
function SignUp() {
    const {contextTheme,setContextTheme}=useContext(ThemeContext)
    let [isShown, setIsShown] = useState(false);
    let [isCShown, setIsCShown] = useState(false);

    const handleVisibility = () => {
        setIsShown(!isShown)

    }
    const handleConfirmVisibility = () => {
        setIsCShown(!isCShown)

    }
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    const [error, setErrors] = useState({
        name: null,
        email: null,
        username: null,
        password: null,
        confirm: null
    })
    const handleChange = (e) => {
        // console.log(e.target.name)
        if (e.target.name == "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErrors({
                ...error,
                name: e.target.value.length == 0 ? "This Field is Required" : (e.target.value.length < 3 ? "Min Length is 3 Char" : null)
            })
        } else if (e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErrors({
                ...error,
                email: e.target.value.length == 0 ? "This Field is Required" : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value) ? "Invalid Email" : null)
            })
        } else if (e.target.name == "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErrors({
                ...error,
                username: e.target.value == 0 ? "This Field is Required" : (!/^\S*$/i.test(e.target.value) ? "user name can't contain spaces" : null)
            })
        } else if (e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErrors({
                ...error,
                password: e.target.value == 0 ? "This Field is Required" : (!/^(?=.*\d)(?=.*[a-z])(?=.*(\W|_))(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(e.target.value) ? "password length at least 8 characters , contains at least one lowercase , one uppercase ,  at least one digit and special character" : null)
            })
        } else {
            console.log(userData.password);
            setUserData({
                ...userData,
                confirm: e.target.value
            })

            console.log(userData.confirm);
            setErrors({
                ...error,
                confirm: e.target.value == 0 ? "This Field is Required" : (userData.password != userData.confirm ? "Passwords doesn't match" : null)
            })
        }

    }


    const handleSubmit = (e) => {
        console.log(error);
        console.log(userData);
        e.preventDefault();
    }
    return (
        <div className={contextTheme=="dark"?"background bg-dark":"bg-white"}>
        <div className="container p-5">
            <div className="log-in-section col-lg-5 col-md-12 col-sm-12">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input required type="text" className="form-control"
                            id="name" aria-describedby="emailHelp" name="name" onChange={handleChange} />
                        {error.name ? <div className='text-danger'>{error.name}</div> : null}

                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input required type="email" className="form-control"
                            id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                        {error.email ? <div className='text-danger'>{error.email}</div> : null}

                    </div>
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input required type="text" className="form-control"
                            id="username" aria-describedby="emailHelp" name="username" onChange={handleChange} />
                        {error.username ? <div className='text-danger'>{error.username}</div> : null}

                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group flex-nowrap">
                            <input required type={isShown ? "text" : "password"} className="form-control"
                                id="password" name="password" onChange={handleChange} />
                            <span onClick={handleVisibility} className="input-group-text" id="addon-wrapping">{isShown ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</span>
                        </div>
                        {error.password ? <div className='text-danger'>{error.password}</div> : null}

                    </div>
                    <div>
                        <label htmlFor="confirm" className="form-label">Confirm Password</label>
                        <div className="input-group flex-nowrap">
                            <input required type={isCShown ? "text" : "password"} className="form-control"
                                id="confirm" name="confirm" onChange={handleChange} />
                            <span onClick={handleConfirmVisibility} className="input-group-text" id="addon-wrapping">{isCShown ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</span>

                        </div>
                            {error.confirm ? <div className='text-danger'>{error.confirm}</div> : null}
                    </div>

                    <button type="submit" className="btn active-btn mt-3 mb-3 btn-danger"  disabled = {error.username || error.email ||error.name||error.confirm||error.password}>Sign Up</button>
                    <p className="or"><span>Don't have an account?</span></p>
                    <Link to={"/react-movie-app/login"} className="btn active-btn btn-dark mt-3 mb-3">Log In</Link>
                </form>
            </div>
        </div>
        </div>
    )
}
export default SignUp;