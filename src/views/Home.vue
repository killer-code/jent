<template>
  <div class="home">
    
      <div class="section">
        <ScreenOne />
      </div>
      <div class="section">
        Second section ...
      </div>
    
  </div>
</template>

<script>
import ScreenOne from '@/components/home/ScreenOne'

export default {
  name: 'Home',
  components: { ScreenOne, },
}
</script>
