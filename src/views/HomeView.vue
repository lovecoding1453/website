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
            <p>
                Ben çok tatlı, şeker, iyi yürekli ve bir o kadar piç ve şerefsiz bir kişiyim. Tamamen mükemmelim diyemem çünkü benim de bazı hatalarım var. Mesela değmeyecek insanlara fazla değer veriyorum ve bununla beraber bazı saçma şeyleri kafama takıyorum, tabi bu tamamen iyi niyetli olmamdan dolayı kaynaklanıyor. kendimi çok seviyorum ve bununla berarber bazı hayattan bezmiş insanları bile keyiflendirir ve onların tebessüm etmesini sağlarım. En basitinden bu web siteyi yazan şahsı o kadar mutlu ettim ki kendini ilk defa değerli hissetti fukaram, ahahahah...
            </p>
            <p>
                Müzik dinlemeyi, gıybet yapmayı, gülmeyi çok severim bunları hiçbirşeye değişmem. İnsanları güldürmek en büyük hobimdir. Ha bir de neden yazıldığını bilmiyorum ama Koç burcuyum bilginiz olsun 😉 Yanisi ben her zaman haklıyımdır ahahahah.
            </p>
            <p>Gezmeyi sevdiğim kadar insanlar da beni çok sever. Hatta bir şahsın nikotini haline gelmiş bulunmaktayım🤪 Kısacası bağımlılık yapabilirim bunu bilerek yanıma gelin...</p>
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