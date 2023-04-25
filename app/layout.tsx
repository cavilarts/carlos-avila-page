import "./globals.css";

export const metadata = {
  title: "Carlos Avila - Software Engineer",
  description: "Made with ❤️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
