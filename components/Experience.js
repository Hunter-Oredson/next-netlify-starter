import experience from "../public/experience";

export default function Experience({ title }) {
    return (
        <>
            <h1 className="title">{title}</h1>
            {experience.map((e, index) => (
                <p key={index}>{e.name}</p>
            ))}
        </>
    )
}