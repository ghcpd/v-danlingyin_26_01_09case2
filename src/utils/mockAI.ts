const mockResponses: string[] = [
  "That's an interesting question! Let me think about that...",
  "I understand what you're asking. Here's my perspective on that topic.",
  "Great question! Based on what you've shared, I would suggest...",
  "I appreciate you asking that. Let me provide you with some insights.",
  "That's a thoughtful inquiry. Here's what I can tell you about that.",
  "I'm glad you brought that up. This is definitely worth discussing.",
  "Excellent point! Let me elaborate on that for you.",
  "I see where you're coming from. Allow me to explain my thoughts.",
  "That's something I can help you with. Let me break it down.",
  "Interesting topic! Here's what you should know about this."
]

const followUpResponses: string[] = [
  "Is there anything else you'd like to know about this?",
  "I hope that helps! Do you have any other questions?",
  "Let me know if you need more details on any part of this.",
  "Feel free to ask if you want me to clarify anything.",
  "Is there a specific aspect you'd like me to explore further?"
]

export const generateMockResponse = (userMessage: string): string => {
  const messageLength = userMessage.length
  const hasQuestionMark = userMessage.includes('?')
  
  let response = mockResponses[Math.floor(Math.random() * mockResponses.length)]
  
  if (messageLength < 20) {
    response += " Could you provide a bit more context so I can give you a more helpful answer?"
  } else if (messageLength > 100) {
    response += " You've shared quite a bit of information. Let me address the key points you've raised."
  } else if (hasQuestionMark) {
    response += " Based on your question, here's what I can tell you: this is a simulated response demonstrating how the AI portal handles various types of queries."
  } else {
    response += " I've processed your message and here's my response: this AI portal provides natural conversation experiences with intelligent mock responses."
  }
  
  if (Math.random() > 0.5) {
    response += "\n\n" + followUpResponses[Math.floor(Math.random() * followUpResponses.length)]
  }
  
  return response
}
