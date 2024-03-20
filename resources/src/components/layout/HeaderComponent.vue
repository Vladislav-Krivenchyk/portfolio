<template>
<header class="main-header">
        <div :class="this.offsetHeight >= 20 ? 'main-navigation-fixed' : 'main-navigation' ">
            <div class="main-logo">
                <router-link :to="Tr.i18nRoute({name: 'mainLayout'})">
                    <icon-logo/>
                    <span>{{$t('nav.name')}}</span>
                    <div class="main-works">
                        <div  class="main-link-git">
                            <i class="vertical-line"/>
                            <a :href="['https://github.com/Vladislav-Krivenchyk']">
                                <icon-github styles="margin-top: 5px"/>
                            </a>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-if="innerWidth"  class="main-menu">
                <ul>
                    <li><router-link :class="{'router-tr-link-active' : $route.name === 'mainLayout'}" :to="Tr.i18nRoute({ name: 'mainLayout' })" >{{ $t('nav.home')}}</router-link></li>
                    <li><router-link :class="{'router-tr-link-active' : $route.name === 'projects'}" :to="Tr.i18nRoute({ name: 'projects' })" >{{ $t('nav.works')}}</router-link></li>
                    <li><router-link :class="{'router-tr-link-active' : $route.name === 'about'}" :to="Tr.i18nRoute({ name: 'about' })" >{{ $t('nav.about-me')}}</router-link></li>
                    <li><router-link :class="{'router-tr-link-active' : $route.name === 'contacts'}" :to="Tr.i18nRoute({ name: 'contacts' })" >{{ $t('nav.contacts')}}</router-link></li>
                </ul>
                <div class="main-select">
                    <base-select/>
                </div>
            </div>
            <div v-else>
                <div class="main-burger">
                    <div class="burger" @click="handlerToggle">
                        <div class="burger-line"></div>
                        <div class="burger-line-small"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile" v-if="handlerSwitch">
            <div class="mobile-menu">
                <icon-close v-if="handlerSwitch === true" @click="handlerSwitch = false" class="mobile-icon__close"/>

                <div class="mobile-list">
                    <router-link :class="{'router-tr-link-active': $route.name === 'mainLayout'}" @click.prevent="handlerSwitch = false" :to="Tr.i18nRoute({ name: 'mainLayout' })"><span>#</span>{{ $t('nav.home')}}</router-link>
                    <router-link :class="{'router-tr-link-active': $route.name === 'projects'}" @click.prevent="handlerSwitch = false" :to="Tr.i18nRoute({ name: 'projects' })"><span>#</span>{{ $t('nav.works')}}</router-link>
                    <router-link :class="{'router-tr-link-active': $route.name === 'about'}" @click.prevent="handlerSwitch = false" :to="Tr.i18nRoute({ name: 'about' })"><span>#</span>{{ $t('nav.about-me')}}</router-link>
                    <router-link :class="{'router-tr-link-active': $route.name === 'contacts'}" @click.prevent="handlerSwitch = false" :to="Tr.i18nRoute({ name: 'contacts' })"><span>#</span>{{ $t('nav.contacts')}}</router-link>
                    <div class="mobile-select">
                        <base-select  styles-option="font-size: 36px;"/>
                    </div>
                </div>

            </div>
        </div>
</header>
</template>

<script>

import BaseSelect from "../../assets/baseComponent/BaseSelect.vue";
import IconGithub from "../../assets/icons/IconGithub.vue";
import IconLogo from "../../assets/icons/IconLogo.vue";
import Tr from "../../i18n/translation.js";
import IconClose from "../../assets/icons/IconClose.vue";
import {onBeforeUnmount} from "vue";
export default {
    name: "HeaderComponent",
    components: {
        IconClose,
        IconLogo,
        IconGithub,
        BaseSelect
    },
    data() {
        return {
            innerWidth: null,
            isPopup: false,
            handlerSwitch: false,
            offsetHeight: null,
        }
    },
    setup() {
        return { Tr}
    },
    methods: {
        handlerToggle() {
            this.handlerSwitch = !this.handlerSwitch;
        },

        updateScrollPosition() {
            this.offsetHeight =  window.scrollY || window.pageYOffset;
        },
    },
    mounted() {

        this.innerWidth = window.innerWidth >= 1023

        this.updateScrollPosition()

        window.addEventListener('scroll', this.updateScrollPosition)

     },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateScrollPosition)
    },

}
</script>

<style  lang="sass" scoped>
@import "../../css/src/partials/color.sass"

.router-tr-link-active
    //color: #b49d19 !important
    color: $primary!important




.mobile
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    height: 100vh
    width: 100%
    z-index: 70
    background: #282C33
    display: block
    &-list
        display: flex
        flex-direction: column
        padding-top: 10rem
        gap: 40px
        text-align: center
        a
          text-decoration: none
          list-style: none
          font-weight: 400
          font-size: 28px
          color: $white-1
          cursor: pointer
          flex: 1
          text-wrap: nowrap
          margin-left: 35px
          text-transform: capitalize
          &:hover
              color: $white
          span
              color: #C778DD
              opacity: 0.8
          &:hover
              span
                  opacity: 1
    &-select
       margin: 0 auto


.mobile-menu
    width: 100%
    height: 100%
    margin-top: -40px
    background: #282C33


.mobile-icon__close
    position: fixed
    z-index: 70
    right: 15px
    top: 20px


.main-navigation
    display: flex
    justify-content: space-between
    height: 88px
    transition: height 0.3s ease, opacity 0.3s ease
    @media (max-width: 767px)
        padding-top: 20px


.main-navigation-fixed
    display: flex
    justify-content: space-between
    //height: 70px
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 50
    background: #222121
    padding-top: 44px
    padding-bottom: 44px
    padding-left: 30px
    padding-right: 30px
    height: 0 /* Изначально нулевая высота */
    transition: height 0.3s ease, opacity 0.3s ease
    @media (max-width: 1366px)
        justify-content: space-between
        padding-left: 15px
        padding-right: 15px


.main-works
    margin-left: 10px
.main-link-git
    display: flex
    align-items: center
.vertical-line
    height: 1px
    width: 130px
    background: $white-1



.main-logo
    display: flex
    align-items: center
    text-decoration: none
    cursor: pointer
    z-index: 11
    margin-right: 60px
    span
        margin-left: 10px
        font-weight: 700
        color: $white-1
        font-size: 18px
    a
        display: flex
        align-items: center
        text-decoration: none
        text-decoration: none


.main-select
    //padding-right: 0px
.main-menu
    display: flex
    align-items: center
    ul
        display: flex
        justify-content: space-between
        font-family: 'Syne'
        li, a
            text-transform: capitalize
            text-decoration: none
            list-style: none
            font-weight: 600
            font-size: 18px
            color: $white-1
            cursor: pointerf
            flex: 1
            text-wrap: nowrap
            gap: 10px
            margin-right: 30px
            &:hover
             color: $primary


.main-burger
    right: 17px
    position: absolute
    top: 40px

.burger
    position: relative
    width: 24px
    height: 20px
    cursor: pointer

    &-line
        width: 24px
        height: 2px
        background: $white
        transition: width 1.7s ease-in-out
        animation-name: expand, contract
        animation-duration: 1.7s
        animation-iteration-count: infinite
        animation-direction: alternate

    &-line-small
        position: absolute
        margin-top: 5px
        width: 100%
        height: 2px
        right: 0
        background: $white
        transition: width 1.7s ease-in-out
        animation-name: expand, contract
        animation-duration: 1.7s
        animation-iteration-count: infinite
        animation-direction: alternate

@keyframes expand
    0%
        width: 10px
    100%
        width: 24px

@keyframes contract
    0%
        width: 24px
    100%
        width: 10px


</style>
