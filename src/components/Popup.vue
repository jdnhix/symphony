<template>
    <div class="modal-backdrop">
        <div class="modal modal-body">
            <div>
                <input v-model="password" placeholder="Enter Room Password" type="text" required>
                <button @click="submitPassword">Enter Room</button>
                <button @click="close">Return</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Popup",
        props: ['data'],
        data() {
            return {
                password: null,
                room: this.data
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            submitPassword() {
                if(this.password === this.room.password) {
                    const info = this.room
                    this.$router.push({path: '/room', query: {roomId: info._id}})
                } else {
                    this.password = ''
                    alert('incorrect password')
                }
            }
        },
    }
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }


</style>