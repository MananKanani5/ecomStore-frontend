import Navbar from "./components/Navbar";
import "./globals.css";
import "animate.css";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "ecomStore | Home",
  description: "One Stop Shop for All Your Needs",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </body>
    </html>
  );
}
