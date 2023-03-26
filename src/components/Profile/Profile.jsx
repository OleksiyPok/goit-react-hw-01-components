import PropTypes from 'prop-types';
import defaultAvatar from '../../img/defaultAvatar.png';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar || defaultAvatar}
          // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
