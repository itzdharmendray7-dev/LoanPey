<template>
  <q-page>
    <HeaderSection />

    <section class="page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content">
            <h2>Privacy and Policy</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="services style-2 padding-tb pb-sm-0">
      <div class="container">
        <div class="section-header1">

          <p>
            Loanpey is here to provide you to offer best services with maintaining the privacy policy. We want to ensure
            that every detail of our customers remains confidential. In this way, we build the foundation of trust with
            our
            customers.
          </p>

          <p>Registering with Loanpey will receive our company’s SMS, Email, and Phone. Here are some details of the
            personal information we require.</p>
          <p><b>
              • Location <br><br>
              • Date of Birth <br><br>
              • First Name <br><br>
              • Mobile Number <br><br>
              • Last Name <br><br>
              • Email Address <br><br>
            </b>
          </p>

          <h2 style="font-size: 30px;">What do we do with your information?</h2>
          <p>
            At loanpey, we use our customer’s data for only essential purposes. To know more about what we do with your
            personal information, read the following:-
          </p>
          <p>
            <b>
              • Solve queries <br><br>
              • Manage your data and do our daily work <br><br>
              • We Send information about new offers, products, and services from our website <br><br>
              • Enhance Company’s Services <br><br>
            </b>
          </p>

          <h2 style="font-size: 30px;">Read all necessary information.</h2>
          <p>
            You should read all the information about the privacy policy before providing your details. We are not
            liable
            for any loss of the personal information you provide to other sources. You should maintain the secrecy of
            your
            personal information. Also, it would help if you always went through the terms and conditions before
            processing
            the next step.
          </p>

          <h2 style="font-size: 30px;">Provide security</h2>
          <p>
            Our primary aim is to provide security where all your information is kept confidential. We do not share your
            data with anyone. So, there are no chances of any cybercrime. We are growing with advanced fintech
            technology
            sufficient to maintain cyber security.
          </p>

          <h2 style="font-size: 30px;">Email</h2>
          <p>
            We use the email to send regular information like new offers, your existing loans statement, repayment
            reminder, etc. you do not want to receive the email, you can unsubscribe the email information.
          </p>
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
  title: 'Privacy and Policy',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
