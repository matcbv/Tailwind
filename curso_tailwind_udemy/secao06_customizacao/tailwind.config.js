/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: Define quais arquivos o Tailwind deve processar para gerar os estilos CSS.
  content: [],
  /* theme: Permite personalizar ou estender o tema padrão do Tailwind. Algumas das subpropriedades disponíveis são: 
      extend: Adiciona novas opções ao tema padrão, sem substituir os valores existentes.
      colors: Personaliza as cores disponíveis.
      spacing: Ajusta o espaçamento (margem, padding) no Tailwind.
  */
  theme: {
    extend: {},
    colors: {},
    spacing: {},
  },
  // plugins: Adiciona plugins personalizados para estender as funcionalidades do Tailwind CSS.
  plugins: [],
  // corePlugin: Habilita ou desabilita plugins essenciais do Tailwind CSS.
  corePlugin: {
  },
  // presets: Permite importarmos um preset contendo configurações a serem implementadas a mais em nosso tailwind.config.js
  presets: [
    require('path/to/my_tailwind_preset.js')
  ]
}

