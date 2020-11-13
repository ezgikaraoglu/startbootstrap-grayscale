/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

        <!DOCTYPE html>
<html>
  <head>
    <title>
      Vis Network | Layouts | User Defined Hierarchical Layout (Configurable)
    </title>

    <style type="text/css">
      body {
        font: 10pt sans;
      }

      #mynetwork {
        width: 600px;
        height: 600px;
        border: 1px solid lightgray;
      }
    </style>
    <script
      type="text/javascript"
      src="https://visjs.github.io/vis-network/standalone/umd/vis-network.min.js"
    ></script>

    <script type="text/javascript">
      var nodes = null;
      var edges = null;
      var network = null;
      var directionInput = document.getElementById("direction");

      function destroy() {
        if (network !== null) {
          network.destroy();
          network = null;
        }
      }

      function draw() {
        destroy();
        nodes = [];
        edges = [];
        var connectionCount = [];
        var nodes = [
          { id: 0, label: "World Heritage Sites"},
          { id: 1, label: "Natural Sites"},
          { id: 2, label: "Cultural Sites"},
          { id: 3, label: "War"},
          { id: 4, label: "Deforestation"},
          { id: 5, label: "Armed Violence/Groups"},
          { id: 6, label: "Environmental Factors/Changes"},
          { id: 7, label: "Urban Destruction"},
          { id: 8, label: "Deterioration"},
          { id: 9, label: "War"},
          { id: 10, label: "Deforestation"},
          { id: 11, label: "Armed Violence/Groups"},
          { id: 12, label: "Environmental Factors/Changes"},
          { id: 13, label: "Urban Destruction"},
          { id: 14, label: "Deterioration"},
          { id: 15, label: "Old City of Jerusalem and its Walls"},
          { id: 16, label: "Archaeological Site of Leptis Magna"},
          { id: 17, label: "Cultural Landscape and Archaeological Remains of the Bamiyan Valley"},
          { id: 18, label: "Chan Chan Archaeological Zone"},
          { id: 19, label: "Tombs of Buganda Kings at Kasubi"},
          { id: 20, label: "Nan Madol: Ceremonial Centre of Eastern Micronesia"},
          { id: 21, label: "Fortifications on the Caribbean Side of Panama: Portobelo-San Lorenzo"},
          { id: 22, label: "Ancient City of Damascus"},
          { id: 23, label: "Site of Palmyra"},
          { id: 24, label: "Ancient City of Bosra"},
          { id: 25, label: "Samarra Archaeological City"},
          { id: 26, label: "Liverpool – Maritime Mercantile City"},
          { id: 27, label: "Medieval Monuments in Kosovo"},
          { id: 28, label: "Tomb of Askia"},
          { id: 29, label: "Minaret and Archaeological Remains of Jam"},
          { id: 30, label: "Hatra"},
          { id: 31, label: "Archaeological Site of Cyrene"},
          { id: 32, label: "Timbuktu"},
          { id: 33, label: "City of Potosi"},
          { id: 34, label: "Historic Town of Zabīd"},
          { id: 35, label: "Al-Khalil Old Town"},
          { id: 36, label: "Crac des Chevaliers and Qal’at Salah El-Din"},
          { id: 37, label: "Historic Centre of Vienna"},
          { id: 38, label: "Archaeological Site of Sabratha"},
          { id: 39, label: "Rock-Art Sites of Tadrart Acacus"},
          { id: 40, label: "Historic Centre of Shakhrisyabz"},
          { id: 41, label: "Ashur (Qal'at Sherqat)"},
          { id: 42, label: "Old Towns of Djenné"},
          { id: 43, label: "Old Walled City of Shibam"},
          { id: 44, label: "Ancient City of Aleppo"},
          { id: 45, label: "Ancient Villages of Northern Syria"},
          { id: 46, label: "Abu Mena"},
          { id: 47, label: "Coro and its Port"},
          { id: 48, label: "Old City of Sana'a"},
          { id: 49, label: "Palestine: Land of Olives and Vines"},
          { id: 50, label: "Old Town of Ghadamés"},
          { id: 51, label: "East Rennell"},
          { id: 52, label: "Selous Game Reserve"},
          { id: 53, label: "Rainforests of the Atsinanana"},
          { id: 54, label: "Mount Nimba Strict Nature Reserve"},
          { id: 55, label: "Manovo-Gounda St. Floris National Park"},
          { id: 56, label: "Salonga National Park"},
          { id: 57, label: "Tropical Rainforest Heritage of Sumatra"},
          { id: 58, label: "Islands and Protected Areas of the Gulf of California"},
          { id: 59, label: "Air and Ténéré Natural Reserves"},
          { id: 60, label: "Río Plátano Biosphere Reserve"},
          { id: 61, label: "Virunga National Park"},
          { id: 62, label: "Garamba National Park"},
          { id: 63, label: "Everglades National Park"},
          { id: 64, label: "Lake Turkana National Parks"},
          { id: 65, label: "Okapi Wildlife Reserve"},
          { id: 66, label: "Niokolo-Koba National Park"},
          { id: 67, label: "Kahuzi-Biega National Park"}
        ];
        edges.push({ from: 0, to: 1 });
        edges.push({ from: 0, to: 2 });
        edges.push({ from: 1, to: 3 });
        edges.push({ from: 1, to: 4 });
        edges.push({ from: 1, to: 5 });
        edges.push({ from: 1, to: 6 });
        edges.push({ from: 1, to: 7 });
        edges.push({ from: 1, to: 8 });
        edges.push({ from: 2, to: 9 });
        edges.push({ from: 2, to: 10 });
        edges.push({ from: 2, to: 11 });
        edges.push({ from: 2, to: 12 });
        edges.push({ from: 2, to: 13 });
        edges.push({ from: 2, to: 14 });
        edges.push({ from: 8, to: 15 });
        edges.push({ from: 3, to: 16 });
        edges.push({ from: 5, to: 16 });
        edges.push({ from: 5, to: 17 });
        edges.push({ from: 6, to: 17 });
        edges.push({ from: 7, to: 17 });
        edges.push({ from: 6, to: 18 });
        edges.push({ from: 7, to: 19 });
        edges.push({ from: 6, to: 20 });
        edges.push({ from: 6, to: 21 });
        edges.push({ from: 3, to: 22 });
        edges.push({ from: 5, to: 22 });
        edges.push({ from: 3, to: 23 });
        edges.push({ from: 5, to: 23 });
        edges.push({ from: 3, to: 24 });
        edges.push({ from: 3, to: 25 });
        edges.push({ from: 6, to: 26 });
        edges.push({ from: 8, to: 27 });
        edges.push({ from: 5, to: 28 });
        edges.push({ from: 8, to: 29 });
        edges.push({ from: 5, to: 30 });
        edges.push({ from: 3, to: 31 });
        edges.push({ from: 5, to: 31 });
        edges.push({ from: 7, to: 32 });
        edges.push({ from: 12, to: 33 });
        edges.push({ from: 14, to: 34 });
        edges.push({ from: 11, to: 35 });
        edges.push({ from: 9, to: 36 });
        edges.push({ from: 11, to: 36 });
        edges.push({ from: 13, to: 37 });
        edges.push({ from: 9, to: 38 });
        edges.push({ from: 11, to: 38 });
        edges.push({ from: 14, to: 38 });
        edges.push({ from: 9, to: 39 });
        edges.push({ from: 11, to: 39 });
        edges.push({ from: 13, to: 40 });
        edges.push({ from: 9, to: 41 });
        edges.push({ from: 12, to: 41 });
        edges.push({ from: 13, to: 42 });
        edges.push({ from: 14, to: 42 });
        edges.push({ from: 11, to: 43 });
        edges.push({ from: 9, to: 44 });
        edges.push({ from: 11, to: 44 });
        edges.push({ from: 9, to: 45 });
        edges.push({ from: 11, to: 45 });
        edges.push({ from: 12, to: 46 });
        edges.push({ from: 12, to: 47 });
        edges.push({ from: 9, to: 48 });
        edges.push({ from: 11, to: 49 });
        edges.push({ from: 12, to: 49 });
        edges.push({ from: 9, to: 50 });
        edges.push({ from: 11, to: 50 });
        edges.push({ from: 13, to: 50 });
        edges.push({ from: 6, to: 51 });
        edges.push({ from: 6, to: 52 });
        edges.push({ from: 6, to: 53 });
        edges.push({ from: 6, to: 54 });
        edges.push({ from: 8, to: 55 });
        edges.push({ from: 5, to: 56 });
        edges.push({ from: 6, to: 57 });
        edges.push({ from: 6, to: 58 });
        edges.push({ from: 5, to: 59 });
        edges.push({ from: 6, to: 59 });
        edges.push({ from: 8, to: 59 });
        edges.push({ from: 6, to: 60 });
        edges.push({ from: 8, to: 60 });
        edges.push({ from: 3, to: 61 });
        edges.push({ from: 4, to: 61 });
        edges.push({ from: 6, to: 62 });
        edges.push({ from: 6, to: 63 });
        edges.push({ from: 8, to: 63 });
        edges.push({ from: 6, to: 64 });
        edges.push({ from: 5, to: 65 });
        edges.push({ from: 6, to: 66 });
        edges.push({ from: 3, to: 67 });
        edges.push({ from: 4, to: 67 });
        nodes[0]["level"] = 0;
        nodes[1]["level"] = 1;
        nodes[2]["level"] = 1;
        nodes[3]["level"] = 2;
        nodes[4]["level"] = 2;
        nodes[5]["level"] = 2;
        nodes[6]["level"] = 2;
        nodes[7]["level"] = 2;
        nodes[8]["level"] = 2;
        nodes[9]["level"] = 2;
        nodes[10]["level"] = 2;
        nodes[11]["level"] = 2;
        nodes[12]["level"] = 2;
        nodes[13]["level"] = 2;
        nodes[14]["level"] = 2;
        nodes[15]["level"] = 3;
        nodes[16]["level"] = 3;
        nodes[17]["level"] = 3;
        nodes[18]["level"] = 3;
        nodes[19]["level"] = 3;
        nodes[20]["level"] = 3;
        nodes[21]["level"] = 3;
        nodes[22]["level"] = 3;
        nodes[23]["level"] = 3;
        nodes[24]["level"] = 3;
        nodes[25]["level"] = 3;
        nodes[26]["level"] = 3;
        nodes[27]["level"] = 3;
        nodes[28]["level"] = 3;
        nodes[29]["level"] = 3;
        nodes[30]["level"] = 3;
        nodes[31]["level"] = 3;
        nodes[32]["level"] = 3;
        nodes[33]["level"] = 3;
        nodes[34]["level"] = 3;
        nodes[35]["level"] = 3;
        nodes[36]["level"] = 3;
        nodes[37]["level"] = 3;
        nodes[38]["level"] = 3;
        nodes[39]["level"] = 3;
        nodes[40]["level"] = 3;
        nodes[41]["level"] = 3;
        nodes[42]["level"] = 3;
        nodes[43]["level"] = 3;
        nodes[44]["level"] = 3;
        nodes[45]["level"] = 3;
        nodes[46]["level"] = 3;
        nodes[47]["level"] = 3;
        nodes[48]["level"] = 3;
        nodes[49]["level"] = 3;
        nodes[50]["level"] = 3;
        nodes[51]["level"] = 3;
        nodes[52]["level"] = 3;
        nodes[53]["level"] = 3;
        nodes[54]["level"] = 3;
        nodes[55]["level"] = 3;
        nodes[56]["level"] = 3;
        nodes[57]["level"] = 3;
        nodes[58]["level"] = 3;
        nodes[59]["level"] = 3;
        nodes[60]["level"] = 3;
        nodes[61]["level"] = 3;
        nodes[62]["level"] = 3;
        nodes[63]["level"] = 3;
        nodes[64]["level"] = 3;
        nodes[65]["level"] = 3;
        nodes[66]["level"] = 3;
        nodes[67]["level"] = 3;

        // create a network
        var container = document.getElementById("mynetwork");
        var data = {
          nodes: nodes,
          edges: edges,
        };

        var options = {
          edges: {
            smooth: {
              type: "cubicBezier",
              forceDirection:
                directionInput.value == "UD" || directionInput.value == "DU"
                  ? "vertical"
                  : "horizontal",
              roundness: 0.4,
            },
          },
          layout: {
            hierarchical: {
              direction: directionInput.value,
            },
          },
          physics: false,
        };
        network = new vis.Network(container, data, options);

        // add event listeners
        network.on("select", function (params) {
          document.getElementById("selection").innerHTML =
            "Selection: " + params.nodes;
        });
      }
    </script>
  </head>

  <body onload="draw();">
    <h2>Data Visualization Challenge</h2>

    <div style="width: 700px; font-size: 14px; text-align: justify">
      This example shows a user-defined hierarchical layout. If the user defines
      levels for nodes but does not do so for all nodes, an alert will show up
      and hierarchical layout will be disabled. Either all or none can be
      defined. If the smooth curves appear to be inverted, the direction of the
      edge is not in the same direction as the network.
    </div>
    <p>
      <input type="button" id="btn-UD" value="Up-Down" />
      <input type="button" id="btn-DU" value="Down-Up" />
      <input type="button" id="btn-LR" value="Left-Right" />
      <input type="button" id="btn-RL" value="Right-Left" />
      <input type="hidden" id="direction" value="UD" />
    </p>

    <div id="mynetwork"></div>

    <p id="selection"></p>
    <script language="JavaScript">
      var directionInput = document.getElementById("direction");
      var btnUD = document.getElementById("btn-UD");
      btnUD.onclick = function () {
        directionInput.value = "UD";
        draw();
      };
      var btnDU = document.getElementById("btn-DU");
      btnDU.onclick = function () {
        directionInput.value = "DU";
        draw();
      };
      var btnLR = document.getElementById("btn-LR");
      btnLR.onclick = function () {
        directionInput.value = "LR";
        draw();
      };
      var btnRL = document.getElementById("btn-RL");
      btnRL.onclick = function () {
        directionInput.value = "RL";
        draw();
      };
    </script>
  </body>
</html>

        
        
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
