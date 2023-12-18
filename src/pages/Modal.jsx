import { useState, Fragment } from "react";
import { Tab, Dialog, Transition } from "@headlessui/react";
import WalletSelections from "../components/modal/WalletSelection";
import { BG, x } from "../assets";
import ModalContent from "../components/modal/ModalContent";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

const { Group } = Tab;

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);
  const mode = localStorage.getItem("theme");
  const [theme, setTheme] = useState({
    theme: mode,
    accent: "bg-blue-600",
    text: "text-blue-500",
    border: "rounded-2xl",
  });
  const { toggleTheme } = useTheme();

  const changeTheme = (name, atr) => {
    if (name === "theme") toggleTheme(atr);
    setTheme((prev) => ({ ...prev, [name]: atr }));
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center h-screen w-screen bg-opacity-80",
        theme.accent
      )}
    >
      <img
        className="w-full h-full opacity-80 absolute -z-30"
        src={BG}
        alt="background"
      />
      <h1 className="font-bold text-4xl text-white mb-20">
        Styled Modal component
      </h1>
      <p className="text-white font-medium ">
        {JSON.stringify(theme, null, 1)}
      </p>

      <button
        type="button"
        onClick={openModal}
        className={
          "mt-10 font-semibold bg-black bg-opacity-60 px-4 py-2 text-lg text-white hover:bg-opacity-50 focus:outline-none " +
          theme.border
        }
      >
        Open Modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={closeModal}
            />
          </Transition.Child>
          <div className={cn("fixed inset-0 overflow-y-auto", theme.theme)}>
            <div className="flex h-screen items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div
                  className={cn(
                    "flex w-[715px] h-[506px] relative bg-white dark:bg-slate-800 dark:text-white",
                    theme.border
                  )}
                >
                  <button
                    className="bg-gray-200 rounded-full p-2 absolute top-5 right-4 border border-gray-300 ease-in-out hover:scale-[1.15] duration-100 dark:bg-gray-700 dark:border-gray-600"
                    onClick={closeModal}
                  >
                    <img
                      className="h-[10px] w-[10px] fill-white text-white"
                      src={x}
                      alt="x"
                    />
                  </button>
                  <Group>
                    <WalletSelections theme={theme} />
                    <ModalContent theme={theme} />
                  </Group>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="mt-10 flex space-x-14">
        <div>
          <p className="text-xl font-bold  text-white">Mode</p>
          <div className="space-x-4 mt-2">
            <button
              className="bg-white h-10 w-10 rounded-full"
              onClick={() => changeTheme("theme", "light")}
            />
            <button
              className="bg-gray-900 h-10 w-10 rounded-full"
              onClick={() => changeTheme("theme", "dark")}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold  text-white">Accent</p>
          <div className="space-x-4 mt-2">
            <button
              className="bg-blue-600 h-10 w-10 rounded-full border-3 border-white"
              onClick={() => {
                changeTheme("accent", "bg-blue-600");
                changeTheme("text", "text-blue-500");
              }}
            />
            <button
              className="bg-violet-600 h-10 w-10 rounded-full"
              onClick={() => {
                changeTheme("accent", "bg-violet-600");
                changeTheme("text", "text-violet-500");
              }}
            />
            <button
              className="bg-pink-600 h-10 w-10 rounded-full"
              onClick={() => {
                changeTheme("accent", "bg-pink-600");
                changeTheme("text", "text-pink-500");
              }}
            />
            <button
              className="bg-orange-600 h-10 w-10 rounded-full"
              onClick={() => {
                changeTheme("accent", "bg-orange-600");
                changeTheme("text", "text-orange-500");
              }}
            />
            <button
              className="bg-amber-600 h-10 w-10 rounded-full"
              onClick={() => {
                changeTheme("accent", "bg-amber-600");
                changeTheme("text", "text-amber-500");
              }}
            />
            <button
              className="bg-green-600 h-10 w-10 rounded-full"
              onClick={() => {
                changeTheme("accent", "bg-green-600");
                changeTheme("text", "text-green-500");
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold  text-white">Radius</p>
          <div className="space-x-4 mt-2">
            <button
              className="bg-white text-white font-bold bg-opacity-20 h-10 w-10 rounded-full"
              onClick={() => changeTheme("border", "rounded-2xl")}
            >
              L
            </button>
            <button
              className="bg-white text-white font-bold bg-opacity-20 h-10 w-10 rounded-full"
              onClick={() => changeTheme("border", "rounded-xl")}
            >
              M
            </button>
            <button
              className="bg-white text-white font-bold bg-opacity-20 h-10 w-10 rounded-full"
              onClick={() => changeTheme("border", "rounded-lg")}
            >
              S
            </button>
            <button
              className="bg-white text-white font-bold bg-opacity-20 h-10 w-10 rounded-full"
              onClick={() => changeTheme("border", "")}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
