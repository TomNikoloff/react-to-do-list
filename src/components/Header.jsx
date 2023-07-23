import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <div className="mt-4">
        <a href='https://tomnikoloff.github.io/' className='box-shadow-hover'>
          <img className='rotate' src={logo} alt="Logo" height={100} />
        </a>
      </div>
    </>
  );
}
