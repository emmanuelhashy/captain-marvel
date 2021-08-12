<template>
  <div class="featured">
    <h1 class="featured__header">LATEST VIDEOS</h1>
    <div class="featured__container">
      <div class="youtube-video video-2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        >
        </iframe>
      </div>
      <div class="video-collection">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        ></iframe>
      </div>
    </div>
    <div class="featured-text">
      <h2 class="sub-text">MARVEL TOP 10</h2>
      <h3 class="video-title">Top 10 | Avengers Women</h3>
      <div class="promo">
        <div style="width: 25px; height: 25px; margin-right: 5px">
          <span class="icon--svg icon--insider" aria-hidden="true"
            ><svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 463 463"
            >
              <title>Artboard 1</title>
              <g class="cls-1">
                <circle fill="#fff" cx="231.5" cy="231.5" r="195"></circle>
                <path
                  fill="#f7e3b6"
                  d="M231.5 64A167.5 167.5 0 1 1 64 231.5 167.5 167.5 0 0 1 231.5 64m0-55a222.54 222.54 0 0 0-86.62 427.49 222.54 222.54 0 0 0 173.24-410A221.08 221.08 0 0 0 231.5 9z"
                ></path>
              </g>
              <circle fill="#fff" cx="231.5" cy="231.5" r="167.5"></circle>
              <path
                fill="#202020"
                d="M369.78 137l-33.27 187.65a3.18 3.18 0 0 1-3.2 2.91h-33.49a4.26 4.26 0 0 1-4.08-2.91l-45.43-127.27h-1.45l-22.43 127.27a3.13 3.13 0 0 1-2.91 2.91h-31.45a2.42 2.42 0 0 1-2.63-2.91l34.08-192.21a3.17 3.17 0 0 1 3.2-2.92h33.2c2.33 0 3.79.88 4.37 2.92l45.14 127.26h1.17l28.16-156.83A167.47 167.47 0 0 0 111 347.73l37.73-215.29a3.18 3.18 0 0 1 3.21-2.92h35.23c1.75 0 2.62 1.17 2.33 2.92L146.77 376a167.48 167.48 0 0 0 223-239z"
              ></path></svg
          ></span>
        </div>
        <p class="earn">
          Earn Points, Get Rewards <a class="join-link" href="#">Join!</a>
        </p>
      </div>
      <p class="video-description">
        From Skrull transformations to Goose the Cat to Captain Marvel herself,
        see how the Visual Effects from Marvel Studios' Captain Marvel are
        brought to life!
      </p>
    </div>
  </div>
</template>
<style scoped>
.featured {
  padding: 0 10rem;
  margin-top: 3.5rem;
}
.featured__header {
  font: 800 1.7rem/1 RobotoCondensed, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.featured__container {
  display: flex;
  width: 100%;
}
.video-collection {
  width: 30%;
  padding: 0 1.5rem;
  height: 70vh;
  overflow-y: scroll;
}
.video-2 {
  width: 70%;
  height: 70vh;
}
iframe {
  border: none;
}
/* width */
.video-collection::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.video-collection::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.video-collection::-webkit-scrollbar-thumb {
  background: red;
}

/* Handle on hover */
.video-collection::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.featured-text {
  width: 55rem;
}
.sub-text {
  color: #999;
  text-transform: uppercase;
  font: 400 12px/1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  letter-spacing: 1px;
  margin-top: 1.8rem;
  margin-bottom: 1rem;
}
.video-title {
  font: 600 1.5rem/1.2 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
}
.promo {
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
}
.earn {
  margin-left: 5px;
}
.join-link {
  color: red;
  text-decoration: none;
}
.video-description {
  font: 400 16px/1.3 Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 3.2rem;
  width: 40rem;
}
</style>