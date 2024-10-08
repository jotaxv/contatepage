import { Inter } from "next/font/google";
import style from "./page.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contate Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-green-200">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
