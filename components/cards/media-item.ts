export default interface IMediaItem {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: "media";
    _updatedAt: string;
    category: "TV Series" | "Movie";
    isBookMarked: boolean;
    isTrending: boolean;
    rating: string;
    title: string;
    year: number;
    thumbnail: {
      regular: IRegular;
      trending?: ITrending;
    };
  }
  
  export interface IRegular {
    small: IThumbnailImage;
    medium: IThumbnailImage;
    large: IThumbnailImage;
  }
  
  export interface ITrending {
    small: IThumbnailImage;
    large: IThumbnailImage;
  }
  
  export interface IThumbnailImage {
    _type: "image";
    asset: {
      _ref: "reference";
      _type: string;
    };
  }
  