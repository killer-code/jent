<template>
  <div data-depth="0.05" class="canvas sequence-2"></div>
</template>

<script>
export default {
  name: 'AnimationTwo',
  props: ['scroll', 'json_2', 'sprite_2'],
  data: () => ({
    
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  },
  mounted() {
    this.createScene();
  },
  methods: {
    createScene() {
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }

      const sequence = document.querySelector('.sequence-2');
      const self = this; 

      sequence.appendChild(self.app.view);
      
      self.app.loader
        .add('image', this.json_2.meta.image)
        .load((loader, resources) => {
          const texture = new this.$PIXI.Texture.from(this.sprite_2);
          const sheet = new this.$PIXI.Spritesheet(texture, this.json_2);
          sheet.parse(() => {
            this.onAssetsLoaded2();
          })
        })
    },

    onAssetsLoaded2() {
      const frames = [];
      if ( this.scroll !== 1 ) {
        for ( let i = 60; i < 61; i++ ) {
          const val = i;
          frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
          const anim = new this.$PIXI.AnimatedSprite(frames);
          this.app.stage.addChild(anim);
        }
      } else {
        for ( let i = 60; i < 92; i++ ) {
          const val = i;

          frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
          const anim = new this.$PIXI.AnimatedSprite(frames);
          
          anim.x = this.app.screen.width / 2;
          anim.y = this.app.screen.height / 2;
          anim.anchor.set(.5);
          anim.animationSpeed = .3;
          anim.loop = false;
          anim.play();

          this.app.stage.addChild(anim);
        }
      }
    },
  },
  watch: {
    scroll() {
      if ( this.scroll === 1 ) {
        if ( this.app.stage ) {
          for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        };
        this.onAssetsLoaded2()
      }
    }
  }
}
</script>
