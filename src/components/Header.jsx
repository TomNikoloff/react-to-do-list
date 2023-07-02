import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <div className="mt-4">
        <img src={logo} alt="Logo" height={100} />
      </div>
    </>
  );
}
