<script>
  import "./assets/global.css";

  import { SearchBar, TeamOverview } from "./components/";
</script>

<SearchBar />

<TeamOverview />

<section class="drawer">
  <label for="section-select-teampreview"
    ><h2 class="title">Sélection d'équipe</h2></label
  >
  <input type="radio" id="section-select-teampreview" name="section" checked />
  <div class="content"></div>
</section>

<section class="drawer">
  <label for="section-select-speedtiers"
    ><h2 class="title">Hiérarchie des vitesses</h2></label
  >
  <input type="radio" id="section-select-speedtiers" name="section" />
  <div class="content"></div>
</section>

<section class="drawer">
  <label for="section-select-damagecalc"
    ><h2 class="title">Calculateur de dégâts</h2></label
  >
  <input type="radio" id="section-select-damagecalc" name="section" />
  <div class="content"></div>
</section>
