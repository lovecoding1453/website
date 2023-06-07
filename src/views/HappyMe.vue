<script setup>
    import {ref} from 'vue'
    const compliment = ref('')

    var compliments = [
        'Cennete tadilat mı var güzelim ne işin var dünyada.',
        'Bankaya borcun olacağına kankaya borcun olsun.',
        'Sen nesli tükenen bir hayvan türü gibi değerlisin yanımda.',
        'Sen çok güzelsin baktığım zaman gözlerim kamaşıyor o yüzden bakmıyorum.',
        'Eğer mutluluk ışık saçsaydı senin yanındayken herkes beni güneş sanardı.',
        'Ben senin hatırın için çiğ köfte bile yerim.',
        'Çeşmenin başına bir güzel inmiş bak ne kadar şanlısın bu güzeli görmek sana da nasip olmuş.',
        'Bu gece yine yeni düşündüm kar yağınca mikroplar ölür diyorlar, iyi misin?',
        'Annenin askeriyle bir ilgisi var mı? Bomba gibi bir kız doğurmuşta.',
        'Yokluğunda solan çiçekler var anahtarları bırakta onları bir sulayalım.',
        'İnstagram çökmüş diyorlar yoksa fotoğraf mı yükledin.',
        'Anne eczacı mı acaba? İlaç gibi kız doğurmuş.',
        'Google de neymiş aradığım her şeyi gözlerinde bulmuşken.',
        'Eğer millet olarak el ele verilecekse ben şimdiden söyleyeyim senin elini tutarım.',
        'Çok güzel bir karısınız hanımefendi.',
        'Asgari ücret gibisin kanka hiç kimse seninle geçinemiyor.',
        '-Saye- kelimesinin gölge olduğunu öğrendiğimden beri sayende mutlu olmak istiyorum.',
        'Brokoliyi sevmez, anlarım. Maydonozu sevmez, anlarım. Eti sevmez, onu da anlarım ama bir insan seni nasıl sevmez? İşte bunu aklım almıyor.',
        'Seni ince ince kesiyorum umarım acı vermiyorumdur.',
        'Ne kadar nazik, ne kadar ince ruhlu, ne kadar iyi birine denk geldiğin için çok sevinmelisin.',
        'Facebook çökmüş diyorlar yine paylaşım mı yaptın.',
        'Bilim adamları Marsta hayat buluyor ben de sende.',
        'Canım arkadaşım sesin çok güzel sen buralarda boşa harcanıyorsun hemen git başka yerlerde söyle şarkını.',
        'Fırından yeni çıkmış ekmek gibi tazesin ama çok sıcaksın dokunamıyorum.',
        'Tam ekran yapılınca takılmayan youtube videosu gibisin lan.',
        'Kankanın karekökünün köküsün sen.',
        'Sen yoksun diye yanımda 24 saat uyumak istiyorum.',
        'Sen sıradan bir kız değilsin, romantik bir filmdeki küçük ve dokunaklı bir kadın kahraman gibisin.',
        'Birçoğunun bilgisayar oyunlarına bağımlı olduğu gibi ben de sana bağımlıyım. Senin gibi bir kızla vakit geçirmek için her şeyimi verirdim.',
        'Dünyayı hiç kimsenin göremediği şekilde görmeme sebep olacak kadar güzelsin.',
        'Kızım sen benim nikotinimsin',
        'Şerefsiz, piçsin felan ama sensiz de olmuyor be 🚬',
        'Kalabalık içinde iken yardımıma koşan kulaklığım gibisin keyfim kaçtıkça moralim düzeliyor la',
        'Sana bir şey olsa acısını ben hissederim kanka, sen ağlasan benim içim parçalanır.',
        'Seni seviyorum kanka çünkü ben olmasam bile insanlara beni savunursun, biliyorum.',
        'Sen benim yıldızımsın. Karanlık çıktığında ortaya çıkan sensin.',
        'Seninle gülmeyi, ağlamayı, eğlenmeyi ve kava etmeyi hiçbir şeye değişmem.',
        'Seni sevmeyenin canını sıkanın ta amına koyayım',
        'Olum sıkıcı bir kitapta ki KISA olsa da tebessüm ettiren ve kitabı sevdiren diaolg gibisin.',
        'Seninle saçmalamayı başka biriyle gülmeye değişmem.',
        'Yüzümdeki tebessümün sebebi sensin kanka.',
        'Dostumsun sen benim, gözüm kapalı güvendiğim kişisin.',
        'Çok güzel bir şerefsizsin ahahaha',
        'Kalbini kıracak puştlara açma, çünkü benim de canım yanar.',
        'Güneş mi açtı, sen mi gülümsedin?',
        'Birlikteyken hiç komik olmayan şeylere bile saatlerce gülebiliyoruz.',
        'Ömer gel gel, gel yanıma',
        'Araba orada',
        'Sen bir Komplecisin',
        'Yak bir sigara yak kendine gel amk ne tıklıyon yüz defa',
        'La kırdın kırdın yeter amk',
        'Git Osmana bulaş benden ne istiyon amk'
        
    ]

    function getCompliment() {
        compliment.value = compliments[Math.floor(Math.random() * compliments.length)];
    }

</script>

<template>
    <div class="main">
        <p id="compliment">{{ compliment }}</p>
        <button class="btn btn-primary"  @click="getCompliment">Bas bakayım🤪</button>
    </div>
</template>

<style scoped lang="scss">
    .main {
        text-align: center;
        margin-top: 35vh;
        p {
            color: white;
            font-size: 22px;
        }
    }
</style>