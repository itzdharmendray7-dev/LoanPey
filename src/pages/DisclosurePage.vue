<template>
  <HeaderSection />

  <section class="page-header">
    <div class="container">
      <div class="page-header-item d-flex align-items-center justify-content-center">
        <div class="post-content">
          <h2>Disclosure</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="services style-2 padding-tb pb-sm-0">
    <div class="container">
      <div class="section-header1">
        <p>
          We have noticed with various information that some people with deceitful intentions have started creating fake
          Email IDs and duplicate website that appears as our logos and others. They are trying to trap people for the
          instant approval of a loan with some prepayment. With some fake promises of the loan payment, they are
          practicing delinquencies.
        </p>
        <p> Therefore, we alert the general public; <br>
          1. Be aware of people promising the loan disbursement and asking for some repayment as a processing charge.
          Please note that we never demand any fees before the loan approval. After a satisfactory verification, we
          disburse the loan amount directly to your account. Whatever charges are there, we share all the information
          precisely. So, always avoid these fake calls or emails. <br> <br>
          2. The complete mechanism of our lending is transparent, and we follow all the steps honestly. Loan pay will
          never demand any initial fees for your approval. As per guidelines, you must present your valid documents
          only.
          <br> <br>
          3. Our Email id info@loanpey.com will be there. It will not be like yahoo
        </p>

        <p>We strongly condemn these deceitful actions and alert our customers to avoid anyone demanding approval fees
          with an unknown number or email id.
        </p>
        <p>We request the people and customers not to share OTP /pin with any unknown person. We request our customers
          and
          other people to report at the earliest any suspicious activity that may have occurred due to some illicit
          practices to the authorities in their jurisdiction. These incidents can also be referred to the loan Pay
          authority for appropriate action.
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
  title: 'Disclosure',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
