import styled from "styled-components"

const Card = () => {
    return (
        <CardDetails>
            <div className="card">
                <h1>Create project</h1>
                <p>Deploy your new project in one-click.</p>

                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name of your project" />

                <label htmlFor="framework">Framework</label>
                <select>
                    <option value="">Select</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="svelte">Svelte</option>
                    <option value="angular">Angular</option>
                    <option value="sveltekit">SvelteKit</option>
                </select>

                <div className="buttons">
                    <button className="button black">Cancel</button>
                    <button className="button white">Deploy</button>
                </div>
            </div>
        </CardDetails>
    )
}

export default Card

const CardDetails = styled.div`
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 10px;
    padding: 2rem;
    width: 25rem;

    .card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;

        h1, label {
            font-family: inherit;
            color: #dadde7;
        }

        p {
            font-family: inherit;
            color: #acb2c9;
            font-size: 14px;
        }

        label {
            margin-top: 1rem;
        }

        input, select {
            margin-top: 0.5rem;
            padding: 0.6rem;
            border: 1px solid #27272a;
            border-radius: 5px;
            outline: none;
            font-family: inherit;
            background: #09090b;
            color: #dadde7;
            border: 1px solid #27272a;
            font-size: 0.875rem;
            font-weight: 500;
        }

        option {
            font-family: inherit;
            background: #09090b;
            color: #dadde7;
            border: 1px solid #27272a;

            &:hover {
                background: #27272a;
            }
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            border-radius: 0.375rem;
            font-size: .875rem;
            margin-top: 10px;
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

        .buttons {
            display: flex;
            margin-top: 1rem;
            justify-content: space-between;
        }
    }
`