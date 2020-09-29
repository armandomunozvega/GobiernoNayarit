module.exports = (router) => {
  const getExample = (req, res) => {
    return res.status(200).send({ hola: "Mundo" });
  };

  router.post("/example", getExample);
};
