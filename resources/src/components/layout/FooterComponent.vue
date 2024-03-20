<template>
    <footer class="footer">
        <hr class="footer-hr">
        <div class="app-container">
            <div class="footer-content">
                <div>
                    <icon-logo class="footer-icon"/>
                    <span>{{ $t('nav.name')}}</span>
                    <a href="#" @click.prevent>crisebroun@gamil.com</a>
                    <p>{{ $t('footer.developer')}}</p>
                </div>
                <div class="footer-media">
                        <span class="footer-media__link">{{ $t('footer.media')}}</span>
                    <div class="footer-media networks">
                        <a :href="['https://github.com/Vladislav-Krivenchyk']">
                            <icon-github/>
                        </a>
                        <a :href="['https://www.linkedin.com/in/vladislav-kruvenchyk/']">
                            <icon-linkedin/>
                        </a>
                        <a :href="['https://t.me/Vladislav_Krivenchyk']">
                            <icon-telegram/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-order">
                <span>{{ $t('footer.copyright') }}</span>
            </div>
        </div>
    </footer>
</template>

<script>
import IconLogo from "../../assets/icons/IconLogo.vue";
import IconGithub from "../../assets/icons/IconGithub.vue";
import IconEmail from "../../assets/icons/IconEmail.vue";
import IconTwitter from "../../assets/icons/IconTwitter.vue";
import IconLinkedin from "../../assets/icons/IconLinkedin.vue";
import IconTelegram from "../../assets/icons/IconTelegram.vue";

export default {
    name: "FooterComponent",
    components: {IconTelegram, IconLinkedin, IconTwitter, IconEmail, IconGithub, IconLogo},
    data() {
        return {
            name: 'footer'
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/src/partials/color"
.footer
    padding-top: 10rem
    @media (max-width: 1023px)
        padding-top: 5rem
    &-hr
        height: 1px
        width: 100%
        background: $white-1
        border: none
    &-content
        display: flex
        justify-content: space-between
        padding-top: 25px
        padding-bottom: 25px
        @media (max-width: 1023px)
            flex-direction: column
            align-items: center
            gap: 20px
        span
            font-weight: 500
            font-size: 16px
            color: $white-1
        a
            text-decoration: none
            color: $white-1
            opacity: 0.8
            font-size: 16px
            margin-left: 10px
        p
           margin-top: 20px
           color: $white-1
    &-icon
        margin-right: 10px
    &-media
        display: flex
        flex-direction: column
        &__link
            color: $white-1
            font-weight: 500
            font-size: 24px!important
            margin-bottom: 10px
            text-align: center

        &.networks
            align-items: center
            flex-direction: row

    &-order
        text-align: center
        padding-top: 3rem
        padding-bottom: 1rem
        color: $white-1

</style>
