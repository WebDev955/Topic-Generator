export default function Input({label, id, ...props}){
    return(
        <div>
            <label htmlFor="username">{label}</label>
            <input
                id={id}
                {...props}
            />
        </div>
    )
}