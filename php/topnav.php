<div id="menu" class="topnav">
    <ul>
    <?php
        $urls = array(
            "Home" =>       array('title' => "Home",        'page' => "index",      'icon' => "fas fa-home"),
            "About" =>      array('title' => "About",       'page' => "about",      'icon' => "fas fa-info"),
            "News" =>       array('title' => "News",        'page' => "news",       'icon' => "far fa-newspaper"),
            "DBF" =>        array('title' => "DBF",         'page' => "dbf",        'icon' => "fas fa-plane",
                'sub' =>    array(
                                array('title' => "DAT to CSV", 'page' => "dat2csv")
                            )),
            "Rocketry" =>   array('title' => "Rocketry",    'page' => "rocketry",   'icon' => "fas fa-rocket"),
            "Contact" =>    array('title' => "Contact Us",  'page' => "contact",    'icon' => "fas fa-envelope")
        );

        $set = FALSE;

        foreach ($urls as $item) {
            if ($page === $item['title']) {
                $set = TRUE;
            }

            echo "<li " . (count($item) === 4 ? "class=\"dropdown\"" : "") . "><a" . ($page === $item['title'] ? " class=\"active\"" : "" ) . " href=\"$item[page]\"><i class=\"$item[icon]\"></i>$item[title]</a>";
        
            if (count($item) === 4) {
                echo "<div class=\"dropdown-content\">";
                foreach ($item['sub'] as $sub) {
                    echo "<a" . ($page === $sub['title'] ? " class=\"active\"" : "" ) . " href=\"$sub[page]\">$sub[title]</a>";
                }
                echo "</div>";
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