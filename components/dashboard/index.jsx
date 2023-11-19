import Link from 'next/link';

const Dashboard = () => {
 const href = '/tickets'; // or some other logic to get the correct path

 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img className="h-12 w-auto" src="/assets/images/logo.svg" alt="Logo" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Your code */}
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <Link href="/">
                 <p className="text-blue-500 hover:text-blue-700">
                    My Tickets
                 </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Dashboard;