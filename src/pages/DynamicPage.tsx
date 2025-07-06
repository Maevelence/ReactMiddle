import Box from "@mui/material/Box";
import { currentUrl, regex} from "../features/CustomTypes";
import { useAppSelector } from "../features/Hooks";
import { NewItemForm } from "../widgets/NewItemForm";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditSquareIcon from '@mui/icons-material/EditSquare';
export default function DynamicPage() {
    const navigate = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    const editId = Number(currentUrl.match(regex)?.[0])
    const editable = useAppSelector(state => state.items.find(item => item.id == editId))
    
    return (
    <>
    <Button variant="outlined" onClick={() => navigate(`/requests`)} className="request">К списку заявок</Button>


    {isEdit && <NewItemForm /> }
    <Box className="request" component="section" sx={{}}>
          {!isEdit &&<Button variant="outlined" 
            onClick={() =>setIsEdit(!isEdit)} 
            sx={{textTransform: "capitalize", position: "absolute", top: 8, right: 8}} 
            endIcon={<EditSquareIcon/>}>Изменить</Button>}
      <h2>{editable?.title}</h2>
      <h3>{editable?.text}</h3>
      <h4 className="cardCat">{editable?.category}</h4>       
    </Box>
    
      
    </>
  )
}
