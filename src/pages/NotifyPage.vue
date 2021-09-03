<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <div class="notify__wrapper">

                    <div class="notify__title">
                        <p>Notify App</p>
                    </div>

                    <div class="notify__content">

                        <!-- preloader -->
                        <preloader v-if="loading" :width="90" :height="90"/>

                        <!-- notify -->
                        <notify
                            v-if="!loading"
                            :messages="messages"
                        />

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import notify from '@/components/Notify.vue'

// UI
import preloader from '@/components/UI/Preloader.vue'

export default {
    components: { notify, preloader },
    data () {
        return {
            loading: false,
            messages: []
        }
    },
    mounted () {
        this.getNotify()
    },
    methods: {
        getNotifyLazy () {
            this.loading = true

            setTimeout (() => {
                this.getNotify()
            }, 1800)
        },

        getNotify () {
            this.loading = true
            axios
            .get('https://tocode.ru/static/_secret/courses/1/notifyApi.php')
                .then(response => {
                    let res = response.data.notify
                    this.messages = res
                })
                .catch(error => {
                    console.log(error)
                })
                .finally( () => (this.loading = false) )
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
}

.notify__wrapper {
    width: 400px;
    background-color: #fff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}

.notify__title {
    p {
        font-size: 24px;
    }
}

.notify__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
}
</style>