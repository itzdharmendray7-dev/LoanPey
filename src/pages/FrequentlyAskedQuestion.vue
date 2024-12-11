<template>
  <q-page>
    <HeaderSection />

    <section class="page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content">
            <h2>FAQ's</h2>
          </div>
        </div>
      </div>
    </section>

    <div class="breadcamp">
      <div class="container">
        <ul class="d-flex flex-wrap justify-content-center align-items-center">
          <li><a href="/">Home</a></li>
          <li><a class="active">FAQ's</a></li>
        </ul>
      </div>
    </div>

    <section class="faq padding-tb">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Ask Questions</h2>
          <p>Many questions may be there in your mind before applying for an instant loan; there is some unique question
            and answer to solve your queries.
          </p>
        </div>
        <div class="section-wrapper">

          <div id="tab-1" class="tab-content current">
            <div class="faq-fil-list">
              <div class="col-lg-6">
                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6>Who is eligible for a loan?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>Anyone having a reasonable salary and credit score.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6> How to apply for a loan?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>You can directly apply from our website.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6>How much loan amount can we borrow?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>The loan amount depends on your salary; we generally provide thirty to forty percent of your
                          wage.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6>What are the documents required for a loan?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>You must present your PAN card, Aadhar card, six months bank statement, and three-month
                          salary
                          slip.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6>Can I take another loan with an existing one?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>No, you have to repay the existing loan; after the repayment, you will be eligible to borrow
                          the loan again.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="post-item-inner">
                    <div class="post-content">
                      <div :class="{ 'accordion-question': true, 'in': showAnswer }" @click="toggleAnswer()">
                        <div class="accordion-icon"></div>
                        <h6>Is there any prepayment?</h6>
                      </div>

                      <div class="accordion-answer" :style="{ display: showAnswer ? 'block' : 'none' }">
                        <p>No, there is no prepayment. </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />

    <ScrollToTop />

  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { ref, onMounted } from 'vue';
import { useMetaStore } from 'src/stores/meta-store';
import ScrollToTop from 'src/components/ScrollToTop.vue';
import HeaderSection from 'src/components/HeaderSection.vue';
import FooterSection from 'src/components/FooterSection.vue';

const metaStore = useMetaStore();

const metaData = {
  title: 'Terms And Conditions',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});

const showAnswer = ref(false);

const toggleAnswer = () => {
  // Toggle the 'in' class for the clicked question
  showAnswer.value = !showAnswer.value;

  /* // Hide other answers when one is clicked
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faqs.value[i].showAnswer = false;
    }
  }); */
};
</script>
