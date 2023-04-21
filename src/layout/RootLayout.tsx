export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ backgroundColor: '#f8f8f8' }}>{children}</div>
    </div>
  );
}
