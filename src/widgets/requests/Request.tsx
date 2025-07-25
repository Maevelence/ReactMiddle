import { deleteRequest } from "../../entities/requestsSlice"
import { Request } from "../../features/CustomTypes"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from "../../features/Hooks"
import SendIcon from '@mui/icons-material/Send'

export const RequestItem: React.FC<Request> = (request) => {
  const dispatch = useAppDispatch()
  return (

    <Box component="section" className="request" sx={{position: "relative"}}>
      <h2 style={{width: 245, overflow: "hidden"}}>{request.title}</h2>
      <p>{request.text}</p>
      <h4 className="cardCat">{request.category}</h4>

      <Button href={`/requests/${request.id}`} 
              sx={{textTransform: "capitalize"}} 
              variant="outlined" 
              endIcon={<SendIcon/>}>Подробнее</Button>
      <h4 className="cardDate">{request.dateCreated}</h4>
      <Button variant="outlined" 
              onClick={() =>dispatch(deleteRequest(request))} 
              sx={{textTransform: "capitalize", position: "absolute", top: 8, right: 8}}>
        <DeleteIcon />
      </Button>

      
      
    </Box>

  )
}