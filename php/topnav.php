<div id="menu" class="topnav">
    <ul>
    <?php
        $urls = array(
            "Home" =>       array('title' => "Home",        'page' => "index.html",     'icon' => "fas fa-home"),
            "About" =>      array('title' => "About",       'page' => "about.html",     'icon' => "fas fa-info"),
            "DBF" =>        array('title' => "DBF",         'page' => "dbf.html",       'icon' => "fas fa-plane",
                'sub' => array(array('title' => "DAT to CSV", 'page' => "dat2csv.html"))),
            "Rocketry" =>   array('title' => "Rocketry",    'page' => "rocketry.html",  'icon' => "fas fa-rocket"),
            "Contact" =>    array('title' => "Contact Us",  'page' => "contact.html",   'icon' => "fas fa-envelope")
        );

        $set = FALSE;

        foreach ($urls as $item) {
            if ($page === $item['title']) {
                $set = TRUE;
            }

            echo "<li><a" . ($page === $item['title'] ? " class=\"active\"" : "" ) . " href=\"$item[page]\"><i class=\"$item[icon]\"></i>$item[title]</a>";
        
            if (count($item) === 4) {
                echo "<div class=\"dropdown\"><ul>";
                foreach ($item['sub'] as $sub) {
                    echo "<li><a" . ($page === $sub['title'] ? " class=\"active\"" : "" ) . " href=\"$sub[page]\">$sub[title]</a></li>";
                }
                echo "</ul></div>";
            }
            
            echo "</li>";
        }

        if (!$set) {
            echo "<li><a class=\"active extra\">$page</a></li>";
        }
    ?>
    </ul>
    <a class="burger" href="javascript:void(0);" onclick="toggleburger()">
        <span id="burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    </a>
</div>