import { useState } from 'react';
import './KudosForm.css';

// Define what props this component accepts
interface KudosFormProps {
  onSubmit: (kudos: {
    recipient: string; // recipient name as a string
    message: string; // kudos message as a string
    giver: string; // kudos giver as a string
    type: 'kudos' | 'feedback'; // type (kudos or feedback)
    date: string; // date as a string
  }) => void;
}

export function KudosForm({ onSubmit }: KudosFormProps) {
    const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [giver, setGiver] = useState('');
  const [type, setType] = useState<'kudos' | 'feedback'>('kudos');
 
 const handleSubmit = (e: React.FormEvent) => {
    //Step 1: Prevent page reload
    e.preventDefault();
 

 const newKudos = {
    recipient,
    message,
    giver,
    type,
    date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day:'numeric',
        year:'numeric'
    })  
 }

 onSubmit(newKudos)

 setRecipient('');
 setMessage('');
 setGiver('');
 setType('kudos');
};
  return (
    <form className="kudos-form" onSubmit = {handleSubmit}>
      <h2 className="form-title">✨ Give Kudos</h2>
      <div className = "form group">
        <label htmlFor = "recipient"> To: </label>
            <input
                id = "recipient"
                type = "text"
                value = {recipient} //← Connect state to input
                onChange={(e) => setRecipient(e.target.value)}  // ← Update state
                placeholder = "Enter recipient name"
                required
            />
      </div>

      <div className="form-group">
  <label htmlFor="message">Message:</label>
  <textarea
    id="message"
    value={message}  // ← Connect state
    onChange={(e) => setMessage(e.target.value)}  // ← Update state
    placeholder="Write your kudos or feedback..."
    rows={4}
    required
  />
</div>
  <div className="form-group">
  <label htmlFor="giver">From:</label>
  <input
    id="giver"
    type="text"
    value={giver}  // ← Connect state
    onChange={(e) => setGiver(e.target.value)}  // ← Update state
    placeholder="Your name"
    required
  />
</div>

          <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select id="type"
        value = {type}
        onChange = {(e) => setType (e.target.value as 'kudos' | 'feedback')}
        >
          <option value="kudos">Kudos</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
       <button type="submit" className="submit-button">
        Send Kudos 🎉
      </button>

    </form>
    
  );
}