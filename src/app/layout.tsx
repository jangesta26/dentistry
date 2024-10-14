"use client";
import "@/style/globals.css";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { poppins } from "@/lib/fonts";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const DynamicLoader = dynamic(() => import('../components/Common/Loader'), {
  loading: () => <p>Loading...</p>, 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {
          loading ? <DynamicLoader /> : <DefaultLayout>{children}</DefaultLayout>
        }
        </body>
    </html>
  );
}
