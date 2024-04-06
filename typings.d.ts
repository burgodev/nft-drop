interface Image {
  asset: {
    url: string;
  };
}

export interface Creator {
  _id: string;
  name: string;
  address: string;
  inamge: Image;
  bio: string;
  slug: {
    current: string;
  };
}

export interface Collection {
  _id: string;
  title: string;
  address: string;
  description: string;
  nftCollectionName: string;
  mainImage: Image;
  previewImage: Image;
  slug: {
    current: string;
  };
  creator: Creator;
}
