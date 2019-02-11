<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="usernameFormGroup"
                    label="Username"
                    label-for="username"
                    description="Username: art">
                    <b-form-input id="username"
                      type="text"
                      v-model="username"
                      :class="{ 'is-invalid': submitted && !username }">
                    </b-form-input>
                    <div v-show="submitted && !username" class="invalid-feedback">
                      Username is required
                    </div>
                  </b-form-group>
                  <b-form-group id="passwordFormGroup"
                    label="Password"
                    label-for="password"
                    description="Password: bosco">
                    <b-form-input id="password"
                      type="password"
                      v-model="password"
                      :class="{ 'is-invalid': submitted && !password }">
                    </b-form-input>
                    <div v-show="submitted && !password" class="invalid-feedback">
                      Password is required
                    </div>
                  </b-form-group>

                  <b-button type="submit" variant="primary">
                    Login
                    <font-awesome-icon v-show="loggingIn" icon="spinner" size="xs" spin />
                  </b-button>
                  &nbsp;
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      show: true,
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.auth.status.loggingIn;
    },
  },
  created() {
    // reset login status
    this.$store.dispatch('auth/logout');
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.submitted = true;
      const { dispatch } = this.$store;
      if (this.username && this.password) {
        dispatch('auth/login', {
          username: this.username,
          password: this.password,
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset form values
      this.username = '';
      this.password = '';
      this.submitted = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => { this.show = true; });
    },
  },
};
</script>
