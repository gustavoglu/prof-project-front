<template>
  <div class="formpage-container">
    <header class="form-header">
      <div>
        <v-container>
          <h1>Que incrivel que você <br/> quer dar aulas</h1>
          <p>O primeiro passo, é preencher esse <br /> formulário de inscrição.</p>
        </v-container>
      </div>
    </header>
    <Form />
  </div>
</template>

<script>
import "./styles.scss";
import Form from '../../components/Form/Form.vue'
export default {
  components: {
    Form,
  },
};
</script>


