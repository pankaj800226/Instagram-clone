import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import img6 from '../image/6.jpg'
import img7 from '../image/7.jpg'
import img8 from '../image/8.jpg'
import img9 from '../image/9.jpg'
import img10 from '../image/10.jpg'


const StatusBar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {
                isAuthenticated ? (
                    <div class="status_container">
                        <div class="image">
                            <img src={img1} alt="" />
                            <p>Pankaj</p>
                        </div>

                        <div class="image">
                            <img src={img2} alt="" />
                            <p>Nihal</p>
                        </div>

                        <div class="image">
                            <img src={img3} alt="" />
                            <p>John</p>
                        </div>

                        <div class="image">
                            <img src={img4} alt="" />
                            <p>Kajal</p>
                        </div>

                        <div class="image">
                            <img src={img5} alt="" />
                            <p>Sonam</p>
                        </div>

                        <div class="image">
                            <img src={img6} alt="" />
                            <p>Sonaali</p>
                        </div>

                        <div class="image">
                            <img src={img7} alt="" />
                            <p>Priya</p>
                        </div>

                        <div class="image">
                            <img src={img8} alt="" />
                            <p>Suhani</p>
                        </div>

                        <div class="image">
                            <img src={img9} alt="" />
                            <p>Rahul</p>
                        </div>

                        <div class="image">
                            <img src={img10} alt="" />
                            <p>Pankaj</p>
                        </div>

                    </div>
                ) : (
                    <div></div>
                )
            }

        </>
    )
}

export default StatusBar