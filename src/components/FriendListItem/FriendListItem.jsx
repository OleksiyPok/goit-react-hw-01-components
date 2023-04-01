import PropTypes from 'prop-types';
import defaultAvatar from '../../img/defaultAvatar.png';
import { getStatusColor } from '../../utils/index';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  const statusColor = getStatusColor(isOnline);
  return (
    <>
      <span className={css.status + ' ' + css[statusColor]}></span>
      <img
        className={css.avatar}
        src={avatar || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}> {name} </p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
