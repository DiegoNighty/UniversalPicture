import * as Icons from "../icon/IconProvider"

export const Socials = ({divStyle}) => {
    return (
        <div className={divStyle}>
            <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Facebook/>
            </button>

            <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Twitter/>
            </button>

            <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Reddit/>
            </button>

            <button className="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Pinterest/>
            </button>

            <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.LinkedIn/>
            </button>

            <button className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Youtube/>
            </button>

            <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Github/>
            </button>

            <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Google/>
            </button>

            <button className="bg-[#738ADB] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <Icons.Discord/>
            </button>
        </div>
    )

    /*return (
        socialList.map(social => (
            <div className={elementStyle}>
                <img key={social.id} className={imageStyle} src={social.img} alt={social.name} {...other}>{children}</img>
            </div>
        ))
    );*/
}