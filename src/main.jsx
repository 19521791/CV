import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/fonts.css'
import App from '@/App'
import { AnimationProvider } from '@/contexts/AnimationContext'
import { ImageProvider } from '@/contexts/ImageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimationProvider>
    <ImageProvider>
      <App />
    </ImageProvider>
  </AnimationProvider>
)