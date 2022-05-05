const buttonStyles = {
    "primary": "bg-white font-bold py-2 px-4 border-b-4 hover:bg-gray-50 rounded",
    "small": "bg-blue-600 text-gray-50 font-bold rounded p-1 text-sm",
    "social-icon-large": "p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
}

export const Button = ({ type, children, background, ...other }) => {
    return <button className={`${buttonStyles[type]} ${background}`} {...other}>{children}</button>
}