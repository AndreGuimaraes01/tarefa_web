import CursoCard from './components/CursoCard';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Catálogo de Cursos</h1>

      <CursoCard
        nome="Desenvolvimento Web com Next.js"
        professor="Prof. Alcides"
        cargaHoraria={40}
        nivel="Intermediário"
        modalidade="Presencial"
      />

      <CursoCard
        nome="Lógica de Programação"
        professor="Prof.ª Paula"
        cargaHoraria={60}
        nivel="Iniciante"
        modalidade="EAD"
      />

      <CursoCard
        nome="Banco de Dados SQL"
        professor="Prof. Joaquim"
        cargaHoraria={30}
        nivel="Intermediário"
        modalidade="EAD"
      />

      {/* Este curso NÃO recebe cargaHoraria: o cartão mostra "A definir" */}
      <CursoCard
        nome="Inteligência Artificial Aplicada"
        professor="Prof. Alcides"
        nivel="Avançado"
        modalidade="Presencial"
      />
    </main>
  );
}
