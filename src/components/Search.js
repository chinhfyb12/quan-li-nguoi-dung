import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="form-group d-flex align-items-center m-0">
                    <input type="search" className="form-control" placeholder="Nhập họ tên, số điện thoại" />
                    <input type="submit" className="btn btn-primary" value="Tìm kiếm" />
                </div>
            </div>
        )
    }
}
