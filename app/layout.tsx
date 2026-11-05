import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AWS Student Builder Group - Mercyhurst University',
  description:
    'Student-led campus cloud community portal for the AWS Student Builder Group at Mercyhurst University featuring upcoming events, workshops, learning perks, and leadership.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'AWS Student Builder Group - Mercyhurst University',
    description:
      'Student-led campus cloud community portal for the AWS Student Builder Group at Mercyhurst University featuring upcoming events, workshops, learning perks, and leadership.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Student Builder Group - Mercyhurst University',
    description:
      'Student-led campus cloud community portal for the AWS Student Builder Group at Mercyhurst University featuring upcoming events, workshops, learning perks, and leadership.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e && e.message && (e.message.indexOf('ChunkLoadError') !== -1 || e.message.indexOf('Loading chunk') !== -1)) {
                  var k = 'last_chunk_err_reload';
                  var last = sessionStorage.getItem(k);
                  var now = Date.now();
                  if (!last || now - parseInt(last, 10) > 8000) {
                    sessionStorage.setItem(k, String(now));
                    window.location.reload();
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-['Figtree',sans-serif] antialiased text-[#f1f5f9] bg-[#090d14] selection:bg-[#00e599]/20 selection:text-[#00e599]">
        {children}
      </body>
    </html>
  );
}
