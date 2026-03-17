export default function Messages({ messages }) {
  return (
    <div className="messages-jeu">
      {messages.map(msg => (
        <p
          key={msg.id}
          className={`message ${msg.class} ${msg.appear ? "fade-in" : ""}`}
        >
          {msg.text}
        </p>
      ))}
    </div>
  );
}
