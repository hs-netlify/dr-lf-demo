import Link from 'next/link';

export default function Header() {
  return (
    <header className="app-header">
      <h1>
        <Link href="/">Life Fitness Shop</Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/allproducts">
              {/* This link could be built out as an All Products page */}
              All Products
            </Link>
          </li>
          <li className="main-nav-item">
            <Link className="cart cartLink" href="/cart">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
