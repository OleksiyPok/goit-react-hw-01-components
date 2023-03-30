import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { ProfileUser } from 'components/Profile/ProfileUser/ProfileUser';
import { ProfileStats } from 'components/Profile/ProfileStats/ProfileStats';

export const Profile = ({ profile }) => {
  const { username, avatar, tag, location } = profile;
  const { stats } = profile;
  return (
    <div className={css.profile}>
      <ProfileUser user={{ username, avatar, tag, location }} />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
