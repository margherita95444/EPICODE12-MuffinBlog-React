import { Link } from 'react-router-dom';
import pages from "../../data/pages";
import categories from "../../data/categories";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg shadow-lg sticky-top">
            <div className="container-fluid"> 
                <Link className="navbar-brand" to="/"><img src="./assets/images/muffin.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            categories.map(category => (
                                <li key={category.id} className="nav-link">
                                    <Link className="nav-link" to={`posts-categories/${category.id}/posts`}>{category.title}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    {
                        pages.map(page => (
                            <li key={page.id} className="nav-link">
                                <Link className="nav-link" to={`pages/${page.id}`}>{page.title}</Link>
                            </li>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}