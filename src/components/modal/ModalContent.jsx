import { Tab } from "@headlessui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { wallets } from "../../utils/constant";
import { shortenAddress } from "../../utils/helpers";
import { cn } from "../../utils/cn";

const { Panels, Panel } = Tab;

const ModalContent = ({ theme }) => {
  const { accent, border, text } = theme;

  const [metaAcnt, setMetaAcnt] = useState({});

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let bal = await provider.getBalance(accounts[0]);
      let balance = ethers.utils.formatEther(bal);
      setMetaAcnt({ account: accounts[0], balance });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Panels className="w-full py-5">
      <Panel className=" flex flex-col text-center items-center">
        <h1 className="font-bold text-lg pt-12">Connect to MetaMask</h1>
        <div className="text-sm w-[294px] my-16">
          <h2 className="font-bold">A Home for your Digital Assets</h2>
          <p>
            Wallets are used to send, receive, store, and display digital assets
            like Ethereum and NFTs.
          </p>
          <p className="mt-10 p-3 bg-neutral-300/50 rounded-md">
            Try connecting your Metamask to retrieve just your walletId and you
            balance
          </p>
        </div>
        {window.ethereum ? (
          Object.keys(metaAcnt).length === 0 ? (
            <button
              className={cn("text-sm text-white font-bold p-2", accent, border)}
              onClick={connectWallet}
            >
              Connect Metamask
            </button>
          ) : (
            <div
              className={cn(
                "bg-gray-400 text-white font-medium dark:bg-gray-700",
                border
              )}
            >
              <span className="p-2 inline-block">{metaAcnt.balance} ETH </span>
              <span className="bg-gray-600 p-[7px] rounded-xl mr-1 dark:bg-gray-800">
                ID {shortenAddress(metaAcnt.account)}
              </span>
            </div>
          )
        ) : (
          <p className="text-sm font-medium text-gray-500">
            You don't have Metamask installed{" "}
          </p>
        )}
        <button
          className={cn("font-semibold text-sm mt-5 hover:scale-[1.02]", text)}
        >
          Learn More
        </button>
      </Panel>
      {wallets
        .filter((obj) => obj.name !== "Metamask")
        .map((el) => {
          return (
            <Panel
              key={el.name}
              className="flex flex-col mx-9 items-center relative h-full"
            >
              <h1 className="font-bold text-lg text-center">{el.content}</h1>
              <img className="w-full p-6 mt-2" src={el.qr} alt="qr" />
              <div className="absolute bottom-0 flex justify-between items-center w-full">
                <p className="text-sm text-gray-500">Don't have Wallet?</p>
                <button
                  className={cn(
                    "text-sm font-bold px-3 py-1 bg-gray-200 text-blue-500 dark:bg-gray-700",
                    border
                  )}
                >
                  GET
                </button>
              </div>
            </Panel>
          );
        })}
    </Panels>
  );
};

export default ModalContent;
