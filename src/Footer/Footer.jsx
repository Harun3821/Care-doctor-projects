import logoimg  from '../assets/icons/logo.svg'

const Footer = () => {



    return (
        <footer className="footer p-10 bg-black text-white">
        <aside>
          <img src={logoimg} alt="" />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav>
          <h6 className="footer-title text-yellow-200">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title text-green-400">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title text-red-400">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;