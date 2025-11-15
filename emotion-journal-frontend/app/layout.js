import "./globals.css";

export const metadata = {
  title: "Emotion Journal",
  description: "A simple emotion journal web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-body">{children}</body>
    </html>
  );
}
