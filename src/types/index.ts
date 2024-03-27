export interface Product {
  bengaliName: string;
  objectID: number;
  name: string;
  nameWithoutSubText: string;
  subText: string;
  rating: number;
  category: string;
  flashSale: boolean;
  mrp: number;
  corpPrice: number;
  price: number;
  shortDesc: string;
  longDesc: string;
  slug: string;
  doNotApplyDiscounts: number;
  picturesUrls?: string[] | null;
  offerPicturesUrls?: null[] | null;
  recursiveCategories?: number[] | null;
  categories?: number[] | null;
  manufacturers?: number[] | null[] | null;
  blockSale: number;
  derivedProductVariant?: null[] | null;
  unitQuantity: number;
  _highlightResult: HighlightResult;
  catalogItemType: string;
  productAvailabilityForSelectedWarehouse?:
    | ProductAvailabilityForSelectedWarehouseEntity[]
    | null;
}
export interface HighlightResult {}
export interface ProductAvailabilityForSelectedWarehouseEntity {
  Quantity: number;
  EarliestAvailableTime: EarliestAvailableTimeOrAvailabilityExpiryTime;
  EarliestAvailableTimeOfDay?: number | null;
  AvailabilityCutOffTimeOfDay?: number | null;
  AvailabilityExpiryTime?: EarliestAvailableTimeOrAvailabilityExpiryTime1 | null;
}
export interface EarliestAvailableTimeOrAvailabilityExpiryTime {
  UnixTimeMilliseconds: number;
  Offset: number;
}
export interface EarliestAvailableTimeOrAvailabilityExpiryTime1 {
  UnixTimeMilliseconds: number;
  Offset: number;
}
