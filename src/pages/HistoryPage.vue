<template>
  <section class="container history">
    <header class="history__header">
      <div>
        <p class="eyebrow">Conversation history</p>
        <h2>Pick a thread to resume</h2>
      </div>
      <RouterLink class="ghost" to="/chat">Back to Chat</RouterLink>
    </header>

    <div class="history__list">
      <ConversationCard
        v-for="conversation in conversations"
        :key="conversation.id"
        :title="conversation.title"
        :updated-at="conversation.updatedAt"
        @select="openConversation(conversation.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ConversationCard from '@/components/ConversationCard.vue';
import { useConversationStore } from '@/stores/conversationStore';

const router = useRouter();
const conversationStore = useConversationStore();

const conversations = conversationStore.sortedConversations;

const openConversation = async (id: string): Promise<void> => {
  conversationStore.setCurrentConversation(id);
  await router.push({ name: 'chat', params: { id } });
};
</script>

<style scoped>
.history {
  display: grid;
  gap: 16px;
}

.history__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.history__list {
  display: grid;
  gap: 12px;
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
}

@media (max-width: 768px) {
  .history__header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
