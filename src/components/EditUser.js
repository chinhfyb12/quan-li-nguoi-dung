import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUser extends Component {
    render() {

        return (
            <div className="col-3">
                <div className="card">
                    <div className="form-group p-4 m-0">
                        <form>
                            <input type="text" className="form-control" placeholder="Tên người dùng" />
                            <input type="text" className="form-control" placeholder="Số điện thoại" />
                            <div className="form-group">
                            <select className="form-control">
                                <option>Người sử dụng</option>
                                <option>Người kiểm duyệt</option>
                                <option>Người quản trị</option>
                            </select>
                            </div>
                            <div className="d-flex">
                               <div className="btn btn-primary mr-2">Cập nhật</div> 
                               <div className="btn btn-danger" onClick={ () => this.props.changeStatusEdit() }>Hủy</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatusEdit:() => dispatch({type: "CHANGE_STATUS_EDIT_CANCEL"})
    }
}
export default connect(null, mapDispatchToProps)(EditUser);