import PropTypes from 'prop-types';
import defaultAvatar from '../../img/defaultAvatar.png';
import css from './ProfileUser.module.css';

export const ProfileUser = ({ person }) => {
  const { username, avatar, tag, location } = person;

  return (
    <div className={css.description}>
      <img
        src={avatar || defaultAvatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

ProfileUser.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
