<template>
    <div>
        <preloader v-show="this.$store.state.preloader"></preloader>
        <vueadmin_header></vueadmin_header>
        <div class="wrapper row-offcanvas">
            <left_side v-show="this.$store.state.left_open"></left_side>
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
    </div>
</template>
<script>

    import preloader from 'components/layouts/preloader/preloader'

    import right_side from 'components/layouts/right-side'

    import left_side from 'components/layouts/left-side/default/left-side'

    import vueadmin_header from 'components/layouts/header/fixed-header'


    import 'assets/sass/custom.scss'

    import anime from 'animejs'

    export default {
        name: 'layout',
        components: {
            preloader,
            vueadmin_header,
            left_side,
            right_side
        },
        data() {
            return {
                showtopbtn: false
            }
        },
        mounted() {
            if (window.innerWidth <= 992) {
                this.$store.commit('left_menu', 'close')
            }
        },

    }
//     import 'components/layouts/css/boxed.scss'


    import 'components/layouts/css/fixed-menu.scss'

    /**
     * Style required for a compact-menu layout
     */
//     import 'components/layouts/css/compact-menu.scss'

    /**
     * Style required for a centered-logo layout
     */
    // import 'components/layouts/css/centered-logo.scss'

    /**
     * Style required for a content-menu layout
     */
    // import 'components/layouts/css/content_menu.scss'


    /**
     * import animejs for the menu transition effects
     */

</script>
<style lang="scss" scoped>
    .wrapper:before,
    .wrapper:after {
        display: table;
        content: " ";
    }

    .wrapper:after {
        clear: both;
    }

    .wrapper {
        display: table;
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
        table-layout: fixed
    }

    .right-aside,
    .left-aside {
        padding: 0;
        display: table-cell;
        vertical-align: top;
    }

    .right-aside {
        background-color: #ebf2f6 !important;
    }

    .panel-white-box{
        background:white;
        box-shadow: 0 0 4px 0 rgba(0,0,0,.08), 0 2px 4px 0 rgba(0,0,0,.12);
    }

    @media (max-width: 992px) {
        .wrapper>.right-aside {
            width: 100vw;
            min-width: 100vw;
        }
    }
</style>
