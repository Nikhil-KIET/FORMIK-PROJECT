import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      pass:'',
      cpass:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required(<p className=' text-red-600'>Please enter first name </p>),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required(<p className=' text-red-600'>Please enter last name</p>),
      email: Yup.string().email(<p className=' text-red-600'>Invalid email address</p>).required(<p className=' text-red-600'>Please Enter Email</p>).matches(/@gmail\.com$/, "Email must end with @gmail.com"),
      pass: Yup.string().min(7,"Must be more than 7 characters").required(<p className=' text-red-600'>Please enter  Password </p>).matches(
        /rishiME@199$/,
        "Password must be rishiME@199"
      ),
      cpass: Yup.string()
      .oneOf([Yup.ref("pass"), null],<p className=' text-red-600'>Passwords must match</p> )
      .required(<p className=' text-red-600'>Confirm password is required</p>),
      

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div className='flex overflow-hidden bg-[#efedee] h-screen justify-center items-center gap-4   '>
<div className='flex  bg-white rounded-lg overflow-hidden w-[800px] justify-center gap-[150px] '>
<form className=' gap-[20px] pl-5 flex flex-col justify-center items-start h-[auto]   ' onSubmit={formik.handleSubmit}>
  <h1>WELCOME! </h1>
  <div className='rounded-lg border-2 p-2'>
      <label htmlFor="firstName">First Name</label>
      <input className=' w-[250px] h-[25px] '
        id="firstName"
        name="firstName"
        placeholder='First Name'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      </div>
   <div className='rounded-lg border-2 p-2'>
      <label htmlFor="lastName">Last Name</label>
      <input className=' w-[250px] h-[25px] '
        id="lastName"
        name="lastName"
        placeholder='Last Name'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      </div>

     <div className='rounded-lg border-2 p-2'>
     <label className='' htmlFor="email">Email Address</label>
      <input className=' w-[250px] h-[25px] '
        id="email"
        name="email"
        placeholder='Email'
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
     </div>

     <div className='rounded-lg border-2 p-2'>
     <label className='' htmlFor="pass">Password </label>
      <input className=' w-[250px] h-[25px] '
        id="pass"
        name="pass"
        placeholder='Password'
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pass}
      />
      {formik.touched.pass && formik.errors.pass ? (
        <div>{formik.errors.pass}</div>
      ) : null}
     </div>

     <div className='rounded-lg border-2 p-2'>
     <label className='' htmlFor="cpass">Confirm Password </label>
      <input className=' w-[250px] h-[25px] '
        id="cpass"
        name="cpass"
        placeholder='Confirm Password'
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cpass}
      />
      {formik.touched.cpass && formik.errors.cpass ? (
        <div>{formik.errors.cpass}</div>
      ) : null}
     </div>

     {formik.values.firstName && formik.values.lastName && formik.values.email && formik.values.pass && formik.values.cpass ?(  <button   className= ' self-center bg-orange-800  rounded-lg p-5'   type="submit">Submit</button>) :(<button disabled  className= ' self-center opacity-30 my-3 bg-slate-600 rounded-lg text-white p-5 '  type="submit">Submit</button>)} 
      

      
    </form>

    <img className= ' object-contain  h-[500px]  ' src="https://jpcdn.it/img/r/398/602/70c92e5e7d8ff3bf178ff76647fa3af8.png" alt="" />
</div>
    </div>
  );
};

export default App;
