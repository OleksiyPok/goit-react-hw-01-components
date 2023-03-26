import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import defaultAvatar from '../../img/defaultAvatar.png';
// import { bool } from 'prop-types';

export const FriendList = ({ friendList }) => {
  return friendList.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status"> {friend.isOnline} </span>
      <img
        className="avatar"
        src={friend.avatar || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className="name"> {friend.name} </p>
    </li>
  ));
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
