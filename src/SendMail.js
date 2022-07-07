import React, { useRef } from 'react'
import './SendMail.css'
import Button  from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase/compat/app';
import { db } from './firebase';

interface FormData {
    to: string;
    subject: string;
    message: string;
}

const SendMail = () => {
    const { register, handleSubmit, watch, formState:{ errors }, setError } = useForm(FormData);
    const dispatch = useDispatch();

        const onSubmit = (FormData) => {
            console.log(FormData);

            db.collection('emails').add(
                {
                    to: FormData.to,
                    subject: FormData.subject,
                    message: FormData.message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
                
                dispatch(closeSendMessage());
            
    };

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type="email" {...register('to', {required: "This field is required"})}/>
            {errors.to && <p className='sendMail__error'>{errors.to.message}</p>}
            <input name='subject' placeholder='Subject' type="text" {...register('subject')}  {...register('subject', {required: "This field is required"})}/>
            {errors.subject && <p className='sendMail__error'>{errors.subject.message}</p>}
            <input name='message' placeholder='Message...' type="text" className='sendMail__message' {...register('message')} {...register('message', {required: "This field is required"})} />
            {errors.message && <p className='sendMail__error'>{errors.message.message}</p>}

            <div className="sendMail__options">
                <Button className='sendMail__send'
                variant='contained'
                color='primary'
                type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail