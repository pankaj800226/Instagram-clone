import React from 'react'

const UserEditProfile = () => {
    return (
        <>
            <div className="task_text">
                <h1>Change Your Profile</h1>
            </div>
            <div className='task_container'>
                <form>
                    <input type="text"
                        placeholder='Enter Your Username'

                    />

                    <textarea type="text"
                        placeholder='Enter You  Bio'

                    />
                    <button type='submit'>EditProfile.</button>
                </form>
            </div>
        </>
    )
}

export default UserEditProfile