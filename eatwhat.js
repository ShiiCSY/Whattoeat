 //同學，我知道某一天你就是突然受夠了去二摟打飯來吃，沒關係..... "韓國料理裴老師"
        //const {parse} = require("csv-parse")
        //alert if pressed too many times
        let times = 0;
        const food = ["基湖二樓","麥當勞","西湖市場-豚勝","小七","全家","牛耳","香港喜園燒臘店","來佳海南雞","貝魯佳義大利麵","西湖市場-鍋燒麵90", 
        "西湖市場-首爾飯捲之家","西湖市場-韓式料理93", "西湖市場-嘉園大阪燒豬排","西湖涼麵","八方雲集","肯德基","濠記水餃",
        "西湖市場-加園烏龍麵","西湖市場-咖哩嚕哆","吉野家"]
        const foodimage = ["picture/minji.jpeg","picture/xihumcdon.jpeg","picture/xihutun.jpeg",]

        function randomize(){
            document.getElementById("unlucky").innerHTML = "";
            const random_element = food[Math.floor(Math.random()*food.length)]
            document.getElementById("eatwhat").innerHTML = random_element;    
            // const BGContainer = document.getElementById("background-container");
            // const image_source = foodimage[random_element] || foodimage.default;

            // BGContainer.style.backgroundImage = `url('${image_source}')`;

            if (random_element === "基湖二樓"){
                const unlucky_element = document.createElement("span");
                unlucky_element.textContent = "雖小!!!";
                unlucky_element.classList.add("noto-sans");
                document.getElementById("unlucky").appendChild(unlucky_element)
            }
            times += 1;
            if (times > 15) {
                Swal.fire({
                  title: '你要按多少次？',
                  confirmButtonText: '了解'
                }).then((result) => {
                  if (result.isConfirmed) {
                    times = 0;
                  }
                });
                times = 0;
            };
        function showfoodpic(){
            document.getElementsByClassName("showfoodpic")
        }
    }

        function gettimeuntil13() {
            const now = new Date();
            const target = new Date();
            target.setHours(13,0,0,0);

            if (target.getTime()<now.getTime()) {
                target.setDate(target.getDate()+1);
            }

            const diff = target.getTime() - now.getTime();
            const hours = Math.floor(diff / (1000*60*60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            return `${hours}小時${minutes}分${seconds}秒`;

        }
        function updateTimer() {
            const timerElement = document.getElementById('timer');
            timerElement.textContent = gettimeuntil13();
          }

        setInterval(updateTimer, 1000);

        updateTimer();