import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import listings from "../data/ListingData";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const ListingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for smoother transition
        window.scrollTo(0, 0);
        const foundListing = listings.find((item) => item.id === parseInt(id));

        // Simulate network delay for realistic feel
        setTimeout(() => {
            setListing(foundListing);
            setLoading(false);
        }, 400);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 border-4 border-gray-200 border-t-rose-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading stay...</p>
                </div>
            </div>
        );
    }

    if (!listing) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Listing not found</h2>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 animate-fadeIn">
            {/* Reusing Navbar - passing empty search props since we're on details */}
            <Navbar onSearch={() => { }} searchQuery="" />

            <main className="max-w-[1120px] mx-auto px-4 sm:px-10 py-8 w-full flex-grow">

                {/* Title Section - Fade In */}
                <section className="animate-[slideUp_0.4s_ease-out]">
                    <h1 className="text-2xl md:text-[26px] font-semibold mb-2 text-gray-900">
                        {listing.category} stay in {listing.location}
                    </h1>
                    <div className="flex justify-between items-center text-sm text-gray-900 font-medium mb-6">
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1">
                                ★ {listing.rating} · <span className="underline cursor-pointer">12 reviews</span>
                            </span>
                            <span>·</span>
                            <span className="underline cursor-pointer">{listing.location}, {listing.country}</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a2.684 2.684 0 00-6.38 2.818L1.19 19.46a1.125 1.125 0 01-1.37-1.674l4.431-1.815a2.684 2.684 0 001.958-3.218l.214-1.25a2.684 2.684 0 00-1.873-3.037L10.38 5.75A3 3 0 0115.75 4.5zM12 21a2.25 2.25 0 01-2.25-2.25V15a2.25 2.25 0 012.25-2.25H16.5A2.25 2.25 0 0118.75 15v3.75A2.25 2.25 0 0116.5 21H12z" clipRule="evenodd" />
                                </svg>
                                Share
                            </button>
                            <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                Save
                            </button>
                        </div>
                    </div>
                </section>

                {/* Image Grid - Staggered Fade In */}
                <section className="relative rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[480px] mb-12 animate-[fadeIn_0.6s_ease-out]">
                    <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
                        <img
                            src={listing.image}
                            alt={listing.location}
                            className="w-full h-full object-cover hover:brightness-95 transition duration-300"
                        />
                    </div>
                    {/* Mock secondary images since we only have one in data */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="hidden md:block relative group cursor-pointer overflow-hidden">
                            <img
                                src={`${listing.image}&sig=${i}`}
                                alt="Room view"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                    <button className="absolute bottom-4 right-4 bg-white border border-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition shadow-sm">
                        Show all photos
                    </button>
                </section>

                {/* Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 animate-[slideUp_0.6s_ease-out_0.2s_both]">

                    {/* Left Column: Details */}
                    <div className="border-b pb-8">
                        <div className="flex justify-between items-center border-b pb-6 mb-6">
                            <div>
                                <h2 className="text-[22px] font-semibold text-gray-900 mb-1">
                                    Entire {listing.category.toLowerCase()} hosted by Superhost
                                </h2>
                                <p className="text-gray-900">
                                    {listing.maxGuests} guests · {listing.category === 'Cabins' ? '2 bedrooms' : '1 bedroom'} · 2 beds · 1 bath
                                </p>
                            </div>
                            <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                                S
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-6 border-b pb-6 mb-6">
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Top-rated experience</h3>
                                    <p className="text-gray-500 text-sm">Guests say this is one of the most loved homes on Staycation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Great location</h3>
                                    <p className="text-gray-500 text-sm">100% of recent guests gave the location a 5-star rating.</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <p className="text-gray-800 leading-relaxed">
                                Relax and unwind in this stunning, modern {listing.category.toLowerCase()} located in the heart of {listing.location}.
                                Featuring breathtaking views, high-end amenities, and just steps away from local attractions.
                                Perfect for a romantic getaway or a peaceful retreat.
                            </p>
                            <button className="underline font-semibold mt-2 flex items-center gap-1">
                                Show more
                                <span className="text-lg">›</span>
                            </button>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className="text-[22px] font-semibold text-gray-900 mb-4">What this place offers</h2>
                            <div className="grid grid-cols-2 gap-y-3">
                                {['Wifi', 'Kitchen', 'Free parking', 'Pool', 'Air conditioning', 'Garden'].map(amenity => (
                                    <div key={amenity} className="flex gap-3 items-center text-gray-700">
                                        {amenity === 'Wifi' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>}
                                        {amenity !== 'Wifi' && <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>} {/* Placeholder icons */}
                                        <span className="font-light">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="border border-black rounded-lg px-6 py-3 mt-6 font-semibold hover:bg-gray-50 transition">
                                Show all 32 amenities
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Sticky Booking Widget */}
                    <div className="relative">
                        <div className="sticky top-28 border border-gray-200 rounded-xl shadow-xl p-6 bg-white animate-[fadeIn_0.5s_ease-out_0.4s_both]">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">{listing.price}</span>
                                    <span className="text-gray-500"> night</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <span>★ {listing.rating} · </span>
                                    <span className="text-gray-500 underline ml-1">12 reviews</span>
                                </div>
                            </div>

                            <div className="border border-gray-400 rounded-lg overflow-hidden mb-4">
                                <div className="grid grid-cols-2 border-b border-gray-400">
                                    <div className="p-3 border-r border-gray-400">
                                        <label className="block text-[10px] font-bold uppercase">Check-in</label>
                                        <span className="text-sm text-gray-500">Add date</span>
                                    </div>
                                    <div className="p-3">
                                        <label className="block text-[10px] font-bold uppercase">Checkout</label>
                                        <span className="text-sm text-gray-500">Add date</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <label className="block text-[10px] font-bold uppercase">Guests</label>
                                    <span className="text-sm text-gray-500">1 guest</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold py-3.5 rounded-lg hover:brightness-110 active:scale-[0.98] transition shadow-md">
                                Reserve
                            </button>

                            <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>

                            <div className="mt-4 space-y-3 text-gray-600">
                                <div className="flex justify-between">
                                    <span className="underline">{listing.price} x 5 nights</span>
                                    <span>
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                                            parseInt(listing.price.replace(/[^0-9]/g, "")) * 5
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="underline">Cleaning fee</span>
                                    <span>₹2,500</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="underline">Service fee</span>
                                    <span>
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                                            Math.round(parseInt(listing.price.replace(/[^0-9]/g, "")) * 5 * 0.12)
                                        )}
                                    </span>
                                </div>
                                <div className="border-t pt-4 flex justify-between font-bold text-gray-900 text-lg">
                                    <span>Total before taxes</span>
                                    <span>
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                                            (parseInt(listing.price.replace(/[^0-9]/g, "")) * 5) +
                                            2500 +
                                            Math.round(parseInt(listing.price.replace(/[^0-9]/g, "")) * 5 * 0.12)
                                        )}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default ListingDetails;
