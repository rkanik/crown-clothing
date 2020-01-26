
import React from 'react';
import "./signin.scss"

import { Link } from 'react-router-dom'

import {
   Card, CardContent, CardActions,
   Button, TextField, FormControl, InputLabel,
   OutlinedInput, InputAdornment, IconButton
}
   from "@material-ui/core"

import { Visibility, VisibilityOff, Facebook, GitHub } from "@material-ui/icons"

class signin extends React.Component {

   state = {
      textFiledStyles: { width: "100%", marginBottom: "1rem" },
      formValues: {
         userName: "", password: '',
         showPassword: false
      }
   }

   onFormChange = ({ target }) => {
      this.setState(prevState => {
         return {
            ...prevState,
            formValues: {
               ...prevState.formValues,
               [target.name]: target.value
            }
         }
      })
   }
   handleClickShowPassword = () => {
      this.setState(prevState => ({
         ...prevState,
         formValues: {
            ...prevState.formValues,
            showPassword: !prevState.formValues.showPassword
         }
      }))
   }

   handleSignin = () => {
      console.log(this.state.formValues)
   }

   render() {
      return (
         <div className='signin h-100 w-100'>
            <div className="pos-abs to-center">
               <div className='upper-box pos-abs'>
                  <h3>Signin</h3>
                  <hr className='mb-6' />
                  <div>
                     <Button className='mr-4' variant='contained' style={{ backgroundColor: "#1976d2", color: "#ffffff" }}>
                        <Facebook />
                        <span style={{ marginLeft: "10px" }}>Facebook</span>
                     </Button>
                     <Button variant='contained' color='secondary'>
                        <GitHub />
                        <span style={{ marginLeft: "10px" }}>Github</span>
                     </Button>
                  </div>
               </div>
               <Card className='c-card' style={{ width: '350px' }}>
                  <CardContent>
                     <div className='text-center mb-10'>
                        <h4 className='or'>OR</h4>
                        <p>Signin with your username and password</p>
                     </div>
                     <div>
                        <TextField
                           value={this.state.formValues.userName}
                           onChange={this.onFormChange}
                           name='userName'
                           label="Username"
                           style={this.state.textFiledStyles}
                           variant="outlined" size='small'
                        />

                        <FormControl variant="outlined" style={this.state.textFiledStyles} size="small">
                           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                           <OutlinedInput
                              name='password'
                              id="outlined-adornment-password"
                              type={this.state.formValues.showPassword ? 'text' : 'password'}
                              value={this.state.formValues.password}
                              onChange={this.onFormChange}
                              endAdornment={
                                 <InputAdornment position="end">
                                    <IconButton
                                       aria-label="toggle password visibility"
                                       onClick={this.handleClickShowPassword}
                                       //onMouseDown={handleMouseDownPassword}
                                       edge="end"
                                    >
                                       {this.state.formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                 </InputAdornment>
                              }
                              labelWidth={70}
                           />
                        </FormControl>
                     </div>
                  </CardContent>
                  <CardActions>
                     <Button onClick={this.handleSignin} className='mr-2' variant='contained' color='primary'>Signin</Button>
                     <Link to="/auth/register"><Button> CREATE ACCOUNT</Button></Link>
                  </CardActions>
               </Card>
            </div>
         </div>
      );
   }
}

export default signin;