import blogPosts from "../data/blog"
import { useState } from "react"

export default function List(){

    const [newArticle, setNewArticle] = useState('')
    const [article, setArticle] = useState(blogPosts)

    // Function to handle input change
    // and update the newArticle state
    function handleChange(e) {
        setNewArticle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!newArticle.length == 0){

            setArticle([newArticle, ...article])
        }
    }

    return(
        <>
            {/* Form to add a new article} */}
            <form  onSubmit={handleSubmit}>
                <p>Insert a new Article</p>
                <input type="text" onChange={handleChange} value={newArticle} className="form-control" />

                <button type="submit" className="btn"><i className="fa-regular fa-floppy-disk"></i> Salva</button>
            </form>
            {/* List of articles generates by a map into the datas array */}
            <ul className="py-3 list-group">
                    {article.map((element, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                {element} 
                                <button className="btn">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </li>

                        )
                    })}
            </ul>
        </>
    )
}