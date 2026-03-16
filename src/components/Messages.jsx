export default function Messages({ messages }) {
  return (
    <div className="messages-jeu">
      {messages.map((msg, i) => (
        <p key={i} className={`message ${msg.class}`}>
          {msg.text}
        </p>
      ))}
    </div>
  );
}
