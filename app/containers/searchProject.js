/**
 * @author NamNH
 * Home page
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import Actions from '../redux/wrapper/todo-redux'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
    };
  }
  OnchangeInput = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSearch =(e)=>{
    e.preventDefault();
    let data = {data : this.state.search};
    this.props.searchItemRequest(data);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.todo != this.props.todo) {
      this.setState({
        data: this.props.data
      })
    }
  }
  render() {
    return (
      <div>
        <form class="form-inline ml-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" value={this.state.search} onChange={this.OnchangeInput}/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearch}>Search</button>
        </form>
        <div className="list-search">
          {this.state.data.searchList ?
            <ul>
              {this.state.data && this.state.data.map(data => (<li className="search-item" key={data.id} >name : {data.name} description : {data.description}</li>))}
            </ul>:<span>{I18nUtils.t('loading...')}</span>
          }
        </div>
      </div>
    )
  }
}
Search.propTypes = {
  searchItemRequest : PropTypes.func,
  data : PropTypes.object
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({
  data: state.projectList.data
})
const mapDispatchToProps = dispatch => ({
  searchItemRequest : data =>(dispatch(Actions.searchItemRequest(data))),
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Search))
