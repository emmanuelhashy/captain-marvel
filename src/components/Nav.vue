<template>
  <header>
    <nav class="first-nav">
      <div class="signin">
        <div
          class="icon-sm"
          style="width: 20px; height: 20px; margin-right: 5px;"
        >
          <span aria-hidden="true"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7">
              <path
                fill="#fff"
                d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"
              ></path></svg
          ></span>
        </div>
        <p class="sign">sign in</p>
        <p class="join">join</p>
        <font-awesome-icon
          icon="bars"
          class="icon bars"
          @click="toggleNav(true)"
        />
      </div>
      <div class="logo">
        <span class="icon--svg icon--svg mvl-animated-logo" aria-hidden="true"
          ><svg width="130" height="52" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#EC1D24" width="100%" height="100%"></rect>
            <path
              fill="#FEFEFE"
              d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
            ></path>
            <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
            <path
              fill="#FEFEFE"
              d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
            ></path></svg
        ></span>
      </div>
      <div class="nav-right">
        <div class="shield-container">
          <img
            class="shield"
            src="../assets/icon-mu-shield_0.png"
            alt="shield photo"
          />
          <div>
            <p>marvel unlimited</p>
            <p class="subscribe">subscribe</p>
          </div>
        </div>
        <div class="search">
          <font-awesome-icon icon="search" class="icon" />
        </div>
      </div>
    </nav>
    <nav class="second-nav">
      <a href="#" class="nav-link">videos</a>
      <a href="#" class="nav-link">characters</a>
      <a href="#" class="nav-link">comics</a>
      <a href="#" class="nav-link">movies</a>
      <a href="#" class="nav-link">tv shows</a>
      <a href="#" class="nav-link">games</a>
      <a href="#" class="nav-link">music</a>
      <a href="#" class="nav-link">news</a>
    </nav>
    <!-- <nav class="banner">
      <div class="banner__title">STREAM BLACK WIDOW EXCLUSIVELY ON</div>
      <figure class="banner__logo">
        <img
          height="100%"
          src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/disneybtn_asset2x_4.png"
          srcset="
            https://terrigen-cdn-dev.marvel.com/content/prod/2x/disneybtn_asset2x_4.png
          "
          alt=""
        />
      </figure>
    </nav> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav(state) {
      this.showNav = state;
      const bars = document.querySelector('.bars');
      const secondNav = document.querySelector('.second-nav');
      const navLinks = document.querySelectorAll('.second-nav a');

      bars.addEventListener('click', () => {
        secondNav.classList.toggle("nav-active")
        navLinks.forEach((link, index) => {
          link.style.animmation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        })
      })

    },
  },
  mounted() {},
};
</script>

<style>
.first-nav {
  padding: 0 10rem;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 0.5px solid #393939;
  font-size: 13px;
  font-weight: 700;
}
.bars {
  display: none;
}
.signin {
  display: flex;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 1rem;
  align-items: center;
}
.signin .sign::after {
  content: "|";
  margin-left: 5px;
  margin-right: 5px;
}

.nav-right {
  display: flex;
}
.nav-right .shield-container {
  display: flex;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  align-items: center;
  padding: 0.6rem 1rem;
}
.nav-right .shield-container .subscribe {
  font-size: 12px;
  text-align: center;
}
.shield {
  width: 30px;
  height: 30px;
  margin-right: 0.8rem;
}
.nav-right .search {
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0.6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: #202020;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 0.5px solid #393939;
  font-size: 13px;
  font-weight: 700;
}
.second-nav .nav-link {
  text-decoration: none;
  margin-right: 1rem;
  color: #fff;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: #000000;
}
.banner .banner__title {
  margin-right: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 0.5px solid #393939;
  font-size: 13px;
  font-weight: 700;
}
.banner .banner__logo {
  height: 100%;
}

@media screen and (max-width: 1024px) {
  .first-nav {
    padding: 0 4rem;
  }
}

@media screen and (max-width: 767px) {
  .first-nav {
    padding: 0 4rem;
  }
  .bars {
    display: block;
  }
  /* .second-nav {
    display: none;
  } */
  .sign,
  .join,
  .nav-right .shield-container,
  .icon-sm {
    display: none;
  }
  .second-nav {
    position: absolute;
    left: 0;
    height: 92vh;
    top: 8.5vh;
    z-index: 3000;
    background-color: #202020;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 50%;
    transform: translate(-100%);
    transition: transform .5s ease-in;
    padding-top: 3rem;
  }
  .second-nav .nav-link  {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .body {
    overflow: hidden;
  }
  .nav-active {
    transform: translate(0%);
  }

  @keyframes navLinkFade {
    from{
      opacity: 0;
      transform: translateX(50px);
    }
  }
}
</style>
