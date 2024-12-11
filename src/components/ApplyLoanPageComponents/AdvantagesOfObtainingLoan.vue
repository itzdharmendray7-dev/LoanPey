<template>
  <section class="padding-tb">
    <div class="container">
      <div class="section-wrapper1">
        <div class="post-item">
          <div class="post-item-inner">
            <div class="post-content">
              <h2 style="font-size: 18px;font-weight: 400;font-family:'Rubik', sans-serif; letter-spacing: 1px;">
                Key Attributes and Advantages of Obtaining a Personal Loan
              </h2>

              <div class="row mb-5 mt-4">
                <div class="col-md-4">
                  <div class="now-para-content">
                    <div class="icon-cont-paynow">
                      <img src="/pt-img-4.png" style="width:50px;" alt="" />
                    </div>
                    <p class="rdmore">
                      {{ showFullText ? fullText : truncatedText }}
                      <a v-if="!showFullText" href="#" class="readmore" @click.prevent="toggleReadMore">read more...</a>
                    </p>

                  </div>
                </div>

                <div class="col-md-4">
                  <div class="now-para-content">
                    <div class="icon-cont-paynow">
                      <img src="/pt-img-1.png" style="width:50px;" alt="" />
                    </div>
                    <p>
                      Whether you need to pay for unexpected medical bills or want to fund a dream vacation, the choice
                      is entirely yours. Furthermore, borrowers can receive up to ₹1 Lakh depending on their income and
                      credit score. The online loan repayment period is also flexible, allowing borrowers to tailor the
                      loan repayment to their budget.
                    </p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="now-para-content">
                    <div class="icon-cont-paynow">
                      <img src="/pt-img-3.png" style="width:50px;" alt="" />
                    </div>
                    <p>
                      An easy repayment with multiple options i.e., through the UPI, payment through link, and etc helps
                      customers to enhance their credit score and at same time they get the eligibility for reloan. So,
                      the instant loan financially helps customers in existing situations as well as for the future.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Please read these terms carefully. By using this website, you agree to bound by all of the terms and
                conditions of this agreement.
              </p>
              <h2 style="font-size: 18px;letter-spacing: 1px;">GENERAL TERMS AND CONDITIONS</h2>
              <h3 style="font-size: 16px;">Terms of Use</h3>
              <p>
                1.1 Thank you for visiting www.loanpey.com by accessing or using the website www.loanpey.com whether
                automated or otherwise, you, a registered or guest user in terms of the eligibility criteria set out
                herein (“User“), agree to be bound by these Terms and Conditions (“Terms of Use“) and any additional
                terms
                and conditions that are referenced below or otherwise may apply to specific areas of the website, from
                time to time. We encourage our Users to read these Terms of Use carefully while using the website.
              </p>
              <a href="/terms-and-conditions" style="color: black;">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullText = 'One of the most significant advantages of obtaining a personal loan through Loanpey is the quick and straightforward application process, which can be completed entirely online. Additionally, the eligibility requirements for a personal loan are minimal, making it simple to apply. Once the personal loan is approved, the money is typically deposited into your account within a few days. Another notable benefit of a personal loan is that there are no restrictions on how the money is spent.';

const showFullText = ref(false);

const truncatedText = fullText.slice(0, 306);

const toggleReadMore = () => {
  showFullText.value = !showFullText.value;
};
</script>

<style scoped lang="scss">
@import '/src/css/applyloan-page.scss';

.readmore:hover {
  text-decoration: none;
}
</style>
