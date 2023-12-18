import {metamask, rainbow, coinbase, wallet, qr, qr2, qr1} from "../assets"

export const wallets = [
  {
    name: "Metamask",
    src: metamask,
    content: "Scan with Metamask",
    qr: qr
  },
  {
    name: "Rainbow",
    src: rainbow,
    content: "Scan with rainbow",
    qr: qr1
  },
  {
    name: "Coinbase Wallet",
    src: coinbase,
    content: "Scan with Coinbase Wallet",
    qr: qr
  },
  {
    name: "WalletConnect",
    src: wallet,
    content: "Scan with Wallet Connect",
    qr: qr2
  }
]