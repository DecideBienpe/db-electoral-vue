export default {
  // Mixin Methods and Created
  // TODO: Ahora que estamos reusando componentes este Mixin podria moverse a un lugar mas 'global'
  // o quizas moverlo a un componente 'checkboxComponent'
  created: function() {},
  methods: {
    partidoFilter: function(lista) {
      switch (lista.flag_ex1) {
        case 0:
          return true;
        case 1:
          if (!this.f1) {
            return true;
          }
          break;
        case 2:
          if (!this.f2) {
            return true;
          }
          break;
        case 3:
          if (!this.f3) {
            return true;
          }
          break;
        case 4:
          if (!this.f4) {
            return true;
          }
          break;
        default:
          return true;
      }
    },
    sentencia1Filter: function(lista) {
      if (this.f5) {
        return lista.Sentencia < 1;
      } else {
        return true;
      }
    },
    sentencia2Filter: function(lista) {
      if (this.f6) {
        return lista.Sentencia2 < 1;
      } else {
        return true;
      }
    },
    genero1Filter: function(lista) {
      if (this.f7) {
        return lista.dif > 0;
      } else {
        return true;
      }
    },
    genero2Filter: function(lista) {
      if (this.f8) {
        return lista.eq1 >= 49;
      } else {
        return true;
      }
    },
    genero3Filter: function(lista) {
      if (this.f9) {
        return lista.pos_f == 1;
      } else {
        return true;
      }
    },
    militantesFilter: function(lista) {
      if (this.f10) {
        // Importante: Algunos candidatos no tienen un valor asignado,
        // Seria conveniente dar un codigo numerico para ese caso. ex: 999
        return lista.Designado != undefined && lista.Designado != 1;
      } else {
        return true;
      }
    },
    agendaFilter: function(lista) {
      if (this.f11) {
        return lista.Agenda == 1;
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
