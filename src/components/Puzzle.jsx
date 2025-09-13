export default function Puzzle({ est, tam }) {
    return <div className={`puzzle ${tam}`}>
        {
            est.map((e, i) => {
                if (e !== "0")
                    return <div key={i} className="peca">
                        {e}
                    </div>
                else
                    return <div className="vazia">&nbsp;</div>
            })
        }
    </div>
}