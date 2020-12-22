export default {
  // Mixin Methods and Created
  // TODO: Ahora que estamos reusando componentes este Mixin podria moverse a un lugar mas 'global'
  // o quizas moverlo a un componente 'checkboxComponent'
  created: function() {},
  methods: {
    sentencia1Filter: function(lista) {
      if (this.f1) {
        return lista.FlagSP== 0;
      } else {
        return true;
      }
    },
    sentencia2Filter: function(lista) {
      if (this.f2) {
        return lista.Vacancia == 0;
      } else {
        return true;
      }
    },
    genero1Filter: function(lista) {
      if (this.f3) {
        return lista.Pmujeres > 0.45;
      } else {
        return true;
      }
    },
    militantesFilter: function(lista) {
      if (this.f4) {
        // Importante: Algunos candidatos no tienen un valor asignado,
        // Seria conveniente dar un codigo numerico para ese caso. ex: 999
        return lista.CabezaD == 1;
      } else {
        return true;
      }
    },
    agendaFilter: function(lista) {
      if (this.f5) {
        return lista.DI == 1;
      } else {
        return true;
      }
    },
    regionFilter: function(lista) {
      return lista.Region === this.currentRegion.region;
    },
    uniqueFilter: function(myArr, prop) {
      return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
    }
  }
};
