<template>
  <section class="canvas-background">
    <canvas :width="width" :height="height" 
      id="bg-canvas"></canvas>
  </section>
</template>

<script>

export default {
  name: 'CanvasBackground',
  props: ['loaded'],
  data: () => ({
    height: window.innerHeight,
    particles: [],

    mouse_coord: {
      x: 0, y: 0, rx: 0, ry: 0, speed: 5, delta: 0,
    },
    now: '',
    then: '',
  }),
  computed: {
    canvas: function() {
      const canvas = document.querySelector('#bg-canvas');
      return canvas;
    },
    ctx: function() {
      const ctx = this.canvas.getContext('2d');
      return ctx;
    },
    particalCount: function() {
      let count = 500;
      if ( window.innerWidth < 561 ) {
        count = 150;
      }
      return count;
    },
    width: function() {
      let width = window.innerWidth / 1.5;
      if ( window.innerWidth < 561 ) {
        width = window.innerWidth
      }
      return width;
    }
  },
  mounted() {
    this.ctx.globalCompositeOperation = "lighter";

    document.body.addEventListener('mousemove', this.moveParticles, false);

    this.createParticles();
    this.drawParticles();
    requestAnimationFrame(this.animateParticles);
  },
  methods: {
    randomNorm(mean, stdev) {
      const data = Math.abs(Math.round((Math.random() * 2 - 1) + 
        (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * 
        stdev);

      return data;
    },

    Particle(self) {
      this.color = `rgba(255, 255, 255, .05)`;
      this.shadowcolor = `rgba(255, 255, 255, .025)`;
    
      this.x = Math.random() * self.width;
      this.y = Math.random() * self.height + (window.innerHeight / 3.3);
      this.direction = {
          "x": -1 + Math.random() * 2,
          "y": -1 + Math.random() * 2
      };
      
      this.radius = self.randomNorm(0, 4);
      this.scale = .9;
      this.rotation = Math.PI / 4 * Math.random();
    
      this.grad = self.ctx.createRadialGradient( 
        this.x, this.y, this.radius, this.x, this.y, 0 
      );
      this.grad.addColorStop(.9, this.color);
      this.grad.addColorStop(.2, this.shadowcolor);
    
      this.vx = (2 * Math.random() + 4) * .005 * this.radius;
      this.vy = (2 * Math.random() + 4) * .015 * this.radius;
      
      this.valpha = 0.1 * Math.random() - .05;
      
      this.move = function () {
          this.x += this.vx * this.direction.x;
          this.y += this.vy * this.direction.y;
          this.rotation += this.valpha;
      };

      this.changeDirection = function (axis) {
          this.direction[axis] *= -1;
          this.valpha *= -1;
      };

      this.draw = function () {
        self.ctx.save();
        self.ctx.translate(
          this.x + self.mouse_coord.rx / -20 * this.radius, 
          this.y + self.mouse_coord.ry / -20 * this.radius
        );  
        // self.ctx.rotate(this.rotation);  
        self.ctx.scale(1, this.scale);
          
          this.grad = self.ctx.createRadialGradient( 
            0, 0, this.radius, 0, 0, 0 
          );
          this.grad.addColorStop(.9, this.color);
          this.grad.addColorStop(.1, this.shadowcolor);

          self.ctx.beginPath();
          self.ctx.fillStyle = this.grad;
          self.ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
          self.ctx.fill();
          self.ctx.restore();   
      };

      this.boundaryCheck = function () {
        if (this.x >= self.width * 1.2) {
            this.x = self.width * 1.2;
            this.changeDirection("x");
        } else if (this.x <= -self.width * 0.2) {
            this.x = -self.width * 0.2;
            this.changeDirection("x");
        }
        if (this.y >= self.height * 1.2) {
            this.y = self.height * 1.2;
            this.changeDirection("y");
        } else if (this.y <= -self.height * 0.2) {
            this.y = -self.height * 0.2;
            this.changeDirection("y");
        }
      };
    },

    createParticles() {
      for ( let i = 0; i <= this.particalCount; i ++ ) {
        const self = this;
        let p = new this.Particle(self);
        this.particles.push(p);
      }
    },

    drawParticles() {
      for ( let i = 0; i <= this.particalCount; i ++ ) {
        let p = this.particles[i];
        p.draw();
      } 
    },

    updateParticles() {
      for ( let i = 0; i <= this.particalCount; i ++ ) {
        let p = this.particles[i];
        p.move();
        p.boundaryCheck();
      }
    },

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    },

    setDelta() {  
      this.now               = (new Date()).getTime();  
      this.mouse_coord.delta = (this.now - this.then) / 1000;  
      this.then              = this.now;  
    },

    update() {  
      if(isNaN(this.mouse_coord.delta) || this.mouse_coord.delta <= 0) { 
        return; 
      }  

      let distX = this.mouse_coord.x - (this.mouse_coord.rx),  
          distY = this.mouse_coord.y - (this.mouse_coord.ry);  

      if(distX !== 0 && distY !== 0) {          
        this.mouse_coord.rx -= (
          (this.mouse_coord.rx - this.mouse_coord.x) / 
          this.mouse_coord.speed
        ); 
        this.mouse_coord.ry -= (
          (this.mouse_coord.ry - this.mouse_coord.y) / 
          this.mouse_coord.speed
        ); 
      }     
    }, 

    moveParticles(e) { 
      this.mouse_coord.x  = e.clientX / 5 || e.pageX / 5; 
      this.mouse_coord.y  = e.clientY / 5 || e.pageY / 5;
      this.mouse_coord.x -= this.width / 40;
      this.mouse_coord.y -= this.height / 40;  
    },

    animateParticles() {
      this.clearCanvas();
      this.setDelta();
      this.update();
      this.drawParticles();
      this.updateParticles();
      requestAnimationFrame(this.animateParticles);
    },  
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.canvas-background {
  position: fixed;
  bottom: 0;
  left: 15vw;
  height: 100vh;
  width: 100vw;

  @media screen and ( max-width: 560px ) {
    left: 0;
  }
}
.bg-canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  bottom: 0;
}
</style>