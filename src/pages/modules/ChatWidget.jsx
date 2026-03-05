import React, { useState, useRef, useEffect } from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello 👋 Welcome to Codeinfra Technology. How can we help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const phone = "917762012673";

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send message inside chat
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: input },
      {
        type: "bot",
        text: "✅ Thanks! Our team will contact you shortly.",
      },
    ]);

    setInput("");
  };

  // call
  const callNow = () => {
    window.location.href = `tel:+${phone}`;
  };

  // whatsapp with SAME message
  const openWhatsApp = () => {
    const text = input || "Hello, I need information about your services.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Button */}
      <div className="ci-float-btn" onClick={() => setOpen(true)}>
  <SupportAgentIcon sx={{ fontSize: 28, color: "#fff" }} />
</div>

      {/* Chat Window */}
      <div className={`ci-chat-window ${open ? "show" : ""}`}>
        {/* Header */}
        <div className="ci-header">
          <div>
            <h3>Codeinfra Technology</h3>
            <span>We are online</span>
          </div>

          <div className="ci-header-actions">
            <button onClick={callNow} title="Call">📞</button>
            <button onClick={openWhatsApp} title="WhatsApp" className="ci-icon-btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.756 5.713 2.192 8.19L0 32l7.624-2.162a15.92 15.92 0 0 0 8.376 2.395h.006c8.835 0 16-7.164 16-16S24.84.396 16 .396zm0 29.185h-.005a13.3 13.3 0 0 1-6.775-1.862l-.486-.289-4.526 1.282 1.207-4.414-.316-.51a13.27 13.27 0 0 1-2.05-7.092C3.05 9.11 8.713 3.45 16 3.45c3.56 0 6.906 1.387 9.425 3.906a13.23 13.23 0 0 1 3.906 9.425c-.003 7.287-5.666 13.8-13.331 13.8zm7.387-9.93c-.403-.202-2.385-1.176-2.753-1.31-.368-.135-.636-.202-.904.202-.268.403-1.04 1.31-1.276 1.58-.235.268-.47.302-.873.1-.403-.202-1.7-.626-3.24-1.995-1.2-1.07-2.01-2.39-2.245-2.794-.235-.403-.025-.62.177-.82.182-.181.403-.47.604-.705.202-.235.268-.403.403-.672.134-.268.067-.503-.034-.705-.1-.202-.904-2.18-1.24-2.986-.327-.786-.66-.678-.904-.69-.235-.01-.503-.012-.772-.012-.268 0-.705.1-1.074.503-.368.403-1.41 1.378-1.41 3.36s1.444 3.897 1.645 4.166c.202.268 2.84 4.338 6.88 6.083.96.414 1.71.66 2.295.845.963.306 1.84.263 2.533.16.773-.115 2.385-.974 2.72-1.916.335-.94.335-1.746.235-1.916-.1-.168-.368-.268-.772-.47z"/>
  </svg>
</button>
            <button className="ci-close" onClick={() => setOpen(false)}>✕</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="ci-tabs">
          <button
            className={tab === "chat" ? "active" : ""}
            onClick={() => setTab("chat")}
          >
            Chat
          </button>
          <button
            className={tab === "faq" ? "active" : ""}
            onClick={() => setTab("faq")}
          >
            FAQ
          </button>
        </div>

        {/* Body */}
        <div className="ci-body">
          {tab === "chat" && (
            <div className="ci-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`ci-msg ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          )}

          {tab === "faq" && (
            <div className="ci-faq">
              <details>
                <summary>What services do you provide?</summary>
                <p>
                  We provide web development, cloud solutions, cyber security,
                  and IT consulting.
                </p>
              </details>

              <details>
                <summary>How can I contact support?</summary>
                <p>You can call or WhatsApp us directly.</p>
              </details>

              <details>
                <summary>Do you provide training programs?</summary>
                <p>Yes, we offer professional IT training programs.</p>
              </details>
            </div>
          )}
        </div>

        {/* Input */}
        {tab === "chat" && (
          <div className="ci-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;