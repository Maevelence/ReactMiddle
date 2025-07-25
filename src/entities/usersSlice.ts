import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {User} from '../features/CustomTypes'

const UserSlice = createSlice({
    name:'users',
    initialState: [] as User[] ,
    reducers: {
        addUser: (state,action: PayloadAction<User>) => {
            const {email,id,password,token} = action.payload
            state.push({email,id,password,token})

        }
    }
})
export const {addUser} = UserSlice.actions
export default UserSlice.reducer 