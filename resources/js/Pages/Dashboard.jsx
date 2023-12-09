import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import NavBar from "@/Components/NavBar";
export default function Dashboard({ auth }) {
    return (
        <div>
            <NavBar auth={auth} />

            <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <Link href={route('updateAccount')} className="link-info text-center">
                            Update your account
                        </Link>
                       
                    </div>
                    <Link href={route('deleteAccount')} className="link-info text-center">
                            Delete your account
                        </Link>
                </div>
            </div>

            
        </AuthenticatedLayout>
        </div>
        
    );
}