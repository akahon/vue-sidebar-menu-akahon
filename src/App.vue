<template>
  <div>
    <sidebar-menu-akahon @search-input-emit="va" />
  </div>
</template>

<script>
import SidebarMenuAkahon from "@/components/Sidebar-menu-akahon.vue"

export default {
  name: "App",
  components: {
    SidebarMenuAkahon,
  },
  methods: {
    va(val) {
      console.log('va', val)
    }
  }
}
</script>

<style></style>
