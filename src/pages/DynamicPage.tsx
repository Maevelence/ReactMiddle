import Box from "@mui/material/Box";
import { currentUrl, regex} from "../features/CustomTypes";
import { useAppSelector } from "../features/Hooks";
import { NewRequestForm } from "../widgets/requests/Form";
import Button from "@mui/material/Button";
import { useState } from "react";
import EditSquareIcon from '@mui/icons-material/EditSquare';
import Header from "../shared/Header"; 
import { useNavigate } from "react-router-dom";


export default function DynamicPage() {
    const [isEdit, setIsEdit] = useState(false)
    const editId = Number(currentUrl.match(regex)?.[0])
    const editable = useAppSelector(state => state.items.find(item => item.id == editId))
    const navigate = useNavigate()
    return (
    <>
    <Header />
    <Button variant="outlined" onClick={() => navigate(`/requests`)} className="request">К списку заявок</Button>


    {isEdit && <NewRequestForm /> }
    <Box className="request" component="section">
          <Button variant="outlined" 
            onClick={() =>setIsEdit(!isEdit)} 
            sx={{textTransform: "capitalize", position: "absolute", top: 8, right: 8}} 
            endIcon={<EditSquareIcon/>}>{isEdit ? 'Сохранить' : 'Изменить'}</Button>
      <h2>{editable?.title}</h2>
      <h3>{editable?.text}</h3>
      <h4 className="cardCat">{editable?.category}</h4>       
    </Box>
    
      
    </>
        )
      }
