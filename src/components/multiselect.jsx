// Importer le composant MultiSelect depuis la bibliothèque Mantine
import { MultiSelect } from "@mantine/core";

// Définir le composant MultiSelect
function MultiSelectComponent() {
  return (
    <>
      <div>Bonjour ceci est la composante MultiSelectComponent</div>

      <MultiSelect
        label="Choisissez vos langages de programmation préférés"
        placeholder="Sélectionner les langages"
        data={[
          { value: "js", label: "JavaScript" },
          { value: "py", label: "Python" },
          { value: "java", label: "Java" },
          { value: "csharp", label: "C#" },
        ]} 
      />
    </>
  );
}

// Exporter le composant pour l'utiliser dans d'autres parties de l'application
export default MultiSelectComponent;
