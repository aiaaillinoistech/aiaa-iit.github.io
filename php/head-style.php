<link rel="icon" href="img/icon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script async id="ics" crossorigin="anonymous" src="https://kit.fontawesome.com/b287813185.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<style>
    #head-img {
        position: absolute;
        min-height: 250px;
        <?php echo "width: $width[0];top: {$pos[0][0]}vw; left: {$pos[0][1]}vw;"; ?>
    }
    .header {
        height: 32vw;
        min-height: 250px;
    }
    .header h1 {
        text-align: center;
        line-height: 32vw;
        font-size: 8vw;
        font-weight: 700;
        background-color: rgba(0,0,0,.4);
        width: 100vw;
        height: 32vw;
        margin-left: -1px;
        min-height: 250px;
    }
    @supports (-webkit-text-stroke: 3px black) {
        .header h1 {
            -webkit-text-stroke: 3px black;
            -webkit-text-fill-color: white;
        }
    }
    @media only screen and (max-width: 768px) {
        .header {
            height: 500px;
            background: url(<?php echo $img ?>) no-repeat;
            background-size: <?php echo "$width[1]" ?>;
        }
        .header img {
            display: none;
        }
        .header h1 {
            overflow: auto;
            white-space: normal;
            font-size: 5em;
            height: 500px;
            line-height: 1.25em;
            padding: 100px 30px;
        }
    }
</style>
<script>
    window.addEventListener("load", fixpos);
    window.addEventListener("scroll", parallax);
    window.addEventListener("resize", fixpos);

    var pos;
    var head;
    var w;
    function parallax() {
        var h1 = document.getElementById("header").getElementsByTagName("h1")[0];

        if (window.innerWidth > 768) {
            head.style.top = pos + window.pageYOffset*.2 + "px";
        } else {
            head.style.backgroundPositionY = (pos + window.pageYOffset*.2) + "px";
        }

        h1.style.backgroundColor = "rgba(0,0,0," + (0.4 + window.pageYOffset*.001) + ")";
    }
    function fixpos() {
        if (window.innerWidth > 768) {
            head = document.getElementById("head-img");
            pos = <?php echo $pos[0][0]/100 ?> * window.innerWidth;
        } else if (w != window.innerWidth) {
            head = document.getElementById("header");
            pos = head.style.backgroundPositionY;
            if (pos.split('p').length == 2) {
                pos = Number(pos.split('p')[0]);
            } else if (pos.split('%').length == 2) {
                var percentage = Number(pos.split('%')[0]) / 100;
                var style = window.getComputedStyle(head);
                var headHeight = Number(style.height.split('p')[0]);
                var img = new Image();
                img.src = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
                var asp = img.height / img.width;
                var imgHeight = Number(style.backgroundSize.split('p')[0]) * asp;
                
                pos = percentage*(headHeight - imgHeight);
            } else {
                pos = 0;
            }
        }

        parallax();
        w = window.innerWidth;
    }
</script>