import { useState, useEffect } from 'react'
import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";
import { userRequest } from '../../apiRequest'

export default function WidgetSm() {
  const [users, setUsers] = useState();

  useEffect(()=>{
     const getUsers = async () => {
       const res = await userRequest.get('/users/?new=true')
       setUsers(res.data)
     }
     getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user) => (

        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
                ))}
      </ul>
    </div>
  );
}
