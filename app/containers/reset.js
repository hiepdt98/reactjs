import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {hide, show} from 'redux-modal'
import Actions from '../redux/wrapper/auths-redux'
import PropTypes from 'proptypes'
import {ValidationForm, TextInput} from 'react-bootstrap4-form-validation'
class Reset extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
      confirmPassword: '',
    }
  }
  handleResetPassword = (e) =>{
    e.preventDefault();
    let params = new URLSearchParams(this.props.history.location.search)
    let token = params.getAll('token')
    let data = {token : token[0], password : this.state.password}
    this.props.resetPasswordRequest(data);
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
      <div className="reset-password">enter
        <div className="container">
          <ValidationForm className="form-reset pure-form">
            <div className="logo">
              <a href="#"><img src={require('../images/imgLogo.png')} className="img-fluid" /></a>
            </div>
            <div className="form-group">
              <label htmlFor="inputPasswordReset">New password</label>
              <TextInput name="password" id="password" type="password" required
                         pattern=".{6,}"
                         errorMessage={{required:'Password is required', pattern: 'Password should be at least 6 characters'}}
                         value={this.state.password}
                         onChange={this.handleChange}
                         placeholder="Password"

              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPasswordReset">Confirm password</label>
              <TextInput name="confirmPassword" id="confirmPassword" type="password" required
                         validator={this.matchPassword}
                         errorMessage={{required:'Confirm password is required', validator: 'Password does not match'}}
                         value={this.state.confirmPassword}
                         onChange={this.handleChange}
                         placeholder="Confirm Password"
              />
            </div>
            <button type="button" className="btn btn-success" onClick={this.handleResetPassword}>Submit</button>
          </ValidationForm>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    processing: state.todo.processing,
  }
}
Reset.propTypes= {
  history: PropTypes.object,
  show: PropTypes.func,
  hide: PropTypes.func,
  resetPasswordRequest : PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ show, hide }, dispatch),
  resetPasswordRequest: data => (dispatch(Actions.resetPasswordRequest(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Reset))
