
import React from 'react';
import './KudosCard.css';

interface KudosCardProps {
  recipient: string;
  message: string;
  giver: string;
  type: 'kudos' | 'feedback';
  date: string;
}

export function KudosCard({ recipient, message, giver, type, date }: KudosCardProps) {
  return (
    <div className="kudos-card">
      <div className="kudos-header">
        <h3 className="recipient-name">{recipient}</h3>
        <span className="kudos-type">{type}</span>
      </div>
      
      <p className="kudos-message">{message}</p>
      
      <div className="kudos-footer">
        <span className="giver-name">From: {giver}</span>
        <span className="kudos-date">{date}</span>
      </div>
    </div>
  );
}       