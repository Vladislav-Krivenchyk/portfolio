<template>
    <section class="hero-bg hero-content neon-hero neon hero-header" style="height:100vh;">
        <div class="hero-text">
            <div class="title">Welcome</div>
        </div>

    </section>
</template>

<script>
export default {
    name: "Preload"
}
</script>

<style scoped>
/* CSS3 Neon Text Effect */
.hero-bg.neon-hero .title {
    cursor:default;
    color: rgba(255, 255, 255, 0);
    text-shadow: 0em 0em 3em #83ff00,
    0em 0em 2em #83ff00,
    1px 1px 5px #83ff00,
    0px 0px 15px #83ff00,
    1px 0px 0px white,
    -1px 0px 2px rgba(0, 0, 0, .5);
}
.hero-bg.neon-hero .title:hover {
    color: #83ff00;
    text-shadow: 0em 0em 5em #83ff00,
    0em 0em 3em #83ff00,
    0em 0em 2em #83ff00,
    1px 1px 5px #83ff00,
    0px 0px 10px #83ff00,
    0px 0px 25px #83ff00,
    0px 0px 45px #83ff00,
    2px 1px 0px white,
    -1px 0px 2px rgba(0, 0, 0, .5);
}

/*html, body{*/
/*    padding:0;*/
/*    margin:0;*/
/*    height:100vh;*/
/*}*/
.hero-bg.neon-hero {
    background: url('https://glyphs.imgix.net/glyphs-photo-1643957814.jpg?w=1600&h=1066.7&fit=crop&q=80') no-repeat center center;
    background-size: cover;
}

.hero-bg .title {
    font-size: 2.5em;
    letter-spacing: 0px;
    color: #ffffff;
}
.hero-bg .hero-text {
    justify-content: center;
    text-align: center;
}
.hero-bg .hero-image {
    align-self: flex-end;
}
.hero-bg .hero-content,
.hero-bg.hero-content {
    flex-direction: row
}
.neon-hero {
    font-size: 2.5em !important;
}
.neon-hero.hero-content>* {
    z-index: 1;
    position: relative
}
.hero-bg.neon-hero .title {
    opacity: 1;
    z-index: 1
}
.hero-bg.neon-hero:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL2ltYWdlcy9iZy1kYXJrZW4ucG5n") no-repeat 50%;
    background-position: 50%;
    background-size: cover;
    z-index: 0
}

/* RESET AND BASIC STYLES */

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 400
}
.hero-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0
}
.hero-bg {
    font-family: Source Sans Pro, Arial, sans-serif;
    overflow: hidden;
    position: relative;
    margin: 0;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box
}
.hero-bg *,
.hero-bg:after,
.hero-bg:before {
    box-sizing: inherit
}
.hero-bg .title {
    color: hsla(0, 0%, 100%, .8);
    font-weight: 300
}

/*
 * NEON FONT COPYRIGHT MEDIALOOT, USED WITH SPECIAL PERMISION
 * DO NOT LINK OR DOWNLOAD THIS, BUY FROM HERE: https://medialoot.com/item/neon-tubes-font
*/
@font-face {font-family: 'neon_tubesregular'; src: url('https://medialoot.com/assets/fonts/neontubes-webfont.woff2') format('woff2'), url('https://medialoot.com/assets/fonts/neontubes-webfont.woff') format('woff');font-weight: normal; font-style: normal;}
/* END COPYRIGHTED FONT */

.hero-bg .background-image {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}
.hero-bg .hero-text {
    margin: 0;
    max-width: 65%;
    padding: 0 30px;
    position: relative
}

.neon {
    font-family: neon_tubesregular, sans-serif
}


</style>
