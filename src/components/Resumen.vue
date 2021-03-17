<template>
  <div class="partido-ranking-container mt-5 pt-5">
    <h2 class="text-center">
      Compara a los partidos que participan en las Elecciones 2021
    </h2>
    <h3 class="text-center">
      Ordenalos por tus intereses
    </h3>
    <div class="row mb-5">
      <v-col
      cols="12"
      class="py-2"
    >

      <v-btn-toggle
        v-model="field"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="PromedioIngr">
          Los que ganan más
        </v-btn>

        <v-btn value="PExperiencia">
          Con más experiencia
        </v-btn>

        <v-btn value="PEstudios">
          Con más estudios superiores
        </v-btn>

        <v-btn value="PromedioEdad">
          Los más jovenes
        </v-btn>
      </v-btn-toggle>
    </v-col>

    </div>
    <div class="partido-ranking">
      <div class="partido" v-for="partido in graph_data" :key="partido.name">
        <div class="partido-name">{{ partido.Partido }}</div>
        <div class="graph">
          <div class="graph-item" :class="{'active': field == 'PromedioEdad'}">
            <label>Promedio de edad</label>
            <div>
              <span>{{ partido.PromedioEdad}} años</span>
              <div class="percent promedio-edad" :style="`width: ${calcScale(partido.PromedioEdad, 'PromedioEdad', 85, 150)}px`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'Joven'}">
            <label>El más joven</label>
            <div>
              <span>{{ partido.Joven}} años</span>
              <div class="percent joven" :style="`width: ${calcScale(partido.Joven, 'Joven', 85, 150)}px`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'Mayor'}">
            <label>El mayor de todos</label>
            <div>
              <span>{{ partido.Mayor}} años</span>
              <div class="percent mayor" :style="`width: ${calcScale(partido.Mayor, 'Mayor', 85, 150)}px`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'PromedioIngr'}">
            <label>Ingresos promedio anual</label>
            <div>
            <span>S/. {{ partido.PromedioIngr.toFixed(0) }} soles</span>
            <div class="percent ingresos" :style="`width: ${calcScale(partido.PromedioIngr, 'PromedioIngr', 500000, 150)}px`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'Pmujeres'}">
            <label>Lista de mujeres </label>
            <div>
              <span>{{ partido.Pmujeres}}%</span>
              <div class="percent mujeres" :style="`width: ${calcScale(partido.Pmujeres, 'Pmujeres', 100, 100)}%`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'PEstudios'}">
            <label>Estudios superiores</label><div>
              <span>{{ partido.PEstudios }}%</span>
              <div class="percent estudios" :style="`width: ${calcScale(partido.PEstudios, 'PEstudios', 100, 100)}%`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'PExperiencia'}">
            <label>Experiencia</label><div>
              <span>{{ partido.PExperiencia }}%</span>
              <div class="percent experiencia" :style="`width: ${calcScale(partido.PExperiencia, 'PExperiencia', 100, 100)}%`"></div></div>
          </div>
          <div class="graph-item" :class="{'active': field == 'Vacancia'}">
            <label>Vacancia</label><div>{{ partido.Vacancia}}</div>
          </div>
          <div class="graph-item" :class="{'active': field == 'TipoDemocracia'}">
            <label>Tipo democracia</label><div>{{ partido.TipoDemocracia}}</div>
          </div>
        </div>        
      </div>
    </div>

  </div>
</template>

<script>
import slugify from "slugify";
import * as d3 from "d3";
import { orderBy } from "lodash";

export default {
  name: "Partidos",
  created() {
    this.$store.dispatch("getPartidos");
    this.$store.dispatch("getResumen");
  },
  data() {
    return {
      field: 'ingresos'
    }
  },
  computed: {
    partidos() {
      return this.$store.state.partidos;
    },
    resumen() {
      return this.$store.state.resumen;
    },
    graph_data() {
      return orderBy(this.resumen, [this.field], ['desc'])
    }
  },
  methods: {
    calcScale(porcentaje, field, max, r) {
      let myScale = d3.scaleLinear()
        .domain([0, max])
        .range([0, r]);
      return myScale(porcentaje)
    },
    render_logo(i) {
      return slugify(i).toLowerCase();
    }
  }
};
</script>
