"use client";
import "@/style/globals.css";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { poppins } from "@/lib/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
        </body>
    </html>
  );
}
