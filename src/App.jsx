/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Button from './components/Button'
import Avatar from './components/Avatar'
import Breadcrumb from './components/Breadcrumb'

function App() {
	return (
		<HomeDetails>
			<div className="overlay"></div>
			<div className="content">
				<h1 className="logo">👹</h1>
				<h1>Welcome to Hannya</h1>

				<p>
					What's Hannya? A beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
				</p>
				<p>
					To understand how to use Hannya, you just need a <code>styled-components</code> installed, but, if you
					doesn't use him, you can import a css from every components and customize from own way.
				</p>

				<h2>Installation</h2>

				<p>
					If you have a <code>styled-components</code> installed, go to <code>/src/components</code>, copy
					the example do you want and put in your components folder. You can customize him whatever you want.
				</p>

				<p>
					Read the comments on code if have, because some stuffs need a third-party libs.
				</p>

				<p>
					Created and maintained by <a href="https://github.com/Yagasaki7K" target='_blank' rel="noreferrer">Anderson "Yagasaki" Marlon</a> and
					your <a href="https://github.com/Yagasaki7K/lib-hannya/graphs/contributors" target='_blank' rel="noreferrer">contributors</a>.
				</p>

				<p>You can see the <a href="https://github.com/Yagasaki7K/lib-hannya" target='_blank' rel="noreferrer">source code</a> here.</p>

				<div className="examples">
					<h2>Examples</h2>

					<h3>Avatar</h3>
					<Avatar />

					<h3>Button</h3>
					<Button />

					<h3>Breadcrumb</h3>
					<Breadcrumb />
				</div>

				<CopyrightDetails>
					<hr />
					<div className="copyright">
						<p>© 2024 - {new Date().getFullYear()} <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">Anderson &quot;Yagasaki&quot; Marlon</a></p>
					</div>
				</CopyrightDetails>
			</div>
		</HomeDetails>
	)
}

export default App

const HomeDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 2rem 35rem;

	.logo {
		font-size: 10rem;
	}

	code {
		background: var(--background-alt);
		padding: 0.2rem;
		border-radius: 5px;
	}

	.content {
		font-family: 'Inter', sans-serif;
		color: var(--font-light);

		h1, h2, h3, h4, p {
			margin: 1rem 0;
		}

		p {
			color: var(--font);
			text-align: left;
		}

		a {
			color: var(--red);
		}

		.examples {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
`

const CopyrightDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 2rem;

    .inter {
        font-family: 'Inter', sans-serif;
    }

	.copyright {
		a {
			text-decoration: none;
			color: var(--font);
			font-size: 0.875rem;
		}

		p {
			margin-top: 0rem;
			font-size: 0.875rem;
		}
	}

	hr {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35rem;
        margin: 0 0 1rem 0;
        border: 1px solid var(--border);
      }

    
`