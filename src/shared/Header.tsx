import Button from "@mui/material/Button"
import Logo from '@mui/icons-material/Logout'
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../app/Firebase"; 
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate()
    const [authUser, setAuthUser] = useState("")
    
    useEffect(() => {
      const listener = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user.email!)
        } else {
          setAuthUser("")
          navigate('/login')
        }
      })

      return () => {
        listener()
      }
    }, [])

    const handleClick = async () => {
        try {
          signOut(auth)
          alert("Вы не зарегистрированы в системе")
          navigate('/login')
        } 
        catch (error) {
          console.log("Error: ", error)
        }
           
      }
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}><h4>{authUser}</h4>
      <Button variant="outlined" 
            sx={{textTransform: "capitalize", position: "relative", height: 35, top: 12.5}} 
            endIcon={<Logo />} onClick={handleClick}>Выйти</Button></div>
  )
}
