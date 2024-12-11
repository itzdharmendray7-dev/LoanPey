<template>
  <q-page>
    <HeaderSection />

    <ApplyForLoanHeader />

    <ApplyForLoanForm />

    <AdvantagesOfObtainingLoan />

    <RatesAndCharges />

    <section class="testimonial style-2 mt-5 p-5" style="">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="last-para-34">
              <h4 class="subtitle-bottom-1">How to Calculate the APR</h4>
              <p class="p-4">
                APR can be calculated with the help of all the factors pertaining to the loan i.e., rate of interest,
                principal amount, applied fess and the period or the tenure for which the loan has been availed.
                Thereafter, it can be computed by multiplying the rate of interest by the time period and the principal
                amount added with all the applied fees. However, the rate of interest will vary on the credit score and
                the contemporary terms and conditions of the lender.
              </p>
            </div>
          </div>

          <div class="col-md-12 mt-5">
            <div class="last-para-34">
              <h4 class="subtitle-bottom-1"> Our Rate of Interest and Fees</h4>
              <p class="p-4">We are providing a competitive rate of interest, however, it can differ as per the credit
                score, income ratio, and considering the existing liabilities of the borrowers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LoanProcessModel />

    <DocumentsAndEligibility />

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
import HeaderSection from 'src/components/HeaderSection.vue';
import RatesAndCharges from 'src/components/ApplyLoanPageComponents/RatesAndCharges.vue';
import ApplyForLoanForm from 'src/components/ApplyLoanPageComponents/ApplyForLoanForm.vue';
import LoanProcessModel from 'src/components/ApplyLoanPageComponents/LoanProcessModel.vue';
import ApplyForLoanHeader from 'src/components/ApplyLoanPageComponents/ApplyForLoanHeader.vue';
import DocumentsAndEligibility from 'src/components/ApplyLoanPageComponents/DocumentsAndEligibility.vue';
import AdvantagesOfObtainingLoan from 'src/components/ApplyLoanPageComponents/AdvantagesOfObtainingLoan.vue';

const metaStore = useMetaStore();

const metaData = {
  title: 'Apply for loan',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>

<style scoped lang="scss">
@import '/src/css/applyloan-page.scss';
</style>
