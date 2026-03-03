import { NextResponse } from "next/server";

import type { ImageItem } from "@/types/ImageItem";

let images: ImageItem[] = [
  {
    id: crypto.randomUUID(),
    url: "https://images.pexels.com/photos/2061982/pexels-photo-2061982.jpeg",
  },
  {
    id: crypto.randomUUID(),
    url: "https://images.pexels.com/photos/1479436/pexels-photo-1479436.jpeg",
  },
  {
    id: crypto.randomUUID(),
    url: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: crypto.randomUUID(),
    url: "https://picsum.photos/id/1020/1920/1080",
  },
]

const allowedDomains = [
  "picsum.photos",
  "images.pexels.com",
  "images.unsplash.com",
];

function validateUrl(url: string): NextResponse | null {
  try {
    const urlObj = new URL(url);
    if (!allowedDomains.includes(urlObj.hostname)) {
      return NextResponse.json({ error: "Domain not allowed" }, { status: 400 });
    }
    return null;
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }
}

export async function GET(){
  return NextResponse.json(images)
}

export async function POST(request: Request) {
  const body = await request.json();

  const error = validateUrl(body.url);
  if (error) return error;

  const newImage = { 
    id: crypto.randomUUID(), 
    url: body.url 
  };

  images.push(newImage);
  return NextResponse.json(newImage, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();

  const error = validateUrl(body.url);
  if (error) return error;

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