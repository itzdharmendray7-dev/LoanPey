<template>
  <a href="#" class="scrollToTop"
    :style="{ bottom: isMenuFixed ? '2%' : '-30%', opacity: isMenuFixed ? 1 : 0, transition: 'all 0.5s ease 0s' }">
    <i class="fas fa-angle-double-up"></i>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuFixed = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  isMenuFixed.value = scrollTop > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
