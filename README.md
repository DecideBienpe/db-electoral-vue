# Version PWA del sitio web: [DECIDEBIEN.PE](http://decidebien.pe)

# Filtros

## Congresales

**Descartar listas que lleven candidatos con sentencias***:
- Descartar listas que lleven candidatos con sentencias:
    + field en la tabla: FlagSP. Valores: 0 = FALSE, 1 = TRUE

**Descartar listas de partidos que votaron por la vacancia**:
- Descartar partidos que votaron por la vacancia (Noviembre 2019):
    + field en la tabla: Vacancia. Valores: 1 = TRUE , 0|2 = FALSE

**Descartar listas que NO promuevan la equidad de género**
- Descartar listas sin paridad (50%) (incluido): 
    + field en la tabla: Pmujeres.Valores:  <0.45 TRUE, Else FALSE
- Descartar listas sin alternancia  

**Descartar listas que NO promuevan democracia interna**:  
- Descartar listas donde el número 1 no fue electo en democracia interna.(incluido):
    + field en la tabla: CABEZAD.Valores:  1 = TRUE, 0 FALSE
- Descartar listas cuyas primarias fueron por delegados.
    + field en la tabla:

**Descartar listas de partidos que NO votaron por la reforma política**:
- Descartar partidos que no apoyaron la reforma política

**Descartar listas de partidos que NO apoyaron la reforma política**:
- Partidos que no votaron por la ley XXX, Ley XXXX

## Presidenciales

**Descartar candidatos que tienen investigaciones fiscales** 
- Descartar candidatos que tienen investigaciones fiscales:
    + field en la tabla: Investi. Valores: 1 = TRUE , 0 = FALSE

**Descartar candidatos de partidos que votaron por la vacancia**
- Descartar candidatos de partidos que votaron por la vacancia:
    + field en la tabla: Vacancia. Valores: 1 = TRUE , 0|2 = FALSE

