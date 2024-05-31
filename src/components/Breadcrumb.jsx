import styled from 'styled-components'

// THIRD-PARTY LIBRARY
/* You need a unicons installed. You can get it on index.html */
//

const Breadcrumb = () => {
    return (
        <BreadcrumbDetails>
            <div className="navigation">
                <a href="#">Home</a>
                <i className="uil uil-angle-right" />
                <p className="dots">...</p>
                <i className="uil uil-angle-right" />
                <a href="#">Components</a>
                <i className="uil uil-angle-right" />
                <a href="#" className="lastList">Breadcrumb</a>
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
        padding: 1rem 0;
        font-family: inherit;
        
        i {
            margin: 0 0.5rem;
        }

        .dots {
            margin-top: -10px;
            cursor: pointer;

            &:hover {
                color: #acb2c9;
            }
        }

        .lastList {
            color: #fff;
        }

        a {
            text-decoration: none;
            transition: 0.2s;
            
            &:hover {
                color: #fff;
            }
        }
    }
`