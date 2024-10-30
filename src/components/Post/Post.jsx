import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const postStyle ={
        border: '2px solid black',
        padding: '5px',
        margin: '10px',
        borderRadius: '15px'
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button></Link>
        </div>
    );
};

export default Post;