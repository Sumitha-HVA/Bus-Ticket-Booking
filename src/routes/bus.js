import { useParams } from "react-router-dom";
import { getBus } from "../data";

export default function Bus() {
  let params = useParams();
  let bus = getBus(parseInt(params.busId, 10));
  return (
        <main style={{ padding: "1rem" }}>
          <h2>Source: {bus.Src}</h2>
          <h2>Destination: {bus.Dest}</h2>
          <p>
            {bus.Bus_Name}: {bus.Bus_id}
          </p>
          <p>Total Tickets: {bus.Tickets}</p>
          <p>Tickets Available: {bus.Tickets_avail}</p>
          <p>Date: {bus.Date}</p>
          <p>Time: {bus.Time}</p>
        </main>
      );
    }
  