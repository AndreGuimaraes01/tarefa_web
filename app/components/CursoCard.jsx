'use client';
import { useState } from 'react';

export default function CursoCard({
  nome,
  professor,
  cargaHoraria = 'A definir',
  nivel,
  modalidade,
}) {
  // Estado local: cada cartão tem o SEU próprio "inscrito"
  const [inscrito, setInscrito] = useState(false);

  // Alterna o valor do estado (true <-> false)
  function alternarInscricao() {
    setInscrito(!inscrito);
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '12px 0',
      }}
    >
      <h2 style={{ color: '#1d4ed8', marginTop: 0 }}>{nome}</h2>
      <p><strong>Professor:</strong> {professor}</p>
      <p>
        <strong>Carga horária:</strong>{' '}
        {typeof cargaHoraria === 'number' ? `${cargaHoraria}h` : cargaHoraria}
      </p>
      <p><strong>Nível:</strong> {nivel}</p>
      <p><strong>Modalidade:</strong> {modalidade}</p>

      <button
        onClick={alternarInscricao}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          backgroundColor: inscrito ? '#16a34a' : '#1d4ed8',
        }}
      >
        {inscrito ? 'Inscrito ✔' : 'Garantir Vaga'}
      </button>
    </div>
  );
}
