import TableWithModal from "./TableWithModal";

const Profile = () => {
    return (
      <div className="px-4 py-4 bg-gray-200 rounded w-full dark:bg-gray-700 
        lg:w-60 xl:w-80 flex flex-col gap-4 sm:ml-0 sm:flex-row sm:items-start">
        <TableWithModal /> {/* Asegúrate de tener la tabla aquí */}
      </div>
    );
  };
  

  

export default Profile;
