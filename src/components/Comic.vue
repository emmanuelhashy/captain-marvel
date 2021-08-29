<template>
    <div class="news__card">
        <img
          class="news__photo"
          src="imgUrl"
          alt="news 1 logo"
        />
        <p class="news__genre">Movies</p>
        <p class="headline">
          ‘The Marvels’ Arrives in Theaters November 11, 2022
        </p>
      </div>
</template>
<script>
export default {
    props: ['comic'],
    computed: {
        imgUrl: function () {
            return this.comic.images[0].path + "." + this.comic.images[0].extension
        }
    }
}
</script>