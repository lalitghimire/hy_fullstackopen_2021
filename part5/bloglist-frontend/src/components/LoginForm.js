import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
    username,
    password,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Log in to the application</h2>
            <div>
                username
                <input
                    id='loginform-username'
                    type='text'
                    value={username}
                    name='Username'
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                password
                <input
                    id='loginform-password'
                    type='password'
                    value={password}
                    name='Password'
                    onChange={handlePasswordChange}
                />
            </div>
            <button id='login-btn' type='submit'>
                login
            </button>
        </form>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
export default LoginForm
