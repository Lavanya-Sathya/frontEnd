import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-light p-5">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <p className="h2 ">React-Router</p>
          </div>
          <div className="col-lg-2">
            <ul className="list-unstyled">
              <li className="pb-2 h5">Resource</li>
              <li>
                <Link to="/" class="text-decoration-none text-black p-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" class="text-decoration-none text-black p-2">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className="list-unstyled">
              <li className="pb-2 h5">Follow Us</li>
              <li>
                <Link to="/" class="text-decoration-none text-black p-2">
                  GitHub
                </Link>
              </li>
              <li>
                <Link to="/about" class="text-decoration-none text-black p-2">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className="list-unstyled">
              <li className="pb-2 h5">Legal</li>
              <li>
                <Link to="/" class="text-decoration-none text-black p-2">
                  Privacy Pocily
                </Link>
              </li>
              <li>
                <Link to="/" class="text-decoration-none text-black p-2">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top border-3 border-danger border-dashed pt-3">
        <p className="text-center">&copy; 2023 Lavanya. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
