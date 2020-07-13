<template>
  <div class="container">
    <div class="contact">
      <h1 class="is-size-5">Contact Us</h1>
    </div>
    <br />
    <br />
    <div class="columns is-multiline is-mobile">
      <div class="column is-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8623817430525!2d85.31925861480026!3d27.69064798279881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191b13c6b109%3A0x95410bd800554aed!2sMedmandu!5e0!3m2!1sen!2snp!4v1592311755203!5m2!1sen!2snp"
          width="100%"
          height="350"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <div class="column is-12">
        <br />
        <div class="columns">
          <div class="column is-4 is-flex">
            <i class="las la-map-marked"></i>
            <div class="content">
              <b>Location:</b>
              <br />
              <span>Thapathali, Kathmandu</span>
            </div>
          </div>

          <div class="column is-4 is-flex">
            <i class="las la-phone-volume"></i>

            <div class="content">
              <b>Phone:</b>
              <br />
              <span>+977 9813066081</span>
            </div>
          </div>

          <div class="column is-4 is-flex">
            <i class="las la-envelope"></i>
            <div class="content">
              <b>Email:</b>
              <br />
              <span>medmandu@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-12">
        <br />
        <div class="columns">
          <div class="column is-6">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="John Doe" />
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="johndoe@example.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-12">
        <div class="field">
          <label class="label">Enquiry</label>
          <div class="control">
            <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
          </div>
        </div>
        <button class="button is-info is-radiusless">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 64px;
  margin-bottom: 64px;
}

.contact {
  background: #fafaf1;
  h1 {
    background-color: #00d1b2;
    width: 152px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    color: #fff;
  }
  h1::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: #fafafa;
    border: #00d1b2 19px solid;
    border-right: transparent 24px solid !important;
    top: 0;
  }
}

.button {
  margin-top: 8px;
}

.content {
  font-size: 15px;
}

.is-flex {
  justify-content: center;
  align-items: center;
  i {
    font-size: 42px;
    margin-right: 16px;
    color: #3298dc;
  }
  span {
    color: #6f6f6f;
  }
}

@media screen and (max-width: 768px) {
  .is-flex {
    justify-content: unset !important;
  }
}
</style>
