<script setup>
</script>

<template>
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-head">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <a href="/">
                            <i class="bi bi-balloon-heart-fill"></i>
                        </a>
                    </h1>
                    <button type="button" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-links">
                    <ul>
                        <li data-bs-dismiss="modal" aria-label="Close">
                            <a href="#about">beni mutlu et</a>
                        </li>
                        <li data-bs-dismiss="modal" aria-label="Close">
                            <a id="link" href="/#skils">galeri</a>
                        </li>
                        <li data-bs-dismiss="modal" aria-label="Close">
                            <a id="link" href="/#works">ben kimim?</a>
                        </li>
                    </ul>                
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Playfair+Display&display=swap');
    $font-1: 'Fira Code', sans-serif;
    $font-2: 'Playfair Display', serif;


    .modal {
        .modal-dialog {
            .modal-content {
                background-color: #0a192f;
                .modal-head {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2vh;
                    h1 {
                        a {
                            color: red;
                            margin-top: 5%;
                            font-size: 35px;
                            margin-left: 20px;
                        }
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        i {
                            margin-top: 5%;
                            color: red;
                            font-size: 35px;
                            margin-right: 20px;
                        }
                    }
                }
                .modal-links {
                    ul {
                        margin-top: 50%;
                        li {
                            list-style: none;
                            text-align: center;
                            margin-top: 25px;
                                a {
                                color: white;
                                text-decoration: none;
                                font-size: 30px;
                                font-family: $font-1;
                                &:hover {
                                    color: red;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>