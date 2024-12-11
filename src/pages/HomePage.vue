<template>
  <q-page>
    <HomeHeader />

    <ServicesSection />

    <section class="progress padding-tb">
      <div class="container">
        <div class="section-wrapper">
          <div class="post-item">
            <div class="post-item-inner">

              <div class="post-thumb d-none d-md-block">
                <img src="/lend2.png" style="height: 457px;margin-top: -63px;" alt="progress" />
              </div>

              <div class="post-content">
                <h2>Lending with customer satisfaction</h2>
                <p>We share all the information regarding the lending terms and conditions precisely. We never want to
                  create any communication gap that can generate ambiguity or misunderstanding. There are no hidden
                  charges for the approval of the loan.</p>
                <a href="/contact-us" class="btn">Contact Us</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <EthicalAspects />

    <LoanRequirements />

    <LoanApplicationSteps />

    <WhyChooseUs />

    <FooterSection />

    <ScrollToTop />

  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeta } from 'quasar';
import { useMetaStore } from 'src/stores/meta-store';
import ScrollToTop from 'src/components/ScrollToTop.vue';
import FooterSection from 'src/components/FooterSection.vue';
import HomeHeader from 'src/components/HomePageComponents/HomeHeader.vue';
import WhyChooseUs from 'src/components/HomePageComponents/WhyChooseUs.vue';
import EthicalAspects from 'src/components/HomePageComponents/EthicalAspects.vue';
import ServicesSection from 'src/components/HomePageComponents/ServicesSection.vue';
import LoanRequirements from 'src/components/HomePageComponents/LoanRequirements.vue';
import LoanApplicationSteps from 'src/components/HomePageComponents/LoanApplicationSteps.vue';

const metaStore = useMetaStore();

const metaData = {
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});

</script>
