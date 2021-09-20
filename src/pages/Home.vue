<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container" style="text-align:center;">
                <h1 class="title">В этом приложении:</h1>
                <ul class="func-list">
                    <li>Создание своего API;</li>
                    <li>CORS - делимся своим API;</li>
                    <li>LoadMore - Постепенная подгрузка содержимого;</li>
                    <li>Ленивая подгрузка содержимого;</li>
                    <li>Хранение данных полученных от API в Vuex;</li>
                </ul>
                <a href="#/notify/" class="btn btnPrimary">Посмотреть Демо</a>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
ul.func-list {
    margin-bottom: 30px;

    li {
        margin-bottom: 20px;
    }
}
</style>