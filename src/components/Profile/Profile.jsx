import PropTypes from 'prop-types';

import { ProfileUser } from 'components/ProfileUser';
import { ProfileStats } from 'components/ProfileStats';

import css from './Profile.module.css';

export const Profile = ({ user }) => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <div className={css.profile}>
      <ProfileUser person={{ username, avatar, tag, location }} />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
