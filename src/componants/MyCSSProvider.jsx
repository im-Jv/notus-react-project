import { ChakraBaseProvider, extendBaseTheme, theme } from '@chakra-ui/react'

const { Table, Drawer, Progress, Toast } = theme.components
const styles = theme.styles
const fonts = theme.fonts
const themee = extendBaseTheme({
  colors: {
    primary: {
      blue: '#0284C7',
      green: '#10b981',
      red :'#ef4444',
      orange: '#f97316',
      pink : '#ec4899',
      black:'#1E293B'
    },
    secondary: '#fff',
    primaryhover: '#0ea5e9',
    text: {
      dark: '#334155',
      light:'#64748b',
      mlight: '#94a3b8',
      vlight:'#cbd5e1'
    },

  },
  styles,
  fonts,
  components: {
    Input: {
      baseStyle: {
        field: {
          p: '.3rem',
          rounded: '5px',
          _placeholder: { fontSize: '0.812rem' },
        },
      },
    },
    Table,
    Drawer,
    Progress,
    Toast
  }
})

export default function MyCSSProvider({ children }) {
  return (
    <ChakraBaseProvider theme={themee}>
      {children}
    </ChakraBaseProvider>
  )
}
