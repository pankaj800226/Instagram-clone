import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserProfiles from './UserProfiles'
import { useAuth0 } from '@auth0/auth0-react'
import { AiFillDelete } from 'react-icons/ai'
const Profile = () => {
    const [image, setImage] = useState([])
    //delete 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(result => console.log(result))
            .catch((err => console.log(err)))
    }
    // get image
    useEffect(() => {
        axios.get('http://localhost:8080/getImage')
            .then(res => setImage(res.data))
            .catch(err => console.log(err))
    }, [image])

    const { user } = useAuth0()

    return (
        <>
            <UserProfiles post={image.length} />

            <div className="profile_container">
                <div className="profile_post-list">
                    {
                        image.length > 0 ? (
                            image.map((data, index) => (
                                <div className="profile_post" key={index}>
                                    <div className="profile_user-info">
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h2 style={{ backgroundColor: "blueviolet", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignContent: "center", borderRadius: "50%", color: "whitesmoke", textTransform: "uppercase" }}>{user?.email.charAt(0)}</h2>
                                            <span>username</span>
                                        </div>
                                    </div>
                                    <img src={`http://localhost:8080/Images/${data.image}`} alt="post" />
                                    <div className="profile_interaction-bar">
                                        <p>❤️ Like</p>
                                        <button onClick={() => handleDelete(data._id)}>
                                            <AiFillDelete />
                                        </button>
                                    </div>
                                    <div className="profile_comments">
                                        <div className="profile_comment">
                                            <span>Tital : {data.tital}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1 style={{ textAlign: "center" }}>Profile Not Found</h1>
                        )

                    }
                </div>
            </div>
        </>
    );

}

export default Profile