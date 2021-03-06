import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render(){
    if(!this.props.user) return null;

    return (
      <div>
        <h1 className="profile-container">
          <div className="profile-header-pic"/>
          <div className="profile-pic"><img src={window.images.guest}></img></div>

          <button className="follow">Follow</button>

          <div className="username animated bounceIn">{this.props.user.username}</div>

          <div className="user-details animated fadeIn">
            <ul>
              <li>
                {Object.values(this.props.photos).length} photos
              </li>
              <li>
                2 Followers
              </li>
              <li>
                1 Following
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> <a href ='https://www.google.com/maps/place/San+Francisco' className="google-maps">San Francisco, CA</a>
              </li>
            </ul>
          </div>


          <div className="profile-photos">
            {Object.values(this.props.photos).reverse().map((photo)=>{
                return <Link to={`/profile/${this.props.userId}/photos/${photo.id}`}>
                  <img src={photo.photoUrl} />
                </Link>
            })}
          </div>
        </h1>
      </div>
    );
  }
}

export default withRouter(Profile);
