const buttonStyles = {
    "primary": `bg-white font-bold py-2 px-4 border-b-4 hover:bg-gray-50 rounded`,
    "small": 'bg-blue-600 text-gray-50 font-bold rounded p-1 text-sm'
}

export const Button = ({ type, children, ...other }) => {
    return <button className={buttonStyles[type]} {...other}>{children}</button>
}