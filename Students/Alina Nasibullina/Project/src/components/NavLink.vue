<template>
    <div>
        <h3>{{ linkSection.navsectionname }}</h3>
        <div class="greyLine"></div>
        <ul>
            <li v-for="navlink of linkSection.navlinks">
                <a href="#">{{ navlink }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        linkSection: {
            type: Object,
        
          
            default: () => ({
                navsectionname: 'Women',
                navlinks: ['Dresses', 'Tops', 'Sweaters', 'Jackets', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories']
            })
        }
    }
}
</script>

<style>

</style>