// Libraries
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

// Component
import Enlace from "@/components/Enlace.vue";

// Utilities
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();

describe("Enlace.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders el texto del enlace usado", () => {
    const item = { icon: "mdi-home", text: "Inicio", path: "/" };
    const wrapper = shallowMount(Enlace, {
      localVue,
      vuetify,
      propsData: {
        item
      }
    });
    expect(wrapper.text()).toMatch(item.text);
  });
});
