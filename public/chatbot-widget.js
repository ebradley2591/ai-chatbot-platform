// AutomateHub Studio AI Chatbot Widget
// Embed this script on any website to add an AI chatbot

(function() {
  'use strict';

  // Configuration
  const config = {
    businessName: 'AutomateHub Studio',
    businessDescription: 'Modern automation solutions for Microsoft 365',
    primaryColor: '#1e40af',
    position: 'bottom-right',
    welcomeMessage: "Hello! I'm your AI assistant. How can I help you with automation solutions today?",
    apiEndpoint: 'https://your-domain.com/api/chat', // Update this to your deployed API
    quickQuestions: [
      "What automation services do you offer?",
      "How can you help with Microsoft 365?",
      "What are your pricing options?",
      "Can you help with SharePoint automation?"
    ]
  };

  // Create widget HTML
  function createWidgetHTML() {
    return `
      <div id="ah-chatbot-widget" style="display: none;">
        <!-- Chat Button -->
        <div id="ah-chat-button" style="
          position: fixed;
          ${config.position === 'bottom-right' ? 'bottom: 16px; right: 16px;' : 'bottom: 16px; left: 16px;'}
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: ${config.primaryColor};
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: white;">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>

        <!-- Chat Window -->
        <div id="ah-chat-window" style="
          position: fixed;
          ${config.position === 'bottom-right' ? 'bottom: 80px; right: 16px;' : 'bottom: 80px; left: 16px;'}
          width: 320px;
          height: 400px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          border: 1px solid #e5e7eb;
          z-index: 9998;
          display: none;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
          <!-- Header -->
          <div style="
            background-color: ${config.primaryColor};
            color: white;
            padding: 16px;
            border-radius: 8px 8px 0 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          ">
            <div style="display: flex; align-items: center;">
              <div style="
                width: 32px;
                height: 32px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
              ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div style="font-weight: 600; font-size: 14px;">${config.businessName}</div>
                <div style="font-size: 12px; opacity: 0.9;">AI Assistant</div>
              </div>
            </div>
            <button id="ah-close-chat" style="
              background: none;
              border: none;
              color: white;
              cursor: pointer;
              padding: 4px;
            ">✕</button>
          </div>

          <!-- Messages -->
          <div id="ah-messages" style="
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          "></div>

          <!-- Quick Questions -->
          <div id="ah-quick-questions" style="
            padding: 0 16px 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          "></div>

          <!-- Input -->
          <div style="
            border-top: 1px solid #e5e7eb;
            padding: 16px;
          ">
            <div style="display: flex; gap: 8px;">
              <input id="ah-message-input" type="text" placeholder="Type your message..." style="
                flex: 1;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                padding: 8px 12px;
                font-size: 14px;
                outline: none;
              " onkeypress="if(event.key==='Enter') sendMessage()">
              <button id="ah-send-button" style="
                background-color: ${config.primaryColor};
                color: white;
                border: none;
                border-radius: 6px;
                padding: 8px 12px;
                cursor: pointer;
                font-size: 14px;
              " onclick="sendMessage()">Send</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Widget functionality
  let isOpen = false;
  let messages = [];
  let sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  function initWidget() {
    // Add widget HTML to page
    document.body.insertAdjacentHTML('beforeend', createWidgetHTML());
    
    // Add initial message
    addMessage(config.welcomeMessage, 'bot');
    
    // Add quick questions
    addQuickQuestions();
    
    // Event listeners
    document.getElementById('ah-chat-button').addEventListener('click', toggleChat);
    document.getElementById('ah-close-chat').addEventListener('click', closeChat);
    document.getElementById('ah-send-button').addEventListener('click', sendMessage);
    
    // Show widget after delay
    setTimeout(() => {
      document.getElementById('ah-chatbot-widget').style.display = 'block';
    }, 1000);
  }

  function toggleChat() {
    isOpen = !isOpen;
    const chatWindow = document.getElementById('ah-chat-window');
    chatWindow.style.display = isOpen ? 'flex' : 'none';
    
    // Change button icon
    const button = document.getElementById('ah-chat-button');
    button.innerHTML = isOpen ? '✕' : `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: white;">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    `;
  }

  function closeChat() {
    isOpen = false;
    document.getElementById('ah-chat-window').style.display = 'none';
    document.getElementById('ah-chat-button').innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: white;">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    `;
  }

  function addMessage(text, sender) {
    messages.push({ text, sender, timestamp: new Date() });
    
    const messagesContainer = document.getElementById('ah-messages');
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
      display: flex;
      justify-content: ${sender === 'user' ? 'flex-end' : 'flex-start'};
    `;
    
    const messageBubble = document.createElement('div');
    messageBubble.style.cssText = `
      max-width: 240px;
      padding: 8px 12px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.4;
      ${sender === 'user' 
        ? 'background-color: #3b82f6; color: white;' 
        : 'background-color: #f3f4f6; color: #374151;'
      }
    `;
    messageBubble.textContent = text;
    
    messageDiv.appendChild(messageBubble);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function addQuickQuestions() {
    const container = document.getElementById('ah-quick-questions');
    config.quickQuestions.forEach(question => {
      const button = document.createElement('button');
      button.textContent = question;
      button.style.cssText = `
        text-align: left;
        padding: 8px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        background: white;
        cursor: pointer;
        font-size: 12px;
        transition: background-color 0.2s;
      `;
      button.onmouseover = () => button.style.backgroundColor = '#f9fafb';
      button.onmouseout = () => button.style.backgroundColor = 'white';
      button.onclick = () => {
        document.getElementById('ah-message-input').value = question;
        sendMessage();
      };
      container.appendChild(button);
    });
  }

  async function sendMessage() {
    const input = document.getElementById('ah-message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.id = 'ah-typing';
    typingDiv.innerHTML = `
      <div style="display: flex; justify-content: flex-start;">
        <div style="
          padding: 8px 12px;
          border-radius: 12px;
          background-color: #f3f4f6;
          color: #374151;
          font-size: 14px;
        ">
          <div style="display: flex; gap: 4px;">
            <div style="width: 8px; height: 8px; background: #9ca3af; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out;"></div>
            <div style="width: 8px; height: 8px; background: #9ca3af; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out 0.2s;"></div>
            <div style="width: 8px; height: 8px; background: #9ca3af; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out 0.4s;"></div>
          </div>
        </div>
      </div>
    `;
    document.getElementById('ah-messages').appendChild(typingDiv);
    
    try {
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          chatbotId: 'demo-chatbot',
          sessionId: sessionId,
          businessContext: {
            name: config.businessName,
            description: config.businessDescription
          }
        })
      });
      
      // Remove typing indicator
      document.getElementById('ah-typing').remove();
      
      if (response.ok) {
        const data = await response.json();
        addMessage(data.response, 'bot');
      } else {
        addMessage("I'm here to help with your automation needs. Could you please provide more details about what you're looking for?", 'bot');
      }
    } catch (error) {
      document.getElementById('ah-typing').remove();
      addMessage("I'm having trouble connecting right now. Please try again or contact us directly.", 'bot');
    }
  }

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }

  // Make functions globally available
  window.AH_Chatbot = {
    toggleChat,
    closeChat,
    sendMessage
  };

})(); 