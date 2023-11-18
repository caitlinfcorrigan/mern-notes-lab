export default function Note({note, time}) {
    const myTime = new Date(time)
    return(
        <div>
            <li>{note}</li>
        </div>

    )
}