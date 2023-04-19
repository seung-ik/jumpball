export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ backgroundColor: '#f0f5f9' }}>{children}</body>
    </html>
  );
}
