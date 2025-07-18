import { useState } from "react"


export default function ButtonEdit({index, article, onUpdatedArticle}){

    

    function editArticle (i, article){
        // abbiamo larticolo da aggiornare
        const updatedArticle = article.filter((element, index) => {
            return index == i
        })

        onUpdatedArticle(index, updatedArticle);
    }




    return (
        <>
            <button onClick={() => {editArticle(index, article)}} className="btn">
                <i className="fa-solid fa-pencil"></i>
            </button>
        </>
    )
}