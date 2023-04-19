export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ backgroundColor: '#f0f5f9' }}>{children}</div>
    </div>
  );
}
