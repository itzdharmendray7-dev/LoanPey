<template>
  <section class="services">
    <div class="container">
      <div class="row padding-x">
        <div class="section-wrapper">
          <h2 style="text-align: center; padding-top: 43px;">Loan for solving temporary financial shortage</h2>
          <div class="services-slider swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper">

              <swiper :autoplay="{ delay: 4000, disableOnInteraction: false }" :modules="modules">

                <swiper-slide v-for="(service, index) in services" :key="index" style="width: 432.667px;">
                  <div class="post-item">
                    <div class="post-item-inner">
                      <div class="post-thumb">

                        <div class="round-1">
                          <div class="services-circle-wrapper">
                            <div class="services-circle"></div>
                          </div>
                          <div class="services-circle-wrapper">
                            <div class="services-circle"></div>
                          </div>
                        </div>
                        <div class="round-2"></div>
                        <div class="service-icon">
                          <img :src="service.iconSrc" style="height: 52px;">
                        </div>
                      </div>

                      <div class="post-content">
                        <h5>{{ service.title }}</h5>
                        <p>{{ service.description }}</p>
                        <a href="/apply-for-loan" class="service-flaticon flaticon-next"></a>
                      </div>

                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <Swiper :pagination="{ clickable: true }"></Swiper>
          <div class="services-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modules = [Autoplay, Pagination, Navigation];

const services = ref([
  {
    iconSrc: '/instant-loan.png',
    title: 'Loan for unexpected expenses',
    description: 'You can get a loan in a few hours to confront any sudden emergence of expenses.',
  },
  {
    iconSrc: '/emergency-loan.png',
    title: 'Immediate loan',
    description: 'Immediate loan service benefits your multiple requirements like paying credit bills, rent, travel expenses, etc.',
  },
  {
    iconSrc: '/aproved.png',
    title: 'No prepayment for approval',
    description: 'No need to pay any charges before the disbursal of the loan amount.',
  },
]);
</script>
