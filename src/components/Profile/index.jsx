import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.informations}>
        <img className={css.image} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.count}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.count}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
