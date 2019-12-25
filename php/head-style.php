<style>
    #head-img {
        position: absolute;
        min-height: 250px;
        <?php
            echo "width: $width;top: {$pos[0][0]}vw; left: {$pos[0][1]}vw;";
        ?>
    }
    .header {
        height: 32vw;
        min-height: 250px;
        background-position: <?php echo "{$pos[1][0]} {$pos[1][1]};" ?>
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
            background-size: 800px;
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
    window.addEventListener("load", init);
    window.addEventListener("scroll", parallax);
    window.addEventListener("resize", fixpos);

    var pos;
    var head;
    function init() {
        if (window.innerWidth > 768) {
            head = document.getElementById("head-img");
            pos = Number(window.getComputedStyle(head, null).getPropertyValue("top").split("p")[0]);
        } else {
            head = document.getElementById("header");
        }
    }
    function parallax() {
        var h1 = document.getElementById("header").getElementsByTagName("h1")[0];

        if (window.innerWidth > 768) {
            head.style.top = pos + window.pageYOffset*.2 + "px";
        } else {
            head.style.backgroundPosition = <?php echo "\"{$pos[1][0]}\" + (window.pageYOffset*.2) + \"px\";" ?>
        }

        h1.style.backgroundColor = "rgba(0,0,0," + (0.4 + window.pageYOffset*.001) + ")";
    }
    function fixpos() {
        if (window.innerWidth > 768) {
            pos = <?php echo $pos[0][0]/100 . " * window.innerWidth;" ?>
            head = document.getElementById("head-img");
            head.style.top = pos + window.pageYOffset*.2 + "px";
        } else {
            head = document.getElementById("header");
            head.style.backgroundPosition = <?php echo "\"{$pos[1][0]} \" + (window.pageYOffset*.2) + \"px\";"; ?>
        }
    }
</script>