/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/auth";
import LogoImage from './Modern Creative C Letter Free Logo.png';
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/searchContext";
import { useLocation } from "react-router-dom";

const Navbar = ({ changeView }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const { search, setSearch } = useContext(SearchContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAuthRoute = ["/login", "/signup", "/forgot-password", "/reset-password/:token"].includes(location.pathname);
  return (
    <nav

      className="bg-white-800 shadow-md w-full "
      style={{ backgroundColor: '#2b2b2b' }}>
      <div className="w-full pt-2 text-grey-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 sm:justify-center sm:w-full lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link to='/'><img className="w-auto h-7" src={LogoImage} alt="Full Logo" /></Link>
          </div>
         {!isAuthRoute && <div className="flex w-1/3  justify-center   items-center ">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="flex justify-center items-center w-full">
              <div className="relative w-full max-w-xs"> 
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  style={{ borderBottom: "1px solid #ffbf00" }}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="simple-search"
                  className="rounded-md focus:outline-none bg-white-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search post by name..."
                  required=""
                />
              </div>
            </div>

          </div>}
          <div className="  inset-y-0 right-0 flex justify-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              {auth.loaded && auth.token ? (
                <div className="flex justify-center items-center">
                  <Link
                    to="/createPost"
                    className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-3"
                  >
                    New +
                  </Link>
                  <div>
                    <button
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {auth.user.initials}
                        </span>
                      </span>
                    </button>
                  </div>
                  <svg
                    onClick={handleLogout}
                    className="ml-4 hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 12L13 12"
                      stroke="#000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                      stroke="#000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                      stroke="#000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <Link
                    to="/login"
                    className="px-4 py-2 mt-2 text-sm  font-semibold text-black  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    style={{ backgroundColor: 'blue',color:'#ebeef1' }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 mt-2 text-sm font-semibold text-black bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    style={{ backgroundColor: 'orange',color:'#ebeef1' }}

                    >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div></nav>
  );
};

export default Navbar;