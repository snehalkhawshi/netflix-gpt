const VideoTitle = ({title , overview}) => {
    return <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 pt-36 px-12 absolute text-white  bg-gradient-to-right from-black">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1> 
        <p className="hidden md:inline-block text-lg py-6 w-1/2"> {overview}</p>
        <div className="">
            <button className="bg-white text-black py-2 px-4 md:px-6 rounded-lg text-md md:text-lg hover:bg-gray-300 mr-2 mt-4 md:mt-0">▶️ Play</button>
            <button className="bg-gray-500 hidden md:inline-block text-white py-2 px-6 rounded-lg text-lg hover:bg-gray-300 opacity-50">More Info</button>
        </div>
    </div>
};

export default VideoTitle;