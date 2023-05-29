import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({ friendsList }) => {
  return (
    <ul className={css['friend-list']}>
      {friendsList.map(friendPerson => {
        return (
          <FriendListItem friendPerson={friendPerson} key={friendPerson.id} />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
