import './HeaderStyles.css'
import { ShoppingCart } from 'lucide-react'

export default function HeaderComponent() {
  return (
    <div className="header-container">
      <h2 className="haeader-title">CLUB CLOTHING</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <ShoppingCart size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </div>
  )
}
