import { RiAddLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full border-b border-primary/20 bg-primary">
      {/* Navbar section */}
      <nav className="section flex justify-between h-[8vh] md:h-[10vh] items-center ">
        <Link to={`/`}>
          <Button
            variant="outline"
            className="border-background text-background bg-transparent"
          >
            <IoIosArrowBack className="text-lg" />
          </Button>
        </Link>
        <div className="flex gap-3">
          {/* New Note Button */}
          <Link to={`/new`}>
          <Button variant="outline">
            <RiAddLine className="md:mr-2 text-lg" />
            <span className="hidden md:flex">New Note</span>
          </Button>
          </Link>
          {/* Logout Button */}
          <Button
            variant="outline"
            className="border-background text-background bg-transparent"
          >
            <MdLogout className="md:mr-2 text-lg" />
            <span className="hidden md:flex">Logout</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
