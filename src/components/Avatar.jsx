import styled from 'styled-components'

const Avatar = () => {
    return (
        <AvatarDetails>
            <img src="https://github.com/Yagasaki7K.png" alt="My Avatar" />
        </AvatarDetails>
    )
}

export default Avatar

const AvatarDetails = styled.div`
    img {
        width: 8rem;
        border-radius: 50%;
    }
`