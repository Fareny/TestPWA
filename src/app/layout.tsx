import type { Metadata } from "next";
import StyledComponentsRegistry from "./styled-components-registry";
import GlobalStyles from "./global-styles";

export const metadata: Metadata = {
  title: "CordYard",
  description: "Мы создаём технологии, которые делают логистику точной и предсказуемой",
  themeColor: "#202020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#202020" />
        <link rel="apple-touch-icon" href="/icons/512px.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
