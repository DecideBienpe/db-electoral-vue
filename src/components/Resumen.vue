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
        mandatory
        color="deep-purple accent-3"
        group
      >
        <v-btn value="Sentencia">
          Con más candidatos con sentencias
        </v-btn>

        <v-btn value="DeudoresSunat">
          Con más deudores a SUNAT
        </v-btn>

        <v-btn value="Vacunado">
          Con más vacunados
        </v-btn>

        <v-btn value="Golondrinos">
          Con más golondrinos
        </v-btn>

        <v-btn value="PEstudios">
          Con más estudios superiores
        </v-btn>

        <v-btn value="PromedioIngr">
          Con más ingresos
        </v-btn>

        <v-btn value="PromedioEdad">
          Por edad
        </v-btn>
      </v-btn-toggle>
    </v-col>

    </div>
    
    <div class="partido-ranking">
      <div class="partido" v-for="partido in graph_data" :key="partido.name">



        <div class="partido-name text-center">
          <a class="text-center" :href="`#/partidos/${render_logo(partido.Partido)}`">
              <v-img contain
              :src="require(`../assets/partidos/${partido.Imagen}`)"
              class="text-right pa-2"
              width="95px"
            >
          </v-img>
          </a>
          <a class="text-center" :href="`#/partidos/${render_logo(partido.Partido)}`">
            <h3>{{ partido.Partido }}</h3>
          </a>
        </div>
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
            <div class="percent ingresos" :style="`width: ${calcScale(partido.PromedioIngr, 'PromedioIngr', 550000, 150)}px`"></div></div>
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

          <div class="graph-item" :class="{'active': field == 'Sentencia'}">
            <label>Sentencias</label><div>
              <span>{{ partido.DeudoresSunat }} {{ partido.DeudoresSunat != 1 ? `sentenciados` : `sentenciado`}}</span>
              <div class="percent sentencias" :style="`width: ${calcScale(partido.Sentencia, 'Sentencia', 25, 150)}px`"></div></div>
          </div>

          <div class="graph-item" :class="{'active': field == 'DeudoresSunat'}">
            <label>Deudores de la sunat</label><div>
              <span>{{ partido.DeudoresSunat }} {{ partido.DeudoresSunat != 1 ? `deudores` : `deudor`}}</span>
              <div class="percent deudores" :style="`width: ${calcScale(partido.DeudoresSunat, 'DeudoresSunat', 20, 150)}px`"></div></div>
          </div>

          <div class="graph-item" :class="{'active': field == 'Golondrinos'}">
            <label>Golondrinos</label><div>
              <span>{{ partido.Golondrinos }} {{ partido.Golondrinos != 1 ? `golondrinos` : `golondrino`}}</span>
              <div class="percent golondrinos" :style="`width: ${calcScale(partido.Golondrinos, 'Golondrinos', 75, 150)}px`"></div></div>
          </div>

          <div class="graph-item" :class="{'active': field == 'Vacunado'}">
            <label>Vacunados</label><div>
              <span>{{ partido.Vacunado }} {{ partido.Vacunado > 1 ? `vacunados` : `vacunado`}}</span>
              <div class="percent golondrinos" :style="`width: ${calcScale(partido.Vacunado, 'Vacunado', 10, 150)}px`"></div></div>
          </div>

          <div class="graph-item" :class="{'active': field == 'Pmujeres'}">
            <label>Lista de mujeres </label>
            <div>
              <span>{{ partido.Pmujeres}}%</span>
              <div class="percent mujeres" :style="`width: ${calcScale(partido.Pmujeres, 'Pmujeres', 100, 100)}%`"></div></div>
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
