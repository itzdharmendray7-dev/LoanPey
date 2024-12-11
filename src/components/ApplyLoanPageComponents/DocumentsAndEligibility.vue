<template>
  <section class="faq padding-tb">
    <div class="container">
      <div class="section-header1">
        <h2 style="text-align: center;font-size: 34px;">Documents Required & Eligibility Criteria</h2>
        <p style="text-align: center;">
          We don't need any physical documents from you. Just keep a clear scanned copy of below listed documents for
          personal loan processing.
        </p>
      </div>

      <div class="section-wrapper">

        <ul class="tabs">
          <li :class="{ 'tab-link': true, 'current': currentTab === 'tab-1' }" @click="changeTab('tab-1')"
            data-tab="tab-1">Eligibility Criteria</li>
          <li :class="{ 'tab-link': true, 'current': currentTab === 'tab-2' }" @click="changeTab('tab-2')"
            data-tab="tab-2">Documents Required</li>
        </ul>

        <div id="tab-1" :class="{ 'tab-content': true, 'current': currentTab === 'tab-1' }">
          <div class="faq-fil-list">
            <div class="col-lg-8">
              <div class="post-item">
                <div class="post-item-inner">
                  <div class="post-content">

                    <section class="case-study-single">
                      <div class="container">
                        <div class="section-wrapper row justify-content-center">
                          <div class="col-lg-8 col-12">

                            <article>
                              <div class="action-solution doctab" style="margin-left: -135px;">
                                <ul>
                                  <li>Indian resident</li>
                                  <li>Salaried Employee/Business Owner/Self Employed</li>
                                  <li>Above 21 years of age</li>
                                  <li>Savings Bank Account Holder</li>
                                  <li>Fair CIBIL Score</li>
                                </ul>
                              </div>
                            </article>

                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="tab-2" :class="{ 'tab-content': true, 'current': currentTab === 'tab-2' }">
          <div class="faq-fil-list">
            <div class="col-lg-6">
              <div class="post-item bg-white">
                <div class="post-item-inner">
                  <div class="post-content">
                    <section class="case-study-single">
                      <div class="container">
                        <div class="section-wrapper row justify-content-center">
                          <div class="col-lg-12 col-12">

                            <article>
                              <div class="action-solution doctab" style="margin-left: -18px;">
                                <ul>
                                  <li>Completely filled personal loan application. Indian resident</li>
                                  <li>PAN Card</li>
                                  <li>
                                    Residence proof – Passport, Driving Licence, Voter ID,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Postpaid/Landline Bill, Utility Bills (Electricity/Water/Gas).
                                  </li>
                                  <li>Bank statements for the last 3 months of salary account.</li>
                                  <li>Salary Slips of last 6 months.</li>
                                </ul>
                              </div>
                            </article>

                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentTab = ref('tab-1');

const changeTab = (tabId: string) => {
  currentTab.value = tabId;
};
</script>

<style scoped lang="scss">
@import '/src/css/applyloan-page.scss';
</style>
