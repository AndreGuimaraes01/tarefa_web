import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portal de Cursos',
  description: 'Catálogo interativo de cursos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
