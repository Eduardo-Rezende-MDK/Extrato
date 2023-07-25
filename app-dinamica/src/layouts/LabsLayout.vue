<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white " style="background-color: #ff6300b0;">
      <q-toolbar class="">
        <q-toolbar-title>

          { ... ARGS }
        </q-toolbar-title>
        <q-space />
        <q-tabs  shrink>
        <q-route-tab  label="Home" name="Home" to="/home" />
        <q-route-tab  label="labs1" name="labs1" to="/labs1"/>
        <q-route-tab  label="labs2" name="labs2" to="/labs2"/>
        <q-route-tab  label="labs3" name="labs3" to="/labs3"/>
        <q-route-tab  label="labs4" name="labs4" to="/labs4"/>
        <q-route-tab  label="labs5" name="labs5" to="/labs5"/>
      </q-tabs>
      </q-toolbar>
    </q-header>



    <q-page-container class="fit row wrap justify-center items-start content-center">
<div  class="col-6 overflow: auto;">

<learn-app></learn-app>


</div>
<div  class="col-6 overflow: auto;">

      <router-view />
    </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>

          <div>Desestruturação de Objetos</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import LearnApp from '../components/learn.vue'

export default defineComponent({
  components: { LearnApp},
  name: 'LabsLayout',


})
</script>
