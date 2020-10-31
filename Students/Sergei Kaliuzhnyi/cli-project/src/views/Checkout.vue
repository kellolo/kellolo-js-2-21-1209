<template>
<div>
  <div class="nav-line center">
        <div class="nav-line__h1">New Arrivals</div>
        <div class="nav-line__breadcrumbs">
            <ul class="nav-line__list">
                <li><a href="index.html" class="nav-line__link">Home/</a></li>
                <li><a href="product.html" class="nav-line__link">Men/</a></li>
                <li><a href="#" class="nav-line__link nav-line__link-active">New Arrivals</a></li>
            </ul>
        </div>
    </div>
    <div class="forms center">
        <details class="forms__details">
            <summary class="forms__legend">01. Shipping Adress</summary>
            <div class="forms__box">
                <fieldset class="forms__shipping">
                    <form action="#" class="forms__shipping-form">
                        <h3 class="forms__head">Check as a guest or register</h3>
                        <p class="forms__heading">Register with us for future convenience</p>
                        <label class="forms__radio">
                            <input type="radio" name="radio" class="forms__radio-input" />
                            <span class="forms__radio-text">checkout as guest</span>
                        </label>
                        <label class="forms__radio">
                            <input type="radio" name="radio" class="forms__radio-input" />
                            <span class="forms__radio-text forms__text-margin">register</span>
                        </label>
                        <h3 class="forms__head">register and save time!</h3>
                        <p class="forms__heading">Register with us for future convenience</p>
                        <p class="forms__text"> >>Fast and easy checkout <br>
                            >>Easy access to your order history and status</p>
                        <input type="submit" class="forms__button" value="Continue">
                    </form>
                </fieldset>
                <fieldset class="forms__registed">
                    <form action="#">
                        <h3 class="forms__head">Already registed?</h3>
                        <p class="forms__heading forms__heading__marg">Please log in below</p>
                        <p class="forms__fieldhead">EMAIL ADDRESS <span class="forms__redstar">*</span> </p>
                        <input type="email" class="forms__email" required pattern="\S+@[a-z]+.[a-z]+">
                        <p class="forms__fieldhead">PASSWORD <span class="forms__redstar">*</span></p>
                        <input type="text" class="forms__password" required pattern="\S+@[a-z]+.[a-z]+">
                        <p class="forms__required-text">* Required Fileds</p>
                        <input type="submit" class="forms__button" value="log in">
                        <a href="#" class="forms__forgot-link">Forgot Password ?</a>
                    </form>
                </fieldset>
            </div>
        </details>
    </div>
    <div class="forms__box center">
        <ul class="forms__list">
            <li><a href="#" class="forms__link forms__first-link">02. BILLING INFORMATION</a></li>
            <li><a href="#" class="forms__link">03. SHIPPING INFORMATION</a></li>
            <li><a href="#" class="forms__link">04. SHIPPING METHOD</a></li>
            <li><a href="#" class="forms__link">05. PAYMENT METHOD</a></li>
            <li><a href="#" class="forms__link">06. ORDER REVIEW</a></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>