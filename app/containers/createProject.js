/**
 * @author NamNH
 * Home page
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap/src'
import Actions from '../redux/wrapper/todo-redux'

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProject : '',
      des : '',
      modal: false,
    };
  }
  OnchangeInput = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleAddProject =(e)=>{
    e.preventDefault();
    let data = {name : this.state.nameProject, description : this.state.des}
    this.props.addProjectRequest(data);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <i className="fas fa-location-arrow"></i>
            New Project
          </ModalHeader>
          <ModalBody>
            <form action="">
              <div className="form-group">
                <label htmlFor="addProject">Add Project</label>
                <input type="text" className="form-control" name="nameProject" placeholder="New project" value={this.state.nameProject} onChange={this.OnchangeInput}/>
              </div>
              <div className="form-group">
                <label htmlFor="des">Description</label>
                <textarea type="text" className="form-control" name="des" placeholder="This is optional" onChange={this.OnchangeInput} value={this.state.des} />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.toggle();this.handleAddProject}}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Button color="success" onClick={this.toggle}>add Project</Button>
      </div>
    )
  }
}

Create.propTypes = {

  addProjectRequest : PropTypes.func,

  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle:  PropTypes.func,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  scrollable: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  innerRef: PropTypes.object,
  unmountOnClose: PropTypes.bool
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => ({
  addProjectRequest : data =>(dispatch(Actions.addProjectRequest(data)))
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Create))
