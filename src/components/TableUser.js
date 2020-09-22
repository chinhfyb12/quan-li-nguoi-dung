import React, { Component } from 'react'
import ItemUser from './ItemUser'
import dataUserFirebase from '../firebase';

export default class TableUser extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dataUser: []
        }
    }
    componentWillMount() {
        dataUserFirebase.on('value', datas => {
            let arrayUser = []
            datas.forEach(data => {
                let key = data.key;
                let userName = data.val().userName;
                let phoneNum = data.val().phoneNum;
                let permission = data.val().permission;
                let itemUser = {
                    key,
                    userName,
                    phoneNum,
                    permission
                }
                arrayUser.push(itemUser);
            });
            this.setState({
                dataUser: arrayUser
            })
        })
    }
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th onClick={() => this.test()}>STT</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataUser.map((item, index) => {
                                return <ItemUser 
                                    key={item.key}
                                    userName = {item.userName}
                                    phoneNum = {item.phoneNum}
                                    permission = {parseInt(item.permission)}
                                    stt = {index + 1}
                                    id={item.key}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
