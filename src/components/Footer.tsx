
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text">
              AILeaderboard
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Your definitive resource for comparing and discovering the best AI language models across various tasks and capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Resources
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="/compare" className="text-sm text-gray-600 hover:text-gray-900">
                  Compare Models
                </Link>
              </li>
              <li>
                <Link to="/tasks/text-generation" className="text-sm text-gray-600 hover:text-gray-900">
                  Text Generation
                </Link>
              </li>
              <li>
                <Link to="/tasks/question-answering" className="text-sm text-gray-600 hover:text-gray-900">
                  Question Answering
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Legal
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} AILeaderboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
