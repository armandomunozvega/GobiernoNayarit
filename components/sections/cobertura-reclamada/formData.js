const formData = [
  {
    id: "incapacidadTotalPermanente",
    value: "incapacidadTotalPermanente",
    label: "Incapacidad Total y Permanente",
  },
  {
    id: "incapacidadTotalTemporal",
    value: "incapacidadTotalTemporal",
    label: "Incapacidad Total y Temporal",
  },
  {
    id: "desempleo",
    value: "desempleo",
    label: "Desempleo",
  },
  {
    id: "fallecimiento",
    value: "fallecimiento",
    label: "Fallecimiento",
  },
  {
    id: "fallecimientoAccidente",
    value: "fallecimientoAccidente",
    label: "Fallecimiento por Accidente",
  },
  {
    id: "hispitalizacionAccidenteEnfermedad",
    value: "hispitalizacionAccidenteEnfermedad",
    label: "Hospitalización por Accidente o Enfermedad",
  },
  {
    id: "endermedadesGraves",
    value: "endermedadesGraves",
    label: "Enfermedades Graves",
  },
  {
    id: "bolsaCarteraCompraProtegida",
    value: "bolsaCarteraCompraProtegida",
    label: "Bolsa, Cartera, o Compra Protegida",
  },
  {
    id: "robo",
    value: "robo",
    label: "Robo",
  },
  {
    id: "gastosFunerarios",
    name: "gastosFunerarios",
    label: "Gastos Funerarios",
  },
  {
    id: "consumoRoboExtravioTarjeta",
    value: "consumoRoboExtravioTarjeta",
    label: "Consumo por robo o extravío de tarjeta",
  },
  {
    id: "falsificacionAlteracionTarjeta",
    value: "falsificacionAlteracionTarjeta",
    label: "Falsificación y/o alteración de tarjeta",
  },
  {
    id: "falsificacionAlteracionBandaMagnetica",
    value: "falsificacionAlteracionBandaMagnetica",
    label: "Falsificación y/o alteración de la banda magnética",
  },
  {
    id: "transferenciasElectronicasNoAutorizadas",
    value: "transferenciasElectronicasNoAutorizadas",
    label: "Transferencias electrónicas no autorizadas",
  },
  {
    id: "roboExtravioCheques",
    value: "roboExtravioCheques",
    label: "Robo o Extravío de Cheques",
  },
  {
    id: "roboMercanciaCompradaTarjetaDebito",
    value: "roboMercanciaCompradaTarjetaDebito",
    label: "Robo de mercancía comprada con la tarjeta de débito",
  },
  {
    id: "disposicionForzadaEfectivoRoboTarjetaDebito",
    value: "disposicionForzadaEfectivoRoboTarjetaDebito",
    label: "Disposición forzada de efectivo por robo de tarjeta de débito",
  },
  {
    id: "desempleoInvFormles",
    name: "desempleoInvFormles",
    label: "Desempleo Involuntario Empleados Formales",
  },
  {
    id: "desempleoInvIncapacidad",
    name: "desempleoInvIncapacidad",
    label: "Desempleo Involuntario por Incapacidad Total Temporal",
  },
  {
    id: "nacimientoHijo",
    name: "nacimientoHijo",
    label: "Nacimiento de un Hijo",
  },
  {
    id: "fallecimientoFamiliar",
    name: "fallecimientoFamiliar",
    label: "Fallecimiento de un Familiar",
  },
  {
    id: "cancelacionRecreativa",
    name: "cancelacionRecreativa",
    label: "Cancelación de una actividad recreativa con boleto pagado.",
  },
  {
    id: "titulacionAsegurado",
    name: "titulacionAsegurado",
    label: "Titulación del Asegurado o de un hijo.",
  },
  {
    id: "matrimonio",
    name: "matrimonio",
    label: "Matrimonio",
  },
  {
    id: "roboEquipoFijo",
    name: "roboEquipoFijo",
    label: "Robo de Equipo Electronico Fijo y/o Portatil",
  },
  {
    id: "muerteAccidental",
    name: "muerteAccidental",
    label: "Muerte Accidental",
  },
  {
    id: "indemizacionAccidentalEnfermedad",
    name: "indemizacionAccidentalEnfermedad",
    label:
      "Indemnización diaria por Hospitalización o por Accidente o Enfermedad",
  },
  {
    id: "invalidezPermanteAccidente",
    name: "invalidezPermanteAccidente",
    label: "Invalidez Total y Permanente por Accidente",
  },
  {
    id: "ayudaHospitalicacion",
    name: "ayudaHospitalicacion",
    label:
      "Ayuda de Hospitalización por Accidente o por Accidente o Enfermedad",
  },
  {
    id: "roturaHuesos",
    name: "roturaHuesos",
    label: "Rotura de Huesos",
  },
  {
    id: "modificacionesHogar",
    name: "modificacionesHogar",
    label: "Modificaciones al Hogar a Causa de Invalidez Total y Permanente",
  },
  // valora
  {
    id: "roboMercanciaTarjeta",
    name: "roboMercanciaTarjeta",
    label: "1.Robo de mercancía comprada con la Tarjeta de Crédito o Débito.",
  },
  {
    id: "roboEfectivo",
    name: "roboEfectivo",
    label: "2.Robo de efectivo con cargo a las Tarjetas Amparadas.",
  },
  {
    id: "transferenciasNoReversibles",
    name: "transferenciasNoReversibles",
    label:
      "3.Transferencias Electrónicas de Fondos no reversibles, no autorizadas por elTITULAR a través del sitio de Internet de laInstitución Autorizada para TransferenciasElectrónicas y Fraude por Robo o extravíode Cheques.",
  },
  {
    id: "roboCelularTables",
    name: "roboCelularTables",
    label: "4.Robo de Celulares y/o Tabletas.",
  },
  {
    id: "RoboEquiposFijosPortatil",
    name: "RoboEquiposFijosPortatil",
    label: "5.Robo de Equipo(s) Electrónico(s) Fijo(s) y/o Portátil(es)",
  },
  {
    id: "roboDocumentos",
    name: "roboDocumentos",
    label: "6.Robo de Documentos",
  },
  {
    id: "RoboObjectoPersonales",
    name: "RoboObjectoPersonales",
    label: "7.Robo de objetos personales.",
  },
  {
    id: "anticipoGastosInmediatos",
    name: "anticipoGastosInmediatos",
    label:
      "Anticipo de Gastos Inmediatos por Fallecimiento o por Muerte Accidental",
  },
];

export default formData;
