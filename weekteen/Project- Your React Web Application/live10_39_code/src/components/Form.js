import React from 'react'

export default function Form({children, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
