<template>
    <main>
        <div class="main-content">
            <div class="main-intro">
                <div class="main-text">
                     <transition
                         class="main-experian"
                         appear
                         name="slide">
                            <div v-show="showText">
                                <h1 class=" text-white" style="margin-right: 15px">{{ $t('intro.header') }}</h1>
                                <h1 class="text-primary" style="margin-right: 15px">{{ $t('intro.front-end') }}</h1>
                                <h1 class="text-white">{{ $t('intro.and') }}</h1>
                            </div>
                     </transition>
                          <transition
                            appear
                            name="slide"
                          >
                              <h1 v-show="showTextContinue" class="text-primary" >{{ $t('intro.backend') }}</h1>
                          </transition>
                </div>

                <div class="main-desc">
                    <transition
                        name="intro"
                    >
                        <div v-show="showTextDesc" class="main-desc-mobile">
                            <span  style="margin-left: 10px" v-show="animation_property.showText_he" >{{ $t('intro.desc.i') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_crafts" >{{ $t('intro.desc.create') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_responsive" >{{ $t('intro.desc.responsive') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_websites" >{{ $t('intro.desc.websites') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_where" >{{ $t('intro.desc.where') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_technologies" >{{ $t('intro.desc.technologies') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_meet" >{{ $t('intro.desc.meet') }}</span>
                            <span  style="margin-left: 10px" v-show="animation_property.showTextDesc_creativity" >{{ $t('intro.desc.creativity') }}</span>
                        </div>

                    </transition>
                    <transition
                        name="slide"
                        >
                        <base-button
                            v-if="show_animation_btn"
                            @mouseover="handleMouseOver"
                            @mouseleave="handleMouseLeave"
                            :class="hoverClass"
                        >
                            {{ $t('intro.button_contact')}}</base-button>
                    </transition>

                </div>
            </div>
            <div class="main-person">
                <div class="main-person-square"/>
                <div class="main-person-square-right"/>

                <transition-group name="cell" tag="div" class="container">
                    <div v-for="cell in cells" :key="cell.id" class="cell">
                        {{  }}
                    </div>
                </transition-group>

                <div class="main-person-square-bottom-left"/>
                <div class="main-person-square-bottom-right"/>
            </div>
    </div>
            <div class="main-quote">
                <span>{{ $t('quote.word') }}</span>
            </div>

            <div class="main-box-square">
                    <div class="main-box-square-left"></div>
            </div>
       <div class="main-project">
               <router-link :to="Tr.i18nRoute({name: 'projects'})" class="main-project__link">#<span>{{ $t('projects.projects') }}</span></router-link>
               <hr class="main-project__hr">
                <router-link :to="Tr.i18nRoute({name: 'projects'})" class="main-project__link">
                    <span class="main-project__all"><span>{{ $t('projects.view') }}</span>~~></span>
                </router-link></div>
        <div class="main-skill">
            <div class="main-skill__box">
                <div class="main-skill__tag">
                    <div class="main-skill__link">#<span>{{ $t('skills.skills') }}</span></div>
                    <hr class="main-skill__hr">
                </div>

                <div class="main-skill__figure">
                    <h1 class="neonText">
                        {{ $t('skills.skills') }}
                    </h1>
                </div>
            </div>

            <div class="main-skill__list">
                    <div class="main-skill__list-item">
                        <div class="main-skill__list-title">
                            <span>{{ $t('skills.languages.languages') }}</span>
                        </div>
                        <div class="main-skill__list-item-section">
                            <p>{{ $t('skills.languages.typeScript')}}</p>
                            <p>{{ $t('skills.languages.lua')}}</p>
                            <p>{{ $t('skills.languages.python')}}</p>
                            <p>{{ $t('skills.languages.javaScript')}}</p>
                        </div>
                    </div>
                   <div class="main-skill__list-item">
                       <div class="main-skill__list-title">
                           <span>{{ $t('skills.databases.databases')}}</span>
                       </div>
                       <div class="main-skill__list-item-section">
                             <p>{{ $t('skills.databases.SQLite')}}</p>
                             <p>{{ $t('skills.databases.PostgreSQL')}}</p>
                             <p>{{ $t('skills.databases.Mongo')}}</p>
                         </div>
                     </div>

                  <div class="main-skill__list-item modification">
                      <div class="main-skill__list-title">
                          <span>{{ $t('skills.Tools.Tools')}}</span>
                      </div>
                      <div class="main-skill__list-item-section modification-frame">
                                <p>{{ $t('skills.Tools.VSCode')}}</p>
                                <p>{{ $t('skills.Tools.Neovim')}}</p>
                                <p>{{ $t('skills.Tools.Linux')}}</p>
                                <p>{{ $t('skills.Tools.Figma')}}</p>
                                <p>{{ $t('skills.Tools.XFCE')}}</p>
                                <p>{{ $t('skills.Tools.Arch')}}</p>
                                <p>{{ $t('skills.Tools.Git')}}</p>
                             </div>
                    </div>
                   <div class="main-skill__list-item other-modification">
                       <div class="main-skill__list-title">
                       <span>{{ $t('skills.Other.Other')}}</span>
                       </div>
                       <div class="main-skill__list-item-section">
                                <p>{{ $t('skills.Other.HTML')}}</p>
                                <p>{{ $t('skills.Other.CSS')}}</p>
                                <p>{{ $t('skills.Other.EJS')}}</p>
                                <p>{{ $t('skills.Other.SCSS')}}</p>
                                <p>{{ $t('skills.Other.REST')}}</p>
                                <p>{{ $t('skills.Other.Jinja')}}</p>
                            </div>
                    </div>

                   <div class="main-skill__list-item modification">
                       <div class="main-skill__list-title">
                           <span>{{ $t('skills.Frameworks.Frameworks')}}</span>
                       </div>
                       <div class="main-skill__list-item-section modification-frame">
                            <p>{{ $t('skills.Frameworks.React')}}</p>
                            <p>{{ $t('skills.Frameworks.Vue')}}</p>
                            <p>{{ $t('skills.Frameworks.Disnake')}}</p>
                            <p>{{ $t('skills.Frameworks.Discord')}}</p>
                            <p>{{ $t('skills.Frameworks.Flask')}}</p>
                            <p>{{ $t('skills.Frameworks.Express')}}</p>
                        </div>
                    </div>
            </div>

        </div>

        <div class="main-about">
            <div class="main-about__box">
                <div class="main-about__tag">
                    <router-link :to="Tr.i18nRoute({ name: 'about' })" class="main-about__link">#<span>{{ $t('about-me.about-me') }}</span></router-link>
                    <hr class="main-about__hr">
                </div>

                <div class="main-about__desc">
                    <div>
                        <div>
                            <p>{{ $t('about-me.name')}}</p>
                        </div>
                        <div>
                            <p>{{ $t('about-me.intro')}}</p>
                        </div>
                        <div>
                            <p>{{ $t('about-me.experience')}}</p>
                        </div>
                        <div>
                            <p>{{ $t('about-me.skills')}}</p>
                        </div>
                        <div>
                            <p>{{ $t('about-me.conclusion')}}</p>
                        </div>
                    </div>

                    <div class="main-person">
                        <div class="main-person-square"/>
                        <div class="main-person-square-right"/>

                        <transition-group name="cell" tag="div" class="container">
                            <div v-for="cell in cells" :key="cell.id" class="cell">
                                {{  }}
                            </div>
                        </transition-group>

                        <div class="main-person-square-bottom-left"/>
                        <div class="main-person-square-bottom-right"/>
                    </div>
                </div>
            </div>

        </div>


        <div class="main-contacts">
            <div class="main-contacts__box">
                <div class="main-contacts__tag">
                    <router-link :to="Tr.i18nRoute({ name: 'contacts' })" class="main-contacts__link">#<span>{{ $t('contacts.section') }}</span></router-link>
                    <hr class="main-contacts__hr">
                </div>
                <div class="main-contacts-desc">
                    <p>{{ $t('contacts.intro') }}</p>
                </div>
            </div>

            <div class="main-contacts__messages">
                <div class="main-contacts__block">
                    <div>
                        <span>{{ $t('contacts.message') }}</span>
                    </div>
                    <div class="main-contacts__discord">
                        <icon-telegram/>
                        <a class="main-contacts__cell" href="#" @click.prevent>@Vladislav_Kruvenchyk</a>
                    </div>
                    <div class="main-contacts__email">
                        <icon-email/>
                        <a class="main-contacts__cell" href="#" @click.prevent>crisebroun@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import BaseSelect from "../assets/baseComponent/BaseSelect.vue";
import BaseButton from "../assets/baseComponent/BaseButton.vue";
import Tr from "../i18n/translation.js";
import IconQuotes from "../assets/icons/IconQuotes.vue";
import IconFigure from "../assets/icons/IconFigure.vue";
import IconAbout from "../assets/icons/IconAbout.vue";
import IconEmail from "../assets/icons/IconEmail.vue";
import IconTelegram from "../assets/icons/IconTelegram.vue";
export default {
    components: {IconTelegram, IconEmail, IconAbout, IconFigure, IconQuotes, BaseButton, BaseSelect},
    data() {
        return {
            isHoverBtn: false,
            isRandomClass: false,
            showText: false,
            showTextContinue: false,
            showTextDesc: false,
            Tr,
            show_animation_btn: false,
            animation_property: {
                showText_he: false,
                showTextDesc_crafts: false,
                showTextDesc_responsive: false,
                showTextDesc_websites: false,
                showTextDesc_where: false,
                showTextDesc_technologies: false,
                showTextDesc_meet: false,
                showTextDesc_creativity: false,
            },
            cells: Array.apply(null, { length: 180 }).map(function (_, index) {
                return {
                    id: index,
                    number: (index % 9) + 1,
                };
            }),
        }
    },
    computed: {
        hoverClass() {
            return this.isHoverBtn ? 'main-btn-hover' : 'main-btn'
        },
        randomClass() {
            return  Math.random() >=  0.5 ? 'random-cell' : 'random-figure'
        }
    },
    methods: {
        shuffle() {
            this.cells = this.cells.sort(() => Math.random() - 0.5);
        },
        handleMouseOver() {
            this.isHoverBtn = true;
        },
        handleMouseLeave() {
            this.isHoverBtn = false;
        }
    },
    mounted() {
        setInterval(() => {
            this.shuffle()
        }, 2500)


            this.showText = true;
        setTimeout(() => {
                this.showTextContinue = true
            }, 200)

        setTimeout(  () => {
           this.showTextDesc = true
        },1000)
        setTimeout(  () => {
                this.animation_property.showText_he = true
            }, 2000,)

        setTimeout( () => {
            this.animation_property.showTextDesc_crafts = true
        }, 2200)

        setTimeout(  () => {
            this.animation_property.showTextDesc_responsive = true
        }, 2400)

        setTimeout(  () => {
            this.animation_property.showTextDesc_websites = true
        }, 2600)
        setTimeout(  () => {
            this.animation_property.showTextDesc_where = true
        }, 2800)
        setTimeout(  () => {
            this.animation_property.showTextDesc_technologies = true
        }, 3000)
        setTimeout(  () => {
            this.animation_property.showTextDesc_meet = true
        }, 3200)
        setTimeout(  () => {
            this.animation_property.showTextDesc_creativity = true
        }, 3400)
        setTimeout( () => {
            this.show_animation_btn = true
        }, 3000)

        }

}
</script>





<style lang="sass" scoped>
@import "../css/src/partials/color.sass"
@import "../css/src/animation/animation.guid.sass"
@import "../css/src/mixins/random.mixin.sass"

.main-content
    display: flex
    justify-content: space-between
    width: 100%
    padding-top: 100px
    padding-bottom: 100px
    @media (max-width: 1023px)
        justify-content: center

.main-intro
    padding-top: 80px
    width: 52%
    @media (max-width: 1023px)
        width: 100%

.main-experian
    display: flex
    @media (max-width: 767px)
        flex-direction: column
        align-items: center

.main-text
    display: flex
    flex-direction: column
    padding-bottom: 30px
    @media (max-width: 1023px)
        align-items: center

.text-white
    color: $white-1
    font-size: 32px
    font-weight: 500
    text-transform: inherit
    @media (max-width: 1023px)
        font-size: 24px
        line-height: 27px
.text-primary
    text-transform: inherit
    font-size: 32px
    font-weight: 500
    color: $primary
    @media (max-width: 1023px)
        font-size: 24px
        line-height: 27px

.main-desc
    span
        color: $grey
        opacity: 0.8
    &-mobile
        @media (max-width: 1023px)
            display: flex
            flex-wrap: wrap
            justify-content: center
            align-items: center


.main-currently-work
    display: flex
    align-items: center
    width: 86%
    height: 37px
    margin: 0 auto
    border: 2px solid $grey
    span
        color: $grey
        font-weight: 500
        margin-left: 10px
        opacity: 0.8
    &__word
        margin-left: 10px
        font-weight: 500
        color: $white!important
.main-square
    width: 16px
    height: 16px
    background: $primary
    margin-left: 7px

.main-quote
    position: relative
    width: 45%
    text-align: center
    padding: 20px
    margin: 0 auto
    border: 1px solid $grey
    span
        font-family: 'Syne'
        text-transform: inherit
        color: $white-1
        font-weight: 800
        font-size: 24px
    &-icon
        position: absolute
        top: -15px
        left: 10px
    &-icon-bottom
        position: absolute
        right: 10px
        bottom: -15px
    @media (max-width: 1023px)
        width: 50%
        span
            font-size: 16px

.main-box-square
    width: 100%
    position: relative
    &-left
        position: absolute
        right: 0
        width: 91px
        height: 91px
        border: 1px solid $grey
        border-right: none
    @media (max-width: 1023px)
        display: none
.main-project
    display: flex
    align-items: center
    padding-top: 10rem
    &__link
        text-decoration: none
        font-weight: 400
        font-size: 32px
        color: $primary
        cursor: pointer
        @media (max-width: 1023px)
            font-size: 18px
    span
        font-family: 'Syne'
        font-weight: 800
        color: $white-1
        font-size: 32px
        margin-left: 6px
        @media (max-width: 1023px)
            font-size: 16px
            margin-right: 5px
            margin-left: 5px
    &__hr
        height: 1px
        width: 70%
        background: $white-1
        border: none
    &__all
        font-family: 'Fira Code', monospace!important
        font-weight: 500
        font-size: 16px!important
        text-overflow: clip
        white-space: nowrap
        cursor: pointer
        span
            font-weight: 500
            font-size: 16px!important
            text-overflow: clip
            white-space: nowrap
        @media (max-width: 1023px)
            margin-left: 5px


.main-skill
    display: flex
    width: 100%
    padding-top: 10rem
    @media (max-width: 1023px)
        padding: 0
    &__box
        width: 50%
        @media (max-width: 1023px)
            display: none
    &__figure
        position: relative
        text-align: center
        margin-top: 100px
        margin-left: 40px
        width: 81%
        h1
           text-shadow: 0 0 7px #fff, 0 0 10px #fff,  0 0 21px #fff, 0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe
           color: #fff
           font-size: 6.2rem
           animation: pulsate 1.5s infinite alternate
           border: 0.2rem solid #fff
           border-radius: 2rem
           padding: 0.4em
           box-shadow: 0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe

        @keyframes pulsate
            100%
               text-shadow: 0 0 4px #fff, 0 0 11px #fff,  0 0 19px #fff, 0 0 40px #bc13fe, 0 0 80px #bc13fe, 0 0 90px #bc13fe, 0 0 100px #bc13fe, 0 0 150px #bc13fe
            0%
               text-shadow: 0 0 2px #fff,  0 0 4px #fff, 0 0 6px #fff, 0 0 10px #bc13fe, 0 0 45px #bc13fe, 0 0 55px #bc13fe, 0 0 70px #bc13fe, 0 0 80px #bc13fe

    &__tag
        display: flex
        align-items: center
    &__link
        text-decoration: none
        text-transform: capitalize
        font-weight: 400
        font-size: 32px
        color: $primary
        cursor: pointer
    span
        font-weight: 600
        color: $white-1
        font-size: 32px
        margin-left: 6px
    &__hr
        height: 1px
        width: 70%
        background: $white-1
        border: none
    &__list
        display: flex
        flex-wrap: wrap
        width: 50%
        padding-top: 5rem
        justify-content: flex-end
        @media (max-width: 1023px)
            width: auto
            justify-content: center
        &-title
            height: 30px
            display: flex
            align-items: center
            margin-left: 10px
        &-item
            margin: 8px
            height: 120px
            width: 30%
            border: 1px solid $grey
            @media (max-width: 1023px)
                width: auto
            &.other-modification
                margin-top: -25px
                @media (max-width: 1023px)
                    margin-top: 8px

            &.modification
                height: 145px
            p
             font-size: 15px
             color: $white
             font-weight: 400
             margin-left: 8px
             margin-top: 5px
             opacity: 0.8

            &-section
                display: flex
                flex-wrap: wrap
                height: 70px
                align-items: center
                justify-content: flex-start
                border-top: 1px solid $grey
                &.modification-frame
                    height: 100px
            span
              font-size: 16px
              font-weight: 500

.main-about
    display: flex
    width: 100%
    padding-top: 10rem
    &__box
        @media (max-width: 1023px)
            width: auto
    &__desc
        display: flex
        margin-top: 80px
    &__tag
        display: flex
        align-items: center
    &__link
        text-decoration: none
        font-weight: 400
        font-size: 32px
        color: $primary
        cursor: pointer
        text-transform: capitalize
        @media (max-width: 1023px)
            font-size: 16px
    span
        font-weight: 600
        color: $white-1
        font-size: 32px
        margin-left: 6px
        @media (max-width: 1023px)
            font-size: 16px
            margin-left: 5px
    p
        font-weight: 400
        color: $grey
        font-size: inherit
        line-height: 26px
        opacity: 0.8
        margin-top: 25px
    &__hr
        height: 1px
        width: 70%
        background: $white-1
        border: none
    &__image
        width: 30%
        padding-left: 20px
        img
            height: 100%
            margin: 0 0 0 auto
        @media (max-width: 1023px)
            display: none

.main-contacts
    display: flex
    justify-content: space-between
    width: 100%
    padding-top: 10rem
    @media (max-width: 1023px)
        flex-direction: column
    &__box
        width: 40%
        @media (max-width: 1023px)
            width: auto
    &__desc
        margin-top: 20px
    &__tag
        display: flex
        align-items: center
    &__link
        text-transform: capitalize
        text-decoration: none
        font-weight: 400
        font-size: 32px
        color: $primary
        cursor: pointer
        @media (max-width: 1023px)
            font-size: 16px
    span
        font-weight: 600
        color: $white-1
        font-size: 32px
        margin-left: 6px
        @media (max-width: 1023px)
            font-size: 16px
            margin-left: 5px
    p
        font-weight: 400
        color: $grey
        font-size: inherit
        line-height: 26px
        opacity: 0.8
        margin-top: 55px
    &__hr
        height: 1px
        width: 40%
        background: $white-1
        border: none
    &__block
        padding: 15px
        margin-top: 35px
        border: 1px solid $grey
        span
          margin-top: 10px
          font-weight: 400
          font-size: 16px!important
        a
          margin-left: 5px
          text-decoration: none
          color: $grey
          opacity: 0.8
    &__email, &__discord
        display: flex
        align-items: center
        padding-top: 10px
        cursor: default

.main-person
    position: relative
    &-square
        position: absolute
        width: 247px
        height: 144px
        background: rgb(34, 33, 33)
        margin-top: -16px
        transform: rotate(131deg)
        left: -99px
        z-index: 2
    &-square-right
        @extend .main-person-square
        height: 126px
        top: 16px
        left: 162px !important
        position: absolute
        transform: rotate(-131deg)
    &-square-bottom-left
        @extend .main-person-square
        width: 278px
        height: 131px
        bottom: 0px
        left: 150px !important
        transform: rotate(127deg)
    &-square-bottom-right
        @extend .main-person-square
        width: 278px
        height: 136px
        bottom: 0px
        left: -117px !important
        transform: rotate(-127deg)
    @media (max-width: 1023px)
        display: none

.main-btn-hover
    border: 1px solid $primary
    background: #5a405a
    text-transform: inherit
    position: relative
    cursor: pointer
    margin-top: 25px
    &:after
     content: ''
     position: absolute
     opacity: 0.8
     background: linear-gradient(0deg, #C778DD, #C778DD), linear-gradient(0deg, rgba(199, 120, 221, 0.2), rgba(199, 120, 221, 0.2)) !important

.main-btn
    margin-top: 25px
    background: #282C33
    border: 1px solid #C778DD
    cursor: pointer
    text-transform: inherit
    @media (max-width: 1023px)
        width: 200px
        margin: 25px auto
        gap: 10px


</style>

