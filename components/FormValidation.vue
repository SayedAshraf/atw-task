<template>
  <div class="card">
    <h3 class="card-header text-center">Contact US!</h3>
    <div class="card-body">
      <form @submit.prevent="SubmitForm" action="">
        <div class="form-row">
          <!-- Start Name Section -->
          <div class="form-group col-md-12">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.name.$model"
              :class="{
                'is-invalid': $v.name.$error,
                'is-valid': !$v.name.$invalid,
              }"
            />
            <div class="valid-feedback">Your name is Valid.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.name.required">Name is Required.</span>
              <span v-if="!$v.name.minLength"
                >Name Must have at least
                {{ $v.name.$params.minLength.min }} letters.</span
              >
            </div>
          </div>
          <!-- End Name Section -->

          <!-- Start Email Section -->
          <div class="form-group col-md-12">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model.trim="$v.email.$model"
              :class="{
                'is-invalid': $v.email.$error,
                'is-valid': !$v.email.$invalid,
              }"
            />
            <div class="valid-feedback">Your Email is Valid.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.email.required">Email is Required.</span>
            </div>
          </div>
          <!-- End Email Section -->

          <!-- Start Phone Section -->
          <div class="form-group col-md-12">
            <label>Phone</label>
            <input
              type="number"
              class="form-control"
              v-model.lazy="$v.phone.$model"
              :class="{
                'is-invalid': $v.phone.$error,
                'is-valid': !$v.phone.$invalid,
              }"
            />
            <div class="valid-feedback">Your phone is Valid.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.phone.required">phone is Required.</span>
              <span v-if="!$v.phone.isPhone">Phone is inValid.</span>
              <span v-if="!$v.phone.numeric">Phone number only numeric accepted.</span>
            </div>
          </div>
          <!-- End phone Section -->

          <!-- Start Message Section -->
          <div class="form-group col-md-12">
            <label>Message</label>
                <b-form-textarea id="textarea" v-model="message" placeholder="Write something..." rows="3" max-rows="6"></b-form-textarea>
          </div>
          <!-- End Message Section -->
        </div>
        <button type="submit" class="btn btn-success">Submit {{submitstatus}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, between, email, withParams , numeric} from "vuelidate/lib/validators";

export default {
  name: "formvalidation",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      submitstatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      numeric,
      isPhone(value) {
        if (value === "") return true;

        //declear phone pattern
        var phone_regx = /^\d{11}$/;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(phone_regx.test(value));
          }, 350 + Math.random() * 300);
        });
      },
    },
  },
  methods:{
    SubmitForm(){
      this.$v.$touch()
      if(this.$v.$invalid){
        this.submitstatus = "FAIL"
      }else{
        this.submitstatus = "SUCCESS"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
