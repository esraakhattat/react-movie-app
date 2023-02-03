import React, { useContext, useState } from 'react';
import * as Yup from 'yup';

import { useFormik } from "formik";
import "./LogIn.css"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Context/ThemeContext';

// const validate = values => {
//     const errors = {};
//     if (!values.password) {
//         errors.password = 'This field is required';
//     } else if (values.password.length < 8) {
//         errors.password = 'Must be at least 8 characters';
//     }

//     if (!values.email) {
//         errors.email = 'This field is required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;
// };

const LogIn = () => {
    const {contextTheme,setContextTheme}=useContext(ThemeContext)
    let [isShown,setIsShown]=useState(false);
    const handleVisibility=()=>{
        setIsShown(!isShown)
        
    }
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('This Field is required'),
            email: Yup.string().email('Invalid email address').required('This Field is required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    console.log(formik);
    return (<div className={contextTheme=="dark"?"background bg-dark":"bg-white"}>
    <div className="container p-5">
        <div className="log-in-section col-lg-4 col-md-12 col-sm-12">
            <form className='form' onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input required type="email" className={`form-control ${!formik.touched.email ? "" : (!formik.errors.email ? "is-valid" : "is-invalid")}`}
                        id="email" aria-describedby="emailHelp" name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {formik.errors.email ? <div className='text-danger'>{formik.touched.email&&formik.errors.email}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group flex-nowrap">
                    <input required minLength="8" type={isShown?"text":"password"} className={`form-control ${!formik.touched.password ? "" : (!formik.errors.password ? "is-valid" : ("is-invalid"))}`}
                        id="password" name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />
                        <span onClick={handleVisibility} className="input-group-text" id="addon-wrapping">{isShown?<i className="fa-solid fa-eye-slash"></i>:<i className="fa-solid fa-eye"></i>}</span>
                        </div>
                    {formik.errors.password ? <div className='text-danger'>{formik.touched.password&&formik.errors.password}</div> : null}
                </div>

                <button type="submit" className="btn active-btn mt-3 mb-3 btn-danger" disabled={formik.isSubmitting}>Log In</button>
                <p className="or"><span>Don't have an account?</span></p>
                <Link to="/react-movie-app/signup" className="btn active-btn btn-dark mt-3 mb-3">Sign Up</Link>
            </form>
        </div >
    </div >
    </div>)
}
export default LogIn;