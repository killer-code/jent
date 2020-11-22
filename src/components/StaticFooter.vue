<template>
  <footer>
    <p>
      Владелец регистрационного удостоверения/Организация, принимающая претензии
      от потребителей
    </p>
    <p>ООО «Фармамед», тел. (812) 647 02 46, сайт: JENT.MEN</p>
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

  p {
    color: white;
    opacity: 0.5;
  }
}
</style>
