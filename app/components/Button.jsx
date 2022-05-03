const buttonStyles = {
    "primary": `bg-blue text-white font-bold py-2 px-4 border-b-4 hover:bg-blue2 rounded`
}

export const Button = ({ type, children, ...other }) => {
    return <button className={buttonStyles[type]} {...other}>{children}</button>
}