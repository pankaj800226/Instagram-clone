import React from 'react'
import { Link } from 'react-router-dom'

const UserProfiles = ({ post }) => {
    return (
        <div className="profile_cart_container">

            <div className="profile_card">
                <img src="mypro.jpg" alt="" className='users_card' />
                <h1 className="card__name">Pankaj Kumar</h1>
                <p className="card__name">Username</p>
                <p className="card__name">Bio</p>
                <div className="grid-container">
                    <div className="grid-child-posts">
                        Posts : {post}
                    </div>
                    <div className="grid-child-followers">
                        <Link to='/userEdit'>Edit Profile</Link>
                    </div>

                </div>
                <ul className="social-icons">
                    <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to="https://github.com/"><i className="fa-brands fa-github"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></Link></li>
                </ul>
            </div>

        </div>
    )
}

export default UserProfiles