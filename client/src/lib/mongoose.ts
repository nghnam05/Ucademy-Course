"use server";

import mongoose from "mongoose";

let isConnected: boolean = false;

export const DBConnection = async () => {
  if (!process.env.MONGODBCONNECTION_STRING) {
    throw new Error("Lỗi khi kết nối MongoDB! ");
  }
  if (isConnected) {
    console.log(" ✓ Kết nối MongoDB thành công!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODBCONNECTION_STRING, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("Kết nối MongoDB thành công!");
  } catch (error) {
    console.error("Lỗi khi kết nối MongoDB:", error);
    throw error;
  }
};
