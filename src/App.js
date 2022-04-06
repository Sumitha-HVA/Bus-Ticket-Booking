import './App.css';
import React,{Component} from 'react';
import { Link } from "react-router-dom";


const data =[
  {
    Bus_Name :" KSRTC ",
    Src : " K.G.F ",
    Dest : "Bengaluru",
    Tickets : " 25 ",
    Tickets_avail :" 20",
    Date : " 30/3/2022 ",
    Time : "5:30 pm"
  },

  {
    Bus_Name :" Prakruthi Travels",
    Src : " Bengaluru ",
    Dest : " Sakleshpur",
    Tickets : " 25 ",
    Tickets_avail :" 10",
    Date : " 3/4/2022 ",
    Time : "6:00 am"
  },

  {
    Bus_Name :" Neha Travels",
    Src : " Bengaluru ",
    Dest : " Mysore",
    Tickets : " 20 ",
    Tickets_avail :" 15",
    Date : " 5/4/2022 ",
    Time : "8:30 am"
  }

]

function App () {
      return(
          <>
              <nav className="main-nav">
                  {/*website-Name */}
                  <div className="website-name">
                      <h2> BUS TICKET BOOKING </h2> 
                  </div>
              </nav>
            <table>
              <thead>
                <tr>
                  <th>Bus_Name</th>
                  <th>Src</th>
                  <th>Dest</th>
                  <th>Tickets_avail</th>
                  <th>Tickets</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.Bus_Name}</td>
                      <td>{val.Src}</td>
                      <td>{val.Dest}</td>
                      <td>{val.Tickets_avail}</td>
                      <td>{val.Tickets}</td>
                      <td>{val.Date}</td>
                      <td>{val.Time}</td>
                    </tr>
                  )
                })}
              </thead>
            </table>
              
          </>
      );
  
}


export default App;
