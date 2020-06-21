<template>
    <aside class="right-aside">
        <div class="content-header ">
            <button  class="top-btn">
                <p class="top-btn-point1">.</p>
                <p class="top-btn-point2">.</p>
                <p class="top-btn-point3">.</p>
            </button>
            <h1>{{this.$store.state.page_title ? $t(this.$store.state.page_title) : $t(this.$route.meta.title)}}</h1>
        </div>
        <!-- Main content -->
        <div class="content">
            <section class="container-fluid">
                <slot></slot>
            </section>
        </div>

        <!-- /.content -->
    </aside>
</template>
<script>
export default {
    name: "right-side",
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.right-aside {
    padding: 0 20px 10px 20px;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    background-color: #eee;
    .content-header > h1 {
        padding-left: 13px;
        padding-top: 12px;
        font-size: 21px;
        line-height: 1.5;
        margin-top: 13px;
        margin-left: 0px;
        color: #555555;
    }
    .content-header {
        margin: -2px -20px 25px -20px;
        height: 55px;
        display: flex;
    }

    .top-btn{
        border-radius: 50%;
        font-size: 24px;
        height: 41px;
        min-width: 41px;
        width: 41px;
        padding: 0;
        overflow: hidden;
        position: relative;
        line-height: 41px;
        background-color: #fff;
        color: #999;
        cursor: pointer;
        border: 1px solid white;
        margin-top: 20px;
        margin-left: 20px;
    }
    .top-btn:hover{
        background-color: #fff;
        color: #999;
        box-shadow: 0 4px 4px 0 hsla(0,0%,70%,.14), 0 4px 8px -2px hsla(0,0%,70%,.2), 0 2px 6px 0 hsla(0,0%,70%,.12);
    }
    .top-btn-point1{
        margin-top: -14px;
    }
    .top-btn-point2{
        margin-top: -49px;
    }
    .top-btn-point3{
        margin-top: -49px;
    }
}
</style>
