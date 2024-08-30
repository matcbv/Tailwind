/** @type {import('tailwindcss').Config} */

const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  // content: Define quais arquivos o Tailwind deve processar para gerar os estilos CSS.
  content: ["./src/**/*.{html,js}"],
  /* theme: Permite personalizar ou estender o tema padrão do Tailwind. Algumas das subpropriedades disponíveis são:
      extend: Adiciona novas opções ao tema padrão, sem substituir os valores existentes.
      colors: Personaliza as cores disponíveis.
      spacing: Ajusta o espaçamento (margem, padding) no Tailwind.

      Obs.: Regras com o mesmo nome que os do Tailwind irão sobrescrever os valores padrões.
  */
  theme: {
    /*
      Ao definirmos uma propriedade fora de extend, estaremos substituindo por completo todos os valores definidos pelo Tailwind. Já com ela dentro de extend, estaremos adicionando valores para a propriedade.
    */

    // Definindo os valores de breakpoint.
    screens: {
      cel: {'max': '420px'},
      tablet: '640px',
    },
    extend: {
      colors: {
        brandBlue: '#1E40AF',  // Cores personalizadas
        // Para
        yellow: {
          ...colors.yellow,
          '900': '#fbff5f'
        },
      },
      spacing: {
        '18': '8rem',  // Adiciona espaçamentos personalizados
        '22': '12rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'], // Fontes padrão personalizadas.
      }
    },
  },
  // plugins: Adiciona plugins personalizados para estender as funcionalidades do Tailwind CSS.
  plugins: [
    // require('@tailwindcss/forms'), Adiciona estilos padronizados para formulários
  ],
  // corePlugin: Habilita ou desabilita plugins essenciais do Tailwind CSS.
  corePlugin: {
    float: false,
    clear: false,
  },
  // presets: Permite importarmos um preset contendo configurações a serem implementadas a mais em nosso tailwind.config.js.
  // presets: [
  //   require('path/to/my_tailwind_preset.js')
  // ]
}
