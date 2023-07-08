export interface ItemModel {
  index: number;
  img: string;
  title: string;
  provider?: string;
  content?: string;
  footer?: string;
  href?: string;
  type?: string;
  category?: string;
  installed?: number;
  addTime?: string;
  isRecommend?: boolean;
}
