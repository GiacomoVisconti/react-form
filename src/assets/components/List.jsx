import blogPosts from "../data/blog"

export default function List(){
    return(
        <ul className="list-group">
                {blogPosts.map(({title, id}) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={id}>
                            {title} 
                            <button className="btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </li>

                    )
                })}
        </ul>
    )
}