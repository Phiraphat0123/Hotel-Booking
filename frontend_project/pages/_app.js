import Layout from "@/components/Layout";
import { HotelProvider } from "@/dataContexts/hotelContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    
      <div className="app-container">
        <HotelProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HotelProvider>
      </div>
  );
}
