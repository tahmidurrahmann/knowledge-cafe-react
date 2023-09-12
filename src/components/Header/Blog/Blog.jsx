const Blog = ({blog}) => {
    const {id,cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <h1>title : {title}</h1>
        </div>
    );
};

export default Blog;