import { wallets } from "../../utils/constant";
import { Tab } from "@headlessui/react";
import { cn } from "../../utils/cn";

const { List } = Tab;

const WalletSelection = ({ theme }) => {
  const { accent, border } = theme;

  return (
    <List className="pt-5 px-[18px] w-[388px] border-r dark:border-gray-700">
      <h1 className="font-bold text-lg">Connect a Wallet</h1>
      <div className="mt-4 pt-2">
        <p className="opacity-40 text-sm font-semibold">Popular</p>
        <div className="flex flex-col text-left mt-2">
          {wallets.map((el) => {
            return (
              <Tab
                key={el.name}
                className={({ selected }) =>
                  cn(
                    "text-left flex p-[6px] mt-1 items-center outline-none",
                    border,
                    {
                      "hover:bg-gray-200 dark:hover:bg-gray-700": !selected,
                      [cn("text-white", accent)]: selected,
                    }
                  )
                }
              >
                <img
                  className="w-7 h-7 rounded-md bg-white"
                  src={el.src}
                  alt=""
                />
                <div className="ml-3 -mt-[5px]">
                  <p className="font-medium">{el.name}</p>
                </div>
              </Tab>
            );
          })}
        </div>
      </div>
    </List>
  );
};

export default WalletSelection;
