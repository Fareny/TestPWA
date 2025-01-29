export const metadata = {
  title: "Transport",
  description: "Progressive Web App with Next.js",
  themeColor: "#202020"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#202020" />
        <link rel="apple-touch-icon" href="/icons/512px.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
