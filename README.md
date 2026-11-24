# Portal de Cursos (tarefa_web)

Catálogo interativo de cursos feito em **Next.js (App Router)** — Exercício Prático de Web Mobile (Mackenzie).

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

```
app/
├── layout.js            # layout raiz (Navbar aparece em todas as páginas)
├── page.js              # rota "/"      -> catálogo com 4 CursoCard
├── globals.css
├── sobre/
│   └── page.js          # rota "/sobre" -> objetivo + contatos do suporte
└── components/
    ├── Navbar.jsx       # links com next/link
    └── CursoCard.jsx    # 'use client' + useState (botão Garantir Vaga / Inscrito ✔)
```
