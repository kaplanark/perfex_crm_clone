<template>
    <b-card footer-tag="footer" class="shadow-sm border-0 mb-4">
        <b-card-text class="card-info">
            <slot name="icon"></slot>
            <slot name="text"></slot>
            <slot name="step"></slot>
        </b-card-text>
        <template #footer>
            <slot name="progress"></slot>
        </template>
    </b-card>
</template>
<script>
export default {
}
</script>

<style scoped>
.card-body {
    padding: 4px 12px;
    text-transform: uppercase;
}

.card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.card-info span {
    font-size: 13px;
    color: #666;
    flex: 1;
    text-align: start;
}

.card-info i {
    font-size: 12px;
    color: #000;
}

.card-info .step {
    font-size: 13px;
    color: #666;
}
</style>