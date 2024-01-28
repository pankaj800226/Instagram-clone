// import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { toast } from 'react-toastify'

const Post = () => {
    // const { isAuthenticated, } = useAuth0()
    const [file, setFile] = useState()
    const [tital, setTital] = useState('')


    const handleUpload = () => {
        if (file && tital.trim() !== '') {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('tital', tital);
            try {
                const data = axios.post('http://localhost:8080/upload', formData);
                console.log(data);
                toast.success('🦄Post successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error('🦄Please fill file and tital ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setTital('')
    }

    return (
        <>
            <div className="upload_bar">
                <div className='upload_section'>

                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="file" className="upload-button">
                        <IoSend /> Upload
                    </label>
                    <button onClick={handleUpload} className="submit-button">
                        Submit
                    </button>
                </div>
                <div className="input_container">
                    <input
                        type="text"
                        placeholder="Tital..."
                        onChange={(e) => setTital(e.target.value)}
                        value={tital}
                    />

                </div>
            </div>

        </>
    )
}


export default Post