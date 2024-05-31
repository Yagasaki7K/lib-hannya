import styled from 'styled-components'

const Button = () => {
    return (
        <ButtonDetails>
            <button className="button black">Button</button>
            <button className="button white">Button</button>
        </ButtonDetails>
    )
}

export default Button

const ButtonDetails = styled.div`
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border-radius: 0.375rem;
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 500;
        transition: colors 0.2s;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        outline: none;
        font-family: inherit;
        cursor: pointer;

        &:hover {
            background-color: var(--primary);
            opacity: 0.9;
        }
        
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 2px var(--ring-ring), 0 0 0 2px var(--ring-offset-2);
        }
        
        &:disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    .black {
        background: #09090b;
        border: 1px solid #27272a;
        color: #fafafa;

        &:hover {
            background: #27272a;
        }
    }

    .white {
        background: #fafafa;
        border: 1px solid #fafafa;
        color: #09090b;

        &:hover {
            background: #a0a0a0;
            border: 1px solid #a0a0a0;
        }
    }

    /* Don't copy it */
    .black {
        margin-right: 1rem;
    }
`