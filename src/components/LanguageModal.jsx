import { useState } from 'react';

const regions = [
    { name: "United States", code: "US" },
    { name: "United Kingdom", code: "GB" },
    { name: "Australia", code: "AU" },
    { name: "India", code: "IN" },
    { name: "Canada", code: "CA" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Japan", code: "JP" },
    { name: "China", code: "CN" },
    { name: "Brazil", code: "BR" },
    { name: "Mexico", code: "MX" },
    { name: "Spain", code: "ES" },
    { name: "Italy", code: "IT" },
    { name: "South Korea", code: "KR" },
    { name: "Russia", code: "RU" },
    { name: "Netherlands", code: "NL" },
    { name: "Switzerland", code: "CH" },
    { name: "Sweden", code: "SE" },
    { name: "Singapore", code: "SG" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Indonesia", code: "ID" },
    { name: "Thailand", code: "TH" },
    { name: "Vietnam", code: "VN" },
];

const LanguageModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('Language and region');
    const [selectedRegion, setSelectedRegion] = useState("India");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex gap-6 font-semibold text-sm">
                        <button
                            className={`pb-2 border-b-2 transition ${activeTab === 'Language and region' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                            onClick={() => setActiveTab('Language and region')}
                        >
                            Language and region
                        </button>
                        <button
                            className={`pb-2 border-b-2 transition ${activeTab === 'Currency' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                            onClick={() => setActiveTab('Currency')}
                        >
                            Currency
                        </button>
                    </div>

                    <div className="w-9"></div> {/* Spacer for alignment */}
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-8">
                    {activeTab === 'Language and region' ? (
                        <>
                            <h3 className="text-xl font-semibold mb-6">Choose a region</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                                {regions.map((region) => (
                                    <button
                                        key={region.code}
                                        onClick={() => setSelectedRegion(region.name)}
                                        className={`text-left p-3 rounded-lg transition hover:bg-gray-100 ${selectedRegion === region.name ? 'ring-2 ring-black bg-gray-50' : ''}`}
                                    >
                                        <div className="text-sm font-medium text-gray-900">{region.name}</div>
                                        <div className="text-sm text-gray-500 mt-0.5">{region.name === "India" ? "English" : "English"}</div>
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">
                            Currency selection not implemented yet.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default LanguageModal;
