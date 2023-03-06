import Head from 'next/head';
import ProductListing from '@components/ProductListing';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { getProductList } from '@api/getProductList';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-dom';
import searchClient from 'algoliasearch';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Life Fitness Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.ALGOLIA_SEARCH_INDEX}
      >
        <SearchBox />
        <Hits hitComponent={ProductListing} />
      </InstantSearch>

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
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
