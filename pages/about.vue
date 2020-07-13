<template>
  <div class="about container">
    <div class="columns">
      <div class="column">
        <img src="/medmandu_aboutus.png" />
      </div>
      <div class="column">
        <h1 class="is-size-5">Welcome to</h1>
        <h1 class="is-size-3 has-text-info has-text-weight-bold">Medmandu Nepal</h1>
        <br />
        <p>
          Purchasing authentic medicines has never been easier thanks to Medmandu. Never again do you have to worry about running to your neighborhood pharmacy when you need medicines or refills on your prescription.
          <br />
          <br />Through Medmandu you can order your medicines from the comfort of your home and have your medicines delivered to your doorstep. Medmandu is the one of the best online pharmacy that brings information about medicines to your fingertips. Never again will your questions go unanswered regarding your medicines and why your doctor prescribed them. Medmandu is the first online pharmacy that is teaching you how to take your medicines and providing you information about the disease for which you are being treated
        </p>

        <br />
        <br />
        <h1 class="is-size-6">Opening Hours</h1>
        <br />
        <table class="table has-text-grey-dark">
          <tbody>
            <tr>
              <td>Monday - Friday :</td>
              <td class="has-text-right">8:00 - 17:00</td>
            </tr>
            <tr>
              <td>Saturday :</td>
              <td class="has-text-right">9:00 - 17:00</td>
            </tr>
            <tr>
              <td>Sunday :</td>
              <td class="has-text-right">9:00 - 17:00</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <Services />
      </div>
    </div>
  </div>
</template>
<script>
import Services from "@/components/index/Services";

export default {
  components: {
    Services
  }
};
</script>
<style scoped lang="scss">
.about {
  padding-top: 92px;
}

p {
  font-size: 14px;
}

table {
  width: 100%;
  font-size: 14px;
}
</style>