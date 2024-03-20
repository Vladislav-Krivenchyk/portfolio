<template>
    <div class="about">
        <div class="about__episode">
            <div class="about__episode-tag">/<span>{{ $t('about-me.about-me')}}</span></div>
            <p>{{ $t('about-me.question')}}</p>
        </div>

            <div class="about__section">
                <div class="about__guide">
                    <p>{{ $t('about-me.name') }}</p>

                    <p>{{ $t('about-me.intro')}}</p>

                    <p>{{ $t('about-me.experience')}}</p>

                    <p>{{ $t('about-me.skills')}}</p>

                    <p>{{ $t('about-me.conclusion')}}</p>
                </div>

                <div class="about__img">
                    <transition-group name="cell" tag="div" class="container">
                        <div v-for="cell in cells" :key="cell.id" class="cell" >
                            {{  }}
                        </div>
                    </transition-group>
                </div>
            </div>


            <div>

                <div class="about__episode-tag">/<span>{{ $t('skills.skills')}}</span></div>
                <div class="about__list">
                        <div class="about__item">
                            <div class="about__item-languages">
                                <span>{{  $t('skills.languages.languages') }}</span>
                            </div>
                            <div class="about__item-skills">
                                <p>{{ $t('skills.languages.languages-skill')}}</p>
                            </div>
                        </div>

                        <div class="about__item">
                            <div class="about__item-languages">
                                <span>{{  $t('skills.databases.databases') }}</span>
                            </div>
                            <div class="about__item-skills">
                                <p>{{ $t('skills.databases.database-skill')}}</p>
                            </div>
                        </div>


                        <div class="about__item">
                            <div class="about__item-languages">
                                <span>{{  $t('skills.Tools.Tools') }}</span>
                            </div>
                            <div class="about__item-skills">
                                <p>{{ $t('skills.Tools.tools-skill')}}</p>
                            </div>
                        </div>

                        <div class="about__item">
                            <div class="about__item-languages">
                                <span>{{  $t('skills.Other.Other') }}</span>
                            </div>
                            <div class="about__item-skills">
                                <p>{{ $t('skills.Other.other-skill')}}</p>
                            </div>
                        </div>

                            <div class="about__item">
                                <div class="about__item-languages">
                                    <span>{{  $t('skills.Frameworks.Frameworks') }}</span>
                                </div>
                                <div class="about__item-skills">
                                    <p>{{ $t('skills.Frameworks.frameworks-skill')}}</p>
                                </div>
                            </div>

                </div>
            </div>
    </div>
</template>

<script>

export default {
    name: "AboutMe",
    data() {
        return {
            cells: Array.apply(null, {length: 120}).map(function (_, index) {
                return {
                    id: index,
                    number: (index % 9) + 1,
                };
            }),
        }
    },
    methods: {

        shuffle() {
            this.cells = this.cells.sort(() => Math.random() - 0.5);

        }
    },
    mounted() {
        setInterval(() => {
            this.shuffle()
        }, 2500)
    }
}
</script>

<style lang="sass" scoped>
@import "../css/src/partials/color"
@import "../css/src/mixins/random.mixin.sass"


.about
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
      padding-top: 5rem
      @media (max-width: 1023px)
          padding-top: 10px

  &__guide
      padding-right: 10px
      p
        margin-bottom: 20px
        color: $grey
        font-size: 16px
        opacity: 0.8

  &__img
      @media (max-width: 1023px)
            display: none
      &-hero
        padding-left: 60px

  &__list
      display: flex
      flex-wrap: wrap
      gap: 10px
      padding-top: 2rem
      @media (max-width: 1023px)
        justify-content: space-between

  &__item
       width: 20%
       height: 150px
       border: 1px solid $grey
       @media (max-width: 1023px)
           width: 47%
       &-languages
         padding-top: 10px
         padding-bottom: 10px
         border-bottom: 1px solid $grey
         span
           margin-left: 10px
           font-weight: 600
           font-size: 16px
           color: $white
       &-skills
           display: flex
           flex-wrap: wrap
           p
            margin-top: 5px
            margin-left: 5px
            color: $grey
            font-size: 16px
            opacity: 0.8






</style>
