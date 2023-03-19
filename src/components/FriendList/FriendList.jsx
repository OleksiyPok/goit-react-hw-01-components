import css from "./FriendList.module.css"
import defaultAvatar from '../../img/defaultAvatar.png'

// export const FriendList = ({
//         avatar = defaultAvatar,
//         // avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
//         name,
//         isOnline
//     }) => {
//     return (
//         <li className="item">
//             <span className="status"> { isOnline } </span>
//             <img className="avatar" src= { avatar } alt="User avatar" width="48" />
//             <p className="name"> { name } </p>
//          </li>
//     )
// }

export const FriendList = ({friendList}) => {    
    return (
        friendList.map(friend => (            
            <li className="item"
            key = {friend.id}>
                <span className="status"> { friend.isOnline } </span>
                <img className="avatar" src= { friend.avatar } alt="User avatar" width="48" />
                <p className="name"> { friend.name } </p>
            </li>
        )
        )
    )
}
