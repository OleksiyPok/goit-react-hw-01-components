import PropTypes from 'prop-types';

import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

import css from './FriendsList.module.css';

export const FriendsList = ({ friendsList }) => {
  return (
    <ul className={css['friend-list']}>
      {friendsList.map(friendPerson => {
        return (
          <FriendsListItem friendPerson={friendPerson} key={friendPerson.id} />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
