<template>
<div class="contact">
    <div class="contact__episode">
        <div class="contact__episode-tag">/<span>{{ $t('contacts.section')}}</span></div>
        <p>{{ $t('contacts.question')}}</p>
    </div>

    <div class="contact__section">
        <div class="contact__section-intro">
            <p>{{ $t('contacts.intro')}}</p>
        </div>

        <div class="contact__section-block">
            <div class="contact__section-box">
                <h3>{{ $t('contacts.message')}}</h3>

                <div class="contact__section-network">
                    <div class="contact__section-network address">
                        <icon-telegram/>  <span>@Vladislav_Kruvenchyk</span>
                    </div>
                    <div class="contact__section-network address">
                        <icon-email/>  <span>crisebroun@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact__media">
        <div class="contact__media-tag">#<span>{{ $t('contacts.media')}}</span></div>
        <div class="contact__media-figure">
            <icon-small-figure/>
        </div>
        <div class="contact__media link">

            <a :href="['https://t.me/Vladislav_Krivenchyk']"><icon-telegram/>Vladislav_Krivenchyk</a>
            <a   href="#"><icon-email/>crisebroun@gmail.com</a>
            <a :href="['https://www.linkedin.com/in/vladislav-kruvenchyk/']"><icon-linkedin/>Vladislav Krivenchyk</a>
            <a :href="['https://github.com/Vladislav-Krivenchyk']"><icon-github/>Vladislav-Krivenchyk</a>
        </div>
    </div>


</div>
</template>

<script>
import IconEmail from "../assets/icons/IconEmail.vue";
import IconTwitter from "../assets/icons/IconTwitter.vue";
import IconSmallFigure from "../assets/icons/IconSmallFigure.vue";
import IconTelegram from "../assets/icons/IconTelegram.vue";
import IconLinkedin from "../assets/icons/IconLinkedin.vue";
import IconGithub from "../assets/icons/IconGithub.vue";

export default {
    name: "Contacts",
    components: {IconGithub, IconLinkedin, IconTelegram, IconSmallFigure, IconTwitter, IconEmail}
}
</script>

<style lang="sass" scoped>
@import "../css/src/partials/color"

.contact
     &__episode
        padding-top: 150px
        &-tag
            padding-bottom: 20px
            padding-top: 50px
            font-weight: 600
            font-size: 32px
            color: $primary
            @media (max-width: 1023px)
                font-size: 16px
        span
          font-weight: 600
          font-size: 32px
          color: $white
          @media (max-width: 1023px)
              font-size: 16px
              margin-left: 5px
        p
          color: $grey
          font-size: 16px
          opacity: 0.8

     &__section
         display: flex
         justify-content: space-between
         @media (max-width: 1023px)
             flex-direction: column
         &-intro
           width: 50%
           @media (max-width: 1023px)
                margin-bottom: 20px
           p
             color: $grey
             font-size: 16px
             opacity: 0.8

         &-block
             padding: 20px
             border: 1px solid $grey
             h3
               margin-bottom: 10px
               font-weight: 600
               font-size: 16px
               color: $white

         &-box
             display: flex
             flex-direction: column
             justify-content: space-between
             height: 110px

         &-network
             cursor: default
             &.address
                display: flex
                align-items: center
                padding-top: 5px
             span
                 opacity: 0.8
                 color: $grey
                 padding-left: 2px

     &__media
         padding-top: 4rem
         &-tag
             color: $primary
             font-weight: 500
             font-size: 32px
             @media (max-width: 1023px)
                 font-size: 16px
         span
             color: $white
             font-weight: 500
             font-size: 32px
             @media (max-width: 1023px)
                 font-size: 16px
                 margin-left: 5px
         &.link
             display: flex
             padding-top: 1rem
             flex-direction: column
             a
              text-decoration: none
              opacity: 0.8
              color: $grey
              text-align: center
              display: flex
              align-items: center
              gap: 10px
              @media (max-width: 1023px)
                  display: flex
                  align-items: center
                  gap: 10px
             @media (max-width: 1023px)
                 flex-direction: column
                 gap: 10px
         &-figure
             text-align: end
</style>
