import { getHeader } from "@/utils/getHeader";
import Nav from "./navbar/Nav";

const Navbar = async () => {
  const data = await getHeader()
  if(!data) return
  return (
   <Nav navData={data}/>
  );
};

export default Navbar;
