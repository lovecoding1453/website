<script setup>
    
</script>

<template>
    <div class="main">
        <div class="img">
            <div>
                <img id="foto-1" src="../../public/Screenshot_20230606-221804(1).jpg" alt="foto-1">
                <img id="foto-2" src="../../public/Screenshot_20230606-221809.jpg" alt="foto-2">
            </div>
        </div>
        <div id="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aperiam iure blanditiis nostrum maxime veritatis laborum consequuntur totam doloremque corporis, ea, dolor cumque dolore harum unde quisquam tempore architecto sit itaque tempora quae illum autem? Veritatis aut iusto itaque veniam laborum dolorem perferendis cumque sapiente cum voluptatem similique, quibusdam molestiae, tempore saepe deleniti. Provident nemo cum, doloremque, eius, commodi ipsa pariatur reiciendis sunt quos esse error adipisci. Nisi quibusdam commodi alias in. Temporibus, exercitationem? Obcaecati illum quibusdam aspernatur debitis incidunt labore maiores doloribus voluptatum commodi eaque at, itaque aut cumque dolore, nemo, illo pariatur a vel sint iure tenetur laboriosam!</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main {
        margin-top: 15%;
        display: flex;
        justify-content: space-between;
        .img {
            padding-left: 5%;
            padding-right: 10%;
            div {
                display: inline-block;
                img {
                    width: 200px;
                    border-radius: 100%;
                }
                #foto-2 {
                    z-index: 10;
                    margin-top: -30px;
                    transition: 500ms;
                    margin-left: 60px;
                    &:hover {
                        z-index: 50;
                        width: 250px;
                        margin-top: -60px;
                    }
                }
                #foto-1 {
                    z-index: 1;
                    transition: 500ms;
                    &:hover {
                        z-index: 50;
                        width: 250px;
                    }
                }
                
            } 
        }
        #text {
            padding-right: 10%;
            color: white;
            font-size: 20px;
        }
    }
    @media screen and (max-width:1031px){
        .main {
        margin-top: 10%;
        display: block;
        .img {
            div {
                display: inline-block;
                margin-left: 20%;
                img {
                    width: 200px;
                    border-radius: 100%;
                }
                #foto-2 {
                    z-index: 10;
                    transition: 500ms;
                    margin-left: -30px;
                    
                }
                #foto-1 {
                    z-index: 1;
                    transition: 500ms;
                   
                }
                
            } 
        }
        #text {
            padding-right: 10%;
            padding-left: 10%;
            margin-top: 5%;
            color: white;
            font-size: 20px;
        }
    }
    }
</style>