

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer text-white text-center p-4'>
      <div className='container'>
        <p>&copy; 2023 Option 11. All rights reserved.</p>
        <p>Address: 123 Too Many Options Street, Birmingham, England</p>
        <p>Email: option11@nootheroption.com | Phone: +44 04206996911</p>
        <button
          className='btn btn-outline-light mt-3'
          onClick={scrollToTop}
          title='Scroll to Top'
        >
          ^ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
