import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

const data = [{
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
  }]
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class Card extends React.Component {
    render() {
        return (
            <>
                <div className="pull-left">
                    <img src="https://avatars0.githubusercontent.com/u/8028943?v=4" alt="user avatar"/>
                </div>
                <div className="pull-right">
                    <h5>{'username'}</h5>
                    <p>{'discription'}</p>
                </div>
            </>
        )
    }
}

class App extends React.Component {
  render() {
    return(
        <>
            <Card />
        </>
    )
  }
}
export default App;
