import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, PageOrientation, PageSize } from 'pdfmake/interfaces';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface IData {
	title?: string;
	data: [];
	columns: [];
}

type plotTypes = {
  [key: string]: string;
}

const formatData = (data:{}[]) => {
	return data.map((item:plotTypes) => {
		const refactorItems = []
		for (var prop in item) {
			const contentItem = item[prop];
			refactorItems.push({text: contentItem });
		}
		return (refactorItems);
	});
}
const formatColumns = (data:[]) => {
	return data.map(item => {
		
		return ({text: item, style: 'tableHeader'});
	});
}

export const DocumentPDF = (data:IData) => {
	
	const formattedData = formatData(data.data);
    const headerColumns = formatColumns(data.columns);

  const documentDefinition = {
		pageSize: 'A4' as PageSize,
		pageOrientation: 'landscape' as PageOrientation,
		content: [
			{text: data.title},
			'\n',
			{
				table: {
					headerRows: 1,
					dontBreakRows: true,
					body: [
						headerColumns,
						...formattedData,
					]
				}
			}
		] as Content
  };

	pdfMake.createPdf(documentDefinition).open();
}

export const RelatorioPDF = (data:IData) => {
	const exportPDF = () => {
    	DocumentPDF(data);
  	}
	return {exportPDF}
}