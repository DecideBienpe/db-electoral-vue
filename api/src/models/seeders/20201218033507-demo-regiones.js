"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Regions",
      [
        {
          id: 1,
          region: "AMAZONAS",
          codigo: 1,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          region: "ANCASH",
          codigo: 2,
          quotas: 2,
          curul: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          region: "APURIMAC",
          codigo: 3,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          region: "AREQUIPA",
          codigo: 4,
          quotas: 2,
          curul: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          region: "AYACUCHO",
          codigo: 5,
          quotas: 1,
          curul: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          region: "CAJAMARCA",
          codigo: 6,
          quotas: 2,
          curul: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          region: "CALLAO",
          codigo: 7,
          quotas: 2,
          curul: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          region: "CUSCO",
          codigo: 8,
          quotas: 2,
          curul: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          region: "HUANCAVELICA",
          codigo: 9,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          region: "HUANUCO",
          codigo: 10,
          quotas: 1,
          curul: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          region: "ICA",
          codigo: 11,
          quotas: 2,
          curul: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          region: "JUNIN",
          codigo: 12,
          quotas: 2,
          curul: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          region: "LA LIBERTAD",
          codigo: 13,
          quotas: 3,
          curul: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          region: "LAMBAYEQUE",
          codigo: 14,
          quotas: 2,
          curul: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          region: "LIMA+EXTERIOR",
          codigo: 15,
          quotas: 11,
          curul: 36,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          region: "LIMA PROVINCIAS",
          codigo: 16,
          quotas: 2,
          curul: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          region: "LORETO",
          codigo: 17,
          quotas: 2,
          curul: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          region: "MADRE DE DIOS",
          codigo: 18,
          quotas: 1,
          curul: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          region: "MOQUEGUA",
          codigo: 19,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          region: "PASCO",
          codigo: 20,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          region: "PIURA",
          codigo: 21,
          quotas: 3,
          curul: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          region: "PUNO",
          codigo: 22,
          quotas: 2,
          curul: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          region: "SAN MARTIN",
          codigo: 23,
          quotas: 2,
          curul: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          region: "TACNA",
          codigo: 24,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 25,
          region: "TUMBES",
          codigo: 25,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 26,
          region: "UCAYALI",
          codigo: 26,
          quotas: 1,
          curul: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Regions", null, {});
  }
};
