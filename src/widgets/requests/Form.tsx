import { SubmitHandler, useForm } from 'react-hook-form'
import {currentUrl, IFormInput, regex} from '../../features/CustomTypes'
import { useAppDispatch} from '../../features/Hooks'
import { addRequest, editRequest } from '../../entities/requestsSlice'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export function NewRequestForm() { 

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>()
  const editId = Number(currentUrl.match(regex)?.[0])
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!(editId > 0)) {
      dispatch(addRequest(data))
      navigate('/requests')
    }

    if (editId) {
      dispatch(editRequest({
        id: editId,
        title: data.title,
        text: data.text,
        category: data.category,
        dateCreated: `${dayjs().date()}.0${dayjs().month()+1}`
      }))
    } 

    }
    
  return (
    <>
    {editId ? <h2>Изменение заявки</h2> : <h2>Добавление заявки</h2>}
      <form className="new-item-form" 
            onSubmit={handleSubmit(onSubmit)}>
        <h3 className='header'>Название</h3>
          <input maxLength={21} placeholder={"Введите название заявки"} {...register("title", {required: true})} 
                  aria-invalid={errors.title ? "true" : "false"}/>
          {errors.title?.type === 'required' && <p role='alert'>Название задачи обязательно</p>}
        <h3 className='header'>Описание</h3>
          <input placeholder={"Введите описание заявки"} {...register("text")} />
        <h3 className='header'>Категория</h3>
          <select  {...register("category")}>
            <option value="Важная неотложная">Важная неотложная</option>
            <option value="Неважная неотложная">Неважная неотложная</option>
            <option value="Важная отложная">Важная отложная</option>
            <option value="Неважная отложная">Неважная отложная</option>
          </select>
        <input type="submit" className='btn' />
      </form>
       
    </>
  )
}
