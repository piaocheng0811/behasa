<template>
    <div class="listbrdr">
        <router-link :to="link" exact class="menu-item">
            <i class="leftmenu_icon" :class="icon"></i>
            <span class="name"><slot></slot></span>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ["link", "icon"]
}
</script>
<style scoped lang="scss">
@import "../../../css/customvariables";
a {
    //color: $menu_color;
    color:white;
    position: relative;
    display: block;
    line-height: 21px;
    padding: 12px 31px;
    &:hover {
       // color: $menu_hover_color;
       // color: #c6c4c4;

    }


    &.active {
       // color: $menu_active_color;
        color:white;
       // background-color: $menu_active;
        i {
             //color: $active_icon;
            color:white;
        }
        background-color: #9c27b0;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
        margin: 0 15px 0;
        border-radius: 3px;
       // color: #3c4858;
        padding-left: 16px;
        padding-right: 10px;
        text-transform: capitalize;
        font-size: 14px;
        letter-spacing: 1px;
    }
}

  /*.submenu-content-box .listbrdr::after{
      content: "";
     display: block;
     position: absolute;
     width: 11px;
     left: 25px;
     margin-top: -21px;
     border-top: 2px solid #888585;
     }*/

.submenu-content-box .listbrdr:active{
    color: #000;
}
.submenu-content-box .listbrdr:hover{
     color: #c6c4c4;
}
.submenu-content {
    a {
        padding: 11px 20px 10px 45px;
        position: relative;  
    }
    .leftmenu_icon {
        font-size: 14px;
        color:inherit;
         
    }
}

.name {
    vertical-align: text-bottom;
}

.collapse-item .card-content .card-content-box div a {
    padding-left: 43px;
}

.leftmenu_icon {
    margin-right: 1px;
    line-height: 22px;
    height: 23px;
    width: 20px;
    text-align: center;
    font-size: 16px;
    //color:$menu_color;
    color: white;
}

</style>
