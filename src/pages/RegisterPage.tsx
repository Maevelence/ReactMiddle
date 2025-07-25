import Register from "../widgets/users/Register";
import { auth } from '../app/Firebase'
export default function RegisterPage() {
  
  return (
    <Register auth={auth}/>
  )
}
