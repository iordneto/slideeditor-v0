// lib/store/imageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  images: Array<{
    id: number;
    fileName: string;
  }>;
}

const initialState: ImageState = {
  images: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    // Action to add image with metadata
    addImage: (
      state,
      action: PayloadAction<{ id: number; fileName: string }>
    ) => {
      state.images.push(action.payload); // Adiciona o metadado da imagem no estado
    },
  },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
