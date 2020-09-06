import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        const id = this.props.match.params.user_id
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => (
                    <div className="card mb-2" key={post.id}>
                        <div className="card-body">
                        <h5 className="card-title">{'Title: ' + post.title}</h5>
                        <div className="card-body">
                            <p>{'Post: ' + post.body}</p>
                            <Link to={'/comments/' + post.id} ><span className="fa fa-share"></span> Comments</Link>
                        </div>
                        </div>
                    </div>
                
            ))
        ) : (
            <p className="text-center">Posts Loading...</p>
        )
        return (
            <div className="container"> 
                <div className="row">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home" >Home</Link></li>
                        <li className="breadcrumb-item active">Posts</li>
                    </ol>
                    <div className="col-12">
                        <h3>Posts</h3>
                        <hr />
                    </div>
            </div>
                {postList}
            </div>
        )
    }
}

export default  Posts