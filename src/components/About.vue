<template>
    <div>
        About
    </div>
</template>
<script>
export default {
    destroyed() {
        console.log("This is destory");
        
    },
    activated() {
        console.log('this is activited');
    },
    deactivated() {
        console.log("this is D -activited");
        
    }
}
</script>
<style scoped>

</style>