const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 font-foundry">
      {/* Desktop Footer Content */}
      <div className="hidden md:grid grid-cols-4 gap-8 max-w-[1800px] mx-auto px-10 py-12 text-sm text-gray-600">
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Support</h4>
          <p className="hover:underline cursor-pointer">Help Centre</p>
          <p className="hover:underline cursor-pointer">AirCover</p>
          <p className="hover:underline cursor-pointer">Anti-discrimination</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Hosting</h4>
          <p className="hover:underline cursor-pointer">Staycation your home</p>
          <p className="hover:underline cursor-pointer">Hosting resources</p>
          <p className="hover:underline cursor-pointer">Community forum</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Staycation</h4>
          <p className="hover:underline cursor-pointer">Newsroom</p>
          <p className="hover:underline cursor-pointer">New features</p>
          <p className="hover:underline cursor-pointer">Careers</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Privacy & Terms</h4>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Service</p>
          <p className="hover:underline cursor-pointer">Company details</p>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-gray-100 bg-gray-50 px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            <span>© 2024 Staycation, Inc.</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Terms</span>
          </div>
          <div className="flex items-center space-x-6 font-bold text-gray-900">
            <span className="flex items-center space-x-2 cursor-pointer">
              <span className="text-heather underline">English (US)</span>
            </span>
            <span className="cursor-pointer">USD</span>
            <span className="flex items-center space-x-4">
              <span className="hover:text-heather cursor-pointer hover:underline">Facebook</span>
              <span className="hover:text-heather cursor-pointer hover:underline">Twitter</span>
              <span className="hover:text-heather cursor-pointer hover:underline">Instagram</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Floating Bottom Nav (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center z-50">
        <div className="flex flex-col items-center text-heather">
          <span className="text-xl">🔍</span>
          <span className="text-[10px] font-bold">Explore</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">♡</span>
          <span className="text-[10px]">Wishlists</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">👤</span>
          <span className="text-[10px]">Log in</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;