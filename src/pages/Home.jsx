import { useLogOutRedirect } from "../hooks/useLogOutRedirect";

const Home = () => {
  useLogOutRedirect();
  return <div>Home page</div>;
};
export default Home;
