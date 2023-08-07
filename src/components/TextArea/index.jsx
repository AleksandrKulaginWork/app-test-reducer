import './style.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/actions';

export const TextArea = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message) {
            dispatch(addMessage(message));
            setMessage('');
        }
    }
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <textarea placeholder='Send Message' className="textarea" value={message} onChange={handleChange}></textarea>
            <button className='button' type='submit'>Send message</button>
        </form>
    )
}