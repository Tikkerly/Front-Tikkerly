import * as ExcelJS from "exceljs";
import translations from "./translations/translations";
import logo from "../../public/logo.png";
const excelUtils = async (data, title) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(title);
  worksheet.properties.defaultRowHeight = 40;
  worksheet.properties.defaultColWidth = 40;

  const headers = Object.keys(data[0]);

  const headerRange = `A1:${String.fromCharCode(65 + headers.length - 1)}1`;
  worksheet.mergeCells(headerRange);

  const titleCell = worksheet.getCell("A1");
  titleCell.value = `Informe sobre ${title}`;
  titleCell.alignment = { horizontal: "center", vertical: "middle" };
  titleCell.font = { size: 16, bold: true };

  for (let col = 1; col <= headers.length; col++) {
    const cell = worksheet.getCell(1, col);
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "CCCCCC" },
    }; // Color de fondo
  }

  const headerRow = worksheet.addRow(
    headers.map((head) => (translations[head] ? translations[head] : head))
  );
  headerRow.eachCell((cell) => {
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.font = { size: 14, bold: true };
  });

  data.forEach((dt) => {
    const values = Object.values(dt);
    const rowValues = worksheet.addRow(values);
    rowValues.eachCell((cell) => {
      cell.alignment = { horizontal: "center", vertical: "middle" };
      cell.font = { size: 12, bold: false };
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  // Crear un enlace de descarga y simular un clic para descargar el archivo
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `reporte_${title.trim().replace(" ", "").toLowerCase()}.xlsx`;
  link.click();
};

export default excelUtils;
