import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>

      <Button onClick={() => handleName(fullName)} variant="info">
        Click me!{" "}
      </Button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: "YASSINE BOUA",
  bio: "Développeur Full Stack.",
  profession: "Développeur Full Stack JavaScript",
};
export default Profile;
