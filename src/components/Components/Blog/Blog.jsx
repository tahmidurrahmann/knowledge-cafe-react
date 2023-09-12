const Blog = ({blog}) => {
    const {title} = blog;
    return (
        <div>
            <h2>Title : {title}</h2>
        </div>
    );
};

export default Blog;