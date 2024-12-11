<template>
  <div class="mobile-menu">
    <button @click="toggleMobileMenu" class="toggle-button">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="mobile-header primary-menu d-xl-none animated" :class="mobileMenuClasses">
      <div class="header-logo">
        <a href="/" class="logo">
          <img src="/logo1.png" alt="logo" style="height: 52px;">
        </a>
      </div>

      <div class="header-bar" id="open-button">
        <button @click="toggleMobileMenu" class="toggle-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <nav class="menu">
      <div class="mobile-menu-area d-xl-none">
        <div class="mobile-menu-area-inner" id="scrollbar">
          <ul class="m-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Loan</a></li>
            <li><a href="#">Repay Loan</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul class="social-link-list d-flex flex-wrap">
            <li>
              <a href="https://www.facebook.com/LoanPey/" targrt="_blank" class="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/company/loanpey/" targrt="_blank" class="linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/loanpey/" targrt="_blank" class="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const isMenuFixed = ref(false);
const isMobileMenuVisible = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  // isMenuFixed.value = scrollTop > 100;
  isMobileMenuVisible.value = scrollTop > 200;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

/* const menuClasses = computed(() => {
  return {
    'slideInUp': !isMenuFixed.value,
    'menu-fixed fadeInDown': isMenuFixed.value,
  };
}); */

const mobileMenuClasses = computed(() => {
  return {
    'slideInUp': !isMenuFixed.value && !isMobileMenuVisible.value,
    'menu-fixed fadeInDown': isMenuFixed.value || isMobileMenuVisible.value,
  };
});

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};
</script>
