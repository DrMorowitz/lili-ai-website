import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/grid-animations.css'
import { initToolbar } from '@21st-extension/toolbar'

createRoot(document.getElementById("root")!).render(<App />);

if (process.env.NODE_ENV === 'development') {
  initToolbar({
    plugins: []
  });
}