import React from 'react';
import {useState} from 'react';
import { KudosCard } from './components/KudosCard';
import { KudosForm } from './components/KudosForm';  // ← Add this
import { Sidebar } from './components/Sidebar'; 

import './components/KudosCard.css';
import './components/KudosForm.css';  // ← Add this
import './App.css';
import './components/Sidebar.css'; 
interface Kudos {
  recipient: string;
  message: string;
  giver: string;
  type: 'kudos' | 'feedback';
  date: string
}
interface Sidebar{

}
function App(){
  const [kudosList, setKudosList] = useState<Kudos[]>([
    {
      recipient: "Jane Smith",
      message: "Amazing work on the authentication refactor! Your clean code and thorough testing saved us so much time.",
      giver: "John Doe",
      type: "kudos" as const,
      date: "Mar 22, 2024"
    },
    {
      recipient: "Mike Johnson", 
      message: "Thanks for staying late to help debug the payment integration. Your persistence really paid off!",
      giver: "Sarah Wilson",
      type: "kudos" as const,
      date: "Mar 21, 2024"
    },
    {
      recipient: "Alex Chen",
      message: "Great job presenting the technical architecture to stakeholders. You explained everything so clearly!",
      giver: "Emily Davis", 
      type: "feedback" as const,
      date: "Mar 20, 2024"
    }
  ]);

    const handleAddKudos = (newKudos: Kudos) => {
      setKudosList([newKudos, ...kudosList]);
  };



  return (
  
    <div className="app-container">
     <div>
        <Sidebar></Sidebar>

     </div>
      <div className="app-content" style = {{flex: 1}}>
        <h1 className="app-title">
          🎉 Kudos Board  {/* ← Changed from "Kudos Cards Demo" */}
        </h1>
        
        {/* Add the form here! */
        

        }
        <KudosForm onSubmit={handleAddKudos} />
       

        
        <div className="cards-grid">
          {kudosList.map((kudos,index) => (
            <KudosCard
              key={index}
              recipient={kudos.recipient}
              message={kudos.message}
              giver={kudos.giver}
              type={kudos.type}
              date={kudos.date}
            />
          ))}
        </div>

        {kudosList.length === 0 && (
          <p className = "empty-state">
            No kudos yet. Be the first to give some! 🌟
          </p>
        )}
      </div>
    </div>
  );
}
export default App;