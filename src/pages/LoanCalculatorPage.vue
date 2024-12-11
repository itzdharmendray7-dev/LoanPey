<template>
  <HeaderSection />

  <section class="page-header" style="margin-top: 2px;color:black">
    <div class="container">
      <div class="page-header-item d-flex align-items-center justify-content-center loancalc">
        <div class="post-content">
          <h2>Loan Calculator</h2>
        </div>
      </div>
    </div>
  </section>

  <div class="col-md-12" style="margin-top: 60px;color:black">
    <form name="loandata" method="post" action="" style="color:black;">
      <table id="emi" width="65%">
        <tr>
          <td colspan="3">
            <b>
              <h2 style="text-align:center;">Loan information </h2>
            </b>
          </td>
        </tr>

        <tr>
          <td>&nbsp;</td>
          <td width="50%">Loan amount: <span class="err">*</span></td>
          <td>
            <input type="text" name="principal" size="12" style="border: solid 1px;">
          </td>
        </tr>

        <tr>
          <td>&nbsp;</td>
          <td>Percentage rate of interest: <span class="err">*</span>
          </td>
          <td>
            <input type="text" name="interest" size="12" style="border: solid 1px;">
          </td>
        </tr>

        <tr>
          <td>&nbsp;</td>
          <td>Repayment period in Month: <span class="err">*</span>
          </td>
          <td>
            <input type="text" name="years" size="12" style="border: solid 1px;">
          </td>
        </tr>

        <tr>
          <td>&nbsp;</td>
          <td>Start Date of Loan:</td>
          <td>
            <input type="text" name="start_date" size="12" id="start_date" readonly style="border: solid 1px;">
          </td>
        </tr>
      </table>

      <div style="display: flex; justify-content: center; align-items: center;">
        <input style="width: 207px;margin-top: 10px;margin-bottom: 10px;font-size: 16px;background-color: #EF8B00;"
          type="submit" value="Submit" name="EMI_submit" class="btn btn-primary">
      </div>
    </form>
  </div>

  <table cellpadding="0" cellspacing="0" width="100%" class="eni_list">
    <tr>
      <td colspan="6" style="color:#F00; font-size:18px;">All Required Fields.</td>
    </tr>
  </table> <br><br>

  <section class="services style-2 padding-tb pb-sm-0">
    <div class="container">
      <div class="section-header1">

        <h3 style="font-size: 26px;">EMI Calculator</h3>
        <p>
          Lending is an old process that aims to provide necessary funds to potential borrowers. The conditions being,
          the borrower should repay the loan amount at a fixed rate of interest and within a specified period of time.
          Repaying the whole amount altogether can prove to be a burden on the borrowers. This is why, EMIs fulfill the
          responsibility to divide the burdens into easy equated monthly installments that a borrower has to pay every
          month of the tenure. Nowadays, an EMI calculator efficiently does the calculation rapidly to provide an
          overview
          of the possible financial responsibility. Read on to know more about how an EMI calculator works.
        </p>

        <h3 style="font-size: 26px;">What is a Loan EMI Calculator?</h3>
        <p>
          EMI is a monthly payable installment of a loan repayment. Borrowers use this to consider EMI as a crucial
          factor before taking on a loan. Because it affects their monthly budget and they have to determine their
          financial ability to repay the loan without any drawbacks. This is why, EMI calculation is mandatory for the
          borrowers before borrowing the required funds from the lenders. And a loan EMI calculator helps them. A loan
          EMI
          calculator is a financial instrument that online lenders and credit platforms provide to borrowers free of
          cost.
          No matter the nature of the loan you’re going to apply for, an EMI calculator is able to calculate when you
          put
          in the loan amount, tenure, and rate of interest (ROI) in the calculator. The fast and accurate EMI
          calculation
          saves time and helps to manage your monthly budget to get the loan that is best suitable for you.
        </p>

        <h3 style="font-size: 26px;">How are Loan EMIs Calculated?</h3>
        <p>
          When paying an EMI, you’re repaying back a part of the principal and also some interest. This interest can be
          at a fixed rate or a floating rate. Unlike fixed ROI, floating ROI keeps altering from time to time. And the
          EMI
          will also keep fluctuating. But the formula used to calculate the EMI has always been constant which is
          EMI=[PxRx(1+R)N]/[ (1+R)N-1]. Here you should know the crucial components that make this formula, such as P or
          principal, R or ROI, and N or tenure.
        </p>

        <p>
          <b style="color:black;">For eg, if you borrow Rs. 2,00,000 for 2 years at 20% ROI p.a., then as
            per the formula <br><br>
            P= 2,00,000 <br><br>
            N= 2 year= (12x2) months= 24 months <br><br>
            R= 20% p.a.= 20/12= 1.66% p.m. <br><br>
            So, the EMI will be [PxRx(1+R)N]/[ (1+R)N-1] <br><br>
            =[2,00,000x1.66/100x(1+1.66/100)24]/ [(1+1.66/100)24-1] <br><br>
            =Rs. 10,179.16
          </b><br><br>
        </p>

        <p>
          This entire calculation can be very time-consuming, but not for an online EMI calculator. It calculates any
          amount with ease.
        </p>

        <h3 style="font-size: 26px;">How does an EMI Calculator work?</h3>
        <p>
          The calculation procedure of an EMI calculator requires the basic yet variable factors which are, loan amount,
          rate of interest, and duration. And the EMI will vary depending upon these factors.
        </p>

        <h3 style="font-size: 26px;">Loan Amount</h3>
        <p>
          Also known as the principal, the loan amount is the main factor on which the interest will be payable.
          Irrespective of the loan type, the EMI will keep expanding during the calculation if chosen a higher amount.
        </p>

        <h3 style="font-size: 26px;">Rate of Interest (ROI)</h3>
        <p>
          The interest that is going to be paid also depends on the ROI you’re choosing or the lender is going to apply.
          This can vary for different loans and lenders. Also, the types of interest such as floating or variable may
          also
          make a crucial difference in the EMIs.
        </p>

        <h3 style="font-size: 26px;">Tenure</h3>
        <p>
          Depending upon the nature of the loan that you’re planning to apply for, the tenure will vary. It also is up
          to
          the lender and the amount you’re asking for. Besides this, the ROI also connects with tenure. An EMI
          calculator
          manages all of these variable components and determines the exact result of the calculation.
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
  title: 'Loan Calculator',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>

<style scoped lang="scss">
@import '/src/css/style.scss';
@import '/src/css/slick.scss';
@import '/src/css/swipper.scss';
@import '/src/css/animate.scss';
@import '/src/css/light-case.scss';
@import '/src/css/global_css.scss';
@import '/src/css/slick-theme.scss';
@import '/src/css/all-min-css.scss';
@import '/src/flaticon/flaticon.css';
@import '/src/css/bootstrap-min.scss';
@import '/src/css/bootstrap-grid.scss';
@import '/src/css/jquery-nstSlider.scss';

.eni_list {
  border: 1px solid #D4D4D4;
}

.eni_list tr:nth-child(2) {
  font-family: 'Cantora One', sans-serif;
  font-size: 14px;
}

.eni_list td {
  padding: 5px;
  border: 1px solid #D5D5D5;
  text-align: center;
}

.eni_list tr:nth-child(even) {
  background: mintcream;
}

span.err {
  color: #F00;
  font-weight: bold;
}

h3 {
  color: black;
}

@media(min-width:320px) and (max-width:768px) {
  .loancalc {
    margin-top: 70px !important;
  }
}

table#emi {
  border: 2px solid #EF8B00;
  margin: 0 auto;
  font-family: 'Cantora One', sans-serif;
  font-size: 14px;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
}

table#emi td {
  padding: 5px;
}

table#emi tr:nth-child(even) {
  background: #E4E4E4;
  border: 1px solid #D4D4D4;
  border-left: 0;
  border-right: 0;
}

table#emi tr td:nth-last-child(1) {
  /* background: #; */
  margin-left: 104px;
}

table#emi input {
  margin-bottom: 5px !important;
  margin-top: 5px;
  margin-left: 104px;
}

#result td {
  padding: 5px;
}

table#result {
  width: 477px;
  border: 1px solid #d4d4d4;
  margin: 0 auto;
  margin-top: 10px;
  display: none;
  font-family: 'Cantora One', sans-serif;
  font-size: 14px;
}

table#result tr:nth-child(even) {
  background: mintcream;
  border: 1px solid #D4D4D4;
}

table#result tr td:nth-last-child(1) {
  width: 213px;
}
</style>
