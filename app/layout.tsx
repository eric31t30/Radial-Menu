import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radial Menu",
  description: "Dynamic radial menu with animated background transitions",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}