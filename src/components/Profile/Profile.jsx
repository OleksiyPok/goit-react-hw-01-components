import css from "./Profile.module.css"
import defaultAvatar from '../../img/defaultAvatar.png'

export const Profile = ({ username, tag, location, avatar = defaultAvatar, stats } ) => {
    const { followers, views, likes } = stats;
    return ( 
        <div className="profile">
            <div className="description">
                <img
                    src = {avatar}
                    // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}