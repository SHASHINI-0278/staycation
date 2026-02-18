
const HostModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Host your home</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Option 1: Become a Host */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md cursor-pointer transition-all duration-300 group">
                        <div className="mb-4 text-rose-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-500 transition-colors">Become a Host</h3>
                        <p className="text-gray-500 text-sm mb-4">Earn extra income and unlock new opportunities by sharing your space.</p>
                        <button className="w-full py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">Get Started</button>
                    </div>

                    {/* Option 2: Recommend a Host */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md cursor-pointer transition-all duration-300 group">
                        <div className="mb-4 text-rose-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-500 transition-colors">Recommend a Host</h3>
                        <p className="text-gray-500 text-sm mb-4">Know someone with a great place? Refer them and earn rewards.</p>
                        <button className="w-full py-2 border border-black text-black rounded-lg font-medium hover:bg-gray-50 transition">Refer & Earn</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HostModal;
