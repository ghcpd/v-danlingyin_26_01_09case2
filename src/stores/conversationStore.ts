import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { mockConversations } from '@/data/mockConversations';
import { mockResponses } from '@/data/mockResponses';
import { createId } from '@/utils/ids';
import type { Conversation, Message } from '@/types/conversation';

const STORAGE_KEY = 'ai-portal-conversations';

type PersistedState = Conversation[];

const loadPersisted = (): PersistedState | null => {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PersistedState;
  } catch (error) {
    console.error('Failed to parse stored conversations', error);
    return null;
  }
};

const persist = (conversations: Conversation[]): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
};

export const useConversationStore = defineStore('conversation', () => {
  const conversations = ref<Conversation[]>(loadPersisted() ?? mockConversations);
  const currentConversationId = ref<string | null>(conversations.value[0]?.id ?? null);
  const isResponding = ref(false);

  const currentConversation = computed<Conversation | null>(() => {
    if (!currentConversationId.value) return null;
    return conversations.value.find((c) => c.id === currentConversationId.value) ?? null;
  });

  const sortedConversations = computed<Conversation[]>(() =>
    [...conversations.value].sort((a, b) => b.updatedAt - a.updatedAt),
  );

  const setCurrentConversation = (id: string): void => {
    currentConversationId.value = id;
  };

  const addConversation = (title = 'New chat'): Conversation => {
    const conversation: Conversation = {
      id: createId(),
      title,
      messages: [],
      updatedAt: Date.now(),
    };
    conversations.value = [conversation, ...conversations.value];
    currentConversationId.value = conversation.id;
    persist(conversations.value);
    return conversation;
  };

  const updateConversation = (id: string, updater: (conversation: Conversation) => void): void => {
    const existing = conversations.value.find((c) => c.id === id);
    if (!existing) return;
    updater(existing);
    existing.updatedAt = Date.now();
    conversations.value = conversations.value.map((c) => (c.id === id ? existing : c));
    persist(conversations.value);
  };

  const addMessage = (conversationId: string, message: Message): void => {
    updateConversation(conversationId, (conversation) => {
      conversation.messages = [...conversation.messages, message];
    });
  };

  const sendMessage = async (content: string): Promise<void> => {
    const trimmed = content.trim();
    if (!trimmed) return;
    const targetConversation = currentConversation.value ?? addConversation('New chat');
    const userMessage: Message = {
      id: createId(),
      role: 'user',
      content: trimmed,
      timestamp: Date.now(),
    };
    addMessage(targetConversation.id, userMessage);
    isResponding.value = true;

    await new Promise((resolve) => setTimeout(resolve, 900 + Math.random() * 900));
    const replyText = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    const aiMessage: Message = {
      id: createId(),
      role: 'assistant',
      content: replyText,
      timestamp: Date.now(),
    };
    addMessage(targetConversation.id, aiMessage);
    isResponding.value = false;
  };

  const ensureConversation = (id?: string | null): Conversation | null => {
    if (id) {
      const found = conversations.value.find((c) => c.id === id);
      if (found) {
        currentConversationId.value = found.id;
        return found;
      }
    }
    if (!currentConversationId.value) {
      return addConversation('New chat');
    }
    const existing = conversations.value.find((c) => c.id === currentConversationId.value);
    return existing ?? addConversation('New chat');
  };

  const renameConversation = (id: string, title: string): void => {
    updateConversation(id, (conversation) => {
      conversation.title = title;
    });
  };

  return {
    conversations,
    currentConversationId,
    currentConversation,
    sortedConversations,
    isResponding,
    setCurrentConversation,
    addConversation,
    addMessage,
    sendMessage,
    ensureConversation,
    renameConversation,
  };
});
