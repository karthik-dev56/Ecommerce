import { useEffect, useState } from "react";
import { userRequest } from "../../apiRequest";
import "./widgetLg.css";
import {format} from 'timeago.js'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [orders, setOrders] = useState();

  useEffect(()=>{
     const getOrders = async () => {
       const res = await userRequest.get('/orders')
       setOrders(res.data)
     }
     getOrders()
  },[])
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders?.map((order) => (


        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <img
              src="https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">$ {order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
                ))}
        
      </table>
    </div>
  );
}
