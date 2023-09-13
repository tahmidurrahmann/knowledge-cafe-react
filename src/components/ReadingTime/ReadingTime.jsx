const ReadingTime = ({readingTime}) => {
    return (
        <div className="border-[#6047EC] bg-gray-100 rounded-xl">
            <p className="font-bold text-2xl text-center text-[#6047EC] p-4 m-4">Spent time on read : {readingTime}</p>
        </div>
    );
};

export default ReadingTime;