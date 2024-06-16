import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { RiAddLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Notes from "@/components/Notes";


const Home = () => {
  return (
    <>
      <header className="fixed w-full border-b border-primary/20 bg-primary">
        {/* Navbar section */}
        <nav className="section flex justify-between h-[8vh] md:h-[10vh] items-center ">
          <Button
            variant="outline"
            className="border-background text-background bg-transparent"
          >
            <IoIosArrowBack className="text-lg" />
          </Button>
          <div className="flex gap-3">
            {/* New Note Button */}
            <Button variant="outline">
              <RiAddLine className="md:mr-2 text-lg" />
              <span className="hidden md:flex">New Note</span>
            </Button>
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

      {/*  search section */}
      <div className="section flex md:w-1/2 pt-[10vh] md:pt-[12vh]">
        <Input placeholder="Search note..." className="focus:outline-none" />
        <Button className="ml-2">
          <FaSearch className="my-auto" />
        </Button>
      </div>

      {/* Notes section */}
      <div className="section flex flex-col my-8 gap-2 md:w-3/4">
        <h1 className="text-xl font-bold py-1 border-b border-primary">My Notes</h1>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </>
  );
};

export default Home;
