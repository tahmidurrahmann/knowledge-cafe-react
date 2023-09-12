import { FaBookmark } from 'react-icons/fa'
const Blog = ({blog}) => {
    const {title, cover , author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="space-y-6">
            <img className="mt-5" src={cover} alt={`Cover image ${cover}`} />
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div>
                    <img className="w-14" src={author_img} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">{author}</h1>
                    <p className="text-[#11111199] font-semibold">{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <span className="text-[#11111199] text-xl mr-2">{reading_time} min ago</span>
                <button className='text-xl text-red-600'><FaBookmark></FaBookmark></button>
            </div>
            </div>
            <h2 className="font-bold text-4xl"> {title}</h2>
            <p className="text-[#11111199] text-xl border-b-2">
                {
                    hashtags.map((hashtag, index) => <span className="mr-3" key={index}>#{hashtag}</span>)
                }
            </p>
        </div>
    );
};

export default Blog;