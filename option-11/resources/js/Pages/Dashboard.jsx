import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';
export default function Dashboard({ auth,baskIcon }) {

    const handleDeleteConfirmation = (e) => {
        if (window.confirm('Are you sure you wish to delete your account?')) {
            this.onCancel(item)
        } else {
            e.preventDefault();
        }
    }

    return (
        <>
              <AnimateModal auth={auth} baskIcon={baskIcon}>       
            <div className='d-flex justify-content-evenly mt-5'>




                <div className="d-flex flex-col space-y-3">
                    <div className="sm:flex sm:items-center sm:ms-6 ">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.firstname}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>

                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                    <Link href={route('updateAccount')} className=" text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Update your account
                    </Link>
                    <Link onClick={(e) => handleDeleteConfirmation(e)} href={route('deleteAccount')} className=" text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                        Delete your account
                    </Link>
                    <Link href={route('orderHistory')} className=" text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                        Order History
                    </Link>
                </div>

            </div>
            </AnimateModal>     
        </>
    );
}