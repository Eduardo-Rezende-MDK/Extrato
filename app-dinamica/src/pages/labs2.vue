<template>
  <q-page padding>
    <h5>LABS2</h5>
    <div >

    <q-btn class="q-mr-md" label="CUSTOM em JSON" @click="makeJSON(mock)" color="primary"></q-btn>
  </div><br>

    <base-extrato
    :data="mock.data"
    v-model:_setup="mock.setup"
    :events="{ ...myEvents}"
    ></base-extrato>
  </q-page>
</template>

<script>
import { exportFile } from 'quasar'
import BaseExtrato from "src/components/MDK/Extrato/BaseExtrato.vue";

const mockup_custom = `
{
    "data": {
        "entry": [
            {
                "heading": true,
                "body": "MOCKUP LABS2"
            },
            {
                "title": "01/03/2023 - usei o dia do evento",
                "subtitle": "SALDO: R$400,00 - usei o saldo no final do dia",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                            {
                                "txt1": "R$ 350,00",
                                "txt2": "Saldo Anterior - so pra ficar facil a matematica",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 100,00",
                                "txt2": "Credito da Carteira X - deixei um exemplo de click no emit",
                                "emit": {
                                    "event": "itemclick",
                                    "p": "exibi isso em console.log"
                                },

                                "t": "C"
                            },
                            {
                                "txt1": "R$ 50,00",
                                "txt2": "Debito para Carteira Y - coloquei o nome de onde veio o R$",

                                "t": "D"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "Saldo - tem todas opções do meu design A,C,D,S",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            },
            {
                "title": "01/02/2023 - MARCA DE LOOP",
                "subtitle": "SALDO: R$350,00",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                          {
                                "txt1": "R$ 350,00",
                                "txt2": "Saldo Anterior - so pra ficar facil a matematica",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 100,00",
                                "txt2": "Credito da Carteira X - deixei um exemplo de click no emit",
                                "emit": {
                                    "event": "itemclick",
                                    "p": "exibi isso em console.log"
                                },

                                "t": "C"
                            },
                            {
                                "txt1": "R$ 50,00",
                                "txt2": "Debito para Carteira Y - coloquei o nome de onde veio o R$",

                                "t": "D"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "Saldo - tem todas opções do meu design A,C,D,S",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            }

        ]
    }


}
`



export default {

  data() {
    return {
      mockup_ex1:  mockup_custom,
      descriptor: BaseExtrato.MDK.descriptors,
      toJSON:null,


      mock: JSON.parse(mockup_custom),


    };
  },
  created() {

  },
  methods: {
    fn1(){

console.log("MDK", this.mockup_ex1)
    },
    fn2(){

console.log("MDK", this.descriptor)
    },
    makeJSON(data){
     let j = JSON.stringify(data, null, 4)
     let status = exportFile('export.json', j)
    },

    fn_alerta(){

      alert("EI")
    }
  },
  name: "LabsName2",
  components: {
    BaseExtrato,

  },
};
</script>
