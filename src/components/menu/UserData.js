import './userData.css'

export const UserData=({userImg,name})=>{
    return (
        <div id="user-data">
            <div className="user-img"><img src={userImg}></img></div>
            <p>{name}</p>

        </div>
    )
}