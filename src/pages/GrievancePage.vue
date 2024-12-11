<template>
  <HeaderSection />

  <section class="page-header">
    <div class="container">
      <div class="page-header-item d-flex align-items-center justify-content-center">
        <div class="post-content">
          <h2>Grievance</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="services style-2 padding-tb pb-sm-0">
    <div class="container">
      <div class="section-header1">

        <h2 style="font-size: 36px;">
          <a href="https://gssasl.com/" target="_blank">Goodskill Securities And Services Ltd.</a>
        </h2>

        <h6>GRIEVANCE REDRESSAL CELL</h6>

        <p>
          We strictly follow the RBI directive and have set up an effective Grievance Redressal Cell to handle and
          address
          all manner of grievances.
          We always endeavour to carry out responsible lending, whereby we give just the loan which we know you will
          find
          convenient to pay back, but also recover our dues ethically. We never believe in any manner of high-handed or
          coercive recovery methods.
          But in case you have any complaints we will take up the matter seriously and address the issue within 5
          working
          days. <br><br>

          Call us at : <a href="tel:+91 9697949896">+91 - 9697949896</a> <br><br>

          Email us at : grievance@loanpey.com</p>

        Address : WA-118 , PLOT NO.-2 THIRD FLOOR
        MOTHER DAIRY ROAD SHAKARPUR
        East Delhi DL 110092 IN
      </div>
    </div>
  </section>

  <FooterSection />

  <ScrollToTop />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeta } from 'quasar';
import { useMetaStore } from 'src/stores/meta-store';
import ScrollToTop from 'src/components/ScrollToTop.vue';
import HeaderSection from 'src/components/HeaderSection.vue';
import FooterSection from 'src/components/FooterSection.vue';

const metaStore = useMetaStore();

const metaData = {
  title: 'Grievance',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
