function Bttn({children, ...props}){
    return(
        <>
            <button {...props}>{children}</button>
        </>
    )
}
export default Bttn