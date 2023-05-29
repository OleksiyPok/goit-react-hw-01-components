import PropTypes from 'prop-types';

import { getStatusColor } from '../../utils/index';

import defaultAvatar from '../../img/defaultAvatar.png';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ friendPerson }) => {
  const { id, isOnline, avatar, name } = friendPerson;
  const statusColor = getStatusColor(isOnline);

  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[statusColor]}`}></span>
      <img
        className={css.avatar}
        src={avatar || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}> {name} </p>
    </li>
  );
};

FriendListItem.propTypes = {
  friendPerson: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
