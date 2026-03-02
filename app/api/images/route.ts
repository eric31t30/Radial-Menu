import { NextResponse } from "next/server";

import type { ImageItem } from "@/types/ImageItem";

let images: ImageItem[] = [
    {
      id: crypto.randomUUID(),
      url: "https://picsum.photos/id/1018/1920/1080",
    },
    {
      id: crypto.randomUUID(),
      url: "https://picsum.photos/id/1015/1920/1080",
    },
    {
      id: crypto.randomUUID(),
      url: "https://picsum.photos/id/1019/1920/1080",
    },
    {
      id: crypto.randomUUID(),
      url: "https://picsum.photos/id/1020/1920/1080",
    },
]

export async function GET(){
    return NextResponse.json(images)
}

export async function POST(request: Request) {
  const body = await request.json();

  const newImage: ImageItem = {
    id: crypto.randomUUID(),
    url: body.url,
  };

  images.push(newImage);

  return NextResponse.json(newImage, { status: 201 });
}

export async function PUT(request: Request){
  const body = await request.json();

  images = images.map((img) =>
    img.id === body.id ? { ...img, ...body } : img
  );

  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(request: Request){
  const body = await request.json();

  images = images.filter((img)=> img.id !== body.id);

  return NextResponse.json({ message: "Deleted" });
}