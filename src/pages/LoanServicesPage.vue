<template>
  <q-page>
    <HeaderSection />

    <section class="page-header service-page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content style-two">
            <h5>Loan Services</h5>
            <h2>We offer loans for multiple uses</h2>
            <p>
              We offer an immediate loan service to arrange the cash for your multiple requirements. so that you can
              use your amount as per your needs
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about padding-tb">
      <div class="container">
        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/bills.jpg" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Loan <span style="color:#FFA500;">to clear your pending bills</span></h2>
              <p>
                If you are worried about your existing credit bill and have to pay it immediately, you can get an
                instant
                loan and bear it. With the help of a short-term loan, you can pay your bill and save some amount on
                interest and penalties.
              </p>
              <p>
                Loanpey helps you pay your credit bill so that your credit score must be maintained and must not be
                affected due to late repayments. It fills the gap between the fund’s shortage and cash.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a>
            </div>

          </div>
        </div><br><br>

        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/shoping.png" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Loan <span style="color:#FFA500;">for shopping</span></h2>
              <p>
                You can go shopping if you have an urgent requirement for something and don’t have cash. With a
                short-term loan, you can purchase the desired item.
              </p>
              <p>
                It helps you buy the urgently required item with the loan amount. You do not have to wait for your
                salary
                or get cash from others like money lenders, family members, etc.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a>
            </div>

          </div>
        </div><br><br>

        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/travel.jpg" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Loan <span style="color:#FFA500;">for travel and leisure</span></h2>
              <p>
                Loan pay helps you manage the expenses on travel; borrowing the loan, you can manage the travel
                expenses.
              </p>
              <p>
                It is often seen that the shortage of funds creates difficulties in your enjoyments during traveling.
                But loanpey helps you enjoy your wanderlust.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a>
            </div>

          </div>
        </div><br><br>

        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/medical.jpg" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Medical <span style="color:#FFA500;">emergency</span></h2>
              <p>
                A medical emergency influences your budget, especially when you have a cash shortage. To handle this
                situation, you can get apply for a loan.
              </p>
              <p>
                The immediate loan solves your fund shortage and provides financial strength. Our financial support
                makes
                you strong to confront a medical emergency.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a><br><br>
            </div><br><br>

          </div>
        </div><br><br>

        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/emergency.jpg" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Loan <span style="color:#FFA500;">to meet a financial emergency</span></h2>
              <p>
                If you are worried about your existing credit bill and have to pay it immediately, you can get an
                instant
                loan and bear it. With the help of a short-term loan, you can pay your bill and save some amount on
                interest and penalties.
              </p>
              <p>
                Your credit score may be affected due to late repayment, and some additional charges may be added as
                penalties. Loanpey helps you save your amount and increase your credit score.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a>
            </div>

          </div>
        </div><br><br>

        <div class="row padding-x">
          <div class="section-wrapper">

            <div class="post-thumb">
              <img src="/home-renovation.jpg" style="box-shadow: 0px 0px 4px 0px rgba(0 0 0 / 0.5);" alt="about" />
            </div>

            <div class="post-content">
              <h2 style="font-size: 32px;">Home <span style="color:#FFA500;"> renovation</span></h2>
              <p>
                If you plan to renovate your home by painting etc., you can apply for an instant loan. The loan approval
                is done in significantly less time.
              </p>
              <p>
                Cash is always required for home renovation, and if you are facing a funds shortage, you can get a loan
                quickly and instantly. Loanpey helps you remove any obstacle in your work.
              </p>
              <a href="/apply-for-loan" class="btn">Apply Now</a>
            </div>

          </div>
        </div><br><br>

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
  title: 'Loan Services',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
