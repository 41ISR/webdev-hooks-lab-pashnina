const Button = ({children, className, ...rest}) => {
    return(
        <button {...rest} className={`btn` + ' '+ className} id="addBtn">
              {children}
            </button>
    )
}
export default Button