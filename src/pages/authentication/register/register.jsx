import React, { useState } from 'react';
import {
   TextField, Paper, Grid, FormControl, OutlinedInput,
   InputAdornment, InputLabel, IconButton
} from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"

const Register = () => {

   const [user, setUser] = useState({
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
   })

   const [errors, setError] = useState({
      userName: false,
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false
   })

   const [messages, setMessage] = useState({
      userName: "Username is required",
      firstName: 'Firstname is required',
      lastName: 'Lastname is required',
      email: 'Email is required',
      password: 'Password should have atleast one uppercase one lowercase and a number',
      confirmPassword: "Password don't matched"
   })

   const [showPass, setShowPass] = useState(false)

   const handleOnChangeInput = ({ target }) => {
      setUser({
         ...user,
         [target.name]: target.value
      })
   }

   const isEmpty = field => {
      return user[field].trim() === "" ? true : false
   }

   return (
      <div className='register h-100 w-100'>
         <Paper className='box pos-abs to-center pa-5 red'>
            <div className="reg-header">
               <h3 className='reg-title'>Create your account</h3>
               <p className="reg-subtitle"></p>
            </div>
            <div className="reg-form">
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Username*"
                        value={user.userName}
                        onChange={handleOnChangeInput}
                        name="userName"
                        // helperText="Incorrect entry."
                        variant="outlined"
                        size='small'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <TextField
                        fullWidth
                        label="Firstname*"
                        value={user.firstName}
                        onChange={handleOnChangeInput}
                        name="firstName"
                        // helperText="Incorrect entry."
                        variant="outlined"
                        size='small'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <TextField
                        fullWidth
                        label="Lastname*"
                        value={user.lastName}
                        onChange={handleOnChangeInput}
                        name="lastName"
                        //helperText="Incorrect entry."
                        variant="outlined"
                        size='small'
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        error={isEmpty('email') && true}
                        fullWidth
                        label="Email address*"
                        value={user.email}
                        onChange={handleOnChangeInput}
                        name="email"
                        helperText={isEmpty('email') && "Email is required"}
                        variant="outlined"
                        size='small'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <TextField
                        fullWidth
                        label="Password"
                        value={user.password}
                        onChange={handleOnChangeInput}
                        name="password"
                        type={showPass ? 'text' : 'password'}
                        //helperText="Incorrect entry."
                        variant="outlined"
                        size='small'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <FormControl variant="outlined" size="small">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                        <OutlinedInput
                           name='confirmPassword'
                           type={showPass ? 'text' : 'password'}
                           value={user.confirmPassword}
                           onChange={handleOnChangeInput}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setShowPass(!showPass) }}
                                    edge="end"
                                 >
                                    {showPass ? <Visibility /> : <VisibilityOff />}
                                 </IconButton>
                              </InputAdornment>
                           }
                           labelWidth={70}
                        />
                     </FormControl>
                  </Grid>
               </Grid>
            </div>
         </Paper>
      </div>
   );
}

export default Register;
