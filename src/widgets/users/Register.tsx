import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../features/Hooks'
import { addUser } from '../../entities/usersSlice'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../../features/CustomTypes'

export default function Register({auth}) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<IUser>()
    
    const handleRegister = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          dispatch(addUser({
                email,
                id: user.uid,
                password,
                token: user.accessToken
              }))
          navigate('/login')
          console.log("user created ", user.email)
        })    
        .catch(console.error)
    }

    const onSubmit: SubmitHandler<IUser> = (data) => {
            handleRegister(data.email, data.password)
            }

    return (
      <>
      <h2>Зарегистрироваться</h2>
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
