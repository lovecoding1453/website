<script setup>
    import Offcanvas from './Offcanvas.vue';

</script>

<template>
    <nav>
        <ul>
            <li id="head">
                <a  id="osmanbaycansolakeyhan">
                    <h3>
                        aycan<span>solak</span> 
                    </h3>
                </a>
                <a href="" id="icon-power">
                    <i class="bi bi-balloon-heart-fill"></i>
                </a>
            </li>
            <li id="links">
                <ul>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                        <a href="/happy-me">beni mutlu et</a>
                    </li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                        <a href="/#skils">biraz müzik</a>
                    </li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                        <a href="/#works">ben kimim?</a>
                    </li>
                </ul>
            </li>
            <li id="burger">
                <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-burger"></i>
                </a>
            </li>
        </ul>
    </nav>
    <Offcanvas />
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Playfair+Display&display=swap');
    $font-1: 'Fira Code', sans-serif;
    $font-2: 'Playfair Display', serif;
    nav {
        ul {
            display: flex;
            justify-content: space-between;
            #head {
                margin-top: 3.5vh;
                list-style: none;
                a {
                    text-decoration: none;
                    color: white;
                    i {
                        display: none;
                        color: red;
                        font-size: 35px;
                    }
                }
            }
            #links {
                list-style: none;
                ul {
                    margin-top: 4vh;
                    display: flex;
                    li {
                        list-style: none;
                        padding-right: 20px;
                        a {
                            text-decoration: none;
                            color: white;
                            font-size: 18px;
                            transition: 300ms;
                            &:hover {
                                color: red;
                            }
                        }
                    }
                }
            }
            #links {
                ul {
                    li {
                        a {
                            font-family: $font-1;
                        }
                    }
                }
            }
            #burger {
                list-style: none;
                display: none;
                margin-top: 5%;
                a {
                    color: white;
                    font-size: 30px;
                }
            }
        }
    }


    @media screen and (max-width:1031px){
        nav { 
            ul {
                #head {
                    a {
                        h3 {
                            display: none;
                        }
                        i {
                            display: block;
                        }
                    }
                }
                #links {
                    display: none;
                }
                #burger {
                    display: block;
                }
            }
        }
    }
</style>