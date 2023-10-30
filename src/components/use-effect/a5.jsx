import { Information } from "../arrays/array"
export const A5 = () => {
    return (
        <div>
            <h1 style={{fontSize: '40px'}}>{Information.results.name}</h1>
            <h2 style={{fontSize: '40px'}}>{Information.results.surname}</h2>
            <h2 style={{fontSize: '40px', color: 'blue', cursor: 'pointer'}}>{Information.results.country}</h2>
            <h2 style={{fontSize: '40px', color: 'blue', cursor: 'pointer'}}>{Information.results.city}</h2>
            <img width={500} height={400} src={Information.results.image} alt="" />
            <p style={{fontSize: '40px'}}>{Information.results.city}</p>
            <img src={Information.results.favouritefootballplayerimg} alt="" />
        </div>
    )
}