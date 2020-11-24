import React, { useState, useRef,Button } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateNewPost from "./newpost";
import Post from "./post";
import ModifyPost from "./modifypost"
import "./newpost.css";
import history from "./history";
import Tabartikel from "./tabartikel";
//import {useHistory} from "react-router-dom"

const DisplayAllPosts = () => {

  //const history = useHistory();
  const [kategori,setKategori] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const getKategori = useRef();
  
  const savePostKategoriToState = event => {
    setKategori(event.target.value);
  };

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };

  const savePostContentToState = event => {
    setContent(event.target.value);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
    history.push('/newpost')
  };

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }

  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };

  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId] )
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { kategori, title, content, id }]);
    console.log(allPosts);
    setKategori(null);
    setTitle("");
    setContent("");
    getKategori.current.value = "";
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          savePostKategoriToState={savePostKategoriToState}
          getKategori={getKategori}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        kategori={post.kategori}
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostKategoriToState={savePostKategoriToState}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    );
  }
  
  return ( 
    <>
    {!allPosts.length ? (
        <section className="no-post">
            <div className="box-form2">
                <h1>Artikel</h1>
                <h3>Tidak ada artikel yang ditemukan</h3>
                <br />
                <br />
                <section className="button-wrapper">
                    <Button onClick={toggleCreateNewPost} className="btn btn-success">Buat Artikel</Button>
                </section>
            </div>
        </section>
    ) : (
    <div className="box-form2">
        <h1>Artikel</h1>
        <section className="all-post"> 
        {allPosts.map(eachPost => {
            return (
            <Post
                id={eachPost.id}
                key={eachPost.id}
                title={eachPost.title}
                content={eachPost.content}
                editPost={editPost}
                deletePost={deletePost}
            />
          );
        })}
        <section className="button-wrapper">
            <Button onClick={toggleCreateNewPost} className="btn btn-success">Buat Artikel</Button>
        </section>
        </section>
        
    </div>
    )}  
    </> 

  );
};
export default DisplayAllPosts;