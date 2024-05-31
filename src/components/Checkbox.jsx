import styled from "styled-components"

const Checkbox = () => {
    return (
        <CheckboxDetails>
            <input type="checkbox" name="" id="" /> <p>Accept terms and conditions</p>
        </CheckboxDetails>
    )
}

export default Checkbox

const CheckboxDetails = styled.div`
    display: flex;

    input {
        appearance: none;
        width: 16px;
        height: 16px;
        background: transparent;
        border: 1px solid #fafafa;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-right: 0.5rem;
    }

    input:checked {
        background: #fafafa;
        border: 1px solid #fafafa;
    }

    input:checked::after {
        content: '';
        position: absolute;
        top: 35%;
        left: 50%;
        width: 4px;
        height: 10px;
        border: solid #131415;
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    p {
        font-family: inherit;
        color: #fafafa;
        font-size: 14px;
    }
`