// Create an entity for the main scene model
const baseScene = new Entity();

// Add it to the engine for rendering
engine.addEntity(baseScene);

// Give it a component for the model itself
// baseScene.addComponent(new GLTFShape("models/scene.glb"));

const sofa = new Entity();
engine.addEntity(sofa);
sofa.addComponent(new GLTFShape("models/Wooden_Sofa/substance _file.glb"));
sofa.addComponent(new Transform({ position: new Vector3(21.18, 0, 12.5) }));