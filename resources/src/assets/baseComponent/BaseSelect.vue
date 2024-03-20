<template>
    <div class="select" :style="stylesOption">
        <div class="select-lang" @click="isLanguageRef = !isLanguageRef">
            <span>{{ locale }}</span>
            <icon-arrow styles="margin-left: 4px;"
                        :style="isLanguageRef ? 'transform: rotate(180deg); transition: 1s': ''"
            />
        </div>

        <div class="options" v-show="isLanguageRef" :style="isLanguageRef ? 'transition: 2s': ''">
            <div
                class="option"
                v-for="sLocale in filteredLocales"
                :key="`locale-${sLocale}`"
                @click="switchLanguage(sLocale)"
            >
                {{ t(`locale.${sLocale}`) }}
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router"
import { ref, computed } from 'vue';

import Tr from "../../i18n/translation"
import IconArrow from "../icons/IconArrow.vue";

export default {
    name: "BaseSelect",
    components: {IconArrow},
    props: {
        stylesOption: {
            type: String,
            default: ''
        }
    },
    setup() {

        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales

        const router = useRouter()

        const isLanguageRef = ref(false);

        const filteredLocales = computed(() => {
            return supportedLocales.filter(sLocale => sLocale !== locale.value);
        });

        const switchLanguage = async (newLocale) => {
            await Tr.switchLanguage(newLocale)

            try {
                await router.replace({ params: { locale: newLocale } })
            } catch (e) {
                console.log(e)
                router.push("/")
            }

            isLanguageRef.value = false;
        }

        return { t, locale, filteredLocales, switchLanguage, isLanguageRef }
    },
}
</script>

<style lang="sass" scoped>
@import "../../css/src/partials/color"
.select
    position: relative
    cursor: pointer

.select-lang
    display: flex
    align-items: center
    span
        text-transform: uppercase
        font-size: 18px
        color: $white-1
        @media (max-width: 1023px)
            font-size: 28px

.options
    position: absolute
    text-transform: uppercase
    color: $white-1
</style>
