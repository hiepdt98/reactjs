import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {hide, show} from 'redux-modal'
import Actions from '../redux/wrapper/auths-redux'
import PropTypes from 'proptypes'
import login from '../utils/app-utils'
import {ValidationForm, TextInput} from 'react-bootstrap4-form-validation'
import validator from 'validator'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
    }

  }
  handleForgetPassword = (e) => {
    e.preventDefault()
    let data = {email : this.state.email}
    this.props.forgotPasswordRequest(data);
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let data = {email : this.state.email, password: this.state.password}
    this.props.loginRequest(data);
  }
  handleSignUp = (e) => {
    e.preventDefault()
    let data = {name : this.state.name, email : this.state.email, phone : this.state.phone, address : this.state.address, password : this.state.password}
    this.props.signupRequest(data);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.data !== this.props.data){
      if(this.props.data.login){
        let history = this.props.history
        let token = this.props.data.token
        let path = '/home'
        login(history, token, path);
      }
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  matchPassword = (value) => {
    return value && value === this.state.password;
  }
  render() {
    return (
          <div className="login">
            <div className="wrap">
              <div id="toggle-wrap">
                <div id="toggle-terms">
                  <div id="cross">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="recovery">
                <h2>Password Recovery</h2>
                <p>Enter either the <strong>email address</strong> or <strong>username</strong> on the account
                  and <strong>click Submit</strong></p>
                <p> Email instructions on how to reimport set your password.</p>
                <ValidationForm className="recovery-form" action="" method="post">
                    <TextInput name="email"
                               type="email"
                               validator={validator.isEmail}
                               errorMessage={{validator:'Please enter a valid email', required : 'please fill email'}}
                               value={this.state.email}
                               onChange={this.handleChange}
                               placeholder="Email"
                               required
                    />
                    <TextInput type="button" className="btn btn-danger" value="Submit" onClick={this.handleForgetPassword} />
                </ValidationForm>
                <p className="mssg">An email has been sent to you with further instructions.</p>
              </div>
              <div className="content">
                <div className="logo">
                  <a href="#"><img src={require('../images/imgLogo.png')} className="img-fluid" /></a>
                </div>
                <div id="slideshow">
                  <div className="one">
                    <h2><span>WORK</span></h2>
                    <p>Visualize your work</p>
                  </div>
                  <div className="two">
                    <h2><span>GOAL</span></h2>
                    <p>Limit your work in progress to focus on your goal</p>
                  </div>
                  <div className="three">
                    <h2><span>DRAG & DROP </span></h2>
                    <p>Drag and drop tasks to manage your project</p>
                  </div>
                  <div className="four">
                    <h2><span>INSTALL</span></h2>
                    <p>Super simple installation</p>
                  </div>
                </div>
              </div>
              <div className="user">
                <div className="form-wrap">
                  <div className="tabs">
                    <h3 className="login-tab"><a className="log-in active" href="#login-tab-content"><span>Login</span></a></h3>
                    <h3 className="signup-tab"><a className="sign-up" href="#signup-tab-content"><span>Sign Up</span></a></h3>
                  </div>
                  <div className="tabs-content">
                    <div id="login-tab-content" className="active">
                      <ValidationForm className="login-form" >
                          <TextInput name="email"
                                     type="email"
                                     validator={validator.isEmail}
                                     errorMessage={{validator:'Please enter a valid email',required : 'please fill email'}}
                                     value={this.state.email}
                                     onChange={this.handleChange}
                                     placeholder="Email"
                                     required
                          />
                          <TextInput name="password" type="password" required
                                     pattern=".{6,}"
                                     errorMessage={{required:'Password is required', pattern: 'Password should be at least 6 characters'}}
                                     value={this.state.password}
                                     onChange={this.handleChange}
                                     placeholder="Password"
                          />
                          <div className="form-group">
                            <TextInput type="button" onClick={this.handleSubmit} className="btn btn-success" value="Login" />
                            {this.props.processing ? <img src={require('../images/ajax-loader (2).gif')} alt="loading" /> : null}
                          </div>
                      </ValidationForm>
                      <div className="help-action">
                        <p><i className="fa fa-arrow-left" aria-hidden="true"></i><a className="forgot" href="#">Forgot your password?</a></p>
                      </div>
                    </div>
                    <div id="signup-tab-content">
                      <ValidationForm >
                        <div className="form-group">
                          <TextInput name="name" id="name" required
                                     value={this.state.name}
                                     onChange={this.handleChange}
                                     placeholder="Name"
                                     errorMessage={{required:'Please enter fill name'}}

                          />
                        </div>
                        <div className="form-group">
                          <TextInput name="email" id="email"
                                     type="email"
                                     validator={validator.isEmail}
                                     errorMessage={{validator:'Please enter a valid email',required:'Please enter fill email'}}
                                     value={this.state.email}
                                     onChange={this.handleChange}
                                     placeholder="Email"
                                     required
                          />
                        </div>
                        <div className="form-group">
                          <TextInput name="phone" id="phone" type="text"
                                     value={this.state.phone}
                                     validator={validator.isNumeric}
                                     errorMessage={{validator:'Please enter a valid phone', required:'Please enter fill phone'}}
                                     onChange={this.handleChange}
                                     placeholder="Phone"
                                     required
                          />
                        </div>
                        <div className="form-group">
                          <TextInput name="address" id="address"Untitled board
                                     value={this.state.address}
                                     onChange={this.handleChange}
                                     errorMessage={{required:'Please enter fill address'}}
                                     placeholder="Address"
                                     required
                          />
                        </div>
                        <div className="form-group">
                          <TextInput name="password" id="password" type="password" required
                                     pattern=".{6,}"
                                     errorMessage={{required:'Password is required', pattern: 'Password should be at least 6 characters'}}
                                     value={this.state.password}
                                     onChange={this.handleChange}
                                     placeholder="Password"

                          />
                        </div>
                        <div className="form-group">
                          <TextInput name="confirmPassword" id="confirmPassword" type="password" required
                                     validator={this.matchPassword}
                                     errorMessage={{required:'Confirm password is required', validator: 'Password does not match'}}
                                     value={this.state.confirmPassword}
                                     onChange={this.handleChange}
                                     placeholder="Confirm Password"
                          />
                        </div>
                        <TextInput type="button" onClick={this.handleSignUp} className="btn btn-primary" value="Sign up" />
                      </ValidationForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
const mapStateToProps = state => {
  return {
    data : state.auths.data,
    processing: state.auths.processing
  }
}
Login.propTypes= {
  forgotPasswordRequest : PropTypes.func,
  loginRequest : PropTypes.func,
  history: PropTypes.object,
  show: PropTypes.func,
  hide: PropTypes.func,
  signupRequest: PropTypes.func,
  processing : PropTypes.func,
  auths : PropTypes.object,
  login : PropTypes.boolean,
  data : PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ show, hide }, dispatch),
  forgotPasswordRequest : data => (dispatch(Actions.forgotPasswordRequest(data))),
  loginRequest: data => (dispatch(Actions.loginRequest(data))),
  signupRequest : data => (dispatch(Actions.registerRequest(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
