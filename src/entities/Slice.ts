import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {IFormInput,ReqItem} from '../features/CustomTypes'
import dayjs from 'dayjs'

const ItemSlice = createSlice({
    name:'requests',
    initialState: [] as ReqItem[] ,
    reducers: {
        addItem: (state,action: PayloadAction<IFormInput>) => {
           state.push({
                id: state.length + 1,
                title: action.payload.title,
                text: action.payload.text,
                category: action.payload.category.toString(),
                dateCreated: `${dayjs().date()}.0${dayjs().month()+1}`   
            }) 
        }
        ,

        deleteItem: (state,action: PayloadAction<ReqItem>) => {
            const del = state.findIndex((item) => item.id === action.payload.id)
            if (del === -1) { return }
            state.splice(del,1)
        },

        editItem: (state,action: PayloadAction<ReqItem>) => {
            const {category,id,text,title} = action.payload
            const item = state.find(item => item.id == id)
            if (item) {
                item.title = title,
                item.text = text,
                item.category = category,
                item.dateCreated = `${dayjs().date()}.0${dayjs().month()+1}`
            }
        }
    }
})
export const {addItem, deleteItem, editItem} = ItemSlice.actions
export default ItemSlice.reducer 