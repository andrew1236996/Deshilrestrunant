import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top Bar */}
      <div className="flex absolute flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-neutral-800 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-white">● ● ●</span>
          <p>
            Are You Want To Make A Reservation?{' '}
            <a href="#" className="text-orange-500 underline">Get Your Table</a>
          </p>
        </div>
        <div className="mt-2 sm:mt-0 text-orange-500 font-medium">
          <p>
            Have Questions? FREE +92 (8800) 9850
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20 py-12">
        {/* Get In Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">GET IN TOUCH</h4>
          <p className="text-sm">Silk St, Barbican, London E2Y, UK</p>
          <p className="text-sm mt-2">+90 558-123456</p>
          <p className="text-sm">booking@websample.com</p>
          <div className="flex gap-3 mt-4 text-white">
            <a href="#"><FaFacebookF className="hover:text-orange-500" /></a>
            <a href="#"><FaTwitter className="hover:text-orange-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-orange-500" /></a>
            <a href="#"><FaInstagram className="hover:text-orange-500" /></a>
          </div>
        </div>

        {/* Food Menu */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">FOOD MENU</h4>
          <ul className="space-y-2 text-sm">
            <li>→ White Castle</li>
            <li>→ Beef Sandwich</li>
            <li>→ Cherry Limeade</li>
            <li>→ Wendy’s Frosty</li>
            <li>→ Pumpkin Spice</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">WORKING HOURS</h4>
          <ul className="text-sm space-y-1">
            <li>Monday - Friday: 09:00 - 22:00</li>
            <li>Saturday: 11:00 - 00:00</li>
            <li>Sunday: 11:00 - 23:00</li>
            <li className="text-orange-400 mt-2">* Happy hour: 17:00 - 21:00</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">INSTAGRAM</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-400 aspect-square"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 lg:px-20 py-4 border-t border-neutral-800 text-xs text-gray-400">
        <p>© Copyright Delish. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white">Terms Of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
