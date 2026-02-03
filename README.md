# 🚀 Frontend Test - ADAC Softwares

Este repositório contém a solução para o desafio técnico de Frontend da **ADAC Softwares**. O objetivo foi desenvolver uma Landing Page de alta fidelidade baseada no design fornecido no Figma, utilizando **React**, boas práticas de código e design responsivo.

## 🎨 Sobre o Projeto

O projeto é uma reprodução pixel-perfect da "Startup Landing Page Dark". O foco principal foi garantir a fidelidade visual, a organização da estrutura de componentes e a performance da aplicação.

### 🔗 Links
- **Design Original (Figma):** ADAC Softwares
- **Deploy:** *[https://frontend-test-adac-softwares-eight.vercel.app/]*

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com uma stack moderna visando performance e escalabilidade:

- **React** (Vite) - Framework principal.
- **TypeScript** - Para tipagem estática e segurança do código.
- **Tailwind CSS** - Para estilização utilitária e responsividade.
- **Atomic Design** - Estruturação de componentes para reutilização e organização.

## ✨ Diferenciais Implementados

Conforme sugerido nos requisitos, foram implementados os seguintes diferenciais:

- [x] **Estilização com Tailwind CSS**: Uso de classes utilitárias para um design system consistente.
- [x] **Arquitetura Limpa**: Separação entre componentes de UI (genéricos) e Seções de Layout.
- [x] **Responsividade Total**: Layout fluido e adaptativo, testado em Mobile, Tablet e Desktop (com correções específicas para scroll horizontal e espaçamentos).
- [x] **Pixel Perfect**: Ajustes finos de padding, margens e tipografia baseados fielmente no Figma.
- [x] **Assets Otimizados**: Implementação de troca de imagens responsivas (mobile vs desktop) na seção CTA.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação em ambiente local:

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Instalação

1. Clone este repositório:
```bash
git clone [https://github.com/SEU-USUARIO/Frontend-Test-ADAC-Softwares.git](https://github.com/SEU-USUARIO/Frontend-Test-ADAC-Softwares.git)
```
Acesse a pasta do projeto:

```bash
cd Frontend-Test-ADAC-Softwares
```
Instale as dependências:

```bash
npm install
```
# ou
```bash
pnpm install
```
Execute o servidor de desenvolvimento:

```bash
npm run dev
```
O projeto estará rodando em http://localhost:5173.

📂 Estrutura de Pastas
A organização do código foi refatorada para seguir padrões de escalabilidade:

Plaintext
src/
├── assets/              # Imagens e ícones estáticos
├── components/
│   ├── ui/              # Componentes "burros" e reutilizáveis (Button, Card, LaptopMockup)
│   └── sections/        # Seções principais da página (Hero, CTA, Footer, etc.)
├── App.tsx              # Componente principal que orquestra as seções
└── main.tsx             # Ponto de entrada da aplicação
📊 Status do Desenvolvimento
Todas as etapas do desafio foram concluídas:

[x] Setup Inicial (Vite + Tailwind + TS)

[x] Hero Section (Layout 3D Responsivo)

[x] Features Section (Componente Contents com Cards modulares)

[x] Partners Section (Logos responsivos com SVGs otimizados)

[x] Testimonials (Grid Masonry responsivo)

[x] Gallery (Layout híbrido: lista no mobile e grid complexo no desktop)

[x] CTA Section (Imagens dinâmicas e layout full-width no mobile)

[x] Footer (Layout completo com ícones SVG e espaçamentos fiéis ao design)

Desenvolvido por Alice Costa como parte do processo seletivo da ADAC Softwares.
