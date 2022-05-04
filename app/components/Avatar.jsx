const avatarStyles = {
    "login": `w-20 h-20 p-1 rounded-full`,
    "medium": "w-52 h-52 p-1 rounded-full"
}

export const Avatar = ({user, type, children, ...other}) => {
    return <img
        alt={`Profile picture of ${user.name}`}
        src={user.imageUrl}
        className={avatarStyles[type]}
        {...other}
    >{children}</img>
}