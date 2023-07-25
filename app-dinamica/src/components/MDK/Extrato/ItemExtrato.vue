<template>
  <div>
    <q-list>
      <div v-for="m in model.itens" :key="m.id">
        <q-separator v-if="m.sep" />
        <q-item clickable v-ripple @click="fn_itemclick(m)">
          <q-item-section :class="template[m.t].txt1_class">{{
            m.txt1
          }}</q-item-section>
          <q-item-section avatar :class="template[m.t].avatar_class">
            <q-icon v-bind="template[m.t].icon" />
          </q-item-section>
          <q-item-section :class="template[m.t].txt2_class">{{ m.txt2 }}</q-item-section>

        </q-item>
      </div>
    </q-list>

  </div>
</template>

<script>
import { event } from 'quasar'


const descriptorItemExtrato = {




  itens: [{
    txt1: "R$ 300,00",
    txt2: "Saldo Anterior",
    ref: "123",
    t: "A",

  },
  {
    txt1: "R$ 100,00",
    txt2: "Credito da Carteira X",
    ref: "123",
    emit: { event: "itemclick", p: "para1" },
    act: ["itemclick", "paraHHHHH"],
    t: "C",
  },
  {
    txt1: "R$ 50,00",
    txt2: "Debito para Carteira Y",
    ref: "123",
    act: true,
    t: "D",
  },
  {
    txt1: "R$ 350,00",
    txt2: "Saldo",
    ref: "123",
    t: "S",
    sep: true
  }

  ]

}

const templateItemExtrato =
{
  // A: {
  //   color: "grey-8 ",
  //   icon: "pending"
  // },
  // C: {
  //   color: "positive",
  //   icon: "add_circle"
  // },
  // D: {
  //   color: "negative",
  //   icon: "remove_circle"
  // },
  // S: {
  //   color: "primary",
  //   icon: "monetization_on"
  // }
  A: {
    txt1_class: "text-grey-8 timeline_entry_list_valor timeline_entry_list_total",
    avatar_class: "timeline_entry_list_icon",
    icon: { name: "pending", color: "grey-8" },
    txt2_class: ""
  },
  C: {
    txt1_class: "text-positive timeline_entry_list_valor timeline_entry_list_total",
    avatar_class: "timeline_entry_list_icon",
    icon: { name: "add_circle", color: "positive" },
    txt2_class: ""
  },
  D: {
    txt1_class: "text-negative timeline_entry_list_valor timeline_entry_list_total",
    avatar_class: "timeline_entry_list_icon",
    icon: { name: "remove_circle", color: "negative" },
    txt2_class: ""
  },
  S: {
    txt1_class: "text-primary timeline_entry_list_valor timeline_entry_list_total",
    avatar_class: "timeline_entry_list_icon",
    icon: { name: "monetization_on", color: "primary" },
    txt2_class: ""
  },
}


export default {

  templates: {
    A: {
      txt1_class: "text-grey8 timeline_entry_list_valor timeline_entry_list_total",
      avatar_class: "timeline_entry_list_icon",
      icon: { name: "pending", color: "grey8" },
      txt2_class: ""
    }

  },

  MDK: {
    notas: [
      "subcomponente do extrato, para exibir a movimentação",
      "usa de base o q-list",
    ],
    descriptors: {
      data:{
        itens:"array de item",
        item:{
        emit: { event: "string", args: "array", trigger: "@click" },
        txt1: "string",
        txt2: "string",
        t: "key in setup.templates",
        sep: "bolean|false inclui separador"
       }

      },
      setup:{
        templates: "array|object de template",
        template: {
        txt1_class: "class",
        avatar_class: "class",
        icon: "q-icon",
        txt2_class: "class"
      },

      },
    }
    ,
    mockup: {
      setup: {
        template: templateItemExtrato,
      },
      data: {
        itens: descriptorItemExtrato,
      }
    },
  },

  me: {


    defaults: {
      templateItemExtrato: templateItemExtrato,
      descriptorItemExtrato: descriptorItemExtrato
    }
  },
  methods: {
    fn_itemclick(m) {
      if (m.emit) {

        this.$emit(m.emit.event, m.emit.p)

      }
    }
  },
  name: 'ItemExtrato',
  setup() {
    const myv = "jjj"
    return { myv }
  },
  props: {
    _template: Object,
    isDefault: Boolean,
    data: Object,

  },

  created() {

    this.template = { ... this.template, ...this._template}
    if (this.isDefault) {
      this.model = descriptorItemExtrato
    } else {
      this.model = this.data
    }
  },
  data() {
    return {
      model: null,
      template: null
    }
  },
}
</script>
