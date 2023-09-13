import Bookmark from "../../Bookmark/Bookmark";
import ReadingTime from "../../ReadingTime/ReadingTime";

const BookMark = ({bookMarks, readingTime}) => {
    console.log(bookMarks);
    return (
        <div className="w-1/3">
            <ReadingTime readingTime={readingTime}></ReadingTime>
        <div className="bg-[#1111110D] rounded-xl py-3">
            
           <h1 className="text-center rounded-xl text-3xl font-bold mt-4">BookMarked Blogs :{bookMarks.length}</h1>
            {
                bookMarks.map(bookMark => <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
            }
        </div>
        </div>
    );
};

export default BookMark;