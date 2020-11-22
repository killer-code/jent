<template>
  <footer>
    <p>
      © 2020, «Фармамед». Все права защищены.
    </p>
    <p>Правовая информация</p>
  </footer>
</template>

<script>
export default {
  name: 'StaticFooter',
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    color: white;
    opacity: 0.5;
    text-align: center;
  }
}
</style>
