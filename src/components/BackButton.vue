<template>
    <button @click="goHome" class="back-button" style="--clr:#FF0000">
        <span>{{ $t('backHome') }}</span><i></i>
    </button>
</template>

<script>
    export default {
    name: 'BackButton',
        methods: {
            goHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped src="../css/components/back-button.css"> </style>
