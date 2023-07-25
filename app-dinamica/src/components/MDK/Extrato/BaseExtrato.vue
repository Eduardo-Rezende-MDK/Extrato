<template>

  <q-timeline v-bind="{ ...mlayout }">
    <slot name="custom"></slot>
    <q-timeline-entry v-for="d in mdata.entry" :key="d.id" v-bind="{ ...d }">
      <div v-if="d?.body?.type == 'componente'">

        <!-- <component :is="d.body.val" /> -->
        <item-extrato v-model:_template="mItemTemplate" :data="d.body.data" v-on="{ ...customEvt }" />
      </div>
    </q-timeline-entry>


  </q-timeline>
</template>

<script>
import ItemExtrato from './ItemExtrato.vue'
import { mockup } from './doc.js'





export default {
  MDK: {

    descriptors: {

      data: {
        entry: "array|q-timeline-entry",
        entry_ItemExtrato: {
          title: "string|data",
          subtitle: "string|saldo",
          body: {
            type: "componente",
            val: "item-extrato",
          }
        }
      },

      setup: {
        layout: "q-timeline"
      },

      itemTemplate:{
        nota: "Sub Componente",
        descriptors: ItemExtrato.MDK.descriptors


      }


    },

    mockup: {

      data: mockup.data,
      setup: mockup.setup

    }


  },


  created() {
    this.mlayout = { ...this.mlayout, ...this._setup?.layout}
    this.customEvt ={...this.customEvt, ...this.events}
    // this.mItemTemplate

    this.mItemTemplate = { ...this.mItemTemplate, ...this._setup?.itemTemplate}
   // console.log("C", this.mlayout.itemTemplate)
    if (!this.data){
      this.mdata= mockup.data
    }else{
      this.mdata = this.data
    }

    // this.myt.C.icon.color = "black"
  },
  methods: {

    itemclickX() {
      alert("ow")
    }
  },
  props: {
    _setup: Object,
    isDefault: Boolean,
    data: Object,
    events:Object,

  },

  data() {
    return {

      mdata: mockup.data,
      mlayout: mockup.setup.layout,
      mItemTemplate:mockup.setup.itemTemplate,
      customEvt: {
        itemclick: (p) => { console.log("MDK", p) }
      },
     // item_template: mockup.setup.itemTemplate
    }
  },
  name: 'BaseExtrato',
  components: {
    ItemExtrato

  },
  setup() {
    return {}
  }
}
</script>
<style>
.timeline_entry_list_icon {
  width: 60px;
  align-items: flex-start !important;

}

.timeline_entry_list_valor {
  width: 100px;
  text-align: right;
  max-width: 100px !important;
  font-size: 14px;
  font-weight: bold;

}

.timeline_entry_list_total {

  font-size: 16px !important;

}
</style>
