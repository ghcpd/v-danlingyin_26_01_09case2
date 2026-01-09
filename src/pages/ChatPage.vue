<template>
  <section class="container chat">
    <header class="chat__header">
      <div>
        <p class="eyebrow">Active conversation</p>
        <h2 class="chat__title">{{ conversationTitle }}</h2>
      </div>
      <button class="ghost" type="button" @click="startNewConversation">New Chat</button>
    </header>

    <div class="chat__board card" role="log" aria-live="polite" aria-label="Chat messages">
      <div ref="messagesContainer" class="chat__messages">
        <template v-if="currentConversation && currentConversation.messages.length">
          <ChatMessageBubble
            v-for="message in currentConversation.messages"
            :key="message.id"
            :role="message.role"
            :content="message.content"
            :timestamp="message.timestamp"
          />
        </template>
        <p v-else class="empty">Start by saying hello to AstraMind.</p>
        <div ref="bottomMarker"></div>
      </div>
      <div v-if="isResponding" class="chat__loading">
        <LoadingDots />
        <span class="muted">AstraMind is thinking</span>
      </div>
    </div>

    <ChatComposer :on-send="handleSend" :disabled="isResponding" placeholder="Send a message" />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ChatMessageBubble from '@/components/ChatMessageBubble.vue';
import ChatComposer from '@/components/ChatComposer.vue';
import LoadingDots from '@/components/LoadingDots.vue';
import { useConversationStore } from '@/stores/conversationStore';
import { useAutoScroll } from '@/composables/useAutoScroll';

const route = useRoute();
const router = useRouter();
const conversationStore = useConversationStore();
const messagesContainer = ref<HTMLElement | null>(null);
const bottomMarker = ref<HTMLElement | null>(null);

const currentConversation = computed(() => conversationStore.ensureConversation(route.params.id as string | undefined));
const isResponding = conversationStore.isResponding;

const conversationTitle = computed(() => currentConversation.value?.title ?? 'New chat');

const startNewConversation = async (): Promise<void> => {
  const created = conversationStore.addConversation('New chat');
  await router.push({ name: 'chat', params: { id: created.id } });
};

const handleSend = async (content: string): Promise<void> => {
  await conversationStore.sendMessage(content);
};

useAutoScroll(messagesContainer, bottomMarker, () => currentConversation.value?.messages.length ?? 0);

onMounted(() => {
  const ensured = conversationStore.ensureConversation(route.params.id as string | undefined);
  if (ensured && ensured.id !== route.params.id) {
    router.replace({ name: 'chat', params: { id: ensured.id } });
  }
});

watch(
  () => route.params.id,
  (id) => {
    conversationStore.ensureConversation(id as string | undefined);
  },
);
</script>

<style scoped>
.chat {
  display: grid;
  gap: 18px;
}

.chat__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.chat__title {
  margin: 6px 0 0;
  font-size: 26px;
}

.chat__board {
  min-height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  gap: 12px;
}

.chat__messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  max-height: 55vh;
  padding: 6px;
}

.chat__loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  padding: 8px 10px;
}

.muted {
  color: var(--muted);
}

.empty {
  color: var(--muted);
  text-align: center;
  margin: 40px 0;
}

.ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  color: var(--text);
  cursor: pointer;
}

@media (max-width: 768px) {
  .chat__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .chat__messages {
    max-height: 60vh;
  }
}
</style>
