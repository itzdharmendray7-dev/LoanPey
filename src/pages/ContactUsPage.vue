<template>
  <q-page>
    <HeaderSection />

    <section class="page-header">
      <div class="container">
        <div class="page-header-item d-flex align-items-center justify-content-center">
          <div class="post-content">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </section>

    <div class="breadcamp">
      <div class="container">
        <ul class="d-flex flex-wrap justify-content-center align-items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a class="active">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="contact style-2 padding-tb">
      <div class="container">
        <div class="section-wrapper row justify-content-center">
          <div class="col-lg-8 col-12">
            <div class="contact-part">
              <div class="contact-title">
                <h4>Don’t Hesitate to contact Us</h4>
              </div>

              <div class="contact-form d-flex flex-wrap justify-content-between">

                <form action="#" method="post" autocomplete="off" id="formValidation" enctype="multipart/form-data">
                  <input type="text" name="name" placeholder="Your Name">
                  <input type="email" name="email" placeholder="Your Email">
                  <input type="tel" name="phone" placeholder="Phone">
                  <input type="text" name="subject" placeholder="Subject">
                  <textarea rows="7" name="message" placeholder="Enter Your Message"></textarea>
                  <input class="btn" type="submit" name="sub" value="Send Message">
                </form>

              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12">
            <div class="info-part">

              <ul class="schedule">
                <li><i class="far fa-clock"></i> Mon - Sat : 10:00 AM - 6:30 PM</li>
                <li><i class="fas fa-lock"></i> Sunday : <span>Closed</span></li>
              </ul>

              <div class="contact-info">
                <h4>We Are Here!</h4>
                <p>D-56 Second Floor Sector-2 <br> Noida-201301 (U.P)</p>
                <a href="#">Find Us On Google Map</a>

                <ul class="details">
                  <li>
                    <p>Email</p>
                    info@loanpey.com
                  </li>

                  <li>
                    <p>Phone</p>
                    <a href="tel:+91-9697959097" style="font-size: 20px;"> +91-9697-959-097</a>
                  </li>
                </ul>

                <ul class="social-media-icons">
                  <li>
                    <a class="facebook" href="https://www.facebook.com/LoanPey/" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a class="linkedin" href="https://www.linkedin.com/company/loanpey/" target="_blank">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a class="youtube" href="https://www.instagram.com/loanpey/" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  title: 'Contact Us',
  titleTemplate: (title: string) => `${title}-${metaStore.siteTitle}`,
};

onMounted(() => {
  useMeta(metaData);
});
</script>
