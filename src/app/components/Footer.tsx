import React from "react";
import COLORS from "../theme";

const Footer: React.FC = () => {
  return (
    <footer className={` ${COLORS.textSecondary} ${COLORS.bgNeutral} border-t pt-5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className={`text-xl font-bold ${COLORS.textPrimary}`}>FurrFriendly</h2>
            <p className={`mt-2 text-sm`}>
              The one-stop shop for all your pet needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider`}>
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className={`transition`}>Home</a>
              </li>
              <li>
                <a href="/about" className={` transition`}>About</a>
              </li>
              <li>
                <a href="/services" className={`transition`}>Services</a>
              </li>
              <li>
                <a href="/contact" className={`transition`}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider`}>
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com" className={`transition`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.385-4.098 11.594-11.594 11.594-2.305 0-4.453-.674-6.262-1.834.323.038.634.05.97.05 1.918 0 3.68-.652 5.085-1.747a4.09 4.09 0 01-3.817-2.835c.25.037.5.062.763.062.367 0 .734-.05 1.075-.137a4.082 4.082 0 01-3.273-4.007v-.05a4.14 4.14 0 001.844.517 4.083 4.083 0 01-1.814-3.403c0-.762.2-1.463.55-2.075a11.6 11.6 0 008.418 4.27 4.615 4.615 0 01-.1-.937 4.082 4.082 0 017.062-2.791 8.1 8.1 0 002.588-.987 4.086 4.086 0 01-1.794 2.25 8.189 8.189 0 002.35-.625 8.781 8.781 0 01-2.037 2.118z" />
                </svg>
              </a>
              <a href="https://github.com" className={`transition`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.017c0 4.418 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.944 0-1.092.39-1.986 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.58 9.58 0 0112 6.844c.85.004 1.705.115 2.504.338 1.91-1.296 2.75-1.026 2.75-1.026.545 1.378.202 2.397.1 2.65.64.697 1.028 1.591 1.028 2.683 0 3.841-2.338 4.687-4.566 4.936.36.31.678.919.678 1.853 0 1.337-.012 2.419-.012 2.747 0 .267.18.576.688.478A10.019 10.019 0 0022 12.017C22 6.486 17.523 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 border-t pt-4 text-center text-sm `}>
          © {new Date().getFullYear()} FurrFriendly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;