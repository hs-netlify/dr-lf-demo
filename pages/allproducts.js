import ProductListing from '@components/ProductListing';
import Link from 'next/link';
import Footer from '@components/Footer';
import { getProductList } from '@api/getProductList';

export default function AllProductsPage({ products }) {
  return (
    <>
      <header className="app-header">
        <h1>
          <Link href="/">
            <a>Life Fitness Shop</a>
          </Link>
        </h1>
        <h3>
          <a>All Products</a>
        </h3>
        <nav className="all-prods">
          <ul>
            <li className="main-nav-item">
              <Link href="/cart">
                <a className="cart cartLink">Shopping Cart</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
