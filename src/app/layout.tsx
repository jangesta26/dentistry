"use client";
import "@/style/globals.css";
import DefaultLayout from "@/components/Layout/DefaultLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout>
          {children}
        </DefaultLayout>
        </body>
    </html>
  );
}
