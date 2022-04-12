import './App.css';
import React,{Component} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.refreshList= this.refreshList.bind()
    this.state={
      displayItems:[],
      // activeItem:{
      //   hotel:"",
      //   cuisine:"",
      //   location:"",
      //   description:""

      // },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = async () => {
    try{
        const response = await axios.get("/buses")
        console.log("Response", response)
        const jsonResponse = response.data
        console.log("jsonResponse", jsonResponse)
        this.setState({displayItems: jsonResponse})

    }catch(err){
        console.log("ERR: ", err)
    }

}
  // refreshList = () => {
  //   axios
  //       .get("/display/zoggys")
  //       .then((res) => {
  //           console.log("response", res)
  //           this.setState({ displayItems: res.data })
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       });
  // }
  render(){
  return (
        <div>
          <h1>Bus Ticket Booking</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/buses">Buses</Link> |{" "}
          </nav>
          <Outlet />
        </div>
      );
}
}


// export default function App() {
//   return (
//     <div>
//       <h1>Bus Ticket Booking</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/buses">Buses</Link> |{" "}
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
export default App;