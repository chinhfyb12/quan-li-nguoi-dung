import React, { Component } from 'react'

export default class RangeUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="form-group d-flex align-items-center m-0">
                    <label>Sắp xếp</label>
                    <select className="form-control">
                    <option>Tùy chọn</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                    </select>
                </div>
            </div>
        )
    }
}
