import React from 'react'
import './EmailRow.css'
import { Checkbox, Icon, IconButton } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

const EmailRow = ({id, title, subject, description, time}) => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description, 
            time,
        })
      );

        history("/mail");
    };


  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarOutlineIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>
        <h3 className="emailRow__title">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>{subject} 
            <span className='emailRow__description'>
                {description}
                </span> 
            </h4>
        </div>
        <div className="emailRow__description">
            {time}
        </div>
        
    </div>
  )
}

export default EmailRow