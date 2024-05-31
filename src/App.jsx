/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Button from './components/Button'
import Avatar from './components/Avatar'
import Breadcrumb from './components/Breadcrumb'
import Card from './components/Card'

function App() {
	return (
		<HomeDetails>
			<div className="overlay"></div>
			<div className="container">
				<h1 className="logo">👹</h1>
				<h1 className="content">Welcome to Hannya</h1>

				<p className="content">
					What's Hannya? A beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
				</p>
				<p className="content">
					To understand how to use Hannya, you just need a <code>styled-components</code> installed, but, if you
					doesn't use him, you can import a css from every components and customize from own way.
				</p>

				<h2 className="content">Installation</h2>

				<p className="content">
					If you have a <code>styled-components</code> installed, go to <code>/src/components</code>, copy
					the example do you want and put in your components folder. You can customize him whatever you want.
				</p>

				<p className="content">
					Read the comments on code if have, because some stuffs need a third-party libs.
				</p>

				<p className="content">
					Created and maintained by <a href="https://github.com/Yagasaki7K" target='_blank' rel="noreferrer">Anderson "Yagasaki" Marlon</a> and
					your <a href="https://github.com/Yagasaki7K/lib-hannya/graphs/contributors" target='_blank' rel="noreferrer">contributors</a>.
				</p>

				<p className="content">You can see the <a href="https://github.com/Yagasaki7K/lib-hannya" target='_blank' rel="noreferrer">source code</a> here.</p>

				<div className="examples">
					<h2 className="content">Examples</h2>

					<h3 className="content">Avatar</h3>
					<Avatar />

					<h3 className="content">Button</h3>
					<Button />

					<h3 className="content">Breadcrumb</h3>
					<Breadcrumb />

					<h3 className="content">Card</h3>
					<Card />
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

	.container {
		font-family: 'Inter', sans-serif;

		.content {
			margin: 1rem 0;
			color: var(--font-light);
		}

		p .content {
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