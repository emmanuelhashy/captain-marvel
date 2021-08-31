<template>
  <div class="footer">
    <div class="footer__top">
      <div class="col-1">
        <div>
          <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#EC1D24" width="100%" height="100%"></rect>
            <path
              fill="#FEFEFE"
              d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="col-1">
        <a href="#" class="footer__link bold">ABOUT MARVEL</a>
        <a href="#" class="footer__link bold">HELP/FAQS</a>
        <a href="#" class="footer__link bold">CAREERS</a>
        <a href="#" class="footer__link bold">INTERNSHIPS</a>
      </div>
      <div class="col-1">
        <a href="#" class="footer__link">ADVERTISING</a>
        <a href="#" class="footer__link">DISNEY+</a>
        <a href="#" class="footer__link">MARVELHQ.COM</a>
        <a href="#" class="footer__link">REDEEM DIGITAL COMICS</a>
      </div>
      <div class="col-1">
        <a
          class="footer__link d-flex"
          href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer"
          ><div class="footer__promotion-image-wrapper">
            <figure class="img__wrapper">
              <img
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
                srcset="
                  https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png
                "
                alt="Marvel Insider Logo"
                class="footer__promotion-image"
              />
            </figure>
          </div>
          <div class="footer__promotion-info">
            <h4 class="footer__promotion-title">Marvel Insider</h4>
            <p class="footer__promotion-description">
              Get Rewarded for Being a Marvel Fan
            </p>
          </div></a
        >

        <div class="footer__promotion">
          <a
            class="footer__link d-flex"
            href="https://www.marvel.com/unlimited?cid=dcom_navigation_20210323_unlimited_footer"
            ><div class="footer__promotion-image-wrapper">
              <figure class="img__wrapper">
                <img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x.png"
                  srcset="
                    https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x.png
                  "
                  alt="Marvel Unlimited Logo"
                  class="footer__promotion-image"
                />
              </figure>
            </div>
            <div class="footer__promotion-info">
              <h4 class="footer__promotion-title">Marvel Unlimited</h4>
              <p class="footer__promotion-description">
                Access Over 28,000 Digital Comics
              </p>
            </div></a
          >
        </div>
      </div>
      <div class="col-1">
        <p class="footer__link bold">FOLLOW MARVEL</p>
        <div class="col-1__socials">
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'facebook-square']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'twitter']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'youtube']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'twitter']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'pinterest']" class="icon"
          /></a>
          <a href="" class="text-grey"
            ><font-awesome-icon :icon="['fab', 'snapchat']" class="icon"
          /></a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
        <a href="#" class="footer__link-sm">Terms of Use</a>
        <a href="#" class="footer__link-sm">Privacy Policy</a>
        <a href="#" class="footer__link-sm">Your California Privacy Right</a>
        <p href="#" class="footer__link-sm">Do Not Sell My Personal Information</p>
        <a href="#" class="footer__link-sm">Children's Online Privacy Policy</a>
        <a href="#" class="footer__link-sm">License Agreement</a>
        <a href="#" class="footer__link-sm">Interest-Based Ads</a>
        <a href="#" class="footer__link-sm">Marvel Insider Terms</a>
        <span class="footer__link-sm">©2021 MARVEL</span>
    </div>
  </div>
</template>
<style scoped>
.footer {
  padding: 0 10rem;
  background-color: #202020;
  padding-top: 5rem;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  flex-wrap: wrap;
}
.footer__link {
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  padding-bottom: 1rem;
}
.bold {
  font-weight: 800;
}
.col-1 {
  display: flex;
  flex-direction: column;
}
svg {
  width: 80px;
}
.icon {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.342);
  margin-right: 1.7rem;
  margin-bottom: 1rem;
}
.icon:hover {
  color: #fff;
}
.col-1__socials {
  width: 13rem;
}
.footer__bottom {
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    flex-wrap: wrap;
}
.footer__link-sm {
    margin-right: 1.5rem;
    font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  /* width: 100%; */
  display: block;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-align: center;
}
.footer__link-sm:hover {
    color: #fff;
}
.d-flex {
    display: flex;
}
.footer__promotion-image {
    width: 4rem;
    margin-right: 1rem;
    object-fit: contain;
}

@media screen and (max-width: 1024px) {
  .footer {
    padding: 2rem 4rem;
  }
}
@media screen and (max-width: 320px) {
  .footer {
    padding: 2rem;
  }
}
</style>