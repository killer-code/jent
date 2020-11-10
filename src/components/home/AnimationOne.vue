<template>
  <section class="scene" style="position: fixed;">
    <div data-depth="0.05" class="canvas sequence-1"></div>
  </section>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'AnimationOne',
  props: ['scroll', 'json_1', 'sprite_1'],
  data: () => ({
    mouseX: 0,
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
  },
  mounted() {
    this.createScene();
    document.addEventListener('mouseover', this.getMouseX, false);
  },
  methods: {
    createScene() {
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }

      const scene = document.querySelector('.scene');
      let parallaxInstance = new Parallax(scene);

      const sequence = document.querySelector('.sequence-1');
      const self = this; 

      sequence.appendChild(self.app.view);
      console.log( self.app )
      self.app.loader
        .add('image', this.json_1.meta.image)
        .load((loader, resources) => {
          console.log("loading: " + resources.image.url)
          console.log("progress: " + loader.progress + "%");
          const texture = new this.$PIXI.Texture.from(this.sprite_1);
          const sheet = new this.$PIXI.Spritesheet(texture, this.json_1);

          sheet.parse(() => {
            this.onAssetsLoaded();
          })
        })
    },
    loadProgressHandler(loader, resource) {
      //Display the file `url` currently being loaded
      console.log("loading: " + resource.url); 

      //Display the percentage of files currently loaded
      console.log("progress: " + loader.progress + "%"); 

      //If you gave your files names as the first argument 
      //of the `add` method, you can access them like this
      //console.log("loading: " + resource.name);
    },
    onAssetsLoaded() {
      const frames = [];
      if ( this.scroll === 0 ) {
      if ( this.mouseX === 0 ) {
        if ( this.app.stage ) {
          for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }

        for ( let i = 60; i < 61; i++ ) {
          const val = i;

          frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
          const anim = new this.$PIXI.AnimatedSprite(frames);

          anim.x = this.app.screen.width / 2;
          anim.y = this.app.screen.height / 2;
          anim.anchor.set(.5);

          this.app.stage.addChild(anim);
        }
      } else if ( this.mouseX < this.app.screen.width / 2 ) {
        if ( this.app.stage ) {
          for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }

        for ( let i = 1; i < 31; i++ ) {
          const val = i;

          frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
          const anim = new this.$PIXI.AnimatedSprite(frames);
          
          anim.x = this.app.screen.width / 2;
          anim.y = this.app.screen.height / 2;
          anim.anchor.set(.5);
          anim.animationSpeed = .4;
          anim.loop = false;
          anim.play();

          this.app.stage.addChild(anim);
        }
      } else {
        if ( this.app.stage ) {
          for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }

        for ( let i = 31; i < 61; i++ ) {
          const val = i;

          frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
          const anim = new this.$PIXI.AnimatedSprite(frames);
          
          anim.x = this.app.screen.width / 2;
          anim.y = this.app.screen.height / 2;
          anim.anchor.set(.5);
          anim.animationSpeed = .4;
          anim.loop = false;
          anim.play();

          this.app.stage.addChild(anim);
        }
      }
      }
    },
    onAssetsLoaded2() {
      let frames = [];
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]) };
      };
      for ( let i = 60; i < 92; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .5;
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },

    getMouseX(e) {
      let newMouseX = e.pageX;
      if ( Math.abs(newMouseX - this.mouseX) > 100 ) {
        this.mouseX = newMouseX;
        this.onAssetsLoaded();
      }
    }
  },
  watch: {
    scroll() {
      if ( this.scroll === 1 ) {
        this.onAssetsLoaded2();
      }
    }
  }
}
</script>