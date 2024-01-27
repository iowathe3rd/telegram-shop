import ProductGrid from './components/ProductGrid';
import { ThemeProvider } from '@mui/material';
import { theme } from './mui/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductGrid/>
    </ThemeProvider>
  );
}

export default App;
