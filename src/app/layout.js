import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import AppContextProvider from "../context/AppContext";

const jost = localFont({
  src: "../../public/fonts/jost.ttf",
  variable: "--font-jost",
  weight: "400 300 500 600",
});
const montserrat = localFont({
  src: "../../public/fonts/montserrat.ttf",
  variable: "--font-montserrat",
  weight: "500 600 700",
});

const roboto_mono = localFont({
  src: "../../public/fonts/robotomono.ttf",
  variable: "--font-roboto-mono",
  weight: "500 600 700"
})

export const metadata = {
  title: "NCRS – National Centre for Remote Sensing ",
  description: "National Center For Remote Sensing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${montserrat.variable} ${roboto_mono.variable} antialiased`}>
        <AppContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
