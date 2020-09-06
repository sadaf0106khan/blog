import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Comments extends Component {
    state = {
        comments: []
    }
    componentDidMount(){
        const id = this.props.match.params.post_id
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res
                })
            })    
    }
    render() {
        const comments = this.state.comments.length ? (
            this.state.comments.map(comment => (
                <div className="card mb-2" key={comment.id}>
                    <div className="card-body">
                        <h5 className="card-title">{'Author: ' + comment.name}</h5>
                        <div className="card-body">
                            <p>{'Email: ' + comment.email}</p>
                            <p>{'Comment: ' + comment.body}</p>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="text-center">Loading comments...</div>
        )
        return (
            <div className="container">
                <div className="row">
                    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home" >Home</Link></li>
                            <li className="breadcrumb-item active">Comments</li>
                    </ol>
                    <div className="col-12">
                        <h3>Comments</h3>
                        <hr />
                    </div>
                </div>
                {comments}
            </div>
        )
    }
}
