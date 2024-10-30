import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Post = ({post}) => {
    const {id, title} = post;
    const postStyle ={
        border: '2px solid black',
        padding: '5px',
        margin: '10px',
        borderRadius: '15px'
    }
    const navigate = useNavigate();
    const handleShowDetails =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })
};

export default Post;