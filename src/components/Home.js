import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
    }
    render() {
        const { users } = this.state
        const userList = users.length ? (
            users.map(user => (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body">
                        <h5 className="card-title">{'Name: ' + user.name}</h5>
                        <div className="card-body">
                            <p>{'Username: ' + user.username}</p>
                            <p>{'Email: ' + user.email}</p>
                            <p>{'Phone: ' + user.phone}</p>
                            <p>{'Website: ' + user.website}</p>
                            <Link to={'/posts/' + user.id} ><span className="fa fa-share"></span> Posts</Link>
                        </div>
                        </div>
                    </div>
                
            ))
        ) : (
            <p className="text-center">Users Loading...</p>
        )
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-12">
                        <h3>Users</h3>
                        <hr />
                    </div>
            </div>
                {userList}
            </div>
        )
    }
}

export default  Home 