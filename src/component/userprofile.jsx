function UserProfile(props) {
  return (
    <div className="profile-card">

      <h2>
        {props.name}
        {props.isOnline && <span className="online"> ● Online</span>}
      </h2>

      <p><strong>Role:</strong> {props.role}</p>

      <p><strong>Age:</strong> {props.age}</p>

      <p><strong>Bio:</strong> {props.bio}</p>

      <p><strong>Socials:</strong></p>

      <p>GitHub: {props.socials.github}</p>
      <p>Twitter: {props.socials.twitter}</p>

    </div>
  );
}

export default UserProfile;