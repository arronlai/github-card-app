import React from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';
import axios from 'axios';

const data = [
    {
        "login": "TL",
        "id": 8028943,
        "node_id": "MDQ6VXNlcjgwMjg5NDM=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/8028943?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/TL",
        "html_url": "https://github.com/TL",
        "followers_url": "https://api.github.com/users/TL/followers",
        "following_url": "https://api.github.com/users/TL/following{/other_user}",
        "gists_url": "https://api.github.com/users/TL/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/TL/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/TL/subscriptions",
        "organizations_url": "https://api.github.com/users/TL/orgs",
        "repos_url": "https://api.github.com/users/TL/repos",
        "events_url": "https://api.github.com/users/TL/events{/privacy}",
        "received_events_url": "https://api.github.com/users/TL/received_events",
        "type": "User",
        "site_admin": false,
        "name": "0x746c",
        "company": "@TL",
        "blog": "",
        "location": "California",
        "email": null,
        "hireable": true,
        "bio": "A little bit of everything.",
        "public_repos": 9,
        "public_gists": 2,
        "followers": 1,
        "following": 7,
        "created_at": "2014-06-30T17:12:07Z",
        "updated_at": "2019-06-05T01:47:28Z"
    }, {
        "login": "TL",
        "id": 8028943,
        "node_id": "MDQ6VXNlcjgwMjg5NDM=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/8028943?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/TL",
        "html_url": "https://github.com/TL",
        "followers_url": "https://api.github.com/users/TL/followers",
        "following_url": "https://api.github.com/users/TL/following{/other_user}",
        "gists_url": "https://api.github.com/users/TL/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/TL/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/TL/subscriptions",
        "organizations_url": "https://api.github.com/users/TL/orgs",
        "repos_url": "https://api.github.com/users/TL/repos",
        "events_url": "https://api.github.com/users/TL/events{/privacy}",
        "received_events_url": "https://api.github.com/users/TL/received_events",
        "type": "User",
        "site_admin": false,
        "name": "0x746c",
        "company": "@TL",
        "blog": "",
        "location": "California",
        "email": null,
        "hireable": true,
        "bio": "A little bit of everything.",
        "public_repos": 9,
        "public_gists": 2,
        "followers": 1,
        "following": 7,
        "created_at": "2014-06-30T17:12:07Z",
        "updated_at": "2019-06-05T01:47:28Z"
    }
]

class DataCaller {
    async fetchData(u) {
        return await axios.get(`https://api.github.com/users/${u}`)
    }
}
//Form component, to get user input
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }
    handleOnChange(e) {
        this.setState({username: e.target.value})
    }
    async handleSubmit(e) {
        e.preventDefault();
        const service = new DataCaller(),
            data = await service.fetchData(this.state.username);
        this
            .props
            .onSearchFinish(data.data);
        this.setState({username: ''})
    }
    render() {
        return (
            <form
                action=""
                onSubmit={this
                .handleSubmit
                .bind(this)}
                style={{
                margin: '20px'
            }}>
                <label htmlFor="search">
                    username:
                    <input
                        onChange={this
                        .handleOnChange
                        .bind(this)}
                        name="search"
                        type="text"
                        style={{
                        lineHeight: '22px',
                        margin: '20px'
                    }}
                        value={this.state.username}/></label>
                <button
                    type="submit"
                    style={{
                    height: '22px'
                }}>Add</button>
            </form>
        )
    }
}
//CardList part for multiple card here based on data
class CardList extends React.Component {
    render() {
        return (this.props.users.map(d => <Card key={d.id} {...d}/>));
    }
}
class Card extends React.Component {
    render() {
        return (
            <div
                key={this.props.id}
                className='card'
                style={{
                maxWidth: '500px',
                border: '2px solid black',
                borderRadius: '5px',
                overflow: 'auto',
                margin: '10px 0'
            }}>
                <div
                    className="pull-left"
                    style={{
                    float: 'left',
                    width: '50%'
                }}>
                    <img
                        src={this.props.avatar_url}
                        alt="user avatar"
                        style={{
                        width: '100%'
                    }}/>
                </div>
                <div
                    className="pull-right"
                    style={{
                    float: 'right',
                    width: '50%'
                }}>
                    <h5>{this.props.login}</h5>
                    <p>{this.props.bio}</p>
                </div>
                <span style={{
                    float: 'none'
                }}></span>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        users: []
    }
    handleSearchFinish(data) {
        this.setState({
            users: this
                .state
                .users
                .concat(data)
        });
    }
    render() {
        return (<> <Form
            onSearchFinish={this
            .handleSearchFinish
            .bind(this)}/> < CardList users = {
            this.state.users
        } /> </>)
    }
}
export default App;