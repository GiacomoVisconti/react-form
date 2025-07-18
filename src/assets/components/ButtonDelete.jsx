export default function ButtonDelete({index, article, setArticle}) {

    function removeArticle (i, article, setArticle){
        const updatedArticles = article.filter((element, index) => {
            return index !== i
        })
        setArticle(updatedArticles)
    }
    return (

        <button onClick={() => {removeArticle(index, article, setArticle)}} className="btn">
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
}