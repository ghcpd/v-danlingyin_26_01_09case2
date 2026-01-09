export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString()
}

const aiResponses = [
  "I understand your question. Let me help you with that.",
  "That's an interesting point. Based on what you're asking, here's what I think:",
  "Great question! Here's my perspective on this:",
  "I'd be happy to assist you with that. Let me explain:",
  "Thank you for asking. Here's what I can tell you:",
  "That's a complex topic. Let me break it down for you:",
  "I see what you're getting at. Here's my analysis:",
  "Excellent question! Allow me to provide some insights:",
]

const aiDetailedResponses = [
  "This is a multifaceted issue that requires careful consideration. There are several key aspects to consider: First, we need to understand the context and background. Second, we should examine the current situation and available options. Finally, we can develop a comprehensive approach based on these factors.",
  "Based on current knowledge and best practices, I would recommend the following approach: Start by gathering all relevant information, analyze the key factors, and then develop a strategic plan. It's important to remain flexible and adapt as new information becomes available.",
  "Let me provide a detailed explanation. The fundamental principle here is understanding the relationship between different components. Each element plays a crucial role in the overall system, and changes in one area can have cascading effects throughout. Consider these interconnections when making decisions.",
  "From an analytical perspective, we can break this down into several categories: technical considerations, practical applications, and potential challenges. Each of these areas deserves attention to ensure a comprehensive understanding and effective implementation.",
]

export const generateMockAIResponse = (userMessage: string): string => {
  const intro = aiResponses[Math.floor(Math.random() * aiResponses.length)]
  const detail = aiDetailedResponses[Math.floor(Math.random() * aiDetailedResponses.length)]
  
  // Create more contextual responses
  if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
    return "Hello! I'm your AI assistant. How can I help you today?"
  }
  
  if (userMessage.toLowerCase().includes('help')) {
    return "I'm here to help! You can ask me questions about various topics, request information, or have a conversation. What would you like to know?"
  }
  
  if (userMessage.toLowerCase().includes('thank')) {
    return "You're welcome! Is there anything else I can help you with?"
  }
  
  return `${intro}\n\n${detail}`
}

export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>): void => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
