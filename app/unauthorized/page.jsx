import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">401</h1>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800">Session Expired</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Sorry, your session has timed out or you don't have permission to view this page.
        </p>
        <Link 
          href="/login" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Login
        </Link>
      </div>
    </div>
  );
}