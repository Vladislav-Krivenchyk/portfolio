<template>
<div class="project">
    <div class="project__intro">
        <div class="project__intro-section">/<span>{{ $t('pages_project.project')}}</span></div>
        <p>{{ $t('pages_project.list')}}</p>
    </div>
    <div class="project__section">
            <div>
                <div class="project__section-app">#<span>{{ $t('pages_project.complete-apps')}}</span></div>
            </div>
        <div class="project__section-complete-app">

            <div class="project__section-complete-app-list">

                <div class="project__section-complete-app-item">
                    <div>
                        <img src="../assets/images/compete-app.png" alt="">
                    </div>
                        <div class="project__section-complete-app-skill">
                            <span>{{ $t('pages_project.applications.skill')}}</span>
                            <div class="project__section-complete-app-skill line">
                                <h3>{{ $t('pages_project.applications.name-project')}}</h3>
                            </div>
                            <span>{{ $t('pages_project.applications.desc')}}</span>
                            <base-button
                                @mouseover="handleMouseOverLive"
                                @mouseleave="handleMouseLeaveLive"
                                :class="hoverClassLive"
                            ><a>{{ $t('pages_project.applications.live')}} ~> </a></base-button>
                        </div>
                </div>

            </div>

        </div>
    </div>

    <div class="project__section">
        <div>
            <div class="project__section-small">#<span>{{ $t('pages_project.small-projects')}}</span></div>
        </div>

        <div class="project__section-small-list">
            <div class="project__section-small-item">
                <div class="project__section-small-item-skill" >
                    <span>{{ $t('pages_project.small-project.Discord')}}</span>
                </div>

                    <h3>{{ $t('pages_project.small-project.bot')}}</h3>

                    <div class="project__section-small-item-desc">
                        <span>{{ $t('pages_project.small-project.app')}}</span>
                    </div>

                <base-button
                    @mouseover="handleMouseOver"
                    @mouseleave="handleMouseLeave"
                    :class="hoverClass"
                ><a>{{ $t('pages_project.small-project.git')}} ~></a></base-button>
            </div>
        </div>
    </div>
    <div class="project__section">
        <div>
            <div class="project__section-currency">#<span>{{ $t('pages_project.current-projects')}}</span></div>
        </div>
    </div>
</div>
</template>

<script>
import BaseButton from "../assets/baseComponent/BaseButton.vue";

export default {
    name: "Projects",
    components: {BaseButton},
    data() {
        return  {
            isHoverBtn: false,
            isHoverBtnLive: false
        }
    },
    computed: {
        hoverClass() {
            return this.isHoverBtn ? 'project__btn-hover' : 'project__btn'
        },
        hoverClassLive() {
            return this.isHoverBtnLive ? 'project__btn-hover' : 'project__btn'
        }
    },
    methods: {
        handleMouseOverLive() {
            this.isHoverBtnLive = true;
        },
        handleMouseLeaveLive() {
            this.isHoverBtnLive = false;
        },
        handleMouseOver() {
            this.isHoverBtn = true;
        },
        handleMouseLeave() {
            this.isHoverBtn = false;
        }
    },
}
</script>

<style lang="sass" scoped>
@import "../css/src/partials/color"
.project
    &__intro
      padding-top: 15rem
      &-section
          padding-bottom: 20px
          font-weight: 600
          font-size: 32px
          color: $primary
          span
              font-weight: 600
              font-size: 32px
              color: $white-1
              margin-left: 6px
              @media (max-width: 1023px)
                font-size: 16px
                margin-left: 5px

          @media (max-width: 1023px)
              font-size: 16px
              padding-top: 20px
      p
        color: $grey
        font-size: 16px
        opacity: 0.8
      @media (max-width: 1023px)
        display: flex
        align-items: center
        justify-content: space-around

    &__section
        padding-top: 50px
        padding-bottom: 50px
        &-app, &-small, &-currency
            font-weight: 400
            font-size: 32px
            color: $primary
            @media (max-width: 1023px)
                font-size: 16px

        span
            font-weight: 600
            font-size: 32px
            color: $white-1
            margin-left: 6px
            @media (max-width: 1023px)
                font-size: 16px
                margin-left: 5px
        &-complete-app-list
            padding-top: 5rem

        &-complete-app-item
            width: 25%
            border: 1px solid $grey
            opacity: 0.8
            @media (max-width: 1023px)
                width: 96%


        &-complete-app-skill
            display: flex
            flex-direction: column
            border-top: 1px solid $grey
            span
                font-weight: 400
                font-size: 16px
                color: $grey
                opacity: 0.8
                margin-top: 10px
                margin-bottom: 10px
                margin-left: 10px

            &.line
                h3
                   margin-left: 10px
                   margin-top: 10px
                   margin-bottom: 10px
                   font-weight: 500
                   font-size: 24px
                   color: $white-1

        &-small-list
            padding-top: 5rem
        &-small-item
            width: 25%
            height: 250px
            border: 1px solid $grey
            opacity: 0.8
            @media (max-width: 1023px)
                width: 96%
            span
                font-weight: 400
                font-size: 16px
                color: $grey
                opacity: 0.8
            h3
                margin-left: 10px
                margin-top: 15px
                margin-bottom: 10px
                font-weight: 500
                font-size: 24px
                color: $white-1
            &-skill
                padding-top: 10px
                padding-bottom: 10px
                border-bottom: 1px solid $grey
                span
                  margin-left: 10px

            &-desc
                margin-left: 10px
                margin-top: 20px
                margin-bottom: 10px

a
 text-transform: capitalize

.project__btn
    background: #282C33
    border: 1px solid $primary
    width: 100px
    height: 37px
    padding: 15px
    cursor: pointer
    margin-bottom: 20px
    margin-left: 10px
    margin-top: 30px
    text-transform: capitalize

.project__btn-hover
    position: relative
    background: #5a405a
    @extend .project__btn
    &:after
        content: ''
        position: absolute
        opacity: 0.8
        background: linear-gradient(0deg, #C778DD, #C778DD), linear-gradient(0deg, rgba(199, 120, 221, 0.2), rgba(199, 120, 221, 0.2))!important
</style>
