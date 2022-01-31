<template>
  <div class="form-container">
    <v-container>
      <v-container>
      <h2>Seus dados</h2>
      <hr />
      <v-form ref="form" lazy-validation class="form-content">
        <v-text-field filled label="Name" required />
        <v-text-field filled label="Link da sua foto" required />
         <v-text-field filled label="Whatsapp" required />
      </v-form>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import "./styles.scss";
export default {};
</script>

