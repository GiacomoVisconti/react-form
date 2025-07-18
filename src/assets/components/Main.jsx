import blogPosts from "../data/blog"

export default function Main(){
    return (
        <div className="container">
            <h1>ARTICLES</h1>
            
            <ul className="list-group">
                {blogPosts.map(({title, id}) => {
                    return (
                        <li className="list-group-item" key={id}>{title}</li>

                    )
                })}
            </ul>
            
        </div>
    )
}