import { mount } from "@vue/test-utils";
import FiltroMixin from "@/mixins/FiltroMixin.js";
//   Si se necesita simular el valor de algun method dentro del mixin se puede hacer algo asi:
//   Component.mixins["0"]["methods"]["partidoFilter"] = () => true;

describe("el candidato es evaluado con partidoFilter", () => {
  let Component = {
    render() {},
    mixins: [FiltroMixin]
  };
  beforeEach(() => {});

  //   Si flag_ex1 es 0 (o mas que 4) el candidato siempre pasa el filtro
  //   Del 1 al 4 si los checkboxes no estan marcados el cadidato pasa el filtro
  test.each`
    candidato          | Resultado
    ${{ flag_ex1: 0 }} | ${true}
    ${{ flag_ex1: 1 }} | ${true}
    ${{ flag_ex1: 2 }} | ${true}
    ${{ flag_ex1: 3 }} | ${true}
    ${{ flag_ex1: 4 }} | ${true}
    ${{ flag_ex1: 5 }} | ${true}
  `(
    "y al ser $candidato se obtiene: $Resultado",
    ({ candidato, Resultado }) => {
      const wrapper = mount(Component);
      // Checkboxes sin marcar
      wrapper.vm.f1 = false;
      wrapper.vm.f2 = false;
      wrapper.vm.f3 = false;
      wrapper.vm.f4 = false;
      // f5 pertenece a otro tipo de filtro

      expect(wrapper.vm.partidoFilter(candidato)).toBe(Resultado);
    }
  );

  //   Si flag_ex1 es 0 (o mas que 4) el candidato siempre pasa el filtro
  //   Del 1 al 4 si los checkboxes no estan marcados el cadidato NO pasa el filtro (undefined)
  test.each`
    candidato          | Resultado
    ${{ flag_ex1: 0 }} | ${true}
    ${{ flag_ex1: 1 }} | ${undefined}
    ${{ flag_ex1: 2 }} | ${undefined}
    ${{ flag_ex1: 3 }} | ${undefined}
    ${{ flag_ex1: 4 }} | ${undefined}
    ${{ flag_ex1: 5 }} | ${true}
  `(
    "y al ser $candidato se obtiene: $Resultado",
    ({ candidato, Resultado }) => {
      const wrapper = mount(Component);
      // Checkboxes marcados
      wrapper.vm.f1 = true;
      wrapper.vm.f2 = true;
      wrapper.vm.f3 = true;
      wrapper.vm.f4 = true;
      // f5 pertenece a otro tipo de filtro

      expect(wrapper.vm.partidoFilter(candidato)).toBe(Resultado);
    }
  );
});

describe("el candidato es evaluado con sentencia1Filter", () => {
  let Component = {
    render() {},
    mixins: [FiltroMixin]
  };
  beforeEach(() => {});

  //   Si Sentencia es < 1 y el checkbox esta marcado, el candidato pasa el filtro
  //   Si Sentencia NO es < 1 y el checkbox esta marcado, el candidato NO pasa el filtro
  test.each`
    candidato           | Resultado
    ${{ Sentencia: 0 }} | ${true}
    ${{ Sentencia: 1 }} | ${false}
  `(
    "y al ser $candidato se obtiene: $Resultado",
    ({ candidato, Resultado }) => {
      const wrapper = mount(Component);
      // Checkboxes marcados
      wrapper.vm.f5 = true;

      expect(wrapper.vm.sentencia1Filter(candidato)).toBe(Resultado);
    }
  );
  //   Si el checkbox no esta marcado el candidato siempre pasa el filtro
  test.each`
    candidato           | Resultado
    ${{ Sentencia: 0 }} | ${true}
    ${{ Sentencia: 1 }} | ${true}
  `(
    "y al ser $candidato se obtiene: $Resultado",
    ({ candidato, Resultado }) => {
      const wrapper = mount(Component);
      // Checkboxes marcados
      wrapper.vm.f5 = false;

      expect(wrapper.vm.sentencia1Filter(candidato)).toBe(Resultado);
    }
  );
});

// TODO: Escribir tests similares para los restantes filtros.
