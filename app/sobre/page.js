import Link from 'next/link';

export default function Sobre() {
  return (
    <main style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Sobre o Portal</h1>
      <p>
        Catálogo acadêmico para consulta e inscrição em cursos complementares.
      </p>

      <h2>Contatos do suporte</h2>
      <ul>
        <li>E-mail: suporte@portalcursos.edu.br</li>
        <li>Telefone: (11) 3333-4444</li>
      </ul>

      <Link href="/">&lt;&lt; Voltar para o Catálogo</Link>
    </main>
  );
}
