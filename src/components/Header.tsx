import Link from 'next/link';

function Header() {
  return (
    <header className="flex shadow-xl h-16 items-center px-8 gap-8 mb-8">
      <h1 className="font-bold text-3xl">MiniReg</h1>
      <ul className="flex gap-4 text-md text-slate-500">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:no-underline"
          >
            Course List
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="underline underline-offset-4 hover:no-underline"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:no-underline"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
