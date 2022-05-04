const containerStyles = {
    "white-shadow": `bg-gray-50 flex flex-col items-center justify-center shadow-lg rounded-lg`
}

export const Container = ({ type, children, ...other }) => {
    return <section className={containerStyles[type]} {...other}>{children}</section>
}