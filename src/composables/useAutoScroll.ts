import { Ref, nextTick, watch } from 'vue';

export const useAutoScroll = (
  containerRef: Ref<HTMLElement | null>,
  markerRef: Ref<HTMLElement | null>,
  dependency: () => number,
): void => {
  watch(
    dependency,
    async () => {
      await nextTick();
      if (containerRef.value && markerRef.value) {
        markerRef.value.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    },
  );
};
