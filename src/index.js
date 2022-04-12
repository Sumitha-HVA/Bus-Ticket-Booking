import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Buses from "./routes/buses";
import Bus from './routes/bus';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="buses" element={<Buses />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an bus</p>
          </main>
        }
      />
      <Route path=":busId" element={<Bus />} />
    </Route>
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  rootElement
);