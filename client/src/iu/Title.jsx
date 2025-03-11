// src/ui/Title.js
const Title = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h2>
  );
};

export default Title;
