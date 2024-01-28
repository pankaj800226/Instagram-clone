import React, { useEffect, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart, AiFillDelete } from "react-icons/ai";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillSave2Fill } from "react-icons/bs";
import StatusBar from './StatusBar';
const Home = () => {
  const [image, setImage] = useState([])
  const [comment, setTComment] = useState('')
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(false)
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  //delete 
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(result => console.log(result))
      .catch((err => console.log(err)))
  }

  useEffect(() => {
    axios.get('http://localhost:8080/getImage')
      .then(res => setImage(res.data))
      .catch(err => console.log(err))
  }, [image])

  const handleLike = () => {
    if (!like) {
      setLike(true)
      setLikeCount(likeCount + 1)
    } else {
      setLike(false)
      setLikeCount(likeCount - 1)
    }
  }

  return (
    <>
      <StatusBar />
      <div className="container">
        {
          isAuthenticated ? (
            <>

              <div className="post-list">
                {
                  image.length > 0 ? (
                    image.map((data, index) => (
                      <div className="post" key={index}>
                        <div className="user-info">
                          <h2>{user?.email.charAt(0)}</h2>
                          <div>
                            <span style={{ color: 'black', fontSize: "1rem", cursor: "pointer" }}>
                              <BsFillSave2Fill />
                            </span>

                          </div>
                        </div>
                        <img className='users_post_image' src={`http://localhost:8080/Images/${data.image}`} alt="post"
                          accept='image/*'
                        />
                        <div className="interaction-bar">
                          <div>
                            {
                              like ? (
                                <p style={{ fontSize: "1.5rem", cursor: "pointer" }}><AiFillHeart style={{ color: "crimson" }} onClick={handleLike} /></p>

                              ) : (
                                <p style={{ fontSize: "1.5rem", cursor: "pointer" }}><AiOutlineHeart onClick={handleLike} /></p>

                              )
                            }
                          </div>
                        </div>

                        <div className='remove_like'>
                          <p style={{ userSelect: 'none' }}>Like :{likeCount}</p>
                          <button onClick={() => handleDelete(data._id)}>
                            <AiFillDelete />
                          </button>
                        </div>
                        <div className="comments">
                          <div className="comment">
                            <span>Tital : {data.tital}</span>
                          </div>
                          <h3>Rendar :{comment}</h3>
                          <input type="text" onChange={(e) => setTComment(e.target.value)} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1 style={{ textAlign: "center" }}>Not Post yet</h1>
                  )

                }
              </div>
            </>

          ) : (
            <div className='home_login_btn'>
              <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg&ga=GA1.1.500629384.1698391869&semt=sph" alt="" />
              <button className='auth_btn' onClick={() => loginWithRedirect()}>LOGIN</button>

            </div>

          )
        }
      </div>
    </>


  );

}

export default Home