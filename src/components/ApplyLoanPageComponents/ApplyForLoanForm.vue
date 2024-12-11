<template>
  <section class="contact" :class="{ 'rajib': isActive }" style="margin-top:83px;background-color: #FFA500;">
    <div class="container">
      <div class="row">
        <div class="col-md-1">
        </div>

        <div class="col-md-4" style="background-color: white;">
          <div class="post-thumb d-none d-md-block">
            <img src="/applyimg.png" style="height: 366px;margin-top: 50px;background-color: white;" alt="progress">
          </div>
        </div>

        <div class="col-md-7" style="padding:20px;background-color: white; ">
          <form @submit.prevent="submitForm" method="post" autocomplete="off" id="formValidation"
            enctype="multipart/form-data" novalidate>
            <div class="row">
              <div class="col-md-4">
                <!-- <label for="lname">Loan Amount <span style="color: red;">*</span></label> -->
                <input type="number" id="loanRequeried" name="loanRequeried" placeholder="Loan Amount"><br><br>
                <input type="hidden" id="fbLeads" name="fbLeads" value="Google">
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="lname">Monthly Income <span style="color: red;">*</span></label> -->
                <input type="number" id="monthlyIncome" name="monthlyIncome" placeholder="Monthly Income"><br><br>
                <input type="hidden" id="fbLeads" name="fbLeads" value="Google">
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="fname">Full Name <span style="color: red;">*</span></label> -->
                <input type="text" id="name" name="name" placeholder="Name as Pancard" required><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="fname">Email <span style="color: red;">*</span></label> -->
                <input type="email" name="email" placeholder="Email" autocomplete="off" required class="error">
                <label for="email" generated="true" class="error"><b>Please enter valid email</b></label><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="lname">Mobile <span style="color: red;">*</span></label> -->
                <input type="number" id="mobile" name="mobile" placeholder="Phone Number" autocomplete="off"><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="lname">DOB <span style="color: red;">*</span></label> -->
                <input type="text" id="datepicker" name="dob" placeholder="Date Of Birth" readonly
                  class="hasDatepicker1">
                <br><br>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="lname">Pancard <span style="color: red;">*</span></label> -->
                <input type="text" id="pancard" name="pancard" placeholder="Pancard number" style="" required><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="lname">Aadhar No <span style="color: red;">*</span></label> -->
                <input type="number" id="aadharNo" name="aadharNo" placeholder="Aadhaar Number"><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-42">
                <!-- <label for="lname">Gender <span style="color: red;">*</span></label> -->
                <select id="gender" name="gender">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select><br><br>
              </div>
            </div>

            <div class="row">
              <input type="hidden" id="salaryMode" name="salaryMode" value="Salaried">
              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="country">State <span style="color: red;">*</span></label> -->
                <select id="state" name="state">
                  <option value="">Select State</option>
                  <option value='13_Bihar'>Bihar</option>
                  <option value='2_Delhi'>Delhi</option>
                  <option value='3_Gujarat'>Gujarat</option>
                  <option value='12_Haryana'>Haryana</option>
                  <option value='4_Karnataka'>Karnataka</option>
                  <option value='6_Maharashtra'>Maharashtra</option>
                  <option value='11_Punjab'>Punjab</option>
                  <option value='14_Rajasthan'>Rajasthan</option>
                  <option value='8_Tamil Nadu'>Tamil Nadu</option>
                  <option value='10_Telangana'>Telangana</option>
                  <option value='5_Uttar pradesh'>Uttar pradesh</option>
                  <option value='9_West Bengal'>West Bengal</option>
                </select><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <!-- <label for="country">City <span style="color: red;">*</span></label> -->
                <select id="city" name="city">
                  <option value="">Select first state</option>
                </select>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4 myinput">
                <!-- <label for="lname">Pincode <span style="color: red;">*</span></label> -->
                <input type="number" class="myinput" id="pincode" name="pincode" placeholder="Enter Pincode"
                  required><br><br>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-42">
                <!-- <label for="lname">Employee Type <span style="color: red;">*</span></label> -->
                <select id="salaryMode" name="salaryMode">
                  <option value="">Select Employee Type</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Government Job">Government Job</option>
                  <option value="Other">Other</option>
                </select><br><br>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-42">
                <!-- <label for="lname">Loan Purpose <span style="color: red;">*</span></label> -->
                <select id="purpose" name="purpose">
                  <option value="">Select Purpose</option>
                  <option value="Personal">Personal</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Medical">Medical</option>
                  <option value="Travel">Travel</option>
                  <option value="Loan Payment">Loan Payment</option>
                  <option value="Bill Payment">Bill Payment</option>
                  <option value="Other">Other</option>
                </select><br><br>
              </div>
            </div>

            <div class="row">
              <div class="col-md-1" style="padding-top:5px;">
                <input type="checkbox" id="vehicle1" name="" value="" required>
              </div>

              <div class="col-md-11">
                <label for=""
                  style="text-align: justify;color: rgba(64, 54, 99, 0.8);font-weight: 500;font-size: 15px; "><span
                    style="color: red;">*</span>
                  “I hereby give my free consent and authorize
                  <b style="color: rgba(35, 31, 48, 0.8);font-weight: bolder;"> Goodskill Securities And Services Ltd.
                  </b>
                  and its service provider by providing my personal information to obtain my Credit
                  Information Report and Credit Score from TransUnion. Ltd. for the purpose of risk assessment and
                  credit
                  underwriting and not for any other purposes".I agree to receive promotional, marketing emails
                  and Whatsapp Messages. <a href="/terms-and-conditions" style="color: #FFA500;"> "Terms and
                    Conditions" </a> and <a href="/privacy-policy" style="color: #FFA500;">"Privacy Policy".
                  </a>
                </label>
              </div>
            </div>
            <input style="margin: 0 auto; padding: 10px;" type="submit" value="Apply Now" name="sub">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isActive = ref(true);

const handleScroll = () => {
  isActive.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const submitForm = () => {
  console.log('Form submitted!');
};
</script>

<style scoped lang="scss">
@import '/src/css/applyloan-page.scss';
</style>
