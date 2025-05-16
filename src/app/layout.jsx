import Navbar from "./components/Navbar";
import "./globals.css";
import "animate.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "ecomStore | Home",
  description: "One Stop Shop for All Your Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
