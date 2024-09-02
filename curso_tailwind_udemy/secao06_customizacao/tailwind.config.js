/** @type {import('tailwindcss').Config} */

// Podemos importar classes do arquivo de estilos padrão do Tailwind.
const { fontSize } = require('tailwindcss/defaultTheme')

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
      Ao definirmos uma propriedade fora de `extend`, estaremos substituindo por completo todos os valores definidos pelo Tailwind. Já com ela dentro de `extend`, estaremos adicionando valores à propriedade, mantendo os valores padrões do Tailwind.
      
      Obs.: Podemos manter os estilos definidos pelo Tailwind importando a classe de `defaultTheme` e a incluindo em nossa regra de customização.
    */
    fontSize: {
       ...fontSize,
       '10xl': '9rem' // Adiciona um novo tamanho de fonte.
    },
    // Definindo os valores de breakpoint.
    screens: {
      cel: {'max': '420px'},
      tablet: '640px',
    },
    extend: {
      colors: {
        brandBlue: '#1E40AF',  // Cores personalizadas
        yellow: {
          '900': '#fbff5f' // Corrigido para uma cor mais próxima ao padrão hexadecimal.
        },
      },
      spacing: {
        '18': '4.5rem',  // Corrigido para uma conversão de espaçamento mais adequada.
        '22': '5.5rem',  // Corrigido para uma conversão de espaçamento mais adequada.
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'], // Fontes padrão personalizadas.
      }
    },
  },
  // plugins: Adiciona plugins personalizados para estender as funcionalidades do Tailwind CSS.
  plugins: [
    // require('@tailwindcss/forms'), // Adiciona estilos padronizados para formulários
  ],
  // corePlugins: Habilita ou desabilita plugins essenciais do Tailwind CSS. Corrigido para `corePlugins`.
  corePlugins: {
    float: false,
    clear: false,
  },
  // presets: Permite importar presets contendo configurações a serem aplicadas em nosso `tailwind.config.js`.
  // presets: [
  //   require('path/to/my_tailwind_preset.js')
  // ]
}
