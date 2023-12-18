import { useEffect } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { fetchFromIp } from "../api/getAddress";

const IpTracker = () => {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState({});
  const validIP =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const checkData = (el) => (Object.keys(info).length === 0 ? "-" : el);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const valid = validIP.test(ip);
    if (ip && !valid) {
      alert("Invalid IP");
      return;
    }
    try {
      const data = await fetchFromIp(ip);
      setInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen ip-tracker">
      <div className="flex flex-col items-center bg-ip-pattern bg-cover h-[35vh] relative">
        <h1 className="text-4xl pt-10 text-white">IP Address Tracker</h1>
        <div className="bg-white flex h-16 mt-6 shadow-md w-[80vw] rounded-xl md:w-[50vw]">
          <input
            value={ip}
            className="bg-transparent pl-4 p-2 rounded-xl w-full outline-0 text-sm md:text-base"
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={(e) => setIp(e.target.value)}
          />
          <button
            className="bg-black inline right-0 text-lg text-white h-full w-14 rounded-r-xl "
            onClick={fetchData}
          >
            {">"}
          </button>
        </div>
        <div className="grid grid-cols-4 absolute z-10 -bottom-16 justify-between bg-white rounded-xl w-5/6 p-8 shadow-lg">
          <div>
            <p className="text-ip-gray2 text-sm uppercase mb-3 whitespace-nowrap">
              ip address
            </p>
            <p className="text-ip-gray1 font-medium text-2xl">
              {checkData(info.ip_address)}
            </p>
          </div>
          <div className="border-l-2 pl-7">
            <p className="text-ip-gray2 text-sm uppercase mb-3">location</p>
            <p className="text-ip-gray1 font-medium text-2xl">
              {checkData(
                info.city + ", " + info.region_iso_code + " " + info.postal_code
              )}
            </p>
          </div>
          <div className="border-l-2 pl-7">
            <p className="text-ip-gray2 text-sm uppercase mb-3">timestamp</p>
            <p className="text-ip-gray1 font-medium text-2xl">
              {checkData("GMT " + info.timezone?.gmt_offset)}
            </p>
          </div>
          <div className="border-l-2 pl-7">
            <p className="text-ip-gray2 text-sm uppercase mb-3">isp</p>
            <p className="text-ip-gray1 font-medium text-2xl">
              {checkData(info.connection?.isp_name)}
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-4/6 bg-red-300">
        <MapContainer
          className="h-full z-0"
          center={[45.4, -75.7]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default IpTracker;
