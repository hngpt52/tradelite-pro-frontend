import './globals.css';
import Sidebar from '@/components/layout/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white min-h-screen">
        <Sidebar />
        <div className="md:ml-72 min-h-screen">
          <main className="p-4 md:p-8 max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
