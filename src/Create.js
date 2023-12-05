import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [autorius, setAutorius] = useState('Andrius')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, autorius }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                window.history.back()
            })}

    return (
        <div className="create">
            <h2>Naujas irasas</h2>
            <form onSubmit={handleSubmit}>
                <label>Iraso pavadinimas:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Iraso tekstas:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <label>Iraso tekstas:</label>
                <select
                    value={autorius}
                    onChange={(e) => setAutorius(e.target.value)}>
                    <option value="Andrius">Andrius</option>
                    <option value="Valdemaras">Valdemaras</option>
                    <option value="Dovile">Dovile</option>
                </select>
                <button>Prideti irasa</button>
            </form>
        </div>
    );
}

export default Create;