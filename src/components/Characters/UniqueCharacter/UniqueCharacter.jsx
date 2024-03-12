import "../Characters.css"


export default function UniqueCharacter({data, search}) {


    

    return(
        <div className="charDiv">
            {
                data.filter(d => d.name.toLowerCase().includes(search)).map((d,i)=>(
                    <div key={i} className="uniqueCharacter">
                        <img src={d.images.jpg.image_url} alt="" />
                        <div className="characterText">
                            <b className="name">{d.name}</b>
                            <p className="nickname"><b>Nicknames : </b>{d.nicknames[0] == null ? "No Nicknames" : d.nicknames[0]}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}