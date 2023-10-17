import { isValidElement, useState } from "react"
import LikesDislikes from "./counter";

export default function Blog() {
    const [blogTitle, setBlogTitle] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([])
    const [date, setDate] = useState("")



    const titleInput = (e) => {
        setBlogTitle(e.target.value)
    }

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const imageInput = (e) => {
        setImage(e.target.value)
    }

    const contentInput = (e) => {
        setContent(e.target.value)
    }

    const submitBlog = () => {
        const createBlog = {id: new Date().getTime(), blogTitle, name, image, content, date}

        setBlogs([...blogs, createBlog])
    }

    const submitDate = () => {
        setDate(new Date().getDate() + "." + (new Date().getMonth()) + ". at " + new Date().getHours() + ":" + new Date().getMinutes())
    }



    return (
        <>
        <div className="formContainer">
            <div className="blogForm">
                <h2>Whats on your mind?</h2>
                <div>
                    <label className="labels">Title: <input onChange={titleInput} type="text" placeholder="Name the title of your blog" /></label>
                </div>

                <div>
                    <label className="labels">Author: <input onChange={nameInput} type="text" placeholder="Enter your name" /></label>
                </div>

                <div>
                    <label className="labels">Image URL: <input onChange={imageInput} type="text" placeholder="URL of the img" /></label>
                </div>
                <textarea onChange={contentInput} placeholder="Enter the content of your blog:"></textarea>
                <button onClick={submitBlog}>Post</button>
                <input class="hiddenDate" type="text" onChange={submitDate}/>
            </div>

            <div className="previewContainer">
                <h2>Post preview</h2>
                <p>{blogTitle}</p>
                <p>{name}</p>
                <textarea>{content}</textarea>
            </div>
        </div>

        <div className="postContainer">
        {blogs.map((element) => {
            return (
                <>
                <div className="blogElement" key={element.id}>
                    <div className="imgContainer">
                        <img src={element.image} height={100}/>
                    </div>

                    <div className="author-date">
                        <p>{element.name}</p>
                        <p>Posted on: {element.date}</p>
                    </div>

                    <div className="titleContainer">
                        <p>{element.blogTitle}</p>
                    </div>
                    
                    <div className="contentContainer">
                        <p>{element.content}</p>
                    </div>

                    <div className="buttonsContainer">
                        <button onClick={() => {const deleteBlogs = blogs.filter((deleteSingleBlog) => {return deleteSingleBlog.id !== element.id;}); setBlogs(deleteBlogs);}}>Delete</button>
                        <LikesDislikes />
                    </div>
                </div>
                </>
            )
        })}
        </div>
        </>
    )
}