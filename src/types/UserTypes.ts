import { User } from 'lucide-react'

interface UserTypes {
  firstName: string
  lastName: string
  email: string
  provider: 'firebase' | 'google'
}

export default User
