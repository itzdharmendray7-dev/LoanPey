<template>
  <q-page>
    <HeaderSection />

    <section class="page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content">
            <h2>About Company</h2>
          </div>
        </div>
      </div>
    </section>

    <div class="breadcamp">
      <div class="container">
        <ul class="d-flex flex-wrap justify-content-center align-items-center">
          <li><a href="/">Home</a></li>
          <li><a class="active">Comapny</a></li>
        </ul>
      </div>
    </div>

    <section class="case-study-single padding-tb progress " style="margin-top: -98px;">
      <div class="container">

        <div class="section-wrapper row justify-content-center">
          <div class="col-lg-6 col-md-8 col-12">
            <div class="post-thumb d-none d-md-block">
              <img src="/about.png" alt="about loanpey">
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <article>

              <div class="task-challenge">
                <h2>About <span style="color: #FFA500">Loanpey</span></h2>
                <p>We are always there to solve your financial emergency. We offer various types of loans that can help
                  in
                  different situations. There are multiple usages of our loan like
                </p>

                <ul>
                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>Bill payments</h6>
                    </div>
                  </li>

                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>Rents</h6>
                    </div>
                  </li>

                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>School fees </h6>
                    </div>
                  </li>

                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>Buying home appliances </h6>
                    </div>
                  </li>

                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>Personal use </h6>
                    </div>
                  </li>

                  <li class="d-flex">
                    <div class="icon">
                      <i class="fas fa-location-arrow"></i>
                    </div>

                    <div class="content">
                      <h6>Many more </h6>
                    </div>
                  </li>
                </ul>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>

    <section class="services style-2 padding-tb pb-sm-0">
      <div class="container">
        <div class="section-header1">
          <span style="text-align: center;">Benefits from our services </span>
          <h2 style="font-size: 26px;">Why should you choose us?</h2>
          <p>
            If you have to pay any bill immediately and cannot manage the cash due to the shortage of funds, you can get
            a
            loan to pay the bill. There are multiple usages of a loan amount. We provide some information related to the
            loan that why should you choose us.
          </p> <br>
        </div>

        <div class="section-wrapper">
          <div class="row">
            <div class="col-md-12">

              <div class="col-md-12">

                <h5>Easy application</h5>
                <p style="text-align: justify;">Getting an instant loan is not so difficult with us. Because we use the
                  advanced technology associated with our team of experts, you do not have to wait long for your loan
                  approval. You can apply for a loan with the appropriate documents from our website. Your loan will be
                  approved in less time, and the amount will be disbursed to your account.
                </p>
              </div>

              <div class="col-md-12">

                <h5>Improve your credit history</h5>
                <p style="text-align: justify;">You can improve your credit history with us because we offer instant
                  loans
                  with reasonable repayment. Easy repayment can help you maintain an excellent transactional history and
                  credit score. A good credit score will allow you to apply for a considerable amount and its approval
                  in
                  the future.
                </p> <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="case-study-single padding-tb">
      <div class="container">
        <div class="section-wrapper row justify-content-center">
          <div class="col-lg-10 col-12">
            <article>
              <div class="action-solution">
                <h3 style="margin-top: -106px;font-size: 24px;">Easy repayment</h3>
                <p>We provide a loan with a manageable repayment tenure so that you can easily pay your loan. We aim to
                  provide an appropriate loan amount that will be comfortable to pay for you.
                </p>

                <ul>
                  <li>Age limit - Your age must be more than 21 years</li>
                  <li>Income - You must have a stable and appropriate monthly income.</li>
                  <li>Citizens - You must be a citizen of India.</li>
                </ul>

              </div>
            </article>
          </div>
          <div class="col-lg-2 col-12"></div>
        </div>

        <p>Loanpey is an exponentially emerging platform where you can get instant financial help in any situation. Our
          executive helps approve your loan application in a few hours. So, you can choose us for instant approval of
          your
          loan to fulfill your multiple financial requirements.
        </p>

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
import FooterSection from 'src/components/FooterSection.vue';
import HeaderSection from 'src/components/HeaderSection.vue';

const metaStore = useMetaStore();

const metaData = {
  title: 'About Us',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
