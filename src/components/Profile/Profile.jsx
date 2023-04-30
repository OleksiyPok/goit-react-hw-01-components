import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { ProfileUser } from 'components/ProfileUser';
import { ProfileStats } from 'components/ProfileStats';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileUser person={{ username, avatar, tag, location }} />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
