<template>
  <q-page padding>
    <h5>LABS4</h5>
    <div>

      <q-btn class="q-mr-md" label="ADVANCE em JSON" @click="makeJSON(mock)" color="primary"></q-btn>
    </div><br>

    <base-extrato :data="mock.data" v-model:_setup="mock.setup" :events="{ ...myEvents }"></base-extrato>

    <q-dialog v-model="meuDialog_setup.show" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="purple" text-color="white" />
          <span class="q-ml-sm">Valor do Extorno: {{ meuDialog_setup.txt }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="purple" v-close-popup />

        </q-card-actions>
      </q-card>
    </q-dialog>



  </q-page>
</template>

<script>
import { exportFile } from 'quasar'
import BaseExtrato from "src/components/MDK/Extrato/BaseExtrato.vue";

const advMock=`
{
    "data": {
        "entry": [
            {
                "heading": true,
                "body": "LAB MOCK 4 "
            },
            {
                "title": "01/03/2023",
                "subtitle": "SALDO: R$400,00",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                            {
                                "txt1": "R$ 350,00",
                                "txt2": "Saldo Anterior",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 100,00",
                                "txt2": "Credito da Carteira X",
                                "emit": {
                                    "event": "itemclick",
                                    "p": "CARTEIRA X"
                                },
                                "t": "C"
                            },
                            {
                                "txt1": "R$ 50,00",
                                "txt2": "Debito para Carteira Y",
                                "emit": {
                                    "event": "alerta"
                                },
                                "t": "D"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "CLICA EM MIM!!!",
                                "emit": {
                                    "event": "meuDialog",
                                    "p": "R$ 400,00"
                                },
                                "t": "E"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "Saldo",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            },
            {
                "title": "01/03/2023",
                "subtitle": "SALDO: R$400,00",
                "icon": "thumb_up",
                "color": "light-green-10",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                            {
                                "txt1": "R$ 350,00",
                                "txt2": "Saldo Anterior",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 100,00",
                                "txt2": "Credito da Carteira X",
                                "emit": {
                                    "event": "itemclick",
                                    "p": "para1"
                                },
                                "t": "C"
                            },
                            {
                                "txt1": "R$ 50,00",
                                "txt2": "Debito para Carteira Y",
                                "t": "D"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "Saldo",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            },
            {
                "title": "01/03/2023",
                "subtitle": "SALDO: R$400,00",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                            {
                                "txt1": "R$ 350,00",
                                "txt2": "Saldo Anterior",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 100,00",
                                "txt2": "Credito da Carteira X",
                                "emit": {
                                    "event": "itemclick",
                                    "p": "para1"
                                },
                                "t": "C"
                            },
                            {
                                "txt1": "R$ 50,00",
                                "txt2": "Debito para Carteira Y",
                                "t": "D"
                            },
                            {
                                "txt1": "R$ 400,00",
                                "txt2": "Saldo",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            },
            {
                "heading": true,
                "body": "FOI FERIADO"
            },
            {
                "title": "so funciona...",
                "subtitle": "Eu não disse que...",
                "body": "com meu componente..."
            },
            {
                "title": "01/03/2023",
                "subtitle": "SALDO: - R$10,00",
                "icon": "thumb_down",
                "color": "red",
                "body": {
                    "type": "componente",
                    "val": "item-extrato",
                    "data": {
                        "itens": [
                            {
                                "txt1": "R$ 0,00",
                                "txt2": "Saldo Anterior",
                                "t": "A"
                            },
                            {
                                "txt1": "R$ 10,00",
                                "txt2": "Debito ",
                                "t": "D"
                            },
                            {
                                "txt1": "- R$ 10,00",
                                "txt2": "Saldo, Deu Ruim Saldo Negativo",
                                "t": "S",
                                "sep": true
                            }
                        ]
                    }
                }
            }
        ]
    },
    "setup": {
        "layout": {
            "color": "amber-10"
        },
        "itemTemplate": {
            "S": {
                "txt1_class": "text-primary timeline_entry_list_valor timeline_entry_list_total",
                "avatar_class": "timeline_entry_list_icon",
                "txt2_class": "",
                "icon": {
                    "color": "orange-5",
                    "name": "monetization_on"
                }
            },
            "E": {
                "txt1_class": "text-purple timeline_entry_list_valor timeline_entry_list_total",
                "avatar_class": "timeline_entry_list_icon",
                "txt2_class": "extorno_css_classe",
                "icon": {
                    "color": "purple",
                    "name": "warning",
                    "size": "40px"
                }
            }
        }
    }
}
`




export default {

  data() {
    return {
      mockup_ex1: BaseExtrato.MDK.mockup,
      descriptor: BaseExtrato.MDK.descriptors,
      toJSON: null,

      mock: JSON.parse(advMock),

      meuDialog_setup:{
      show: false,
      txt: "",
      },
      myEvents: {
        itemclick: (p) => { console.log("MDK", "MODIFICADO: " + p) },
        alerta: this.fn_alerta,
        meuDialog: this.fn_dialog
      },

    };
  },
  created() {

  },
  methods: {
    fn_dialog(p){
      console.log("BATEU")
      this.meuDialog_setup.show = true
      this.meuDialog_setup.txt = p


    },
    fn1() {

      console.log("MDK", this.mockup_ex1)
    },
    fn2() {

      console.log("MDK", this.descriptor)
    },
    makeJSON(data) {
      let j = JSON.stringify(data, null, 4)
      let status = exportFile('export.json', j)
    },

    fn_alerta() {

      alert("EI")
    }
  },
  name: "LabsName2",
  components: {
    BaseExtrato,

  },
};
</script>

<style >
.extorno_css_classe{
  color: #fff;
    background-color: #4f4f4f;
    max-width: 100px;
    text-align: center;
    margin-left: 20px;
}
</style>
