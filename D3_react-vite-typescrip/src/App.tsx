import "./App.css";
import React from "react";
import SearchButton from "./components/SearchButton";
import {  ArrowRight, Search ,Facebook  } from 'react-feather';
import { AirVent ,Phone,ListMusic ,AlignStartVertical } from 'lucide-react';
import Button from "./components/Button";
import MatchCard from "./components/SocButton/MatCard";
import ClubCard from "./components/SocButton/ClubCard";
import CreditCard from "./components/SocButton/CreditCard";
import DashboardCard from "./components/SocButton/DashboardCard";
// import SocButton from "./components/SocButton/SocButton"

import LocationCard from './components/WeatherButton/LocationCard';
import ScheduleCard from './components/WeatherButton/ScheduleCard';
import WeatherWeekCard from './components/WeatherButton/WeatherWeekCard';
import CityTemperatureCard from './components/WeatherButton/CityTemperatureCard';
import DetailedScheduleCard from './components/WeatherButton/DetailedScheduleCard';
import CalendarCard from './components/WeatherButton/CalendarCard';
import './App.css';
// Ellipsis
import ProfileCard from "./components/ProfileCard/ProfileCard";
import CallCard from "./components/ProfileCard/CallCard";

import TransactionCard from "./components/TransactionCard/TransactionCard";
import NotificationCard from "./components/TransactionCard/NotificationCard";

import TeamCard from "./components/TeamCard/TeamCard";

function App() {
  return (
      
    <div>
       <Button rightIcon={<ArrowRight size={16} />} label={"Get Started"} />
      <Button leftIcon={<AirVent size={16} />} label={"Continue with Apple"} />
      <Button leftIcon={<AlignStartVertical size={16} />} label={"Continue with Google"} type="outline" />
      <Button leftIcon={<Facebook size={16} />} label={"Continue with FaceBook"} type="outline"  />
     <br></br>
     <br></br>
      <SearchButton leftIcon={<Search size={16} />}  />
      <SearchButton leftIcon={<Search size={16} />} label={"Search"} />
      <SearchButton leftIcon={<Search size={16} />} labelText={"Textfield"}   />
      <SearchButton leftIcon={<Search size={16} />} label={"Search in the web"} rightIcon={<AirVent size={16} />} />
      <SearchButton leftIcon={<Search size={16} />} label={"Search"}  rightIcon={<Phone size={16}  />}/>
      <SearchButton leftIcon={<Search size={16} />} label={"Search crypto"}  rightIcon={<ListMusic  size={16} />}/>
      <SearchButton  label={"Phone number"}  rightIcon={<Phone size={16} style={{ backgroundColor: "green", borderRadius: "4px", padding: "4px" }} />}/>
      <SearchButton leftIcon={<Search size={16} />} label={"Search the web"}  rightIcon={<AlignStartVertical  size={16} style={{ backgroundColor: "yellow", borderRadius: "4px", padding: "4px" }}/>}/>
      <br></br>
      <br></br>
      
       <div style={{ padding: 20, backgroundColor: "#e9f1f7", width: "260px", display: "flex", flexDirection: "column", gap: 20 }}>
      <MatchCard />
      <ClubCard />
      <CreditCard />
      <DashboardCard />
    </div>
      {/* <SocButt<br></br>
      <br></br>on /> */}

          <div className="app-container">
      <LocationCard title="Landescape" distance="423Km" bgColor="#f5fdd7" />
      <LocationCard title="Falset Mountains" distance="423Km, 3 Week" icon="/assets/may.png" />
      <ScheduleCard />
      <WeatherWeekCard />
      <CityTemperatureCard />
      <DetailedScheduleCard />
      <CalendarCard />
    </div>
      <br></br>
       <br></br>

      <div className="app-container">
      {/* Các card đã có... */}
      <ProfileCard />
      <CallCard />
    </div>

      <br></br>
       <br></br>
      <div className="app-container">
      <TransactionCard />
      <NotificationCard />
    </div>
      <br></br>
       <br></br>

       <div className="app-container">
      <TeamCard
        bgColor="#00BCD4"
        avatarUrls={["/assets/yo.png"]}
        title="Miriam Jimenez"
        textColor="#fff"
      />

      <TeamCard
        bgColor="#8e24aa"
        avatarUrls={["/assets/anhtn.png", "/assets/ma.png", "/assets/yo.png"]}
        title="Teams"
        subtitle="Two currently"
        textColor="#fff"
      />

      <TeamCard
        bgColor="#ffeb3b"
        avatarUrls={["/assets/ma.png", "/assets/yo.png"]}
        title="New Teams"
        textColor="#000"
      />
    </div>
    </div>
  );
}

export default App;
