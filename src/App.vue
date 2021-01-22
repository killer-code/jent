<template>
  <div id="app">
    <vue-extend-layouts/>
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  components: { VueExtendLayouts },
  metaInfo() {
    return {
      title: 'Jent',
      meta: [
        { charset: 'utf-8' },
        { lang: 'ru' },
        { 
          name: 'description', 
          content: 'Джент — это инновационное средство для усиления' +
                    'потенции в удобном формате спрея для приема' +
                    'внутрь. Джент воздействует на естественные' +
                    'механизмы возникновения эрекции и начинает' +
                    'действовать уже через 10 минут' 
        },
      ]
    }
  },
}
</script>
