# Version PWA del sitio web: [DECIDEBIEN.PE](http://decidebien.pe)

# Filtros

## Congresales

**Descartar listas que lleven candidatos con sentencias***:
- Descartar listas que lleven candidatos con sentencias:
    + campo en la tabla: FlagSP. Valores: 0 = FALSE, 1 = TRUE
    + Excluimos sentencias: Donde se disuelve el vínculo matrimonial o el candidato fue declarado absuelto.
**Descartar listas que lleven candidatos con deudas ante la SUNAT**
- La fuente es el reporte de [El Comercio](https://elcomercio.pe/elecciones-2020/elecciones-2020-hay-106-candidatos-que-son-deudores-coactivos-de-sunat-congreso-noticia/)
    + campo en la tabla: FlagSunat. Valores: 0 = FALSE, 1= TRUE
**Descatar listas que llevaen candidatos con dirección distinta a la que postulan**
- Fuente hoja de vida. Comparamos la dirección que aparece en el DNI. Los candidatos que en su DNI registran una dirección en una circunscripción distinta a la que postula se le asigna el valor de 1. 
    + campo en la tabal: FlagGolondrinos. Valores: 0 = FALSE, 1=TRUE

**Descartar listas de partidos que votaron por la vacancia**:

- Consideramos que un partido apoya o votó por la vacancia si se cumple una de estas dos condiciones: 
    - Si más de la mitad de su bancada en el congreso voto por la misma. 
    - Si el candidato presidencial se apoyó abierta y públicamente la vacancia presidencial ocurrida en Noviembre del 2020. Bajo esta condición hemos incluído a los partidos:
        - ["Renovación Popular" !](https://peru21.pe/politica/martin-vizcarra-rafael-lopez-aliaga-renovacion-popular-exige-al-congreso-la-vacancia-presidencial-nndc-noticia/)
        - ["APRA"](https://twitter.com/nidiavilchez/status/1325807437614559233)
    + campo en la tabla: Vacancia. Valores: 1 = TRUE , 0|2 = FALSE

**Descartar listas que NO promuevan la equidad de género**
- Descartar listas cuya cabeza de lista no es mujer: 
    + campo en la tabla: Mujer1: 1 = TRUE, 0 = FALSE

**Descartar listas que NO promuevan democracia interna**:  
- Descartar listas donde el número 1 no fue electo en democracia interna.(incluido):
    + campo en la tabla: CABEZAD.Valores:  1 = TRUE, 0 FALSE
- Descartar listas cuyas primarias fueron por delegados.

## Presidenciales

**Descartar listas que lleven candidatos con sentencias***:
- Descartar listas que lleven candidatos con sentencias:
    + campo en la tabla: FlagSP. Valores: 0 = FALSE, 1 = TRUE


**Descartar candidatos de partidos que votaron por la vacancia**
- Descartar candidatos de partidos que votaron por la vacancia:
    + campo en la tabla: Vacancia. Valores: 1 = TRUE , 0|2 = FALSE

**Descartar listas que NO promuevan democracia interna**:
- Descartar listas cuyas primarias fueron por delegados.

    
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
