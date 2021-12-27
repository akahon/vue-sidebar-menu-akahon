<template>
  <div>
    <sidebar-menu-akahon 
      @search-input-emit="search"
    />
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
    search(val) {
      
    }
  }
}
</script>

<style></style>
