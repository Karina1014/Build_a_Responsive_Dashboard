import { shortcutLink } from "../../constants"; // Asegúrate de que la ruta sea correcta
import Title from "../../ui/Title";

const ShortCuts = () => {
  return (
    <div className="flex gap-4 flex-col bg-white rounded-lg p-4 dark:bg-gray-600">
      <Title>Shortcuts</Title>
      {shortcutLink.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <item.icon className="text-xl text-gray-500 dark:text-gray-300" />
            <span className="text-gray-900 dark:text-white">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ShortCuts;
