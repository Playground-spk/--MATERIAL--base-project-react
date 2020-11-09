import React from 'react'

function AccessPermisson(props) {
    const {token} = props.match.params;
    console.log(props)
    return (
        <div>
            {token}
        </div>
    )
}

export default AccessPermisson
