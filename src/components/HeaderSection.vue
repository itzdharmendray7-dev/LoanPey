<template>
  <header class="header-section">
    <div class="header-bottom">
      <div v-if="isMenuFixed" class="menu-placeholder"></div>
      <nav class="primary-menu animated" :class="menuClasses">
        <div class="container">
          <div class="menu-area">
            <div class="row justify-content-between align-items-center">

              <a href="/" class="logo">
                <img src="/logo1.png" style="height: 61px;" alt="logo">
              </a>

              <div class="main-menu-area d-flex align-items-center">

                <ul class="main-menu d-flex align-items-center">
                  <li><a class="active" href="/">Home</a></li>
                  <li><a href="/about-us">Company</a></li>
                  <li><a href="/loan-services">Loan</a></li>
                  <li><a href="/repay-loan">Repay Loan</a></li>
                  <li><a href="/faq">FAQ's</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                </ul>

                <div class="d-none d-xl-block">
                  <div class="contact-header">
                    <span>
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <a style="background-color: unset;box-sizing: unset;display: contents;" href="tel:+91-9697959097">
                        +91-9697-959-097</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const isMenuFixed = ref(false);
const isMobileMenuVisible = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  isMenuFixed.value = scrollTop > 150;
  isMobileMenuVisible.value = scrollTop > 200;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const menuClasses = computed(() => {
  return {
    'slideInUp': !isMenuFixed.value,
    'menu-fixed fadeInDown': isMenuFixed.value,
  };
});

/* const mobileMenuClasses = computed(() => {
  return {
    'slideInUp': !isMenuFixed.value && !isMobileMenuVisible.value,
    'menu-fixed fadeInDown': isMenuFixed.value || isMobileMenuVisible.value,
  };
});

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
}; */
</script>

<style lang="scss">
@import '/src/css/style.scss';
@import '/src/css/slick.scss';
@import '/src/css/swipper.scss';
@import '/src/css/animate.scss';
@import '/src/css/light-case.scss';
@import '/src/css/global_css.scss';
@import '/src/css/slick-theme.scss';
@import '/src/css/all-min-css.scss';
@import '/src/flaticon/flaticon.css';
@import '/src/css/bootstrap-grid.scss';
@import '/src/css/jquery-nstSlider.scss';

.menu-placeholder {
  height: 100px;
}
</style>
