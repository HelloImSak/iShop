import React from 'react'
import { BsCart3 } from "react-icons/bs";

export default function CardComponnets() {
  return (
    <main className="flex items-center justify-center">
      <div className="w-[310px] max-w-sm bg-white border border-gray-200 rounded-[25px] shadow-lg p-5">
        <a href="#">
          <img
            className="rounded-t-lg mx-auto h-[250px] "
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
            alt="Beats Studio Pro"
          />
        </a>
        <div className="px-1 pb-3 text-left ">
          <div className="flex items-center justify-between gap-2 mt-4">
            <a href="#">
              <p className="text-[16px] font-bold text-primary inline">
                Beats Studio Pro
              </p>
            </a>
            <button className="bg-secondary text-white p-2 rounded-full">
            <BsCart3 />
            </button>
          </div>

          <p className="text-gray-600 text-[14px]mt-1">Beats</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[17px] font-bold text-gray-900">$38.00</span>
          </div>
        </div>
      </div>
    </main>
  )
}
