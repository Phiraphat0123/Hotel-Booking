import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
