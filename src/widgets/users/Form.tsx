import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../../features/CustomTypes'

export function Form({title, handle}) { 

  const {register, handleSubmit, formState: {errors}} = useForm<IUser>()
  
  const onSubmit: SubmitHandler<IUser> = (data) => {
    handle(data.email, data.password)
    }
    
  return (
    <>
    <h2>{title}</h2>
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
