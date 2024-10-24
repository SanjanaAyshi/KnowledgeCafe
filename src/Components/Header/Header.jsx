import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between p-4 m-5 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
