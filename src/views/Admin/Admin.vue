<template> 
    <fragment>
        <c-orders-table/>
    </fragment>
</template>



<script>
import router from "@/router.js";

import CLayout from "@/layouts/layoutMain.vue";
import COrdersTable from "@/components/sections/admin/orders/OrdersTable.vue";

export default {
    name: "Admin",

    components: {
        COrdersTable
    },

    data() {
        return {
            isAuthenticated: false
        }
    },

    created() {
        this.$emit("update:layout", CLayout);
        // Firebase Listener
        var user = firebase.auth().currentUser
        if (user) {

        firebase.auth().onAuthStateChanged(function(user) {
            if(user.uid === 'RDlE5IwuOLbpMB07DRTineMWlbK2'
            || user.uid === 'XUhAllOZwGSaGBWcb7Bg5Afb5lk2'
            || user.uid === 'Z2OquhNyvoOrS0mTRKZUVMTXcIp2'
            || user.uid === 'kDILEGQaPhOvocP5OWedzZNNOXJ3'
            ) {
                console.log("admin home listener: authenticated");
            }
            else {
                console.log("not authenticated");
                router.push('/admin-login');
            }
        });
        }
        
        else {
            router.push('/admin-login')
            console.log("null user");
        }
    }    
}
</script>


<style>
  .container-style {
    background-color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(206, 206, 206) !important;
    border-radius: 20px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .title-style {
      margin-top: 50px;
  }
</style>