const Bookmark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div>
            <h2 className="bg-[#FFF] font-semibold text-lg p-4 m-4 rounded-xl">{title}</h2>
        </div>
    );
};

export default Bookmark;