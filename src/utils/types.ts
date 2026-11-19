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
}

