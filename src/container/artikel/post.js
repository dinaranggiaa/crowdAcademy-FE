import React from 'react';

const Post = ({ kategori,title, content, editPost, id, deletePost }) => {
    return (
    <div className="box-form1">
        <h1>Artikel</h1>
        <section>
            <h3>{title}</h3>
            <p>{content}<br/><small>{kategori}</small></p>
            <button 
            type="button" 
            className="btn btn-warning mr-3" 
            onClick={() => editPost(id)}>Edit</button>
            <button 
            type="button" 
            className="btn btn-danger"
            onClick={() => deletePost(id)}>Delete</button>
        </section>
    </div>
    );
};
export default Post