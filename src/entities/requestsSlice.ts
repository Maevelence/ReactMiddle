import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {IFormInput,Request} from '../features/CustomTypes'
import dayjs from 'dayjs'

const requestSlice = createSlice({
    name:'requests',
    initialState: [] as Request[] ,
    reducers: {
        addRequest: (state,action: PayloadAction<IFormInput>) => {
           state.push({
                id: state.length + 1,
                title: action.payload.title,
                text: action.payload.text,
                category: action.payload.category.toString(),
                dateCreated: `${dayjs().date()}.0${dayjs().month()+1}`   
            }) 
        }
        ,

        deleteRequest: (state,action: PayloadAction<Request>) => {
            const del = state.findIndex((Request) => Request.id === action.payload.id)
            if (del === -1) { return }
            state.splice(del,1)
        },

        editRequest: (state,action: PayloadAction<Request>) => {
            const {category,id,text,title} = action.payload
            const Request = state.find(Request => Request.id == id)
            if (Request) {
                Request.title = title,
                Request.text = text,
                Request.category = category,
                Request.dateCreated = `${dayjs().date()}.0${dayjs().month()+1}`
            }
        }
    }
})
export const {addRequest, deleteRequest, editRequest} = requestSlice.actions
export default requestSlice.reducer 