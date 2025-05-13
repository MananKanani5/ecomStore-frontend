import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "ecomStore | Home",
  description: "One Stop Shop for All Your Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
