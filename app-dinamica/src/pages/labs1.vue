<template>
  <q-page padding>
    <h5>LABS1</h5>
    <div >

    <q-btn class="q-mr-md" label="MOCKUP em JSON" @click="makeJSON(mockup_ex1)" color="primary"></q-btn>
  </div><br>
  <div >

    <q-btn class="q-mr-md" label="DESCRITOR em JSON" @click="makeJSON(descritor_ex1)" color="primary"></q-btn>
  </div><br>
    <base-extrato></base-extrato>
  </q-page>
</template>

<script>
import { exportFile } from 'quasar'
import BaseExtrato from "src/components/MDK/Extrato/BaseExtrato.vue";

export default {

  data() {
    return {
      mockup_ex1:  BaseExtrato.MDK.mockup,
      descritor_ex1:  BaseExtrato.MDK.descriptors,

    };
  },
  created() {

  },
  methods: {
    fn1(){

console.log("MDK", this.mockup_ex1)
    },
    makeJSON(data){
     let j = JSON.stringify(data, null, 4)
     let status = exportFile('export.json', j)
    },
  },
  name: "LabsName1",
  components: {
    BaseExtrato,

  },
};
</script>
