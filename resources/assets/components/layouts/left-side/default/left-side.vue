 <template>
    <!-- Left side column. contains the logo and sidebar -->
     <div>
<!--         <aside data-background-color="black" class="left-aside sidebar-offcanvas bk-img-black" style="background-image: url(~img/left-side-bk.PNG);">-->
         <aside data-background-color="black" class="left-aside sidebar-offcanvas bk-img-black" style="background-image: url(resources/assets/assets/img/left-side-bk.PNG);">
             <div>
<!--                 <section class="sidebar">-->
                 <section>
                     <div id="menu" role="navigation">
                         <div class="nav_profile">
                             <profile></profile>
                         </div><br>
                         <vmenu>
                             <template v-for="item in menuitems">
                                 <li class="divider mt-3 " v-if="item.title">
                                     <span>{{item.name}}</span>
                                 </li>
                                 <vsub-menu v-if="item.child" :title="item.name" :icon="item.icon">
                                     <vmenu-item v-for="child in item.child" :link="child.link" :icon="child.icon" :key="child.name">{{child.name}}</vmenu-item>
                                 </vsub-menu>
                                 <vmenu-item v-if="item.link" :link="item.link" :icon="item.icon">{{ $t(item.name)}}</vmenu-item>
                             </template>
                         </vmenu>
                         <!-- / .navigation -->
                     </div>
                     <!-- menu -->
                 </section>
             </div>
         </aside>
     </div>

</template>
<script>
import {
    vmenu,
    vmenuItem,
    vsubMenu
} from './menu';
import profile from "../left-profile/user_profile2.vue"
import menu_items from "../../../../menu.js";
import admin_menu_items from "../../../../admin_menu.js";
export default {
    name: "left-side",
    components: {
        vmenu,
        vsubMenu,
        vmenuItem,
        profile
    },
    data() {
        return {
            menuitems: menu_items
        }
    },
    mounted() {
        if(this.$route.path.includes('admin')){  // if admin route
            this.menuitems=admin_menu_items;
        }
    }
}
</script>
<style scoped lang="scss">
@import "../../css/customvariables";
.left-aside {
    width: $left_menu_width;
    background: $leftmenu_color;
    background-repeat: repeat-y;
}

.navigation {
    padding: 0;
}

.divider {
    margin-top: 10px;
    list-style-type: none;
    border-bottom:1px solid #ececec;
    padding-bottom: 6px;
}

.divider span {
    font-size: 15px;
    font-weight: 700;
    color: $divider-leftheader;
    margin: 20px 20px -15px 20px;
}

.sidebar {
    display: block;
    font-size: 14px;
    letter-spacing: 1px;
}

.content {
    display: block;
    width: auto;
    overflow-x: hidden;
    padding: 0 15px;
}

.badge-success {
    background-color: #22d69d;
}

.badge {
    padding: 0.60em 0.7em;
    border-radius: 0.75rem;
}
.nav_profile{
    border-bottom:1px solid #eee;
}
.bk-img-black{
    /*background-image: url('file:///C:/xampp/htdocs/vuejs-laravel/public/images/left-side-bk.png');*/
    background-repeat: no-repeat;
    background-size: cover;
    }
    .bk-img{

    }
</style>
