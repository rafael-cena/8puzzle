import { useEffect, useState } from "react"
import Puzzle from "../components/Puzzle"

export default function Home() {
    // estado inicial
    const [esti, setEsti] = useState(["6", "0", "8", "5", "4", "1", "3", "7", "2"]);
    // estado final esperado
    const [estf, setEstf] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "0"]);
    // estado atual
    const [esta, setEsta] = useState([]);

    useEffect(() => {
        const array = [...esti];
        setEsta(array);
    }, [esti, esta]);

    if (esta.length > 0)
        return <main className="page">
            <nav>
                <Puzzle est={esti} tam={'p-60'} />
                <label
                    htmlFor="esti"
                    style={{ marginTop: '1rem' }}
                >
                    Estado inicial
                </label>
                <input
                    type="text"
                    id="esti"
                    className={esti.length < 9 ? "input-error" : "input"}
                    value={esti.join("")}
                    onChange={e => {
                        if (/^[0-8]{0,9}$/.test(e.target.value) &&
                            e.target.value.slice(-1) < 9 &&
                            !esti.includes(e.target.value.slice(-1))
                        )
                            setEsti(e.target.value.split(""))
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Backspace') {
                            const array = [...esti];
                            array.pop();
                            setEsti(array);
                        }
                    }}
                    maxLength={9}
                />
                <button
                    className="btn"
                    disabled={esti.length !== 9}
                    onClick={() => {
                        const array = [...esti];
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1)); // índice aleatório
                            [array[i], array[j]] = [array[j], array[i]];   // troca os elementos
                        }
                        setEsti(array);
                    }}
                >
                    Gerar aleatório
                </button>
                <label
                    htmlFor="estf"
                    style={{ marginTop: '2rem' }}
                >
                    Estado final
                </label>
                <input
                    type="text"
                    id="estf"
                    className={estf.length < 9 ? "input-error" : "input"}
                    value={estf.join("")}
                    onChange={e => {
                        if (/^[0-8]{0,9}$/.test(e.target.value) &&
                            e.target.value.slice(-1) < 9 &&
                            !estf.includes(e.target.value.slice(-1))
                        )
                            setEstf(e.target.value.split(""))
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Backspace') {
                            const array = [...estf];
                            array.pop();
                            setEstf(array);
                        }
                    }}
                    maxLength={9}
                />
                <button
                    style={{ marginTop: '2rem' }}
                    className="btn"
                >
                    Gerar resultado
                </button>
            </nav>
            <section className="main">
                <h1 className="main-title">Resolução de 8 Puzzle</h1>
                <Puzzle est={esta} tam={'p-60'} />
            </section>
        </main>
    else
        return <></>
}