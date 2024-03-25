import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { CartProvider } from "./store/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CATCH THE FOX",
    description: "Nettsiden til rockebandet Catch The Fox",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CartProvider>
                    <Navbar />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}