<template>
  <HeaderSection />

  <section class="page-header">
    <div class="container">
      <div class="page-header-item d-flex align-items-center justify-content-center">
        <div class="post-content">
          <h2>Disclaimer</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="services style-2 padding-tb pb-sm-0">
    <div class="container">
      <div class="section-header1">
        <p>
          With the necessary approval from the Reserve Bank of India, we disburse the loan to the eligible customer as a
          genuine loan provider.
        </p>
        <p>We have noticed that some other organizations are revealing themselves as our partner, asking for some
          prepayment as a processing charge for the loan. All are requested to be aware of such an organization.
        </p>
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
  title: 'Disclaimer',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
