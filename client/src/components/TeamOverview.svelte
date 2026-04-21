<script>
  /**
   * @type Record<string, string>
   */
  const sprites = import.meta.glob(["./**.png"], {
    eager: true,
    query: "?url",
    import: "default",
    base: "../assets/sprites",
  });

  const myTeam = [
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
  ];

  const opponentTeam = [
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
    {
      no: 3,
      name: "Florizarre",
      name_en: "Venusaur",
      img: "3.png",
      megas: [],
    },
  ];
</script>

<div id="team-overview">
  <ul id="myTeam">
    {#each myTeam as pokemon, index}
      <li>
        <input type="checkbox" name="myteam-select" id={`myteam-${index}`} />
        <label for={`myteam-${index}`}>
          <img src={sprites[`./${pokemon.img}`]} alt={pokemon.name} />
        </label>
      </li>
    {/each}
  </ul>
  <ul id="opponentTeam">
    {#each opponentTeam as pokemon, index}
      <li>
        <input
          type="checkbox"
          name="opponentteam-select"
          id={`opponentteam-${index}`}
        />
        <label for={`opponentteam-${index}`}>
          <img src={sprites[`./${pokemon.img}`]} alt={pokemon.name} />
        </label>
      </li>
    {/each}
  </ul>
</div>

<style>
  #team-overview {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;

    ul {
      display: flex;
      flex-direction: row;
      gap: 0.4em;
      list-style: none;
      margin: 0;
      padding: 0;

      input[type="checkbox"] {
        display: none;
      }

      img {
        border-radius: 50%;
        border: 4px solid var(--accent-secondary);
        cursor: pointer;
        height: 40px;
        padding: 8px;
        width: 40px;
      }

      input:not(:checked) + label img {
        filter: opacity(0.5);
      }
    }
  }
</style>
