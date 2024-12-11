<template>
  <q-page>
    <HeaderSection />

    <section class="page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content">
            <h2>Repay Loan</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial style-3 padding-tb">
      <div class="container">
        <div class="section-wrapper">
          <div class="testimonial-slider1">

            <h3 style="font-size: 20px;text-align: center;">UPI ID : goodskills@icici</h3>
            <div class="flex justify-center items-center">
              <img src="/paynow1.png" style="box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 50%);">
            </div>
            <h3 style="font-size: 20px;text-align: center;">Scan the QR Code to repay via Google Pay / Phone Pay / Paytm
              /
              BHIM UPI apps. <br>
            </h3>
            <p style="text-align:center;">For More Information Call Us
              <a href="tel:96979590-97" style="color: #ff7555;">96-97-95-90-97
              </a>
            </p>

            <table class="table"
              style="margin: 0 auto;color: #4e4848; font-size: 20px;border: solid; padding: 20px; box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 50%);">
              <tbody>
                <tr>
                  <td>Company Name -</td>
                  <td>GOODSKILL SECURITIES AND SERVICES LIMITED</td>
                </tr>

                <hr>
                <tr class="success">
                  <td>Bank Name -</td>
                  <td>ICICI Bank</td>
                </tr>

                <tr class="danger">
                  <td>Account Number -</td>
                  <td>629405047766</td>
                </tr>

                <tr class="info">
                  <td>IFSC Code -</td>
                  <td>ICIC0006294 (for RTGS, IMPS and NEFT )</td>
                </tr>

                <tr class="warning">
                  <td>Branch Name -</td>
                  <td> Nehru Place New Delhi 110070</td>
                </tr>

                <tr class="active">
                  <td>Account Type -</td>
                  <td>CURRENT</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

    <FooterSection />

    <ScrollToTop />

  </q-page>
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
  title: 'Repay loan',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
