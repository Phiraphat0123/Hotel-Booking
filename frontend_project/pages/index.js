
import localFont from "next/font/local";
import style from "@/styles/Home.module.css";
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div className={style.home_container}>
      <Head>
        <title> Home | Hotel</title>
        <meta name="keywords" content="Hotel,Phiraphat" />
      </Head>
      <div>
        <h1>
            Home page
        </h1>
      </div>
    </div>
  );
}
