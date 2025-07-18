import blogPosts from "../data/blog"
import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import { useState } from "react"

export default function List(){

    const [isCreating, setIsCreating] = useState(true)
    const [newArticle, setNewArticle] = useState('')
    const [editArticleIndex, setEditArticleIndex] = useState(null)
    const [article, setArticle] = useState(blogPosts)

    // Function to handle input change
    // and update the newArticle state
    function handleChange(e) {
        setNewArticle(e.target.value)
    }
    
    
    function handleUpdatedArticle(index, updatedArticle) {
        setIsCreating(false);
        setNewArticle(article[index])

        // index servira per trovare e aggiornare article
        setEditArticleIndex(index)
    }

    function updateArticles(new_title) {
        if (editArticleIndex != null) {
            article[editArticleIndex] = new_title;

            setArticle(article);

            // reset alla modalita di creazione isCreating 
            setEditArticleIndex(null)
            setNewArticle('');
            setIsCreating(true)
        }
    }


    
    function handleSubmit(e) {
        e.preventDefault()

        console.log(isCreating)
        if (isCreating) {
            if(!newArticle.length == 0){
                setArticle([newArticle, ...article])
            }
        } else {
            console.log(newArticle)
            updateArticles(newArticle)
        }
    }


    


    return(
        <>
            {/* Form to add a new article} */}
            <form onSubmit={handleSubmit}>
                <p>{isCreating ? 'Insert a new Article' : 'Edit Article'}</p>
                <input id="input_text" type="text" onChange={handleChange} value={newArticle} className="form-control" />

                <button type="submit" className="btn"><i className="fa-regular fa-floppy-disk"></i> Salva</button>
                {!isCreating && (
                    <button type="button" className="btn" onClick={() => {}}><i className="fa-regular fa-times"></i> Annulla</button>
                )}
            </form>
            {/* List of articles generates by a map into the datas array */}
            <ul className="py-3 list-group">
                    {article.map((element, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                {element} 
                                <div>

                                    <ButtonDelete index={index} article={article} setArticle={setArticle}/>

                                    <ButtonEdit index={index} article={article} onUpdatedArticle={(index, updatedArticle) => handleUpdatedArticle(index, updatedArticle)}/>

                                </div>

                            </li>

                        )
                    })}
            </ul>
        </>
    )
}