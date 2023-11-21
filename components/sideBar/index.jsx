import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTicketAlt,
  faCalendarAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";


const SideBar = () => {
  const route = usePathname();
  const isNotOnPageAuth = !(route === "/tickets/id" );

  if (!isNotOnPageAuth) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center mt-4 ">
      <Link href="/user" passHref>
        <button className=" mt-4  text-white  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faUser} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/tickets" passHref>
        <button className=" mt-4  text-white  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/calendar" passHref>
        <button className=" mt-4  text-white  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/administrar-usuarios" passHref>
        <button className=" mt-4  text-white  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-10" />
        </button>
      </Link>


  


    </div>
  );
};

export default SideBar