import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '16px 20px',
        backgroundColor: '#1e293b',
      }}
    >
      <Link href="/" style={{ color: '#fff', fontWeight: 'bold' }}>
        Catálogo
      </Link>
      <Link href="/sobre" style={{ color: '#fff', fontWeight: 'bold' }}>
        Sobre
      </Link>
    </nav>
  );
}
