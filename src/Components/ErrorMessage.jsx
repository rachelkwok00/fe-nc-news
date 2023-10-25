export default function ErrorMessage(err){
    console.log(err)
    return (
        <p>{err.message}</p>
    )
}
