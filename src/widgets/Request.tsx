import { deleteItem } from "../entities/Slice"
import { ReqItem } from "../features/CustomTypes"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from "../features/Hooks"
import SendIcon from '@mui/icons-material/Send'

export const Request: React.FC<ReqItem> = (item) => {

  const dispatch = useAppDispatch()
  return (

    <Box component="section" className="request" sx={{position: "relative"}}>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <h4 className="cardCat">{item.category}</h4>

      <Button href={`/requests/${item.id}`} 
              sx={{textTransform: "capitalize"}} 
              variant="outlined" 
              endIcon={<SendIcon/>}>Подробнее</Button>
      <h4 className="cardDate">{item.dateCreated}</h4>
      <Button variant="outlined" 
              onClick={() =>dispatch(deleteItem(item))} 
              sx={{textTransform: "capitalize", position: "absolute", top: 8, right: 8}}>
        <DeleteIcon />
      </Button>

      
      
    </Box>

  )
}