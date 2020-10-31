<template>
  <div>
    <div class="subscribe center">
      <div class="subscribe__human">
        <div class="subscribe__human-img">
          <img src="@/assets/img/human.jpg" alt="" />
        </div>
        <p class="subscribe__human-text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
          purus condimentum a. Aliquam condimentum mattis neque sed pretium”
        </p>
        <h3 class="subscribe__human-name">Bin Burhan</h3>
      </div>
      <div class="subscribe__form">
        <h1 class="subscribe__form-h1">Subscribe</h1>
        <h3 class="subscribe__form-h3">FOR OUR NEWLETTER AND PROMOTION</h3>
        <form action="#" class="subscribe__form-button">
          <input
            id="email"
            placeholder="Enter Your Email"
            type="text"
            class="subscribe__email"
            required
            pattern="\S+@[a-z]+.[a-z]+"
          />
          <input type="submit" class="subscribe__button" value="Subscribe" />
        </form>
      </div>
    </div>
    <footer class="footer center">
      <div class="footer__left">
        <a class="logo" href="index.html">
          <img
            class="logo__img"
            src="@/assets/img/logo.png"
            alt="logo"
          />BRAN<span class="accent">D</span>
        </a>
        <p class="footer__text">
          Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate multidisciplinary materials before
          go forward benefits. Intrinsicly syndicate an expanded array of
          processes and cross-unit partnerships. <br />
          <br />
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.
        </p>
      </div>
      <div class="footer__right">
        <div class="footer__right-block">
          <h1 class="footer__right-h1">COMPANY</h1>
          <ul class="footer__list">
            <li><a href="index.html" class="footer__link">Home</a></li>
            <li><a href="#" class="footer__link">Shop </a></li>
            <li><a href="#" class="footer__link">About </a></li>
            <li><a href="#" class="footer__link">How It Works</a></li>
            <li><a href="checkout.html" class="footer__link">Contact</a></li>
          </ul>
        </div>
        <div class="footer__right-block">
          <h1 class="footer__right-h1">INFORMATION</h1>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">Tearms & Condition</a></li>
            <li><a href="#" class="footer__link">Privacy Policy</a></li>
            <li><a href="#" class="footer__link">How to Buy</a></li>
            <li><a href="#" class="footer__link">How to Sell</a></li>
            <li><a href="#" class="footer__link">Promotion</a></li>
          </ul>
        </div>
        <div class="footer__right-block">
          <h1 class="footer__right-h1">SHOP CATEGORY</h1>
          <ul class="footer__list">
            <li><a href="product.html" class="footer__link">Men</a></li>
            <li><a href="single_page.html" class="footer__link">Women </a></li>
            <li><a href="#" class="footer__link">Child</a></li>
            <li><a href="#" class="footer__link">Apparel </a></li>
            <li><a href="#" class="footer__link">Brows All</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <footer class="footer__line center">
      <div class="rights">&copy;2017 Brand All Rights Reserved.</div>
      <div id="light" class="social">
        <ul class="social__list normal">
          <li>
            <a href="https://www.facebook.com/" class="btn-gradient facebook"
              ><i class="fa fa-facebook social__icon"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/explore" class="btn-gradient twitter"
              ><i class="fa fa-twitter social__icon"></i
            ></a>
          </li>
          <li>
            <a href="https://www.google.ru/" class="btn-gradient google-plus"
              ><i class="fa fa-google-plus social__icon"></i
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com" class="btn-gradient instagram"
              ><i class="fa fa-instagram social__icon"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com" class="btn-gradient linkedin"
              ><i class="fa fa-linkedin social__icon"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>