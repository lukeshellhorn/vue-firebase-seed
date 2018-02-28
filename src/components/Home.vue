<template>
  <div id="home-route">
    <div class="row about-text">
      <div class="col-sm-12 text-center">
        <p>
          <a href="/things">List of things</a>
        </p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut sollicitudin arcu. Aenean cursus dictum lacinia. Proin vulputate ornare metus, vitae malesuada libero. Proin interdum dui eget bibendum posuere. Vivamus consequat convallis dui eu posuere. Quisque eu congue nisi, vel tristique neque. Mauris bibendum laoreet feugiat. Etiam vehicula sit amet nisl sit amet fringilla.

        In maximus dignissim sagittis. Cras sagittis elit congue pharetra feugiat. Praesent nec mauris vitae nisi pellentesque sollicitudin vel nec magna. Quisque odio tortor, fringilla vitae arcu nec, interdum dignissim diam. Proin in ligula interdum, hendrerit nibh quis, volutpat mi. Sed in dui dictum lacus dignissim semper ac nec ipsum. Praesent varius ut nisl non vulputate. Etiam posuere purus sed accumsan lacinia.

        Integer vestibulum eros faucibus est rutrum tincidunt. Maecenas et tellus mollis sem vulputate euismod. Maecenas at mollis urna, quis suscipit metus. Vivamus interdum sapien tellus, non iaculis nisi placerat id. Proin convallis lobortis tincidunt. Sed rhoncus, leo vel lacinia gravida, tortor arcu maximus velit, ut rhoncus sapien mauris et orci. Sed faucibus, ipsum et dapibus tempor, magna arcu pharetra dolor, id molestie neque eros nec lacus. Nullam ac arcu ac mi feugiat lacinia eu sed sapien. Nulla eu congue diam. Aliquam erat volutpat. Vestibulum aliquam ante id commodo aliquet. Nullam ac neque ultrices, aliquet nulla sit amet, facilisis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce volutpat arcu eleifend, vulputate est sed, efficitur urna. Curabitur tellus metus, laoreet et dapibus eget, placerat non urna.

        Morbi sed varius risus. Fusce urna orci, posuere at imperdiet nec, malesuada sit amet dolor. Nullam et sem lacus. Aliquam ex tellus, egestas sed fringilla eget, venenatis non libero. Integer metus felis, ullamcorper at arcu sed, aliquet volutpat velit. Aliquam mauris nibh, accumsan ultricies porttitor non, varius non magna. Vestibulum sed hendrerit ligula. Duis scelerisque, sapien quis ornare semper, elit justo aliquam felis, vitae iaculis dui sapien dignissim arcu. Ut nec euismod enim.

        Nunc eleifend mauris eget tortor fringilla suscipit. Praesent at sem maximus sem viverra finibus. Maecenas ornare quam vestibulum sapien cursus hendrerit. Phasellus id neque mollis, scelerisque enim sit amet, rutrum libero. Donec ultricies purus in efficitur rhoncus. Cras eget velit turpis. Suspendisse vel malesuada quam, a congue augue. Etiam malesuada ac lorem sit amet elementum. Cras non ex velit. In hac habitasse platea dictumst. Donec gravida enim eu est scelerisque, nec placerat nisi eleifend. Mauris porttitor dui ut massa suscipit lacinia. Sed eros velit, molestie eu arcu a, eleifend rhoncus nisl.</p>
      </div>
    </div>
    <hr>
    <div class="row lgd-call-to-action">
      <div class="col-sm-12 text-center">
        <h3><i class="fa fa-share" aria-hidden="true"></i> <router-link to="/contact">Contact</router-link> us to schedule a thing! </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'home'
}
</script>

<style lang="scss">
#home-route{
  font-size: 25px;
  .about-text {
    margin-top: 10px;
    padding: 20px;
  }
  .lgd-call-to-action {
    padding: 20px;
    .fa {
      font-size: 1em;
    }
  }
}
</style>