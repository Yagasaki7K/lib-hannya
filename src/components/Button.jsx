import styled from 'styled-components'

const Button = () => {
    return (
        <ButtonDetails>
            <button className="button1">Button</button>
            <button className="button2">Button</button>
        </ButtonDetails>
    )
}

export default Button

const ButtonDetails = styled.div`
    .button1 {
        padding: 0 2rem;
        background: #09090b;
        height: 2.35rem;
        border-radius: 10px;
        border: 1px solid #27272a;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: #27272a;
        }
    }

    .button2 {
        padding: 0 2rem;
        background: #fff;
        height: 2.25rem;
        border-radius: 10px;
        border: 1px solid #fff;
        color: #09090b;
        cursor: pointer;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: #a0a0a0;
            border: 1px solid #a0a0a0;
        }
    }

    /* Don't copy it */
    .button2 {
        margin-left: 1rem;
    }
`