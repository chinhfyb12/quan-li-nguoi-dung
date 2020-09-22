import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import RangeUser from './components/RangeUser';
import Search from './components/Search';
import TableUser from './components/TableUser';
import EditUser from './components/EditUser';
import {connect} from 'react-redux';

class App extends Component {

  renderAddUserForm = () => {
    let {statusAdd} = this.props.statusAdd;
    if(statusAdd) {
      return <AddUser />
    }
  }
  renderButtonAddUser = () => {
    let {statusAdd} = this.props.statusAdd;
    if(statusAdd) {
      return <div className="btn btn-danger" onClick={() => this.props.changeStatusAdd()}>Hủy thêm</div>
    } else {
      return <div className="btn btn-primary" onClick={() => this.props.changeStatusAdd()}>Thêm người dùng</div>
    }
  }

  renderEditUserForm = () => {
    let {statusEdit} = this.props.statusEdit;
    // let {statusAdd} = this.props.statusAdd;
    if(statusEdit) {
      return <EditUser />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="display-4 text-center">Quản lí người dùng</h3>
          </div>
        </div>
        <div className="row mb-4">
          <Search />
          <RangeUser />
          <div className="col-3">
            { this.renderButtonAddUser() }            
          </div>
        </div>
        <div className="row">
          <TableUser />
          { this.renderAddUserForm() }
          { this.renderEditUserForm() }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      statusAdd: state.statusAdd,
      statusEdit: state.statusEdit
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeStatusAdd:() => dispatch({type: "CHANGE_STATUS_ADD"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);