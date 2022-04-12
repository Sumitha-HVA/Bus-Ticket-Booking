import { Link, Outlet } from "react-router-dom";
import { getBuses } from "../data";

export default function Buses() {
  let buses = getBuses();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {buses.map((bus) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/buses/${bus.Bus_id}`}
            key={bus.Bus_id}
          >
            {bus.Bus_Name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}