import "../Characters.css"
import "../../../App.css"

export default function UniqueCharacter({data, search, handleOver}) {


    

    return(
        <div className="charDiv">
            {
                data.filter(d => d.name.toLowerCase().includes(search)).map((d,i)=>(
                    <div key={i} className="uniqueCharacter" onMouseEnter={handleOver} onMouseLeave={handleOver}>
                        <img src={d.images.jpg.image_url} alt="" />
                        <div className="characterText hidden">
                            <b className="name">{d.name}</b>
                            <p className="nickname"><b>Nicknames : </b>{d.nicknames[0] == null ? "No Nicknames" : d.nicknames[0]}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}