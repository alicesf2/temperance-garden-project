export interface GiftType {
    description: string;
    sources: string[];
}

export interface PlantType {
  name: string;
  slug: string;
  scientific: string;
  description: string;
  gifts: GiftType[];
  images: any[];
}

export interface NarrativeType {
    text: string[];
    intro?: string;
    plantView?: string;
    historyView?: string;
    eventView?: string;
}

export interface ImageType {
    image: any;
    altText: string;
    caption: string;
}

