<template>
  <header class="header-section transparent-header style-2 d-none d-xl-block">
    <nav class="primary-menu"
      :class="{ 'animated slideInUp': !isMenuFixed, 'animated menu-fixed fadeInDown': isMenuFixed }">
      <div class="container">
        <div class="menu-area">
          <div class="row align-items-center justify-content-lg-between">

            <a href="/" class="logo">
              <img src="/logo-white.png" alt="logo" />
              <img src="/logo1.png" alt="logo" />
            </a>

            <div class="main-menu-area d-flex align-items-center justify-content-between">

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
                    <i class="fa fa-phone" style="margin:5px;" aria-hidden="true"></i>
                    <a style="background-color: unset;box-sizing: unset;display: contents;" class="top-hd-mob-color"
                      href="tel:+91 9697959097">
                      <span style="font-size: 14px;">+91 - 9697959097</span>
                    </a>
                  </span>

                  <a href="/apply-for-loan" class="btn">Apply For Loan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <section class="banner style-2">
    <div class="banner-area">
      <div class="container">
        <div class="row padding-x">
          <div class="banner-content">
            <h2 class="banner-text">Get an immediate loan for your urgent requirements </h2>
            <p class="banner-desc">Use them for any purpose</p>
            <a href="/apply-for-loan" class="btn">Apply For Loan</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="video">
    <div class="container">
      <div class="section-wrapper">
        <div class="video-post">
          <div class="video-thumb">
            <img src="/bills.jpg" alt="video" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuFixed = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  isMenuFixed.value = scrollTop > 150;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
</style>
