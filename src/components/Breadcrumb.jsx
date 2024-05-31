import styled from 'styled-components'

// THIRD-PARTY LIBRARY
/* You need a unicons installed. You can get it on index.html */
//

const Breadcrumb = () => {
    return (
        <BreadcrumbDetails>
            <div className="navigation">
                <p>Home</p>
                <i className="uil uil-angle-right" />
                <p className="dots">...</p>
                <i className="uil uil-angle-right" />
                <p>Components</p>
                <i className="uil uil-angle-right" />
                <p className="lastList">Breadcrumb</p>
            </div>
        </BreadcrumbDetails>
    )
}

export default Breadcrumb

const BreadcrumbDetails = styled.div`
    border: 1px solid #181b25;
    padding: 0 1rem;
    border-radius: 15px;

    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #464950;
        
        i {
            margin: 0 0.5rem;
        }

        .dots {
            margin-top: 8px;
            color: #acb2c9;

            &:hover {
                color: #acb2c9;
            }
        }

        .lastList {
            color: #fff;
        }

        p {
            &:hover {
                color: #fff;
            }
        }
    }
`