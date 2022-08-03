import Link from "next/link";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <Link href="/">
          <a>
            <span className="visually-hidden">home</span>
            <img className="logo" src="/images/icons/logo.svg" alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
}
