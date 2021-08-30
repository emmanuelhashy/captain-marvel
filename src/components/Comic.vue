<template>
    <div class="comic__card" @click="viewComicDetails">
        <img
          class="comic__photo"
          :src="imgUrl"
          alt="comic logo"
        />
        <p class="comic__genre">{{comic.format}}</p>
        <p class="headline">
          {{comic.title}}
        </p>
      </div>
</template>
<script>
export default {
    props: ['comic'],
    computed: {
        imgUrl: function () {
            return this.comic.images[0]? this.comic.images[0].path + "." + this.comic.images[0].extension : undefined
        }
    },
    methods: {
        viewComicDetails() {
            this.$router.push({ name: 'Comic-detail', params: { comicId: this.comic.id } })
        }
    }
}
</script>
<style scoped>
.comic__card {
  width: 10rem;
  margin-right: 0.4rem;
}
.comic__card:hover {
  cursor: pointer;
}
.comic__photo {
  width: 100%;
  height: 15rem;
}
.comic__genre {
  color: #999;
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 600;
  margin-top: 5px;
}
.headline {
  color: rgb(17, 17, 255);
  font-weight: 700;
  margin: 8px 0 0;
  padding: 0;
  cursor: pointer;
  display: block;
}
.headline:hover {
  color: red;
}
</style>