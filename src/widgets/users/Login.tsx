import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../../features/CustomTypes'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../app/Firebase'
export default function Login() {
    
    const {register, handleSubmit, formState: {errors}} = useForm<IUser>()
    const navigate = useNavigate()
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(()=>navigate('/requests'))
            .catch(() => alert('Invalid credentials'))
    }
    const onSubmit: SubmitHandler<IUser> = (data) => {
        handleLogin(data.email, data.password)
        }

    return (
      <>
          <h2>"Войти в систему"</h2>
      <form className="new-item-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className='header'>Ваша почта</h3>
          <input placeholder={"Введите электронную почту"} {...register("email", {required: true})} 
                  aria-invalid={errors.email ? "true" : "false"}/>
          {errors.email?.type === 'required' && <p role='alert'>Электронная почта обязательно</p>}
        <h3 className='header'>Ваш пароль</h3>
          <input placeholder={"Введите пароль"} {...register("password", {required:true})}
                  aria-invalid={errors.password ? "true" : "false"} />
        <input type="submit" className='btn' />
      </form>
      </>
  )
}
