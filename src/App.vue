<script >
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppSponsor from './components/AppSponsor.vue'
import AppInfo from './components/AppInfo.vue'
import AppFooter from './components/AppFooter.vue'

export default{
  components:{
    
    AppHeader,
    AppHero,
    AppSponsor,
    AppInfo,
    AppFooter
  }
}
</script>

<template>
<AppHeader></AppHeader>
<AppHero></AppHero>

<router-view></router-view>

<AppSponsor></AppSponsor>

<AppInfo></AppInfo>

<AppFooter></AppFooter>

</template>

<style lang="scss" >
@use './style/generic';

</style>
