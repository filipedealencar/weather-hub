import { MainGridResponsive, ContainerGridResponsive } from "./styles";

export const GridResponsive: React.FC<IGridResponsive> = ({
  columns,
  rows,
  spaceColumns,
  spaceRows,
  padding,
  children,
}) => {
  return (
    <MainGridResponsive $padding={padding}>
      <ContainerGridResponsive
        $spaceRows={spaceRows}
        $spaceColumns={spaceColumns}
        $rows={rows}
        $columns={columns}
      >
        {children}
      </ContainerGridResponsive>
    </MainGridResponsive>
  );
};

export default GridResponsive;
