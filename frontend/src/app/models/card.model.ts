export interface CardBreakdownItem {
  label: string;
  value: number;
}

export interface CardBreakdown {
  priceBeforeTax: CardBreakdownItem;
  tax: CardBreakdownItem;
  loremIpsum: CardBreakdownItem;
  finalPrice: CardBreakdownItem;
}


export interface CardData {
  image: string;
  tag: string;
  destination: string;
  duration: string;
  title: string;
  price: number;
  breakdown: CardBreakdown;

}