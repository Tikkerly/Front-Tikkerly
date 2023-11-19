import Link from "next/link";
import { useSelector } from "react-redux";

const SideBar = () => {
 return (
    <div className="flex flex-col items-center h-screen bg-gray-500 bg-opacity-80" style={{ position: 'sticky', top: 0, height: '100vh' }}>
      <button className="w-full mr-2 py-1 px-1 mt-40 avant-garde-bold text-base rounded bg-Az3 text-gray font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user" passHref>
          <h2 style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className="px-4">Dasboard</h2>
          </h2>
        </Link>
      </button>
     
      <button className="w-full mr-2 py-1 px-1 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/perfil" passHref>
          <h2 style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className="px-4">Perfil</h2>
          </h2>
        </Link>
      </button>

      <button className=" w-full mr-2 py-1 px-1 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/tickets" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="px-4">Tickets</h2>
        </Link>
      </button>

      <button className=" w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray-100-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/calendar" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="px-4">Calendario</h2>
        </Link>
      </button>
      <button className=" w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray-100-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/manage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="px-4">Users</h2>
        </Link>
      </button>

      <button className="w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray-100-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/administrar-usuarios" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="px-4">Administrar Terceros</h2>
        </Link>
      </button>
    </div>
  );
};

export default SideBar;
