<template>
  <v-container>
    <v-flex xs12 md6 pt-4 mx-auto>
      <v-card height="100%">
        <v-card-text class="px-4 pt-5">
          <br /><br />
          <h4>Fuentes</h4>
          <div>
            Toda la información utilizada proviene de:
            <ul>
              <li>
                <a
                  href="https://plataformaelectoral.jne.gob.pe/ListaDeCandidatos/index"
                  target="_blank"
                  >JNE</a
                >
              </li>
              <li>
                <a
                  href="https://elcomercio.pe/elecciones-2020/elecciones-2020-hay-106-candidatos-que-son-deudores-coactivos-de-sunat-congreso-noticia/"
                  target="_blank"
                  >El Comercio</a
                >
              </li>
              <li>
                El análisis de los planes de gobierno para la construcción de
                los filtros sobre derechos sexuales y reproductivos así como
                violencia de género lo realizó:
                <a href="https://porlalibreinformacion.org/"
                  >Colectiva por la libre información</a
                >.La matríz de análisis la pueden encontrar
                <a
                  href="https://docs.google.com/spreadsheets/d/1f4u8QIQ_NDwhU0IN2dCGhvRTWIPFWKwz/edit#gid=1460509433"
                  target="_blank"
                  >aquí</a
                >
              </li>
            </ul>
          </div>
          <h4>Responsables</h4>
          <p>
            Esta plataforma fue iniciada por
            <a href="https://www.joseincio.com" target="_blank">José Incio</a> y
            ahora cuenta con much@s colaboradores. Cualquier error/sugerencia o
            problema escríbenos.
          </p>
          <h4>Información y código</h4>
          <p>
            Para mayor información sobre la aplicación, filtros, e información
            ingresa
            <a
              href="https://github.com/DecideBienpe/db-electoral-vue/blob/main/README.md"
              >aquí</a
            >
          </p>
          <h4>Desarrolladores:</h4>
          <h5>Vue version</h5>
          <ul>
            <li>
              <a href="https://github.com/zettai" target="_blank"
                >Luis Salas (Github: zettai )</a
              >
            </li>
            <li>
              <a href="https://github.com/antoniocuga" target="_blank"
                >Antonio Cucho (Github: antoniocuga)</a
              >
            </li>
            <li>
              <a href="https://www.joseincio.com" target="_blank"
                >José Incio
              </a>
            </li>
          </ul>
          <h4>Auspiciadores</h4>
          <p>Este app está en línea gracias al auspicio de:</p>
          <ul>
            <li>
              <a
                href="https://fnst.org/content/la-fundacion-friedrich-naumann-para-la-libertad"
                ><img alt="Qries" src="../assets/logo_FNF.png" width="100%" />
              </a>
            </li>
            <li>
              <a
                href="https://www.idea.int/our-work/where-we-work/latin-america-caribbean/peru"
                target="_blank"
                >IDEA Internacional</a
              >
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 pt-4 mx-auto>
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <h1 class="headline">Escríbenos</h1>
          </div>
        </v-card-title>

        <v-card-text class="px-4">
          <form
            @submit.prevent="handleSubmit"
            name="preguntas"
            netlify-honeypot="bot-field"
            action="/success/"
            data-netlify="true"
            method="post"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden-pot">
              <label>
                Don’t fill this out:
                <input name="bot-field" />
              </label>
            </p>
            <label class="form-label" for="name">Nombre</label>
            <input
              class="form-field"
              name="name"
              id="name"
              v-model="formData.name"
            />
            <label class="form-label" for="email">Correo Electrónico</label>
            <input
              class="form-field"
              name="email"
              id="email"
              v-model="formData.email"
            />
            <label class="form-label" for="message">Mensaje</label>
            <textarea
              class="form-field"
              name="message"
              id="message"
              v-model="formData.message"
            ></textarea>
            <div class="text-center">
              <input class="form-button primary" type="submit" value="Enviar" />
            </div>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
.hidden-pot {
  display: none;
}

input.form-field,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  width: 40%;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/"))
        .catch(error => alert(error));
    }
  }
};
</script>
