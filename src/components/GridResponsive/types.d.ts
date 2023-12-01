interface IGridResponsive {
  children: React.ReactNode;
  columns: { count: number; height?: number[] };
  rows: { count: number; height?: number[] };
  spaceColumns: number;
  spaceRows: number;
  padding?: string;
}

interface IContainerGridResponsiveStyle {
  $columns: { count: number; height?: number[] };
  $rows: { count: number; height?: number[] };
  $spaceColumns: number;
  $spaceRows: number;
}

interface IMainGridResponsiveStyle {
  $padding?: string;
}
