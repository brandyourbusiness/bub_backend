import mongoose from 'mongoose';

export const Cat = new mongoose.model("Dat", { name: String, age: Number }, 'dat');