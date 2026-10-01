import UserProfile from "./component/userprofile.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>

      <UserProfile
        name="Abia Shoaib"
        role="Computer Engineering Senior"
        age={20}
        isOnline={true}
        bio="Interested in Data & Business Analytics."
        socials={{ github: "@AbiaShoaib", twitter: "@ashoaib" }}
      />

      <UserProfile
        name="Shoaib Abia"
        role="Internet Security Enthusiast"
        age={22}
        isOnline={false}
        bio="I'm passionate about cybersecurity and ethical hacking."
        socials={{ github: "@ShoaibAbia", twitter: "@shoaib_dev" }}
      />

      <UserProfile
        name="Shoaib Ahmed"
        role="Aspiring Software Engineer"
        age={20}
        isOnline={true}
        bio="I'm a passionate software engineer with a focus on building scalable and efficient applications."
        socials={{ github: "@ShoaibAhmed", twitter: "@shoaib_dev" }}
      />

    </div>
  );
}

export default App;