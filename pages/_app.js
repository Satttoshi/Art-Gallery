import GlobalStyle from "../styles";
import Layout from "../src/components/Layout";
import Navigation from "../src/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </Layout>
  );
}
