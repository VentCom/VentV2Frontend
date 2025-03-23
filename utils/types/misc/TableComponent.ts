export interface ITableHeaderData {
  name: string;
  id: string;
  span_xs?: number | 1; // Column size in extra small device
  span_md?: number | 1; // Column size in extra medium sized devices
  span_lg?: number | 1; // Column size in extra large sized devices
  sortable?: boolean;
  justify?: "center" | "left" | "right" | null;
  is_hidden_xs?: boolean;
  is_hidden_md?: boolean;
}
export interface ITableBodyData {
  [key: string]: any;
  id: number;
}
