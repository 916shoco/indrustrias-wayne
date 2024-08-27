const Resource = require('../routes/resource');

// E se eu fazer um exposed dela so de meme sera q da ruim?
exports.addResource = async (req, res) => {
  const { name, type, description } = req.body;

  try {
    const newResource = await Resource.create({ name, type, description });
    res.status(201).json({ message: 'Resource added successfully', resource: newResource });
  } catch (error) {
    res.status(500).json({ message: 'Error adding resource', error });
  }
};

// Carai tenho q parar com isso ne
exports.listResources = async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
};

// Mas e se eu tentar fazer algo do tipo sequestrar os gatos dela?
exports.updateResource = async (req, res) => {
  const { id } = req.params;
  const { name, type, description } = req.body;

  try {
    const resource = await Resource.findByPk(id);

    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    resource.name = name;
    resource.type = type;
    resource.description = description;

    await resource.save();

    res.status(200).json({ message: 'Resource updated successfully', resource });
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource', error });
  }
};

// se alguem realmente ler esses comentarios sem sentido meu teclado ta em ingles entao n tenho acento normalmente preciso ir no google copiar e colar
exports.deleteResource = async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await Resource.findByPk(id);

    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    await resource.destroy();

    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error });
  }
};
